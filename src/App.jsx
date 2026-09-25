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
];

const INSIGHTS = [
  { title: "Recycled Rubber, Reduced Waste", copy: "How reclaimed compounds are changing manufacturing." },
  { title: "Inside Our Manufacturing Floor", copy: "A look at how raw rubber becomes finished product." },
  { title: "Choosing The Right Seal Profile", copy: "What to consider before you specify a seal." },
];

const STATS = [
  { value: "20+", label: "Years of experience" },
  { value: "122K+", label: "Ventilation tube joins" },
  { value: "5M+", label: "Rubber seals supplied" },
  { value: "450K+", label: "Traffic light seals" },
];

function Logo({ light = true }) {
  return (
    <div className="logo">
      <svg viewBox="0 0 40 40" style={{ width: 32, height: 32, flexShrink: 0 }}>
        <path d="M2 6 L14 6 L20 30 L26 6 L38 6 L24 36 L16 36 Z" fill="#e8531f" />
      </svg>
      <div className="logo-text" style={light ? undefined : { color: "#141414" }}>
        VSRP
        <small>ENGINEERED RUBBER</small>
      </div>
    </div>
  );
}

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
        <div className="wrap header-inner">
          <Logo />
          <nav className="nav">
            <div className="nav-links">
              {["About", "Industries", "Products", "Projects", "Insights"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`}>
                  {l}
                </a>
              ))}
            </div>
            <ArrowButton variant="solid" href="#contact">CONTACT</ArrowButton>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <Placeholder />
        <div className="wrap hero-inner" style={{ width: "100%" }}>
          <h1>
            Custom Rubber Solutions.
            <br />
            Engineered To <span className="accent">Perform.</span>
          </h1>
          <div className="hero-lede">
            <p>
              For more than 20 years, we've helped Australian businesses solve problems with engineered rubber
              solutions. From design and tooling to manufacturing and delivery, we make what you need, when you need
              it.
            </p>
            <div className="hero-ctas">
              <ArrowButton variant="solid" href="#contact">DISCUSS YOUR PROJECT</ArrowButton>
              <a href="#about" className="text-link">
                SEE WHAT WE DO →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / About */}
      <section className="wrap split" id="about">
        <div>
          <h2>
            Wherever Precision Is Needed, <span className="accent">VSRP Delivers.</span>
          </h2>
          <div className="stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat">
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="split-right">
          <h3>We're engineers, manufacturers and problem-solvers.</h3>
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
      </section>

      {/* Mid CTA */}
      <section className="midcta">
        <h2>
          What Can We Help You <span className="accent">Build?</span>
        </h2>
        <p>
          We work with you to design, engineer and manufacture rubber solutions that meet your exact requirements.
        </p>
        <svg viewBox="0 0 40 40" className="vmark">
          <path d="M2 6 L14 6 L20 30 L26 6 L38 6 L24 36 L16 36 Z" fill="#fff" />
        </svg>
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
        <div className="section-head">
          <h2>
            Wherever Precision Is Needed, <span className="accent">VSRP Delivers.</span>
          </h2>
          <ArrowButton variant="light" href="#projects">VIEW ALL PROJECTS</ArrowButton>
        </div>
        <div className="proj-grid">
          {["MINING", "CONVEYOR SYSTEM"].map((active) => (
            <div key={active}>
              <div className="proj-img">
                <Placeholder />
                <a href="#projects" className="proj-view">VIEW PROJECT</a>
                <div className="proj-tabs">
                  {["MINING", "EPDM", "EXTRUSION", "CONVEYOR SYSTEM"].map((tag) => (
                    <span
                      key={tag}
                      className={`proj-tag ${tag === active ? "on" : ""}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="proj-cap">
                <h3>Custom Extrusion Solution</h3>
                <p>
                  A specialised rubber extrusion profile engineered to meet strict performance and dimensional
                  requirements.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap section">
        <div className="faq-wrap">
          <div className="faq-intro">
            <h2>
              Frequently Asked <span className="accent">Questions</span>
            </h2>
            <p>
              We've heard it all. Here's everything you need to know before working with us.
            </p>
            <ArrowButton variant="solid" href="#contact">ASK A QUESTION</ArrowButton>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <div key={f.q} className="qa">
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
        <div className="section-head">
          <h2>
            Industry <span className="accent">Insights</span>
          </h2>
          <ArrowButton variant="light" href="#insights">VIEW ALL INSIGHTS</ArrowButton>
        </div>
        <div className="ins-grid">
          {INSIGHTS.map((ins) => (
            <div key={ins.title}>
              <div className="ins-img">
                <Placeholder />
              </div>
              <div className="ins-cap">
                <h3>{ins.title}</h3>
                <p>{ins.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom banner */}
      <section className="banner" style={{ minHeight: "52vh", textAlign: "left" }} id="contact">
        <Placeholder style={{ opacity: 0.7 }} />
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
        <div className="wrap foot-top">
          <div className="foot-about">
            <Logo />
            <p>
              For over 20 years, VSRP has delivered engineered rubber solutions built around the unique requirements
              of Australian businesses.
            </p>
            <div className="social">
              {["◎", "f", "in", "x"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h4>COMPANY</h4>
            {["About", "Case Studies", "Blogs", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}>
                {l}
              </a>
            ))}
          </div>
          <div>
            <h4>INDUSTRIES</h4>
            {INDUSTRIES.map((l) => (
              <a key={l} href="#industries">
                {l}
              </a>
            ))}
          </div>
          <div>
            <h4>CONTACT</h4>
            <a href="tel:1800787777">1800 787 777</a>
            <a href="mailto:enquiries@vsrp.com.au">enquiries@vsrp.com.au</a>
            <h4 style={{ marginTop: 20 }}>LOCATION</h4>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              Unit 3, 10 Banksia Place, South Windsor NSW 2756
            </a>
          </div>
        </div>
        <div className="wrap foot-bottom">
          <span>COPYRIGHT © 2026 VSRP</span>
          <span>PRIVACY POLICY · ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </div>
  );
}