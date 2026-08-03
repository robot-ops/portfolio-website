export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      // Extract visitor data
      const ip = request.headers.get("CF-Connecting-IP") || "Unknown IP";
      const country = request.cf?.country || request.headers.get("cf-ipcountry") || "Unknown Country";
      const city = request.cf?.city || request.headers.get("cf-ipcity") || "Unknown City";
      const region = request.cf?.region || request.headers.get("cf-ipregion") || "Unknown Region";
      const timezone = request.cf?.timezone || request.headers.get("cf-timezone") || "Unknown Timezone";
      const userAgent = request.headers.get("user-agent") || "Unknown User Agent";

      // Parse request body (includes client-side bot detection & behavioral data)
      let bodyData = {};
      try {
        bodyData = await request.json();
      } catch (e) {}
      const referrer = bodyData.referrer || "Direct";
      const clientBot = bodyData.clientBot || null; // optional frontend bot info

      // --- Run server-side bot detection (incorporating client behavioral analysis) ---
      const botResult = await detectBot(request, clientBot);

      let device = "Desktop";
      if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
        device = "Mobile/Tablet";
      } else if (/bot|crawler|spider|slurp|crawl/i.test(userAgent)) {
        device = "Search Bot / Crawler";
      }

      // Prepare bot summary
      const isBot = botResult.isBot;
      const botEmoji = botResult.emoji || (isBot ? "🤖" : "👤");
      const botLabel = botResult.classification || (isBot ? "Bot" : "Human");
      const botConfidence = botResult.confidence || "Low";
      const botReasons = botResult.reasons?.slice(0, 4).join(", ") || "None";
      const botScore = botResult.score || 0;

      // Get Telegram credentials from environment
      const botToken = env.TELEGRAM_BOT_TOKEN;
      const chatId = env.TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        return new Response(
          "TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in Worker settings",
          { status: 500 }
        );
      }

      // Format behavioral status line
      let behaviorText = "";
      if (clientBot?.behavior) {
        const b = clientBot.behavior;
        const active = b.hasMouseMovement || b.hasScrolled || b.hasTouch;
        behaviorText = `\n• Behavior: ${active ? '👤 Active Human' : '🤖 Passive / No Movement'}${b.mouseMoves ? ` (${b.mouseMoves} mouse moves)` : ''}${b.hasScrolled ? ' [scrolled]' : ''}`;
      }

      // Build rich Telegram message
      const message = `${botEmoji} *New Portfolio Visitor!*

📍 *Location:* ${city}, ${region}, ${country}
🔌 *IP Address:* ${ip}
⏰ *Timezone:* ${timezone}
📱 *Device:* ${device}
🔗 *Referrer:* ${referrer}

🤖 *Bot Analysis:* 
• Status: *${botLabel}* ${botEmoji}
• Confidence: ${botConfidence}
• Score: ${botScore}/100
• Signals: ${botReasons}${behaviorText}
${clientBot ? `• Client Check: ${clientBot.classification || (clientBot.detected ? 'Bot' : 'Human')} (score: ${clientBot.score})` : ''}

🖥️ *User Agent:* \`${userAgent}\``;

      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const telegramResponse = await fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      const telegramResult = await telegramResponse.json();

      // Return JSON response including bot detection results
      return new Response(
        JSON.stringify({
          success: true,
          telegram: telegramResult.ok,
          bot: {
            isBot,
            classification: botLabel,
            confidence: botConfidence,
            score: botScore,
            reasons: botReasons,
          },
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
};

/**
 * Comprehensive bot detection using multiple signals
 */
async function detectBot(request, clientBot = null) {
  const userAgent = request.headers.get("user-agent") || "";
  const cfClientInfo = request.headers.get("CF-Client-Info") || "";
  const cf = request.cf || {};

  let score = 0;
  let reasons = [];
  let classification = "Human";
  let emoji = "👤";
  let confidence = "Low";
  let type = "Unknown";

  // --- 1. Cloudflare Bot Management (Enterprise feature) ---
  if (cf.botManagement) {
    const bm = cf.botManagement;
    if (bm.score !== undefined && bm.score < 30) {
      score += 60;
      reasons.push(`Bot Management score: ${bm.score}`);
      type = "Bot (Bot Management)";
    } else if (bm.score !== undefined && bm.score < 60) {
      score += 25;
      reasons.push(`Bot Management score: ${bm.score} (suspicious)`);
      type = "Suspicious";
    }
    if (bm.ja3Hash && bm.ja3Hash !== "") {
      score += 15;
      reasons.push("JA3 fingerprint detected");
    }
  }

  // --- 2. CF-Client-Info header ---
  if (cfClientInfo) {
    const ci = cfClientInfo.toLowerCase();
    if (ci.includes("bot") || ci.includes("crawler") || ci.includes("spider")) {
      score += 50;
      reasons.push("CF-Client-Info indicates bot");
      type = "Bot (Cloudflare)";
    }
  }

  // --- 3. User-Agent bot patterns (comprehensive list) ---
  const botPatterns = [
    // Search engine bots
    { pattern: /googlebot/i, weight: 50, name: "Googlebot" },
    { pattern: /bingbot/i, weight: 50, name: "Bingbot" },
    { pattern: /baiduspider/i, weight: 50, name: "Baiduspider" },
    { pattern: /yandexbot/i, weight: 50, name: "Yandexbot" },
    { pattern: /duckduckbot/i, weight: 50, name: "DuckDuckBot" },
    { pattern: /applebot/i, weight: 50, name: "Applebot" },
    { pattern: /archive\.org_bot/i, weight: 50, name: "Archive.org Bot" },
    // Social media bots
    { pattern: /facebookexternalhit/i, weight: 45, name: "Facebook Bot" },
    { pattern: /facebot/i, weight: 45, name: "Facebook Bot" },
    { pattern: /twitterbot/i, weight: 45, name: "Twitter Bot" },
    { pattern: /linkedinbot/i, weight: 45, name: "LinkedIn Bot" },
    { pattern: /slackbot/i, weight: 40, name: "Slack Bot" },
    { pattern: /telegrambot/i, weight: 40, name: "Telegram Bot" },
    { pattern: /discordbot/i, weight: 40, name: "Discord Bot" },
    { pattern: /whatsapp/i, weight: 40, name: "WhatsApp Bot" },
    { pattern: /snapchat/i, weight: 40, name: "Snapchat Bot" },
    { pattern: /pinterest/i, weight: 40, name: "Pinterest Bot" },
    { pattern: /embedly/i, weight: 40, name: "Embedly" },
    { pattern: /rogerbot/i, weight: 40, name: "Rogerbot" },
    { pattern: /outbrain/i, weight: 35, name: "Outbrain" },
    { pattern: /quora link preview/i, weight: 40, name: "Quora Bot" },
    { pattern: /showyoubot/i, weight: 35, name: "Showyou Bot" },
    // Generic bot/crawler
    { pattern: /bot/i, weight: 25, name: "Generic bot" },
    { pattern: /crawl/i, weight: 25, name: "Crawler" },
    { pattern: /spider/i, weight: 25, name: "Spider" },
    { pattern: /slurp/i, weight: 25, name: "Slurp" },
    { pattern: /scrape/i, weight: 25, name: "Scraper" },
    // Headless browsers
    { pattern: /headless/i, weight: 45, name: "Headless browser" },
    { pattern: /phantom/i, weight: 45, name: "PhantomJS" },
    { pattern: /selenium/i, weight: 45, name: "Selenium" },
    { pattern: /puppeteer/i, weight: 45, name: "Puppeteer" },
    { pattern: /playwright/i, weight: 45, name: "Playwright" },
    // HTTP clients
    { pattern: /curl/i, weight: 20, name: "cURL" },
    { pattern: /wget/i, weight: 20, name: "Wget" },
    { pattern: /python-requests/i, weight: 25, name: "Python Requests" },
    { pattern: /node-fetch/i, weight: 20, name: "Node Fetch" },
    { pattern: /axios/i, weight: 15, name: "Axios" },
    { pattern: /http-client/i, weight: 20, name: "HTTP Client" },
    { pattern: /java/i, weight: 15, name: "Java" },
    { pattern: /perl/i, weight: 15, name: "Perl" },
    { pattern: /ruby/i, weight: 15, name: "Ruby" },
    { pattern: /go-http-client/i, weight: 20, name: "Go HTTP Client" },
    // API testing tools
    { pattern: /postman/i, weight: 25, name: "Postman" },
    { pattern: /insomnia/i, weight: 25, name: "Insomnia" },
    { pattern: /rest-client/i, weight: 20, name: "REST Client" },
    { pattern: /soapui/i, weight: 20, name: "SoapUI" },
  ];

  let matchedPattern = null;
  let maxWeight = 0;
  for (const { pattern, weight, name } of botPatterns) {
    if (pattern.test(userAgent)) {
      if (weight > maxWeight) {
        maxWeight = weight;
        matchedPattern = name;
      }
    }
  }
  if (matchedPattern) {
    score += maxWeight;
    reasons.push(`User-Agent: ${matchedPattern}`);
    if (type === "Unknown") type = "Bot (User-Agent)";
  }

  // --- 4. Header analysis (missing headers = suspicious) ---
  const headerChecks = {
    "accept-language": { header: request.headers.get("accept-language"), weight: 8 },
    "accept-encoding": { header: request.headers.get("accept-encoding"), weight: 6 },
    connection: { header: request.headers.get("connection"), weight: 4 },
    "sec-ch-ua": { header: request.headers.get("sec-ch-ua"), weight: 10 },
    "sec-ch-ua-mobile": { header: request.headers.get("sec-ch-ua-mobile"), weight: 8 },
    "sec-ch-ua-platform": { header: request.headers.get("sec-ch-ua-platform"), weight: 8 },
    "upgrade-insecure-requests": { header: request.headers.get("upgrade-insecure-requests"), weight: 4 },
    dnt: { header: request.headers.get("dnt"), weight: 2 },
  };

  let missingCount = 0;
  for (const [key, { header, weight }] of Object.entries(headerChecks)) {
    if (!header) {
      missingCount++;
      score += weight;
    }
  }
  if (missingCount >= 4) {
    reasons.push(`Missing ${missingCount}/8 common browser headers`);
  } else if (missingCount >= 2) {
    reasons.push(`Missing ${missingCount} headers (suspicious)`);
  }

  // --- 5. Special: Empty or very short User-Agent ---
  if (userAgent.length < 10) {
    score += 20;
    reasons.push("Very short User-Agent string");
  }

  // --- 6. Client-Side & Behavioral Analysis ---
  if (clientBot) {
    if (clientBot.score !== undefined) {
      if (clientBot.score >= 50) {
        score += 25;
        reasons.push(`Client checks suspicious (score ${clientBot.score})`);
      }
    }
    if (clientBot.behavior) {
      const b = clientBot.behavior;
      const isHumanActive = b.hasMouseMovement || b.hasScrolled || b.hasTouch;
      if (isHumanActive) {
        score = Math.max(0, score - 20); // Confirmed human interaction
        reasons.push("Human movement verified");
      } else {
        score += 15;
        reasons.push("No human interaction observed");
      }
    }
  }

  // --- FINAL CLASSIFICATION ---
  if (score >= 70) {
    classification = "Bot";
    emoji = "🤖";
    confidence = "High";
  } else if (score >= 45) {
    classification = "Suspicious";
    emoji = "⚠️";
    confidence = "Medium";
  } else if (score >= 20) {
    classification = "Likely Human";
    emoji = "👤";
    confidence = "Low";
  } else {
    classification = "Human";
    emoji = "👤";
    confidence = "High";
  }

  // If type is still Unknown, set based on classification
  if (type === "Unknown") {
    type = classification;
  }

  return {
    isBot: classification === "Bot",
    classification,
    emoji,
    confidence,
    score: Math.min(score, 100),
    reasons: reasons.slice(0, 5),
    type,
    missingHeaders: missingCount,
    userAgent: userAgent.substring(0, 100),
  };
}