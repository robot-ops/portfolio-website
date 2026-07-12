import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Button from './ui/Button';
import Magnetic from './ui/Magnetic';

function BambooIllustration({ mouseX = 0, mouseY = 0 }) {
  return (
    <svg viewBox="0 0 400 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        {/* Shading gradients for 3D cylinders */}
        <linearGradient id="stalkLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E431E" />
          <stop offset="30%" stopColor="#6B8E23" />
          <stop offset="70%" stopColor="#55721C" />
          <stop offset="100%" stopColor="#1E2E14" />
        </linearGradient>
        
        <linearGradient id="stalkCenter" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3E5C2B" />
          <stop offset="35%" stopColor="#84AD2B" />
          <stop offset="75%" stopColor="#638421" />
          <stop offset="100%" stopColor="#253A1A" />
        </linearGradient>

        <linearGradient id="stalkRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#223316" />
          <stop offset="40%" stopColor="#5F7E1F" />
          <stop offset="70%" stopColor="#4A6318" />
          <stop offset="100%" stopColor="#16220E" />
        </linearGradient>

        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A3B18A" />
          <stop offset="50%" stopColor="#6B8E23" />
          <stop offset="100%" stopColor="#3E5C2B" />
        </linearGradient>

        <linearGradient id="goldJoint" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9A7B1C" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A7B1C" />
        </linearGradient>
      </defs>

      {/* BACKGROUND GLOW */}
      <circle cx="200" cy="300" r="180" fill="url(#heroGlow)" opacity="0.15" />
      <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#6B8E23" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0D1117" stopOpacity="0" />
      </radialGradient>

      {/* STALK 1: Left (Bends slightly left, moves slower for depth parallax) */}
      <g opacity="0.55" style={{ transform: `translate(${mouseX * 0.4}px, ${mouseY * 0.4}px)`, transition: 'transform 0.2s ease-out' }}>
        <path d="M 85 600 Q 88 540, 76 480 L 84 480 Q 96 540, 93 600 Z" fill="url(#stalkLeft)" />
        <path d="M 76 476 Q 81 410, 71 340 L 79 340 Q 89 410, 84 476 Z" fill="url(#stalkLeft)" />
        <path d="M 71 336 Q 74 260, 61 180 L 69 180 Q 82 260, 79 336 Z" fill="url(#stalkLeft)" />
        <path d="M 61 176 Q 62 100, 46 20 L 54 20 Q 70 100, 69 176 Z" fill="url(#stalkLeft)" />

        <rect x="73" y="476" width="13" height="4" rx="2" fill="url(#goldJoint)" transform="rotate(-5 80 478)" />
        <rect x="68" y="336" width="13" height="4" rx="2" fill="url(#goldJoint)" transform="rotate(-6 75 338)" />
        <rect x="58" y="176" width="13" height="4" rx="2" fill="url(#goldJoint)" transform="rotate(-7 65 178)" />

        {/* Leaves Left */}
        <path d="M 75 340 Q 55 330, 42 300" stroke="#55721C" strokeWidth="1.5" />
        <path d="M 42 300 Q 20 280, 5 295 C 18 305, 35 305, 42 300 Z" fill="url(#leafGrad)" />
        <path d="M 42 300 Q 30 270, 15 270 C 25 285, 38 290, 42 300 Z" fill="url(#leafGrad)" />
      </g>

      {/* STALK 2: Center (Detailed 3D, main layer, moves faster) */}
      <g opacity="0.95" style={{ transform: `translate(${mouseX * 0.9}px, ${mouseY * 0.9}px)`, transition: 'transform 0.2s ease-out' }}>
        <path d="M 194 600 Q 199 520, 199 440 L 211 440 Q 211 520, 206 600 Z" fill="url(#stalkCenter)" />
        <path d="M 199 435 Q 205 350, 189 260 L 201 260 Q 217 350, 211 435 Z" fill="url(#stalkCenter)" />
        <path d="M 189 255 Q 190 160, 184 60 L 196 60 Q 202 160, 201 255 Z" fill="url(#stalkCenter)" />

        <rect x="194" y="435" width="18" height="5" rx="2.5" fill="url(#goldJoint)" transform="rotate(3 205 437)" />
        <rect x="184" y="255" width="18" height="5" rx="2.5" fill="url(#goldJoint)" transform="rotate(-3 195 257)" />

        {/* Leaves Center */}
        <path d="M 195 257 Q 165 240, 145 200" stroke="#638421" strokeWidth="1.8" />
        <path d="M 145 200 Q 120 165, 100 180 C 115 195, 135 198, 145 200 Z" fill="url(#leafGrad)" />
        <path d="M 201 257 Q 235 240, 255 200" stroke="#638421" strokeWidth="1.8" />
        <path d="M 255 200 Q 280 165, 300 180 C 285 195, 265 198, 255 200 Z" fill="url(#leafGrad)" />
      </g>

      {/* STALK 3: Right (Curving gently rightwards, medium speed) */}
      <g opacity="0.75" style={{ transform: `translate(${mouseX * 0.6}px, ${mouseY * 0.6}px)`, transition: 'transform 0.2s ease-out' }}>
        <path d="M 295 600 Q 302 545, 305 490 L 315 490 Q 312 545, 305 600 Z" fill="url(#stalkRight)" />
        <path d="M 305 486 Q 309 423, 310 360 L 320 360 Q 319 423, 315 486 Z" fill="url(#stalkRight)" />
        <path d="M 310 356 Q 320 283, 325 210 L 335 210 Q 330 283, 320 356 Z" fill="url(#stalkRight)" />
        <path d="M 325 206 Q 335 123, 340 40 L 350 40 Q 345 123, 335 206 Z" fill="url(#stalkRight)" />

        <rect x="302" y="486" width="14" height="4" rx="2" fill="url(#goldJoint)" transform="rotate(5 310 488)" />
        <rect x="307" y="356" width="14" height="4" rx="2" fill="url(#goldJoint)" transform="rotate(6 315 358)" />
        <rect x="322" y="206" width="14" height="4" rx="2" fill="url(#goldJoint)" transform="rotate(8 330 208)" />

        {/* Leaves Right */}
        <path d="M 315 360 Q 338 350, 355 320" stroke="#4A6318" strokeWidth="1.5" />
        <path d="M 355 320 Q 378 300, 395 315 C 382 325, 365 325, 355 320 Z" fill="url(#leafGrad)" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 35;
      const y = (clientY - window.innerHeight / 2) / 35;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient: dark → olive */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary to-olive/20 z-0" />
      <div className="absolute inset-0 grid-bg opacity-30 z-0" />

      {/* Floating green orbs */}
      <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-bamboo/10 blur-[120px] animate-float z-0 pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-olive/15 blur-[140px] animate-float-delayed z-0 pointer-events-none" />

      {/* Two-column content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-bamboo/30 bg-bamboo/5 text-bamboo text-xs font-semibold mb-6 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-bamboo animate-pulse" />
              Open to New Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-heading font-bold text-text-primary leading-tight mb-6 tracking-tight"
            >
              Building Reliable Software Systems
              <br />
              for Businesses That Need
              <br />
              <span className="text-gradient">More Than Just Code.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed mb-10 max-w-lg font-light"
            >
              Software Systems Engineer specializing in business platforms, industrial IoT, desktop monitoring applications, Android solutions, and scalable backend architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Magnetic>
                <Button href="#projects">
                  View Engineering Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="#contact" variant="outline">
                  <Mail className="w-4 h-4" />
                  Let's Build Together
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right: Bamboo illustration (clear, sharp, layered parallax) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="w-full max-w-md aspect-[4/5] relative">
              <div className="absolute inset-0">
                <BambooIllustration mouseX={mousePos.x} mouseY={mousePos.y} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none z-10" />
    </section>
  );
}

