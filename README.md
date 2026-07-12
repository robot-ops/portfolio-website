# PRINX | Aditya Bayu Aji — Software Systems Engineer Portfolio

A premium, outcome-oriented software systems engineering portfolio website featuring a bamboo-inspired design system. This site communicates systems thinking and engineering maturity, showcasing complete software ecosystems across web, desktop, mobile, IoT, and infrastructure.

---

## 🛠️ Brand Positioning & Mindset
- **Systems Engineering:** Designs unified software loops—from physical sensors and HMI/PLC nodes over MQTT brokers to Python desktop clients, Laravel API gateways, and secured database servers.
- **Outcome Selling:** Focuses on real-world business challenges, database integrity, error-handling boundaries, and measurable impacts over raw technology lists.
- **Bamboo Analogy:** Inspired by the Javanese word *"Pring"* (bamboo), representing flexibility under load, reliability over time, simplicity, and long-term growability.

---

## 🚀 Key Features & Visual Storytelling

1. **Parallax Hero & Micro-Interactions**:
   - Layered bamboo vector illustration responding to mouse movement.
   - Spring-based magnetic CTA buttons and ambient drifting leaf particles.
2. **Scroll Storyteller (`BambooStory.jsx`)**:
   - A sidebar progress indicator that grows and changes states from *Seed* to *Sprout* to *Strong Bamboo Segments* as the visitor scrolls through the page.
3. **Structured Case Studies & SVG Diagrams**:
   - Features 3 detailed, confidential case studies:
     1. **Motion Analysis Platform** (Healthcare Technology: Python Desktop App capturing USB camera feeds and subscribing to EMG sensors via MQTT)
     2. **Industrial Pressure Monitoring Platform** (Industrial IoT: pneumatic line data routed via PLCs to HMI screens publishing over MQTT)
     3. **Solar Tracker Monitoring System** (Android + IoT: ESP32 solar telemetry synced with Firebase Realtime Database)
   - Open into detailed **10-Section Overlays** (Hero, Overview, Challenge, Solution, Architecture Flow SVG, Responsibilities, Technology Decisions, Impact, Gallery/Wireframes, and Lessons Learned).
4. **Honest Timeline**:
   - Clear division between professional engineering experience (Redesma Engineering) and educational milestones (Universitas Dian Nuswantoro and MSIB Independent Studies).

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       ├── ci.yml           # Build verification pipeline
│       └── deploy.yml       # Netlify deployment workflow
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI tokens (Magnetic, Logo, SectionWrapper)
│   │   ├── Hero.jsx         # Parallax entry point & CTAs
│   │   ├── Experience.jsx   # Work & education chronology
│   │   ├── About.jsx        # Mindset columns &Daily Scope
│   │   ├── Skills.jsx       # Capabilities domain grid
│   │   ├── Projects.jsx     # Card grid & mini-diagram previews
│   │   ├── CaseStudyModal.jsx # 10-section case study overlay
│   │   ├── Manifesto.jsx    # Short engineering philosophy
│   │   ├── Process.jsx      # 5-step workflow timeline
│   │   ├── Testimonial.jsx  # Monogram quote cards
│   │   └── Contact.jsx      # Minimal CTA form & watermark
│   ├── App.jsx              # Main mount and Lenis setup
│   ├── index.css            # Tailwind CSS v4 variables & drift animations
│   └── main.jsx             # React mount
├── index.html               # Main index with customized SEO & JSON-LD
├── package.json             # Scripts & dependencies
└── vite.config.js           # Vite dev compiler configuration
```

---

## ⚙️ Installation & Local Setup

### Prerequisites
- Node.js (v20+ recommended)
- npm or yarn

### Local Development

1. **Clone & Navigate**
   ```bash
   git clone https://github.com/robot-ops/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Dev Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the console output fallback port) in your browser.

4. **Verify Production Build**
   ```bash
   npm run build
   ```
   Compiles static files into the `dist/` directory, optimized for Netlify static hosting.
