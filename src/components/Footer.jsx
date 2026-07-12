import Logo from './ui/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo className="w-5 h-6" />
          <span className="text-sm text-text-secondary">
            © 2026 PRINX. Built with intention.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/robot-ops" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-sage transition-colors text-sm">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aditya-bayu-aji-71709b203/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-sage transition-colors text-sm">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
