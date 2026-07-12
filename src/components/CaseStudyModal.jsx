import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Cpu, Briefcase, Settings, Target, EyeOff, AlertTriangle } from 'lucide-react';

// Detailed SVG System Architecture Flows for Modal
function DetailedArchitectureFlow({ id }) {
  if (id === 'motion-analysis') {
    return (
      <div className="space-y-4">
        <div className="border border-border-subtle rounded-xl p-4 sm:p-6 bg-bg-primary/40 flex flex-col items-center justify-center">
          <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
            <svg viewBox="0 0 600 220" className="min-w-[550px] w-full text-text-secondary fill-none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              {/* Row 1: External Hardware */}
              <rect x="30" y="20" width="120" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
              <text x="90" y="44" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">EMG Sensor (Ext)</text>

              <rect x="180" y="20" width="100" height="40" rx="6" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.5" />
              <text x="230" y="44" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">MQTT Broker</text>

              <rect x="310" y="20" width="120" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
              <text x="370" y="44" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Camera (USB Port)</text>

              {/* Row 2: Ingestion & Storage */}
              <rect x="110" y="100" width="150" height="40" rx="6" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.5" />
              <text x="185" y="124" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Python Desktop App</text>

              <rect x="290" y="100" width="130" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
              <text x="355" y="124" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Laravel API Gateway</text>

              <rect x="450" y="100" width="110" height="40" rx="6" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.5" />
              <text x="505" y="124" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">MySQL DB</text>

              {/* Row 3: Visualization */}
              <rect x="290" y="170" width="130" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
              <text x="355" y="194" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Web Visualization UI</text>

              {/* Connectors */}
              <path d="M 150 40 L 180 40" stroke="#6B8E23" strokeWidth="1.2" strokeDasharray="3 3" />
              <text x="165" y="32" textAnchor="middle" fill="#A3B18A" fontSize="8" fontFamily="monospace">MQTT</text>

              <path d="M 230 60 L 230 80 Q 230 100, 185 100" stroke="#6B8E23" strokeWidth="1.2" />
              <text x="250" y="82" textAnchor="middle" fill="#A3B18A" fontSize="8" fontFamily="monospace">MQTT Sub</text>

              <path d="M 370 60 L 370 80 Q 370 100, 220 100" stroke="#D4AF37" strokeWidth="1.2" />
              <text x="390" y="82" textAnchor="middle" fill="#A3B18A" fontSize="8" fontFamily="monospace">USB Port</text>

              <path d="M 260 120 L 290 120" stroke="#6B8E23" strokeWidth="1.5" />
              <text x="275" y="112" textAnchor="middle" fill="#A3B18A" fontSize="8" fontFamily="monospace">REST API</text>

              <path d="M 420 120 L 450 120" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M 355 140 L 355 170" stroke="#6B8E23" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <p className="text-xs text-text-secondary/70 italic text-center">
          Data Flow: Standalone EMG sensor rigs publish via MQTT while joint angles are read from a camera feed connected to the PC via USB. The custom Python desktop client aligns the telemetry streams and sends trial datasets to the Laravel API gateway.
        </p>
      </div>
    );
  }

  if (id === 'pressure-monitoring') {
    return (
      <div className="space-y-4">
        <div className="border border-border-subtle rounded-xl p-4 sm:p-6 bg-bg-primary/40 flex flex-col items-center justify-center">
          <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
            <svg viewBox="0 0 600 220" className="min-w-[550px] w-full text-text-secondary fill-none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              {/* Row 1: Hardware Layer */}
              <rect x="30" y="20" width="100" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
              <text x="80" y="44" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Pressure Sensors</text>

              <rect x="180" y="20" width="100" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
              <text x="230" y="44" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Industrial PLC</text>

              <rect x="330" y="20" width="120" height="40" rx="6" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.5" />
              <text x="390" y="44" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">HMI (MQTT Pub)</text>

              {/* Row 2: Ingest Layer */}
              <rect x="330" y="100" width="120" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
              <text x="390" y="124" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Laravel Ingestion Daemon</text>

              <rect x="490" y="100" width="80" height="40" rx="6" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.5" />
              <text x="530" y="124" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Redis Cache</text>

              {/* Row 3: Output */}
              <rect x="330" y="170" width="120" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
              <text x="390" y="194" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Realtime Dashboard</text>

              {/* Connectors */}
              <path d="M 130 40 L 180 40" stroke="#6B8E23" />
              <path d="M 280 40 L 330 40" stroke="#D4AF37" />
              <path d="M 390 60 L 390 100" stroke="#6B8E23" />
              <text x="415" y="80" textAnchor="middle" fill="#A3B18A" fontSize="8" fontFamily="monospace">MQTT</text>

              <path d="M 450 120 L 490 120" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M 390 140 L 390 170" stroke="#6B8E23" strokeWidth="1.5" />
              <text x="415" y="158" textAnchor="middle" fill="#A3B18A" fontSize="8" fontFamily="monospace">Websocket</text>
            </svg>
          </div>
        </div>
        <p className="text-xs text-text-secondary/70 italic text-center">
          Pneumatic sensor telemetry is captured by industrial PLCs, pushed to the HMI which acts as the MQTT publisher, ingested by Laravel queue workers, and broadcast to terminal boards.
        </p>
      </div>
    );
  }

  // solar
  return (
    <div className="space-y-4">
      <div className="border border-border-subtle rounded-xl p-4 sm:p-6 bg-bg-primary/40 flex flex-col items-center justify-center">
        <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
          <svg viewBox="0 0 600 180" className="min-w-[550px] w-full text-text-secondary fill-none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {/* Column 1: Hardware */}
            <rect x="30" y="70" width="130" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
            <text x="95" y="94" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">LDR & ESP32 Device (Ext)</text>

            {/* Column 2: Data Broker */}
            <rect x="240" y="70" width="140" height="40" rx="6" fill="#161B22" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.5" />
            <text x="310" y="94" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Firebase Realtime DB</text>

            {/* Column 3: Android App */}
            <rect x="460" y="70" width="110" height="40" rx="6" fill="#161B22" stroke="rgba(107, 142, 35, 0.4)" strokeWidth="1.5" />
            <text x="515" y="94" textAnchor="middle" fill="#E6EDF3" fontSize="10" fontFamily="sans-serif">Android Client</text>

            {/* Connectors */}
            <path d="M 160 90 L 240 90" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="200" y="82" textAnchor="middle" fill="#A3B18A" fontSize="8" fontFamily="monospace">Sync</text>

            <path d="M 380 90 L 460 90" stroke="#6B8E23" strokeWidth="1.5" />
            <text x="420" y="82" textAnchor="middle" fill="#A3B18A" fontSize="8" fontFamily="monospace">Reactive Feed</text>
          </svg>
        </div>
      </div>
      <p className="text-xs text-text-secondary/70 italic text-center">
        The external ESP32 sensor rig pushes solar tracker status variables directly to Firebase database tables, triggering reactive updates on mobile devices.
      </p>
    </div>
  );
}

