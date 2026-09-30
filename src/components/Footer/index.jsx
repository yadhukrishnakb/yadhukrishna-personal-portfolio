import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./index.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <a href="/" className="footer-logo">
        YADHU KRISHNA
      </a>

      <div className="footer-links">
        <a
          href="https://github.com/yadhukrishnakb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
          <span>GitHub</span>
          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/yadhukrishna-kb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
          <span>↗</span>
        </a>

        <a
          href="https://www.instagram.com/ig.v3nomop/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
          <span>Instagram</span>
          <span>↗</span>
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Yadhu Krishna</span>
      <span>Built with Next.js</span>
    </div>
  </footer>
);

export default Footer;
