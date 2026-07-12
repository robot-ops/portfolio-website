import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, BookOpen, MapPin } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const professionalHistory = [
  {
    role: 'Software Engineer & IT Support',
    company: 'CV. Rekayasa Design Manufaktur (Redesma)',
    location: 'Semarang, Indonesia',
    period: 'January 2023 - Present',
    details: [
      'Build Laravel web applications and custom database structures for internal portals.',
      'Develop desktop client programs in Python/Qt to interface with telemetry hardware.',
      'Write native Android client apps for real-time mobile data access.',
      'Deploy and secure software on Linux Virtual Private Servers (VPS).',
      'Manage and troubleshoot local network routers, backup systems, and workplace hardware.',
    ],
  },
];

const educationalHistory = [
  {
    degree: 'Bachelor of Informatics Engineering',
    institution: 'Universitas Dian Nuswantoro',
    location: 'Semarang, Indonesia',
    period: '2018 - 2022',
    note: 'Focused on Software Engineering, Database Systems, Computer Networks, and SDLC.',
  },
  {
    degree: 'Independent Study: Front-End Engineering',
    institution: 'MSIB - PT Ruang Raya Indonesia (Ruangguru)',
    location: 'Remote Program',
    period: 'February 2022 - July 2022',
    note: 'Structured education program on React.js, modern JavaScript frameworks, and component design.',
  },
  {
    degree: 'Independent Study: Mobile App Development (Flutter)',
    institution: 'MSIB - PT GITS Indonesia',
    location: 'Remote Program',
    period: 'August 2021 - December 2021',
    note: 'Structured education program on cross-platform application builds, state management, and Dart scripting.',
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-bg-secondary/10 border-t border-border-subtle">
      {/* Header */}
      <motion.div {...fadeUp()} className="mb-12">
        <span className="text-xs text-bamboo font-bold uppercase tracking-[0.2em]">
          Timeline
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mt-3 tracking-tight">
          Experience & Education
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Professional Experience */}
        <motion.div {...fadeUp(0.05)} className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-4 h-4 text-bamboo" />
            <h3 className="text-lg font-heading font-bold text-text-primary">
              Professional Work
            </h3>
          </div>

          {professionalHistory.map((job) => (
            <div
              key={job.company}
              className="glass-card p-6 rounded-2xl border border-border-subtle space-y-4"
            >
              <div>
                <h4 className="font-heading font-bold text-text-primary text-base">
                  {job.role}
                </h4>
                <p className="text-xs text-text-secondary mt-1 flex flex-wrap gap-2 items-center">
                  <span className="font-medium">{job.company}</span>
                  <span className="text-text-secondary/40">•</span>
                  <span className="inline-flex items-center gap-1 text-text-secondary/60">
                    <MapPin className="w-3 h-3 text-bamboo" />
                    {job.location}
                  </span>
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-text-secondary text-[10px] font-mono w-fit">
                <Calendar className="w-3.5 h-3.5" />
                {job.period}
              </span>

              <ul className="space-y-2.5 pt-2 border-t border-border-subtle/50">
                {job.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-bamboo mt-1.5 flex-shrink-0" />
                    <span className="font-light">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Education & Programs */}
        <motion.div {...fadeUp(0.1)} className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-gold" />
            <h3 className="text-lg font-heading font-bold text-text-primary">
              Education & Programs
            </h3>
          </div>

          <div className="space-y-4">
            {educationalHistory.map((edu) => (
              <div
                key={edu.degree + edu.period}
                className="glass-card p-5 rounded-2xl border border-border-subtle space-y-3"
              >
                <div>
                  <h4 className="font-heading font-bold text-text-primary text-sm">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-text-secondary text-[9px] font-mono">
                    {edu.period}
                  </span>
                </div>

                <p className="text-[11px] text-text-secondary/70 leading-relaxed font-light pt-1 border-t border-border-subtle/50">
                  {edu.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