// Confidential UI Wireframe placeholders
function ConfidentialVisual({ id }) {
  return (
    <div className="border border-dashed border-border-subtle rounded-xl p-8 bg-bg-secondary/40 flex flex-col items-center justify-center text-center space-y-3">
      <EyeOff className="w-8 h-8 text-gold/60" />
      <div>
        <h5 className="text-sm font-heading font-bold text-text-primary">confidential UI Wireframe</h5>
        <p className="text-[11px] text-text-secondary/60 mt-1 max-w-sm">
          Specific dashboard screenshots have been replaced with stylized system conceptualizations to safeguard operational data secrets.
        </p>
      </div>
      
      {/* Visual wireframe representation */}
      <div className="w-full max-w-md h-24 border border-border-subtle/50 rounded-lg opacity-30 flex gap-2 p-2">
        <div className="w-1/4 h-full border border-border-subtle/50 rounded bg-white/5" />
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-4 border border-border-subtle/50 rounded bg-white/5" />
          <div className="h-full border border-border-subtle/50 rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyModal({ isOpen, onClose, project }) {
  // Lock body scroll on opening
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bg-primary/95 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-4xl bg-bg-secondary border border-border-subtle rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all z-30 focus:outline-none focus:ring-2 focus:ring-bamboo/50"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-12">
              
              {/* SECTION 1: HERO */}
              <div className="space-y-4 pt-4 border-b border-border-subtle/50 pb-8">
                <span className="text-xs text-gold font-bold uppercase tracking-[0.2em] font-mono">
                  {project.category}
                </span>
                <h3 id="case-study-title" className="text-2xl sm:text-4xl font-heading font-bold text-text-primary tracking-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-secondary font-light pt-2">
                  <p>
                    <span className="font-semibold text-text-primary">Role:</span> {project.role}
                  </p>
                  <p>
                    <span className="font-semibold text-text-primary">Scope:</span> {project.highlight}
                  </p>
                </div>
              </div>

              {/* SECTION 2: OVERVIEW */}
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-text-primary flex items-center gap-2">
                  <Target className="w-5 h-5 text-bamboo" />
                  Overview
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>

              {/* SECTION 3 & 4: CHALLENGE & SOLUTION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-heading font-bold text-text-primary flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                    Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-bold text-text-primary flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-bamboo" />
                    Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* SECTION 5: SYSTEM ARCHITECTURE */}
              <div className="space-y-4 pt-4 border-t border-border-subtle/50">
                <h4 className="font-heading font-bold text-text-primary flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-bamboo" />
                  System Architecture
                </h4>
                <DetailedArchitectureFlow id={project.id} />
              </div>

              {/* SECTION 6: RESPONSIBILITIES */}
              <div className="space-y-4 pt-4 border-t border-border-subtle/50">
                <h4 className="font-heading font-bold text-text-primary flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-gold" />
                  Core Responsibilities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-bamboo mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECTION 7: TECHNOLOGY DECISIONS */}
              <div className="space-y-4 pt-4 border-t border-border-subtle/50">
                <h4 className="font-heading font-bold text-text-primary flex items-center gap-2">
                  <Settings className="w-5 h-5 text-bamboo" />
                  Technology Decisions & Rationale
                </h4>
                <ul className="space-y-3">
                  {project.techDecisions.map((dec, i) => (
                    <li key={i} className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light flex gap-2.5">
                      <span className="text-gold font-mono font-bold">{`0${i + 1}.`}</span>
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECTION 8: IMPACT */}
              <div className="p-6 rounded-2xl bg-bamboo/5 border border-bamboo/20 space-y-2">
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] font-mono block">
                  Measurable Business Impact
                </span>
                <p className="text-sm sm:text-base font-medium text-text-primary leading-relaxed">
                  {project.impact}
                </p>
              </div>

              {/* SECTION 9: GALLERY & PRIVACY WATERMARKS */}
              {project.isConfidential && (
                <div className="pt-4 border-t border-border-subtle/50">
                  <ConfidentialVisual id={project.id} />
                </div>
              )}

              {/* SECTION 10: LESSONS LEARNED */}
              <div className="space-y-4 pt-4 border-t border-border-subtle/50">
                <h4 className="font-heading font-bold text-text-primary flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-gold" />
                  Lessons Learned & Architecture Evolution
                </h4>
                <ul className="space-y-3">
                  {project.lessonsLearned.map((lesson, i) => (
                    <li key={i} className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light flex gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Action Bar */}
            <div className="p-4 sm:p-6 border-t border-border-subtle/50 bg-bg-secondary flex flex-col sm:flex-row justify-end gap-3 sticky bottom-0 z-20">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all text-sm font-medium"
              >
                Close
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg bg-bamboo text-white hover:bg-bamboo/90 shadow-lg shadow-bamboo/10 transition-all text-sm font-medium"
              >
                View Repository
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
