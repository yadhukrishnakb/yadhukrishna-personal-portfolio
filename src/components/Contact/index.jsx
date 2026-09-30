import "./index.css";

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact-content">
      <p className="section-label">GET IN TOUCH</p>

      <h2>Have a project in mind?</h2>

      <p className="contact-description">
        I&apos;m always open to discussing new projects, ideas, or
        opportunities.
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=yadhukrishnakb50@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-email"
      >
        <img
          src="/icons/gmail-logo-24px.png"
          alt="Gmail"
          className="contact-gmail-icon"
        />

        <span>Send an Email</span>

        <span className="contact-arrow">↗</span>
      </a>
    </div>
  </section>
);

export default Contact;
