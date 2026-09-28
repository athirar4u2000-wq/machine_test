import { useState } from "react";
import "./App.css";

const INDUSTRIES = ["Agriculture & Irrigation", "Mining", "Defence", "Road Transport"];

const PROCESS_STEPS = [
  { num: "01", title: "Tell Us What You Need", copy: "Send us a drawing, sample or specification." },
  { num: "02", title: "We'll Engineer The Solution", copy: "Our team designs and prototypes to your exact spec." },
  { num: "03", title: "We Manufacture With Precision", copy: "Produced in-house under strict quality control." },
  { num: "04", title: "We Deliver, On Time", copy: "Reliable delivery so your project keeps moving." },
];

const FAQS = [
  {
    q: "What type of rubber should I use?",
    a: "At VSRP, we know rubber. Across any application, our experts are well equipped to advise on the best make and material for your rubber products. If you need reliable performance, we can show you exactly how to get it. All you need to do is give us a call.",
  },
  {
    q: "What is the hardness scale for rubber?",
    a: "Rubber hardness is measured on the Shore A scale — our team can help you pick the right durometer for your application.",
  },
  {
    q: "What are minimum order quantities?",
    a: "MOQs vary by product and tooling — get in touch and we'll scope it for your project.",
  },
  {
    q: "How can I get a quote?",
    a: "Send us your drawings, specifications, or sample components and our engineering team will provide a comprehensive quotation tailored to your requirements.",
  },
  {
    q: "Which materials types do VSRP offer?",
    a: "We work with a comprehensive range of materials including EPDM, Nitrile (NBR), Neoprene, Silicone, Viton (FKM), Natural Rubber, and specialised custom compounds.",
  },
  {
    q: "Can VSRP source products & materials?",
    a: "Yes, we have established global and domestic supply partners to source specific materials, custom tooling, and specialty rubber products for any industry requirement.",
  },
];

const INSIGHTS = [
  {
    image: "/image/insight-1.png",
    title: "Understanding Rubber Compounds: Choosing The Right Material...",
    width: "413px",
    height: "284px",
    top: "8030px",
    left: "80px",
  },
  {
    image: "/image/insight-2.png",
    title: "Understanding Rubber Compounds: Choosing The Right Material...",
    width: "413px",
    height: "284px",
    top: "8030px",
    left: "513px",
  },
  {
    image: "/image/insight-3.png",
    title: "Understanding Rubber Compounds: Choosing The Right Material...",
    width: "413px",
    height: "284px",
    top: "8030px",
    left: "947px",
  },
];

const STATS = [
  { value: "20", suffix: "+", label: "Years of experience" },
  { value: "122K", suffix: "+", label: "Ventilation tube joins" },
  { value: "5M", suffix: "+", label: "Rubber seals supplied" },
  { value: "450K", suffix: "+", label: "Traffic light seals" },
];


function Placeholder({ className = "", style = {} }) {
  return <div className={`ph ${className}`} style={style} />;
}

function ArrowButton({ children, variant = "solid", className = "", ...props }) {
  return (
    <a className={`btn btn-${variant} ${className}`} {...props}>
      {children}
      <span className="dot">→</span>
    </a>
  );
}

