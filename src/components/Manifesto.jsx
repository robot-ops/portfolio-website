import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import Logo from './ui/Logo';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Manifesto() {
  return (
    <SectionWrapper id="philosophy" className="bg-bg-secondary/10 border-y border-border-subtle relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center py-6 relative z-10 flex flex-col items-center">
        {/* Brand Stamp */}
        <motion.div {...fadeUp()} className="mb-8">
          <Logo className="w-10 h-12 text-bamboo/40" />
        </motion.div>

        {/* Header */}
        <motion.span
          {...fadeUp(0.05)}
          className="text-xs text-text-secondary uppercase tracking-[0.2em] font-mono mb-4"
        >
          Philosophy
        </motion.span>

        <motion.h2
          {...fadeUp(0.1)}
          className="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight mb-8"
        >
          Engineering Philosophy
        </motion.h2>

        {/* Narrative */}
        <motion.div
          {...fadeUp(0.15)}
          className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-light space-y-4"
        >
          <p>
            Great software behaves like bamboo.
          </p>
          <div className="text-text-primary font-medium space-y-1">
            <p>Flexible under pressure.</p>
            <p>Reliable over time.</p>
            <p>Simple to maintain.</p>
            <p>Built for long-term growth.</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
