import { useEffect, Component } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Manifesto from './components/Manifesto';
import Skills from './components/Skills';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BambooStory from './components/BambooStory';

// Error Boundary — prevents blank-screen crash
class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg-primary flex items-center justify-center text-text-primary">
          <div className="text-center space-y-4 p-8">
            <h1 className="text-2xl font-heading font-bold">Something went wrong</h1>
            <p className="text-text-secondary text-sm">Please refresh the page to continue.</p>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-bamboo/80 text-white rounded-lg hover:bg-bamboo transition-colors text-sm">
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Ambient particle component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-bamboo/20 blur-[1px] animate-drift`}
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 12 + 15}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Mouse-follow glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-bg-primary text-text-primary relative mouse-glow selection:bg-bamboo/30 selection:text-white overflow-hidden">
      {/* Ambient Visual Elements */}
      <div className="absolute inset-0 grid-bg opacity-15 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,142,35,0.05),transparent_50%)] pointer-events-none z-0" />
      <FloatingParticles />

      {/* Scroll Growth Story Indicator */}
      <BambooStory />

      {/* Global Navigation */}
      <Navbar />

      {/* Structured Sections */}
      <main className="relative z-10">
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Manifesto />
        <Process />
        <Contact />
      </main>

      {/* Branded Footer */}
      <Footer />
    </div>
    </ErrorBoundary>
  );
}