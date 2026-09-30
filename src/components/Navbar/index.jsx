"use client";

import { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="/" className="navbar-logo">
        YADHU KRISHNA
      </a>

      <nav className="navbar-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#stack">Stack</a>
      </nav>

      <a href="#contact" className="navbar-contact">
        Contact
      </a>

      <div className="navbar-mobile">
        <button
          className="navbar-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#work" onClick={closeMenu}>
              Work
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#stack" onClick={closeMenu}>
              Stack
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
