import "./index.css";

const Hero = () => (
  <section className="hero">
    <div className="hero-container">
      <p className="hero-label">FULL STACK DEVELOPER</p>

      <h1>
        Building digital
        <br />
        experiences that matter.
      </h1>

      <p className="hero-description">
        I build modern, responsive and user-focused web applications with clean
        design and solid engineering.
      </p>

      <div className="hero-actions">
        <a href="#work" className="hero-primary">
          View My Work
          <span className="hero-arrow" aria-hidden="true"></span>
        </a>

        <a href="#contact" className="hero-secondary">
          Contact Me
          <span className="hero-arrow" aria-hidden="true"></span>
        </a>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-scroll-arrow">↓</span>
      </div>
    </div>
  </section>
);

export default Hero;
