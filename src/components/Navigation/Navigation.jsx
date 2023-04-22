import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHamburgerClick = function () {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const handleMobileMenuClick = function () {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* desktop navigation */}
      <nav className="navbar-ctr">
        <a className="logo" href="/">
          MB
        </a>
        <ul className="navbar-links">
          <li className="navbar-link">
            <a href="#top">Home</a>
          </li>
          <li className="navbar-link">
            <a href="#about">About</a>
          </li>
          <li className="navbar-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* hamburger */}
        <div className="hamburger-ctr" onClick={handleHamburgerClick}>
          {isMobileMenuOpen ? (
            <FaTimes className="hamburger-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        </div>
      </nav>
      {/* mobile navigation */}
      <ul className={isMobileMenuOpen ? "mobile-links open" : "mobile-links"}>
        <li className="mobile-link">
          <a href="#top" onClick={handleMobileMenuClick}>
            Home
          </a>
        </li>
        <li className="mobile-link">
          <a href="#about" onClick={handleMobileMenuClick}>
            About
          </a>
        </li>
        <li className="mobile-link">
          <a href="#projects" onClick={handleMobileMenuClick}>
            Projects
          </a>
        </li>
        <li className="mobile-link">
          <a href="#contact" onClick={handleMobileMenuClick}>
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
