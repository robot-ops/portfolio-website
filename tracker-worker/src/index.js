export default {
  async fetch(request, env, ctx) {
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
      const ip = request.headers.get("CF-Connecting-IP") || "Unknown IP";
      const country = request.headers.get("cf-ipcountry") || "Unknown Country";
      const city = request.headers.get("cf-ipcity") || "Unknown City";
      const region = request.headers.get("cf-ipregion") || "Unknown Region";
      const timezone = request.headers.get("cf-timezone") || "Unknown Timezone";
      const userAgent = request.headers.get("user-agent") || "Unknown User Agent";

      let bodyData = {};
      try {
        bodyData = await request.json();
      } catch (e) {}
      const referrer = bodyData.referrer || "Direct";

      let device = "Desktop";
      if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
        device = "Mobile/Tablet";
      } else if (/bot|crawler|spider|slurp|crawl/i.test(userAgent)) {
        device = "Search Bot / Crawler";
      }

      const botToken = env.TELEGRAM_BOT_TOKEN;
      const chatId = env.TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        return new Response("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in Worker settings", { status: 500 });
      }

      const message = `🌐 *New Portfolio Visitor!*
      
📍 *Location:* ${city}, ${region}, ${country}
🔌 *IP Address:* ${ip}
⏰ *Timezone:* ${timezone}
📱 *Device:* ${device}
🔗 *Referrer:* ${referrer}
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

      return new Response(JSON.stringify({ success: true, telegram: telegramResult.ok }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
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
