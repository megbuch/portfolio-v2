import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from "../../assets/documents/resume.pdf";
import "./Navigation.css";

library.add(faLightbulb, faMoon);

export default function Nav({ toggleTheme, theme }) {
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
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="navbar-link">
          <a
            href={resume}
            rel="noreferrer"
            target="_blank"
            title="View my Resume"
            aria-label="View my Resume"
          >
            Resume
          </a>
        </li>
        <button className="toggle-button" onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === "" ? faMoon : faLightbulb} />
        </button>
      </ul>
      <div className="hamburger-ctr" onClick={handleHamburgerClick}>
        {isMobileMenuOpen ? (
          <FaTimes className="hamburger-icon" aria-label="Close Mobile Nav" />
        ) : (
          <FaBars className="hamburger-icon" aria-label="Open Mobile Nav" />
        )}
      </div>
      <ul className={isMobileMenuOpen ? "mobile-links open" : "mobile-links"}>
        <li>
          <button
            className="toggle-button"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            <FontAwesomeIcon icon={theme === "" ? faMoon : faLightbulb} />
          </button>
        </li>
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
          <Link to="/portfolio" onClick={handleMobileMenuClick}>
            Portfolio
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
