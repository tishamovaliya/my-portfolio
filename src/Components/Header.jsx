import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="Header-container">
      {/* Logo */}
      <div className="logo">
        <a href="#home" onClick={closeMenu}>
          Tisha Movaliya
        </a>
      </div>

      {/* Mobile Toggle */}
      <div
        className={`toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
        aria-label="Toggle Navigation"
      >
        {isOpen ? "✕" : "☰"}
      </div>

      {/* Navigation */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="/Tisha_Movaliya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
            onClick={closeMenu}
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
