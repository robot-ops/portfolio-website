import { useScroll, useTransform, useMotionTemplate, motion } from 'framer-motion';

export default function BambooStory() {
  const { scrollYProgress } = useScroll();

  // Scroll mapping for progressive growth:
  // 0.0 - 0.15: Seed (small dot at bottom)
  // 0.15 - 0.35: Sprout (stalk starts growing up)
  // 0.35 - 0.55: Young Stalk (leaves start appearing)
  // 0.55 - 0.75: Segments defining (gold joints appear)
  // 0.75 - 0.90: Forest (multiple stalks overlay)
  // 0.90 - 1.00: Fully Grown (PRINX logo reveals)

  const clipTop = useTransform(scrollYProgress, [0.15, 0.75], [100, 0]);
  const stalkClip = useMotionTemplate`inset(${clipTop}% 0 0 0)`;

  const leavesOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const goldOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const forestOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 0.3]);
  const logoOpacity = useTransform(scrollYProgress, [0.85, 0.96], [0, 1]);

  // Fade out tracker near very top/bottom if needed, or keep it visible
  const trackerOpacity = useTransform(scrollYProgress, [0.02, 0.98], [0.3, 0.8]);

  return (
    <motion.div
      className="fixed left-5 top-1/4 bottom-1/4 w-12 z-[5] pointer-events-none hidden xl:block bamboo-sway"
      style={{ opacity: trackerOpacity }}
      aria-hidden="true"
    >
      {/* Scroll indicator text helper */}
      <div className="absolute top-[-25px] left-0 right-0 text-center">
        <span className="text-[7px] text-text-secondary/50 font-bold uppercase tracking-widest font-mono">
          Growth
        </span>
      </div>

      {/* Layer 1: Seed (Visible at top) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border border-bamboo/40 bg-bg-secondary flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
      </div>

      {/* Layer 2: Main Stalk (Grows on scroll) */}
      <motion.div className="absolute inset-x-0 top-6 bottom-6" style={{ clipPath: stalkClip }}>
        <svg viewBox="0 0 60 500" className="h-full w-full" preserveAspectRatio="xMidYMax meet" fill="none">
          <defs>
            <linearGradient id="storyStalk" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2E431E" />
              <stop offset="40%" stopColor="#6B8E23" />
              <stop offset="70%" stopColor="#55721C" />
              <stop offset="100%" stopColor="#1E2E14" />
            </linearGradient>
            <linearGradient id="storyGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9A7B1C" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9A7B1C" />
            </linearGradient>
          </defs>

          {/* Curved, natural stalk segments */}
          <path d="M 27 500 Q 30 430, 26 360 L 34 360 Q 38 430, 35 500 Z" fill="url(#storyStalk)" />
          <path d="M 26 358 Q 31 290, 27 220 L 35 220 Q 39 290, 34 358 Z" fill="url(#storyStalk)" />
          <path d="M 27 218 Q 30 140, 24 60 L 32 60 Q 38 140, 35 218 Z" fill="url(#storyStalk)" />
          <path d="M 24 58 Q 28 30, 26 0 L 34 0 Q 36 30, 32 58 Z" fill="url(#storyStalk)" />

          {/* Joint Rings (Fades in at stage 4) */}
          <g style={{ opacity: goldOpacity }}>
            <rect x="23" y="358" width="14" height="4" rx="2" fill="url(#storyGold)" />
            <rect x="24" y="218" width="14" height="4" rx="2" fill="url(#storyGold)" />
            <rect x="21" y="58" width="14" height="4" rx="2" fill="url(#storyGold)" />
          </g>
        </svg>
      </motion.div>

      {/* Layer 3: Leaves (Sprouts on scroll) */}
      <motion.div className="absolute inset-x-0 top-6 bottom-6" style={{ opacity: leavesOpacity }}>
        <svg viewBox="0 0 60 500" className="h-full w-full" preserveAspectRatio="xMidYMax meet" fill="none">
          <path d="M 35 218 Q 50 205, 58 180 C 48 195, 38 205, 35 218 Z" fill="#6B8E23" opacity="0.6" />
          <path d="M 24 358 Q 10 345, 2 320 C 12 335, 20 345, 24 358 Z" fill="#6B8E23" opacity="0.5" />
          <path d="M 32 58 Q 45 45, 52 20 C 44 35, 36 45, 32 58 Z" fill="#6B8E23" opacity="0.7" />
        </svg>
      </motion.div>

      {/* Layer 4: Forest Background Stalks (Fades in at stage 5) */}
      <motion.div className="absolute inset-0" style={{ opacity: forestOpacity }}>
        <svg viewBox="0 0 60 500" className="h-full w-full animate-pulse" preserveAspectRatio="xMidYMax meet" fill="none">
          <rect x="8" y="0" width="3" height="500" fill="#6B8E23" opacity="0.3" />
          <rect x="48" y="0" width="4" height="500" fill="#6B8E23" opacity="0.2" />
        </svg>
      </motion.div>

      {/* Layer 5: PRINX letters revealed (Fully grown) */}
      <motion.div className="absolute inset-x-0 top-1/4" style={{ opacity: logoOpacity }}>
        <div className="flex flex-col items-center justify-center gap-2 font-heading font-bold text-[9px] text-gold tracking-widest leading-none">
          {'PRINX'.split('').map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
