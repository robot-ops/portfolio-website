# Rian Hardianto - Interactive Developer Portfolio

[![CI/CD Status](https://github.com/[Your-GitHub-Username]/portfolio-website/actions/workflows/ci.yml/badge.svg)](https://github.com/[Your-GitHub-Username]/portfolio-website/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)

A professional, high-performance, and visually striking developer portfolio website built using **ReactJS (Vite)** and custom **Vanilla CSS**. This portfolio is designed to showcase my **3+ years of Laravel backend expertise** alongside my **ReactJS frontend skills** in a unified, interactive presentation.

---

## 🚀 Key Interactive Features (Live Previews)
Instead of static screenshots, recruiters and clients can test full-stack features directly on the website via custom simulations:

1. **SQL Query & Database Index Tuner Sandbox**:
   - Simulates a raw SQL query executing on 10,000+ records.
   - Compares unindexed query performance (184ms) against an optimized index-based query (4ms).
   - Showcases the corresponding Laravel Eloquent code and migration files.
2. **Laravel Livewire Kanban Task Board**:
   - A reactive workspace demonstrating state updates without full-page reloads.
   - Users can add tasks and move tasks across states in real-time.
   - Showcases the Livewire blade component structure.
3. **RESTful API Endpoint Simulator**:
   - Simulates client-server requests for `GET /api/v1/projects` and `POST /api/v1/projects`.
   - The `POST` endpoint dynamically accepts name and technology values, returning formatted `210 Created` responses.
   - Displays the underlying Laravel Route definitions and ProjectController logic.

---

## 🛠️ Tech Stack & Styling
- **Framework**: ReactJS 18+ (Vite)
- **Styling**: Vanilla CSS (Neon dark mode theme, glassmorphism cards, floating background blobs, and custom keyframe animations)
- **Icons**: Optimized inline SVGs
- **Deployment-ready**: Optimized for free hosting providers (e.g. Netlify, Vercel, GitHub Pages)

---

## 📁 Project Structure
```
├── public/
│   └── avatar.png           # AI-generated professional avatar
├── src/
│   ├── App.jsx              # Main page and simulated interactive sandboxes
│   ├── index.css            # Custom CSS styles, themes, and animations
│   └── main.jsx             # React DOM renderer
├── .github/
│   └── workflows/
│       └── ci.yml           # Dynamic GitHub Actions CI/CD Pipeline
├── index.html               # Custom HTML entrypoint
├── package.json             # Npm scripts and dependencies
└── vite.config.js           # Vite development compiler config
```

---

## ⚙️ Installation & Local Setup

### Prerequisites
- Node.js (v18 or v20 recommended)
- npm or yarn

### Local Run

1. **Clone the Repository**
   ```bash
   git clone https://github.com/[Your-GitHub-Username]/portfolio-website.git
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
   Open `http://localhost:5173` in your browser.

4. **Compile Production Build**
   ```bash
   npm run build
   ```
   The static build files will compile into the `dist/` directory, ready to be dropped into **Netlify** or other hosting solutions.

---

## 🧪 CI/CD Pipeline
This project contains a GitHub Actions workflow `.github/workflows/ci.yml`. On every push and pull request, the workflow:
1. Checks out the repository.
2. Configures Node.js.
3. Installs dependencies.
4. Audits packages and runs build verification to prevent code breaking in production.
