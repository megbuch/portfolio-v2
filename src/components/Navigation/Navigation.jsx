import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 800) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {/* desktop navigation */}

      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-link">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-link">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar-link">
          <Link to="/contact">Contact</Link>
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
