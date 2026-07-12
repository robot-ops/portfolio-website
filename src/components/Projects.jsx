import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import CaseStudyModal from './CaseStudyModal';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

// Mini Architecture Previews for cards
function ArchitecturePreview({ type }) {
  if (type === 'motion') {
    return (
      <svg viewBox="0 0 320 80" className="w-full text-text-secondary/70 fill-none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* EMG Ingestion */}
        <rect x="5" y="10" width="70" height="22" rx="4" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.2" />
        <text x="40" y="24" textAnchor="middle" fill="#E6EDF3" fontSize="7">EMG (MQTT)</text>

        {/* Camera Ingestion */}
        <rect x="5" y="48" width="70" height="22" rx="4" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.2" />
        <text x="40" y="62" textAnchor="middle" fill="#E6EDF3" fontSize="7">Camera (USB)</text>

        <rect x="100" y="25" width="75" height="30" rx="4" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.2" />
        <text x="1375" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8" transform="translate(-1238, 0)">Python Desktop</text>

        <rect x="195" y="25" width="60" height="30" rx="4" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.2" />
        <text x="225" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8">Laravel Web</text>

        <rect x="275" y="25" width="40" height="30" rx="4" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.2" />
        <text x="295" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8">MySQL</text>

        {/* Connectors */}
        <path d="M 75 21 L 100 35" stroke="#6B8E23" strokeDasharray="2 2" />
        <path d="M 75 59 L 100 45" stroke="#D4AF37" />
        <line x1="175" y1="40" x2="195" y2="40" stroke="#6B8E23" />
        <line x1="255" y1="40" x2="275" y2="40" stroke="#D4AF37" />
      </svg>
    );
  }

  if (type === 'pressure') {
    return (
      <svg viewBox="0 0 320 80" className="w-full text-text-secondary/70 fill-none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="25" width="45" height="30" rx="4" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.2" />
        <text x="275" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8" transform="translate(-250, 0)">PLC / Sensor</text>

        <rect x="65" y="25" width="60" height="30" rx="4" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.2" />
        <text x="95" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8">HMI</text>

        <rect x="140" y="25" width="55" height="30" rx="4" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.2" />
        <text x="167" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8">MQTT Broker</text>

        <rect x="210" y="25" width="50" height="30" rx="4" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.2" />
        <text x="235" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8">Laravel API</text>

        <rect x="275" y="25" width="40" height="30" rx="4" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.2" />
        <text x="295" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8">Dashboard</text>

        {/* Connectors */}
        <line x1="50" y1="40" x2="65" y2="40" stroke="#6B8E23" />
        <line x1="125" y1="40" x2="140" y2="40" stroke="#D4AF37" />
        <line x1="195" y1="40" x2="210" y2="40" stroke="#6B8E23" />
        <line x1="260" y1="40" x2="275" y2="40" stroke="#D4AF37" strokeDasharray="2 2" />
      </svg>
    );
  }

  // solar
  return (
    <svg viewBox="0 0 320 80" className="w-full text-text-secondary/70 fill-none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="15" y="25" width="70" height="30" rx="4" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.2" />
      <text x="50" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8">ESP32 Device (Ext)</text>

      <rect x="120" y="25" width="80" height="30" rx="4" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.2" />
      <text x="160" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8">Firebase Realtime</text>

      <rect x="235" y="25" width="70" height="30" rx="4" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.2" />
      <text x="270" y="43" textAnchor="middle" fill="#E6EDF3" fontSize="8">Android Client</text>

      {/* Connectors */}
      <line x1="85" y1="40" x2="120" y2="40" stroke="#D4AF37" strokeDasharray="3 3" />
      <line x1="200" y1="40" x2="235" y2="40" stroke="#6B8E23" />
    </svg>
  );
}

