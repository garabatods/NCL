import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Layers3,
  Menu,
  Rocket,
  Sparkles,
} from "lucide-react";
import "./styles.css";
import cardIconAi from "./assets/card-icon-ai.png";
import cardIconProducts from "./assets/card-icon-products.png";
import cardIconSystems from "./assets/card-icon-systems.png";
import footerFlask from "./assets/footer-flask.png";
import footerMascot from "./assets/footer-mascot.png";
import heroCartridge from "./assets/hero-cartridge.png";
import heroFlaskCard from "./assets/hero-flask-card.png";
import heroStackPanel from "./assets/hero-stack-panel.png";
import nclMark from "./assets/ncl-mark.png";
import pixelSparks from "./assets/pixel-sparks.png";
import stepBuild from "./assets/step-build.png";
import stepImprove from "./assets/step-improve.png";
import stepShip from "./assets/step-ship.png";
import techCircuitLines from "./assets/tech-circuit-lines.png";

const buildCards = [
  {
    icon: cardIconProducts,
    title: "Products",
    text: "Small apps, digital tools, and playful software experiments shaped around real problems.",
  },
  {
    icon: cardIconSystems,
    title: "Systems",
    text: "Thoughtful workflows, internal tools, and operational platforms that scale with clarity.",
  },
  {
    icon: cardIconAi,
    title: "AI-Enhanced Design",
    text: "Design-led execution supported by AI, automation, and rapid prototyping.",
  },
];

const steps = [
  {
    number: "01",
    icon: stepBuild,
    title: "Build",
    text: "We turn early ideas into usable software.",
  },
  {
    number: "02",
    icon: stepShip,
    title: "Ship",
    text: "We focus on practical launches, not endless concepts.",
  },
  {
    number: "03",
    icon: stepImprove,
    title: "Improve",
    text: "We learn, refine, and keep systems evolving.",
  },
];

const statusItems = [
  ["Brand system", "Online", "online"],
  ["Product concepts", "In progress", "active"],
  ["First launches", "Loading", "active"],
  ["Public case studies", "Next", "next"],
];

function PixelSpark({ className = "" }: { className?: string }) {
  return <img className={`pixel-spark ${className}`} src={pixelSparks} alt="" aria-hidden="true" />;
}

function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "logo-mark logo-mark--compact" : "logo-mark"} aria-hidden="true">
      <img src={nclMark} alt="" />
      <span>NCL</span>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Neon Cartridge Labs home">
        <LogoMark compact />
        <span>Neon Cartridge Labs</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Work in progress</a>
        <a href="#studio">Studio</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="menu-button" type="button" aria-label="Open menu">
        <Menu size={22} strokeWidth={1.8} />
      </button>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <PixelSpark className="visual-spark visual-spark--one" />
      <PixelSpark className="visual-spark visual-spark--two" />
      <img className="tech-lines tech-lines--left" src={techCircuitLines} alt="" />
      <img className="tech-lines tech-lines--right" src={techCircuitLines} alt="" />

      <div className="cartridge-card">
        <img src={heroCartridge} alt="" />
        <div className="cartridge-label">
          <strong>NC<span>L</span></strong>
          <p>NEON<br />CARTRIDGE<br />LABS</p>
        </div>
      </div>

      <img className="flask-panel" src={heroFlaskCard} alt="" />

      <div className="stack-panel">
        <img src={heroStackPanel} alt="" />
        <div className="stack-panel__content">
          <p>Build<br />Ship<br />Improve</p>
          <ul>
            <li><Code2 size={19} />Build</li>
            <li><Rocket size={19} />Ship</li>
            <li><Sparkles size={19} />Improve</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <div className="status-chip"><span />Studio in progress</div>
        <h1>Playful products.<br />Thoughtful systems.</h1>
        <p>
          Neon Cartridge Labs is a small software studio building apps, tools,
          and systems with a balance of playful thinking, thoughtful design, and
          AI-enhanced execution.
        </p>
        <div className="hero-actions" aria-label="Hero actions">
          <a className="button button--primary" href="#contact">
            Follow the build <ArrowRight size={18} />
          </a>
          <a className="button button--secondary" href="mailto:hello@neoncartridgelabs.com">
            Contact the lab <ArrowRight size={18} />
          </a>
        </div>
        <div className="micro-line">
          <Sparkles size={16} />
          <span>Software. Systems. Play.</span>
        </div>
      </div>
      <HeroVisual />
      <div className="hero-cue" aria-hidden="true">
        <ChevronDown size={24} strokeWidth={1.8} />
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section className="section-shell section-block" id="work">
      <div className="section-heading">
        <PixelSpark />
        <p>What we’re building</p>
        <h2>Tools, systems, and experiments.</h2>
      </div>
      <div className="build-grid">
        {buildCards.map((card) => (
          <article className="build-card" key={card.title}>
            <img className="icon-tile" src={card.icon} alt="" aria-hidden="true" />
            <h3>{card.title}</h3>
            <span className="lime-rule" />
            <p>{card.text}</p>
            <ArrowRight className="card-arrow" size={20} />
          </article>
        ))}
      </div>
    </section>
  );
}

function BuildShipImprove() {
  return (
    <section className="section-shell approach" id="studio">
      <div className="section-heading section-heading--small">
        <p>Our approach</p>
        <h2>Build. Ship. Improve.</h2>
      </div>
      <div className="timeline">
        {steps.map((step) => (
          <article className="step" key={step.title}>
            <span className="step-number">{step.number}</span>
            <img className="step-icon" src={step.icon} alt="" aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LabStatus() {
  return (
    <section className="section-shell lab-status">
      <div className="lab-copy">
        <p className="label">Lab status</p>
        <h2>The lab is active. The first products are forming.</h2>
        <p>
          We’re currently shaping our first wave of apps, tools, and experiments.
          This page will evolve as the studio grows, products launch, and our work
          becomes ready to share.
        </p>
      </div>
      <div className="status-panel" aria-label="Lab status">
        {statusItems.map(([name, state, tone]) => (
          <div className="status-row" key={name}>
            <span className="status-icon"><Layers3 size={19} /></span>
            <span>{name}</span>
            <strong className={`state state--${tone}`}>{state}</strong>
          </div>
        ))}
        <PixelSpark className="status-spark" />
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer className="contact-footer" id="contact">
      <section className="section-shell contact-section">
        <div>
          <h2>Want to build something thoughtful?</h2>
          <span className="lime-rule" />
          <p>We’re open to conversations, collaborations, and early product ideas.</p>
          <a className="button button--primary" href="mailto:hello@neoncartridgelabs.com">
            Contact Neon Cartridge Labs <ArrowRight size={18} />
          </a>
        </div>
        <div className="contact-visual">
          <img className="lab-mascot" src={footerMascot} alt="" aria-hidden="true" />
          <img className="footer-flask" src={footerFlask} alt="" aria-hidden="true" />
          <PixelSpark className="footer-spark" />
          <img className="footer-circuit" src={techCircuitLines} alt="" aria-hidden="true" />
        </div>
      </section>

      <div className="footer-bar">
        <div className="footer-brand">
          <LogoMark compact />
          <div className="footer-copy">
            <strong>Neon Cartridge Labs</strong>
            <span>Playful products. Thoughtful systems.</span>
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#work">Work in progress</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="https://neoncartridgelabs.com">neoncartridgelabs.com</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeBuild />
        <BuildShipImprove />
        <LabStatus />
      </main>
      <ContactFooter />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
