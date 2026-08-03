import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Manifesto from './components/Manifesto';
import Skills from './components/Skills';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BambooStory from './components/BambooStory';

// Ambient particle component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-bamboo/20 blur-[1px] animate-drift`}
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 12 + 15}s`,
          }}
        />
      ))}
    </div>
  );
}

// Client-side bot detection (browser environment + behavioral analysis)
function detectClientBot(behavior = {}) {
  const checks = [];
  let score = 0;

  // 1. Webdriver flag
  if (navigator.webdriver) {
    checks.push('navigator.webdriver');
    score += 30;
  }

  // 2. Plugin count (bots often have 0)
  if (navigator.plugins && navigator.plugins.length === 0) {
    checks.push('no plugins');
    score += 10;
  }

  // 3. Languages count (bots often have only 1)
  if (navigator.languages && navigator.languages.length <= 1) {
    checks.push('limited languages');
    score += 5;
  }

  // 4. HeadlessChrome
  if (navigator.userAgent.includes('HeadlessChrome')) {
    checks.push('HeadlessChrome');
    score += 35;
  }

  // 5. PhantomJS
  if (navigator.userAgent.includes('PhantomJS')) {
    checks.push('PhantomJS');
    score += 40;
  }

  // 6. Selenium globals
  if (window._phantom || window.callPhantom) {
    checks.push('PhantomJS global');
    score += 40;
  }

  // 7. Missing hardwareConcurrency
  if (!navigator.hardwareConcurrency) {
    checks.push('no hardwareConcurrency');
    score += 5;
  }

  // 8. Tiny screen
  if (window.screen.width < 200 || window.screen.height < 200) {
    checks.push('tiny screen');
    score += 10;
  }

  // 9. Behavioral analysis check
  if (behavior.checked) {
    const hasInteraction = behavior.hasMouseMovement || behavior.hasScrolled || behavior.hasTouch;
    if (!hasInteraction) {
      checks.push('no human interaction (passive bot/scraper)');
      score += 20;
    } else {
      checks.push(`human activity verified (${behavior.mouseMoves} moves${behavior.hasScrolled ? ', scroll' : ''})`);
      score = Math.max(0, score - 15); // human behavior reduces false-positive bot score
    }
  }

  return {
    isBot: score >= 40,
    score: Math.min(score, 100),
    reasons: checks,
    classification: score >= 60 ? 'Bot' : score >= 35 ? 'Suspicious' : 'Human',
    behavior: {
      hasMouseMovement: !!behavior.hasMouseMovement,
      mouseMoves: behavior.mouseMoves || 0,
      hasScrolled: !!behavior.hasScrolled,
      hasTouch: !!behavior.hasTouch,
      timeToInteractionMs: behavior.firstInteractionMs || null,
    },
  };
}

export default function App() {
  const [botDetected, setBotDetected] = useState(null);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Mouse-follow glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Client-side bot detection & behavioral visitor tracking
  useEffect(() => {
    const initialCheck = detectClientBot();
    setBotDetected(initialCheck);

    if (sessionStorage.getItem('portfolio_visited')) return;
    const trackerUrl = import.meta.env.VITE_TRACKER_WORKER_URL || 'https://portfolio-tracker.personal-mailku.workers.dev';
    if (!trackerUrl) return;

    let hasTracked = false;
    const startTime = Date.now();
    const behaviorData = {
      checked: false,
      hasMouseMovement: false,
      mouseMoves: 0,
      hasScrolled: false,
      hasTouch: false,
      firstInteractionMs: null,
    };

    const recordInteraction = (type) => {
      if (!behaviorData.firstInteractionMs) {
        behaviorData.firstInteractionMs = Date.now() - startTime;
      }
      if (type === 'mouse') {
        behaviorData.hasMouseMovement = true;
        behaviorData.mouseMoves += 1;
      } else if (type === 'scroll') {
        behaviorData.hasScrolled = true;
      } else if (type === 'touch') {
        behaviorData.hasTouch = true;
      }
    };

    const handleMouseMove = () => recordInteraction('mouse');
    const handleScroll = () => recordInteraction('scroll');
    const handleTouch = () => recordInteraction('touch');

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouch, { passive: true });

    const sendTrackingData = () => {
      if (hasTracked) return;
      hasTracked = true;
      sessionStorage.setItem('portfolio_visited', 'true');

      // Remove listeners
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);

      behaviorData.checked = true;
      const clientBot = detectClientBot(behaviorData);
      setBotDetected(clientBot);

      fetch(trackerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          referrer: document.referrer || 'Direct',
          clientBot: {
            detected: clientBot.isBot,
            score: clientBot.score,
            reasons: clientBot.reasons,
            classification: clientBot.classification,
            behavior: clientBot.behavior,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.bot) {
            console.log('🔍 Bot Detection (server):', data.bot);
          }
        })
        .catch((err) => console.error('Tracker error:', err));
    };

    // Give 2.5 seconds observation window for human interactions before sending tracking log
    const timer = setTimeout(sendTrackingData, 2500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary relative mouse-glow selection:bg-bamboo/30 selection:text-white overflow-hidden">
      {/* Ambient Visual Elements */}
      <div className="absolute inset-0 grid-bg opacity-15 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,142,35,0.05),transparent_50%)] pointer-events-none z-0" />
      <FloatingParticles />

      {/* Debug overlay: shows bot status (only in development) */}
      {import.meta.env.DEV && botDetected && (
        <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white text-xs p-3 rounded-lg backdrop-blur-sm border border-bamboo/30">
          <div className="font-mono">
            <span className={botDetected.isBot ? 'text-red-400' : 'text-green-400'}>
              {botDetected.isBot ? '🤖 BOT' : '👤 HUMAN'}
            </span>
            <span className="ml-2 text-gray-400">score: {botDetected.score}</span>
            <div className="text-gray-500 text-[10px] mt-1">
              {botDetected.reasons.join(', ') || 'clean'}
            </div>
          </div>
        </div>
      )}

      {/* Scroll Growth Story Indicator */}
      <BambooStory />

      {/* Global Navigation */}
      <Navbar />

      {/* Structured Sections */}
      <main className="relative z-10">
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Manifesto />
        <Process />
        <Contact />
      </main>

      {/* Branded Footer */}
      <Footer />
    </div>
  );
}