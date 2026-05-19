# 🚀 WebMakers2: Elite Digital Experiences

WebMakers2 is a high-end, high-performance digital agency platform built for the next generation of the web. It combines cutting-edge 3D graphics, fluid animations, and a sophisticated design language to deliver an immersive brand experience.

![Luxury Web Design](https://img.shields.io/badge/UX%2FUI-Elite-gold)
![Performance](https://img.shields.io/badge/Performance-Optimized-brightgreen)
![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%2B%20Three.js-blue)

---

## ✨ Key Features

- **🌌 3D Space Background:** A global, fixed WebGL background featuring a high-resolution Night Earth and distant burning meteorites, powered by Three.js and React Three Fiber.
- **💧 Liquid Page Transitions:** Multi-layered gold wipe effects using Framer Motion for seamless route changes.
- **📜 Smooth Scrolling:** Integrated Lenis for a premium, momentum-based scrolling experience.
- **🧲 Magnetic Interactions:** Custom `MagneticButton` components with "invisible hit shields" for reliable and satisfying cursor interactions.
- **🧊 Glassmorphism UI:** Sophisticated glass-like interfaces with dynamic blurring and depth.
- **🎭 Scroll Reveals:** Narrative-driven text and element reveals triggered by scroll position.
- **🌘 Dynamic Noise & Texture:** An animated film-grain overlay and vignette for a cinematic visual aesthetic.
- **📱 Fully Responsive:** Meticulously crafted for all devices, from ultra-wide monitors to mobile screens.

---

## 🚀 Tech Stack

- **Frontend:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **3D Engine:** [Three.js](https://threejs.org/) with [@react-three/fiber](https://r3f.docs.pmnd.rs/) & [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Analytics:** [PostHog](https://posthog.com/)
- **SEO:** [React Helmet Async](https://github.com/staylor/react-helmet-async)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FAYEZ087/webdevguru.git
   cd webmakers2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
src/
├── assets/             # Static assets (images, svgs)
├── components/         # Reusable UI components (MagneticButton, GlassOrb, etc.)
├── context/            # React Contexts (Theme, Modal)
├── hooks/              # Custom React hooks (useSEO, useTheme)
├── pages/              # Page components (Home, Work, About)
├── sections/           # Large sections used within pages (Hero, Portfolio, FAQ)
├── utils/              # Utility functions and analytics
└── App.tsx             # Main application entry and routing
```

---

## 🎨 Design System

WebMakers2 follows a luxury, "engineered" aesthetic:

- **Typography:**
  - **Brand/Headers/Body:** *Cormorant Garamond* (Serif) - Authoritative & Luxury feel.
  - **Functional/Buttons/Legal:** *Montserrat* (Sans-serif) - Modern & Readable.
- **Visuals:** Dark mode by default, featuring deep space tones, gold accents, and transparent glass layers.

---

## 📈 Analytics & SEO

- **PostHog Integration:** Automated event tracking and page view analysis.
- **Dynamic SEO:** `useSEO` hook manages meta tags, OpenGraph data, and structured JSON-LD schemas for every route.
- **Performance:** Optimized asset loading and component lazy loading for lightning-fast metrics.

---

## 📄 License

This project is private and confidential. © 2026 WebDevGuru. All rights reserved.
