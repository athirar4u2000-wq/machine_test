import "../App.css";

/**
 * VSRP-style Stats / Intro Section
 * Recreated from the design screenshot.
 */

const stats = [
  { value: "20", suffix: "+", label: "Years of experience" },
  { value: "122K", suffix: "+", label: "Ventilation tube joins" },
  { value: "5M", suffix: "+", label: "Rubber seals supplied" },
  { value: "450K", suffix: "+", label: "Traffic light seals" },
];

export default function Stats() {
  return (
    <section className="vsrp-stats" id="about">
      <div className="vsrp-stats__stripes" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="vsrp-stats__col">
        <h2 className="vsrp-stats__heading">
          Wherever Precision Is Needed,{" "}
          <span className="vsrp-accent">VSRP Delivers.</span>
        </h2>

        <div className="vsrp-stats__grid">
          {stats.map((s) => (
            <div className="vsrp-stat" key={s.label}>
              <p className="vsrp-stat__value">
                {s.value}
                <span className="vsrp-accent">{s.suffix}</span>
              </p>
              <p className="vsrp-stat__label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="vsrp-stats__col vsrp-stats__col--right">
        <h3 className="vsrp-stats__subheading">
          We're engineers, manufacturers and problem-solvers.
        </h3>

        <p className="vsrp-stats__copy">
          Whether you need a custom seal, a specialised extrusion, a bonded
          rubber component or a completely new product, we'll work with you
          to find the right solution.
        </p>
        <p className="vsrp-stats__copy">
          We've been doing it for more than two decades, helping businesses
          across Australia keep projects moving.
        </p>

        <a className="vsrp-cta-primary vsrp-cta-primary--light" href="#contact">
          About VSRP
          <span className="vsrp-cta-primary__arrow">→</span>
        </a>
      </div>
    </section>
  );
}