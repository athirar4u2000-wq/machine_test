import React from "react";
import "../App.css";

/**
 * VSRP-style Hero Section
 * Recreated from the Figma prototype.
 */

const heroBg =
  "https://images.unsplash.com/photo-1516617442634-75371039cb3a?q=80&w=1600&auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="vsrp-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="vsrp-hero__overlay" />

      <header className="vsrp-nav">
        <a className="vsrp-logo" href="/">
          <span className="vsrp-logo__mark">V</span>
          <span className="vsrp-logo__text">
            VSRP
            <small>Engineered Rubber</small>
          </span>
        </a>

        <nav className="vsrp-nav__links">
          <a href="#about">About</a>
          <a href="#industries" className="vsrp-nav__dropdown">
            Industries <span className="vsrp-caret">▾</span>
          </a>
          <a href="#products">Products</a>
          <a href="#projects">Projects</a>
          <a href="#insights">Insights</a>
        </nav>

        <a className="vsrp-contact-btn" href="#contact">
          Contact <span className="vsrp-contact-btn__arrow">→</span>
        </a>
      </header>

      <div className="vsrp-hero__content">
        <h1 className="vsrp-headline">
          <span className="vsrp-headline__line vsrp-headline__line--top">
            Custom Rubber Solutions<span className="vsrp-dot">.</span>
          </span>
          <span className="vsrp-headline__line vsrp-headline__line--bottom">
            Engineered To Perform<span className="vsrp-dot">.</span>
          </span>
        </h1>

        <div className="vsrp-hero__footer">
          <p className="vsrp-copy">
            For more than 20 years, we've helped Australian businesses solve
            problems with engineered rubber solutions. From design and
            tooling to manufacturing and delivery, we make what you need,
            when you need it.
          </p>

          <div className="vsrp-ctas">
            <a className="vsrp-cta-primary" href="#contact">
              Discuss Your Project
              <span className="vsrp-cta-primary__arrow">→</span>
            </a>
            <a className="vsrp-cta-secondary" href="#about">
              See What We Do <span>→</span>
            </a>
          </div>
        </div>

        <button
          className="vsrp-scroll"
          type="button"
          aria-label="Scroll down to content"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span className="vsrp-scroll__circle">⌄</span>
          Scroll Down
        </button>
      </div>
    </section>
  );
}
