import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';
import Logo from './ui/Logo';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="border-t border-border-subtle overflow-hidden">
      {/* Centered large watermark bamboo logo in the background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <Logo className="w-80 h-80 text-bamboo" showTagline={true} />
      </div>

      {/* Content */}
      <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center relative z-10 py-12">
        {/* Brand Stamp Logo above the heading */}
        <div className="mb-10 flex justify-center">
          <Logo className="w-16 h-20 text-bamboo" showTagline={true} />
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight mb-6">
          Let's Build Something{' '}
          <span className="text-gradient">That Lasts.</span>
        </h2>
        
        <p className="text-sm text-text-secondary leading-relaxed mb-12 max-w-lg mx-auto font-light">
          Whether you need to architect a robust database core, connect physical devices, or automate background pipelines — I build software that secures your business outcomes.
        </p>

        <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center justify-center gap-4">
          <Button href="mailto:personal.mailku@gmail.com">
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
          <Button href="https://wa.me/6281568385435" variant="outline">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