export default function App() {
  const [activeIndustry, setActiveIndustry] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="vsrp">
      {/* Header */}
      <header className="header">
        <img
          src="/images/Navbar.png"
          alt="Navbar"
          className="navbar-img"
          style={{ width: "1280px", height: "59px", top:"35px", left:"80px" }}
        />
      </header>

      {/* Hero */}
      <section className="hero">
        <video
          className="hero-video"
          src="/images/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay" />
        <div className="wrap hero-inner">
          <div className="hero-grid">
            <div className="hero-col-left">
              <h1 className="hero-title">
                Custom Rubber<br />
                Solutions<span className="hero-dot">.</span>
              </h1>
              <p className="hero-desc">
                For more than 20 years, we've helped Australian businesses solve problems with engineered rubber
                solutions. From design and tooling to manufacturing and delivery, we make what you need, when you need
                it.
              </p>
              <a href="#about" className="hero-scroll">
                <span className="hero-scroll-circle">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                </span>
                <span className="hero-scroll-text">SCROLL DOWN</span>
              </a>
            </div>

            <div className="hero-col-right">
              <div className="hero-title hero-title-right">
                Engineered To<br />
                Perform<span className="hero-dot">.</span>
              </div>
              <div className="hero-ctas">
                <ArrowButton variant="dark" href="#contact">DISCUSS YOUR PROJECT</ArrowButton>
                <a href="#about" className="hero-link">
                  <span className="hero-link-text">SEE WHAT WE DO</span>
                  <span className="hero-link-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.5 3.65c-.2 0-.46.07-.7.34-.24.27-.92.9-.92 2.2s.94 2.55 1.07 2.73c.13.18 1.83 2.8 4.45 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.66.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.25-.18-.52-.31s-1.58-.78-1.83-.87c-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.34-1.61-1.5-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.83-1.99-.22-.52-.44-.45-.6-.46l-.51-.01z" />
        </svg>
      </a>

      {/* Stats / About */}
      <section className="about-section" id="about">
        <div className="about-stripes" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="wrap about-wrap">
          <div className="about-left">
            <h2>
              Wherever Precision Is<br />
              Needed, <span className="accent">VSRP Delivers.</span>
            </h2>
            <div className="stats-grid">
              {STATS.map((s) => (
                <div key={s.label} className="stat-card">
                  <b>
                    {s.value}
                    <span className="accent">{s.suffix}</span>
                  </b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-right">
            <h3>
              We're engineers, manufacturers<br />
              and problem-solvers.
            </h3>
            <p>
              Whether you need a custom seal, a specialised extrusion, a bonded rubber component or a completely new
              product, we'll work with you to find the right solution.
            </p>
            <p>
              We've been doing it for more than two decades, helping businesses across Australia keep projects moving.
            </p>
            <ArrowButton variant="light" href="#about">
              ABOUT VSRP
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="midcta">
        <h2>
          What Can We Help You <span className="accent">Build?</span>
        </h2>
        <p>
          We work with you to design, engineer and manufacture rubber solutions that meet your exact requirements.
        </p>
        <div className="vmark-video-container">
          <video
            className="vmark-video"
            src="/images/Rubber.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div>
          <a href="#products" className="midcta-scroll">
            <span className="midcta-scroll-circle">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1L5 5L9 1" />
              </svg>
            </span>
            <span className="midcta-scroll-text">SCROLL DOWN</span>
          </a>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <Placeholder />
        <div className="wrap banner-content">
          <h2>
            Whatever You Need in Rubber, We Can <span className="accent">Shape It.</span>
          </h2>
          <ArrowButton variant="light" href="#products">
            SEE PRODUCT CATEGORIES
          </ArrowButton>
        </div>
      </section>

      {/* Three cards */}
      <section className="wrap section">
        <div className="section-head">
          <h2>
            More Than A <span className="accent">Rubber Company.</span>
          </h2>
          <p>
            We're engineers, problem-solvers and manufacturing partners, helping businesses turn unique requirements
            into reliable, high-performance rubber solutions.
          </p>
        </div>
        <div className="cards3">
          {[
            { icon: "💡", title: "We Engineer Solutions.", copy: "Custom products designed around your exact requirements." },
            { icon: "👥", title: "We Know Rubber.", copy: "Material expertise backed by 20+ years of industry experience." },
            { icon: "✔", title: "We Deliver Confidence.", copy: "Quality, traceability and reliability at every stage." },
          ].map((c) => (
            <div key={c.title} className="card">
              <div className="card-ico">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="wrap section" id="industries">
        <div className="section-head">
          <h2>
            Rubber Solutions Built For <span className="accent">Industry.</span>
          </h2>
          <p>
            From infrastructure and mining to agriculture and transport, we help businesses solve complex challenges
            with engineered rubber solutions.
          </p>
        </div>
        <div className="ind">
          <div className="ind-list">
            <div className="ind-tag">OUR INDUSTRIES</div>
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind}
                type="button"
                onClick={() => setActiveIndustry(i)}
                className={`ind-item ${activeIndustry === i ? "active" : ""}`}
              >
                {ind}
              </button>
            ))}
          </div>
          <div className="ind-img">
            <div className="ind-badge">🚜</div>
            <Placeholder />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process">
        <div className="wrap process-head">
          <h2>
            From Concept to Delivery, We Make it <span className="accent">Happen</span>
          </h2>
          <p>
            A proven process built around collaboration, precision and a commitment to quality at every step.
          </p>
        </div>
        <div className="steps">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.num} className="step">
              {i !== PROCESS_STEPS.length - 1 && <div className="step-line" />}
              <div className="step-num">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="wrap section" id="projects">
        <div className="section-head" style={{ alignItems: "flex-end" }}>
          <h2>
            Wherever Precision Is<br />
            Needed, <span className="accent">VSRP Delivers.</span>
          </h2>
          <ArrowButton variant="light" href="#projects">VIEW ALL PROJECTS</ArrowButton>
        </div>
        <div className="projects-grid-wrap">
          <img
            src="/images/Group 2030.png"
            alt="Projects"
            className="projects-img"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="faq-stripes" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="wrap faq-wrap">
          <div className="faq-intro">
            <h2>
              Frequently Asked<br />
              <span className="accent">Questions</span>
            </h2>
            <p>
              We've heard it all. Here's everything you need to know before working with us.
            </p>
            <ArrowButton variant="solid" href="#contact">ASK A QUESTION</ArrowButton>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={f.q} className={`qa ${openFaq === i ? "qa-open" : ""}`}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="qa-q"
                >
                  {f.q}
                  <span className="qa-sym">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="qa-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="wrap section" id="insights">
        <div className="section-head" style={{ marginBottom: "36px", alignItems: "flex-end" }}>
          <div>
            <h2>
              Industry <span className="accent">Insights</span>
            </h2>
            <p style={{ marginTop: "14px", color: "#6b6b6b", fontSize: "15px", lineHeight: "1.5", maxWidth: "450px" }}>
              Practical advice, material expertise and engineering knowledge to help you make informed decisions
            </p>
          </div>
          <ArrowButton variant="light" href="#insights">VIEW ALL INSIGHTS</ArrowButton>
        </div>
        <div className="ins-grid">
          {INSIGHTS.map((ins, index) => (
            <div key={index} className="ins-card">
              <div className="ins-img">
                <img
                  src={ins.image}
                  alt={ins.title}
                  className={`insight-img-${index + 1}`}
                  style={{
                    width: ins.width,
                    height: ins.height,
                    top: ins.top,
                    left: ins.left,
                  }}
                />
              </div>
              <div className="ins-cap">
                <h3>{ins.title}</h3>
                <a href="#insights" className="ins-link">
                  <span>VIEW DETAIL</span>
                  <span className="ins-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom banner */}
      <section className="banner" style={{ minHeight: "608px", textAlign: "left" }} id="contact">
        <img
          src="/image/furthering quality in our industries.png"
          alt="furthering quality in our industries"
          className="banner-bg-img"
          style={{ width: "1440px", height: "608px", top: "8587px" }}
        />
        <div className="wrap banner-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap", width: "100%" }}>
          <h2 style={{ maxWidth: 520, margin: 0 }}>
            furthering quality in <span className="accent">our industries.</span>
          </h2>
          <div style={{ maxWidth: 380 }}>
            <p style={{ color: "#ddd", fontSize: 15, lineHeight: 1.6 }}>
              Reliable and cost-effective. We support the specific needs of specialised providers, plugging the gaps
              in their projects so they can continue to deliver at the highest level.
            </p>
            <ArrowButton variant="solid" style={{ marginTop: 20 }} href="#contact">
              CONTACT US
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img
          src="/images/Footer.png"
          alt="Footer"
          className="footer-img"
        />
      </footer>
    </div>
  );
}