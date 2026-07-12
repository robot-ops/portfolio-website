import { motion } from 'framer-motion';
import { Search, Compass, Code2, Cpu, LineChart } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const steps = [
  {
    icon: Search,
    title: 'Understand',
    desc: 'Study users, operational constraints, and core business goals before specifying architecture.',
    num: '01',
  },
  {
    icon: Compass,
    title: 'Architect',
    desc: 'Choose technologies and plan data schemas based on long-term system maintainability.',
    num: '02',
  },
  {
    icon: Code2,
    title: 'Build',
    desc: 'Develop reliable, clean, and testable code segments following structured design principles.',
    num: '03',
  },
  {
    icon: Cpu,
    title: 'Deploy',
    desc: 'Configure server infrastructure, secure environments, and set up live uptime monitoring.',
    num: '04',
  },
  {
    icon: LineChart,
    title: 'Improve',
    desc: 'Measure performance, optimize queries, and iterate based on actual system usage.',
    num: '05',
  },
];

export default function Process() {
  return (
    <SectionWrapper id="process">
      <motion.div {...fadeUp()} className="text-center mb-16">
        <h3 className="text-sm font-semibold tracking-wider text-bamboo uppercase mb-4">
          Workflow
        </h3>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary tracking-tight">
          How I Work
        </h2>
      </motion.div>

      <div className="relative">
        {/* Horizontal connecting line (desktop) */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-bamboo/20 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                {...fadeUp(idx * 0.08)}
                className="text-center group"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-bg-secondary border border-bamboo/10 flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-bamboo/40 group-hover:shadow-[0_0_20px_rgba(107,142,35,0.1)] transition-all duration-300">
                  <Icon className="w-5 h-5 text-bamboo" />
                </div>

                {/* Step Index Label */}
                <span className="text-[10px] font-bold text-gold mb-2 block font-mono tracking-widest">
                  {step.num}
                </span>

                <h4 className="font-heading font-bold text-text-primary mb-3 group-hover:text-bamboo transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-xs text-text-secondary leading-relaxed max-w-[200px] mx-auto font-light">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