const projects = [
  {
    id: 'motion-analysis',
    title: 'Motion Analysis Platform',
    category: 'Healthcare Technology',
    role: 'Software Systems Engineer',
    highlight: 'Desktop + Web + IoT integration',
    isConfidential: true,
    diagramType: 'motion',
    problemShort: 'Clinical trials struggled to capture patient muscle activity and joint angular data simultaneously.',
    impact: 'Consolidated diagnostic reports, reducing patient assessment generation time by 60%.',
    tech: ['Python / PySide', 'Laravel Core API', 'MySQL', 'EMG Signal Integration', 'High-Frequency Serialization'],
    github: 'https://github.com/robot-ops/gait-analysis',
    accent: '#6B8E23',
    // Detailed case study sections
    overview: 'This platform integrates hardware sensors with a centralized clinical portal. It provides clinical teams with the tools to synchronize and analyze joint movement angles (via a camera connected to the USB port) and EMG signals (via MQTT data topics published by an external hardware device built by a separate team).',
    challenge: 'Medical teams relied on separate, unlinked software tools to capture muscle activity and joint kinematics. Clinicians needed a system that captured EMG muscle activity and calculated movement angles from a camera feed simultaneously without manual alignment delays.',
    solution: 'Wrote the Python desktop client to capture the camera stream via USB and subscribe to the EMG hardware\'s MQTT broker topics. The application aligns both inputs onto a single synced timeline and transmits consolidated datasets to the Laravel API database gateway.',
    architectureText: 'System flow: The local Python client reads angle calculations from a camera feed via USB, subscribes to EMG signals via MQTT, synchronizes both timelines, and dispatches consolidated trial data to the Laravel web portal.',
    responsibilities: [
      'Engineered the local PySide desktop client to capture camera feeds via USB and ingest MQTT feeds from external hardware.',
      'Designed the secure Laravel API broker to accept consolidated trial records.',
      'Constructed database indexes in MySQL to manage high-frequency diagnostic packages.',
      'Implemented automated PDF report generators utilizing headless printing scripts.',
    ],
    techDecisions: [
      'Selected Python/PySide for the desktop logging console to access socket buffers directly while retaining cross-platform UI compatibility.',
      'Utilized Laravel for the API portal to establish rapid routing and database schemas.',
    ],
    lessonsLearned: [
      'Separation of hardware design from software ingestion enables cleaner development limits.',
      'Client-side buffer queues prevent diagnostic loss during wireless drops.',
    ],
  },
  {
    id: 'pressure-monitoring',
    title: 'Industrial Pressure Monitoring Platform',
    category: 'Industrial IoT',
    role: 'Software Systems Engineer',
    highlight: 'Realtime MQTT Dashboard + PLC + HMI',
    isConfidential: true,
    diagramType: 'pressure',
    problemShort: 'Factory floors lacked remote, real-time visibility into pneumatic pressure shifts, leading to machine wear.',
    impact: 'Provided immediate alerts for pressure drops, preventing unplanned machine downtime.',
    tech: ['HMI (MQTT)', 'Industrial PLC', 'Laravel API', 'Redis Ingestion', 'Pusher / Websockets'],
    github: 'https://github.com/robot-ops/bionic-foot',
    accent: '#D4AF37',
    overview: 'An industrial monitoring platform that tracks air compressor and pneumatic line pressures across production lines. It aggregates PLC sensor signals and delivers live alerts directly to maintenance terminals using HMI MQTT capabilities.',
    challenge: 'Pneumatic line pressure shifts were only visible on localized machinery gauges. Maintenance teams needed a remote central dashboard to capture fluctuations. To keep setup costs down, we utilized the existing HMI screen as the central publisher instead of auxiliary microcontrollers.',
    solution: 'Connected pneumatic pressure sensors directly to industrial PLCs. Configured the HMI to map PLC register data and publish value updates directly to a secure MQTT Broker. Created a Laravel ingestion service backed by Redis queues to broadcast live metrics via WebSockets.',
    architectureText: 'Pneumatic sensor telemetry is captured by industrial PLCs, pushed to the HMI which acts as the MQTT publisher, ingested by Laravel queue workers, and broadcast to terminal boards.',
    responsibilities: [
      'Configured HMI MQTT integration mapping registers directly from PLCs.',
      'Set up and secured the Linux-hosted MQTT Broker and Laravel Horizons queue handlers.',
      'Built the WebSocket notification pipeline and real-time dashboard layout.',
    ],
    techDecisions: [
      'Utilized the built-in MQTT capabilities of the HMI, eliminating the need for custom hardware nodes.',
      'Configured Redis memory storage for quick payload processing before database execution.',
    ],
    lessonsLearned: [
      'Leveraging industrial-grade HMI gateways reduces deployment risks compared to custom microcontrollers on factory floors.',
      'Queue limits must be carefully calibrated to manage sudden packet bursts from PLC nodes.',
    ],
  },
  {
    id: 'solar-tracker',
    title: 'Solar Tracker Monitoring System',
    category: 'Android + IoT',
    role: 'Android & Database Developer',
    highlight: 'Android + Firebase + Energy Tracking',
    isConfidential: true,
    diagramType: 'solar',
    problemShort: 'Field operators had no simple method to track alignment angles and solar yield outputs on-site.',
    impact: 'Enabled real-time yield tracking and remote angle adjustments directly from mobile devices.',
    tech: ['Java / Native Android SDK', 'Firebase Realtime DB', 'Sensor Telemetry Ingestion'],
    github: 'https://github.com/robot-ops',
    accent: '#A3B18A',
    overview: 'A solar-tracking dashboard app that reads panel alignment angles and power yields, syncing real-time states directly with field technicians.',
    challenge: 'Solar alignment adjustments required manual hardware testing. Technicians needed an immediate, responsive mobile dashboard that aligned with the solar panel tracking values.',
    solution: 'Engineered the native Android software application and mapped database parameters to Firebase Realtime Database. The mobile client listens to the Firebase data feed populated by LDR sensor controllers, displaying logs and enabling manual steering commands.',
    architectureText: 'The ESP32 tracking motor hardware (designed separately) uploads alignment angles to Firebase Realtime Database. The native Android application subscribes to the database feed for monitoring and controls.',
    responsibilities: [
      'Developed the native Java Android application from scratch.',
      'Structured the data schemas and real-time sync hooks in Firebase Realtime Database.',
      'Implemented dashboard interfaces showing panel yield, battery storage, and manual override values.',
    ],
    techDecisions: [
      'Used Firebase Realtime Database to obtain instant reactive sync without setting up custom websocket protocols.',
      'Built a native Android client (Java) to ensure low-level battery efficiency and smooth UI performance.',
    ],
    lessonsLearned: [
      'Offloading firmware tasks to dedicated control channels allows software engineers to focus on rich consumer interfaces.',
      'Real-time data feeds must be structured with read/write rules to secure client tokens.',
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <SectionWrapper id="projects" className="bg-bg-secondary/30 relative border-t border-border-subtle">
      {/* Header */}
      <motion.div {...fadeUp()} className="max-w-3xl mb-16">
        <span className="text-xs text-bamboo font-bold uppercase tracking-[0.2em]">
          Case Studies
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mt-3 tracking-tight">
          Featured Engineering Work
        </h2>
        <p className="text-sm text-text-secondary mt-4 max-w-xl leading-relaxed">
          Real systems. Real engineering. Real business challenges.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            {...fadeUp(idx * 0.1)}
            onClick={() => handleOpenModal(project)}
            className="glass-card rounded-2xl overflow-hidden group hover:border-bamboo/40 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(107,142,35,0.1)] transition-all duration-300 flex flex-col justify-between cursor-pointer border border-border-subtle"
          >
            {/* Visual Header / SVG Architecture Preview */}
            <div className="p-6 bg-bg-secondary/40 border-b border-border-subtle/50 relative overflow-hidden flex flex-col justify-center min-h-[120px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-text-secondary/50 font-mono uppercase tracking-widest">
                  Architecture Flow
                </span>
                {project.isConfidential && (
                  <span className="inline-flex items-center gap-1 text-[9px] text-gold/60 font-mono uppercase">
                    <Lock className="w-3 h-3" /> Confidential Spec
                  </span>
                )}
              </div>
              <ArchitecturePreview type={project.diagramType} />
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-gold uppercase tracking-widest block font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-text-primary mt-1 group-hover:text-bamboo transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-[10px] text-text-secondary/40 uppercase tracking-widest font-mono">
                      Role / Project Scope
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1 font-light">
                      {project.role} • <span className="text-sage/80 font-medium">{project.highlight}</span>
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-text-secondary/40 uppercase tracking-widest font-mono">
                      The Challenge
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1 font-light">
                      {project.problemShort}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-gold/70 uppercase tracking-widest font-mono">
                      Impact
                    </span>
                    <p className="text-xs text-text-primary leading-relaxed mt-1 font-light">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies & Trigger */}
              <div className="pt-6 border-t border-border-subtle/50 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-bg-primary border border-border-subtle/50 text-sage"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-bg-primary/50 text-text-secondary/50">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs text-text-secondary group-hover:text-bamboo transition-colors duration-300">
                  <span className="hidden sm:inline font-light">View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </SectionWrapper>
  );
}
