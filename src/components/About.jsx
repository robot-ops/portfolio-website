import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section Header */}
      <motion.div {...fadeUp()} className="mb-12">
        <span className="text-xs text-bamboo font-bold uppercase tracking-[0.2em]">
          Mindset
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mt-3 tracking-tight">
          Engineering Perspective
        </h2>
      </motion.div>

      {/* 4-Column Mindset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Who I Am */}
        <motion.div {...fadeUp(0.05)} className="space-y-4">
          <h3 className="text-base font-heading font-bold text-gold uppercase tracking-wider">
            Who I Am
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
            I am a Software Systems Engineer specializing in bridging operational software with physical environments. I coordinate backend databases, low-level microcontroller signals, and desktop interfaces into unified systems.
          </p>
        </motion.div>

        {/* What I Build */}
        <motion.div {...fadeUp(0.1)} className="space-y-4">
          <h3 className="text-base font-heading font-bold text-bamboo uppercase tracking-wider">
            What I Build
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
            My work includes Laravel platforms, Python desktop utilities, native Android clients, and ESP32 telemetry setups using MQTT and Firebase. I build complete ecosystems that simplify workflows and secure operational metrics.
          </p>
        </motion.div>

        {/* How I Think */}
        <motion.div {...fadeUp(0.15)} className="space-y-4">
          <h3 className="text-base font-heading font-bold text-sage uppercase tracking-wider">
            How I Think
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
            I view software as a complete ecosystem rather than individual language blocks. Architecture should be resilient under pressure, flexible under changing business parameters, and written simply to ensure long-term ease of maintenance.
          </p>
        </motion.div>

        {/* Why Businesses Trust My Work */}
        <motion.div {...fadeUp(0.2)} className="space-y-4">
          <h3 className="text-base font-heading font-bold text-text-primary uppercase tracking-wider">
            Why Trust My Work
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
            I design with database constraints and error handling at boundaries. Businesses trust my work because I configure stable VPS servers, set up clean monitoring, and support the underlying IT operations that keep systems online.
          </p>
        </motion.div>

      </div>

      {/* Concrete Daily Scope Banner */}
      <motion.div
        {...fadeUp(0.25)}
        className="mt-12 p-6 sm:p-8 rounded-2xl bg-bg-secondary/40 border border-border-subtle/50"
      >
        <span className="text-[10px] font-bold text-gold uppercase tracking-widest font-mono block mb-4">
          Daily Operational Scope
        </span>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-text-secondary">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bamboo" />
            Designing Laravel systems
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bamboo" />
            Building Python desktop applications
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bamboo" />
            Developing Android applications
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bamboo" />
            Integrating ESP32 telemetry
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bamboo" />
            Working with MQTT & Firebase
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bamboo" />
            Managing Linux VPS deployments
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bamboo" />
            Supporting internal company IT infrastructure
          </span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
