import { motion } from 'framer-motion';
import { Database, Monitor, Cpu, Smartphone, Server, Wrench } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const capabilities = [
  {
    title: 'Business Systems',
    icon: Database,
    value: 'I build internal web platforms and portals that simplify daily operations, manage workflow logs, and secure database interactions.',
    tech: ['Laravel / PHP', 'MySQL', 'REST APIs', 'RBAC Authentication'],
  },
  {
    title: 'Desktop Applications',
    icon: Monitor,
    value: 'I construct stable cross-platform desktop clients that communicate with low-level hardware and visualize data feeds.',
    tech: ['Python', 'PySide / Qt', 'Serial / USB Communication', 'Data Graphing'],
  },
  {
    title: 'Industrial IoT',
    icon: Cpu,
    value: 'I integrate connected microcontroller devices into reliable real-time telemetry systems that prevent packet loss over unstable networks.',
    tech: ['ESP32 / Arduino', 'MQTT Protocol', 'Sensor Calibration', 'Realtime Dashboards'],
  },
  {
    title: 'Android Applications',
    icon: Smartphone,
    value: 'I develop native Android apps that serve as lightweight, responsive interfaces for field operations and remote monitoring.',
    tech: ['Java / Native Android SDK', 'Firebase Sync', 'API Connectivity'],
  },
  {
    title: 'Infrastructure',
    icon: Server,
    value: 'I set up, configure, and secure Linux virtual private servers (VPS) to ensure reliable app deployment and uptime monitoring.',
    tech: ['Ubuntu Server', 'AApanel', 'Nginx Proxies', 'Uptime Audits'],
  },
  {
    title: 'IT Operations',
    icon: Wrench,
    value: 'I maintain local network setups, configure automated backup strategies, and resolve hardware faults to minimize business downtime.',
    tech: ['Technical Support', 'Backup Systems', 'Network Routing', 'Device Auditing'],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section Header */}
      <motion.div {...fadeUp()} className="text-center mb-16">
        <span className="text-xs text-bamboo font-bold uppercase tracking-[0.2em]">
          Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mt-3 tracking-tight">
          What I Engineer
        </h2>
      </motion.div>

      {/* Grid of Domains */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              {...fadeUp(idx * 0.05)}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between hover:border-bamboo/30 hover:scale-[1.01] transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-bamboo/5 border border-bamboo/10 group-hover:bg-bamboo/10 group-hover:border-bamboo/20 transition-colors">
                    <Icon className="w-5 h-5 text-bamboo" />
                  </div>
                  <h3 className="font-heading font-bold text-text-primary text-base sm:text-lg">
                    {item.title}
                  </h3>
                </div>

                {/* Value Statement */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                  {item.value}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-4 border-t border-border-subtle/50 flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-bg-primary border border-border-subtle text-sage"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
