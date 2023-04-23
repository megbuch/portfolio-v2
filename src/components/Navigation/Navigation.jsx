import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from "../../assets/documents/resume.pdf";
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
        <li className="navbar-link">
          <a href={resume} rel="noreferrer" target="_blank">
            Resume
          </a>
        </li>
      </ul>
      <div className="hamburger-ctr" onClick={handleHamburgerClick}>
        {isMobileMenuOpen ? (
          <FaTimes className="hamburger-icon" />
        ) : (
          <FaBars className="hamburger-icon" />
        )}
      </div>
      <ul className={isMobileMenuOpen ? "mobile-links open" : "mobile-links"}>
        <li className="mobile-link">
          <Link to="/" onClick={handleMobileMenuClick}>
            Home
          </Link>
        </li>
        <li className="mobile-link">
          <Link to="/about" onClick={handleMobileMenuClick}>
            About
          </Link>
        </li>
        <li className="mobile-link">
          <Link to="/projects" onClick={handleMobileMenuClick}>
            Projects
          </Link>
        </li>
        <li className="mobile-link">
          <Link to="/contact" onClick={handleMobileMenuClick}>
            Contact
          </Link>
        </li>
        <li className="mobile-link">
          <a href={resume} rel="noreferrer" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}
