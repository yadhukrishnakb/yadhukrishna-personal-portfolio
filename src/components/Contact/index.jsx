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

      <div className="contact-buttons">
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

          <span className="contact-arrow" aria-hidden="true"></span>
        </a>

        <a
          href="https://wa.me/+918921198981?text=Hi%20Yadhu%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-email"
        >
          <img
            src="/icons/whatsapp.png"
            alt="WhatsApp"
            className="contact-gmail-icon"
          />

          <span>Chat on WhatsApp</span>

          <span className="contact-arrow" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
