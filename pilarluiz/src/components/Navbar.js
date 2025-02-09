import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Prevents button from showing up every time screen refreshes.
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Pilar Luiz
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon
              icon={click ? faTimes : faBars}
              className={click ? "fa-times" : "fa-bars"}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item nav-page">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item nav-page">
              <Link
                to="/updated-home"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                UpdatedHome
              </Link>
            </li>
            <li className="nav-item nav-page">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            <li className="nav-item nav-icon">
              <Link
                to="https://www.linkedin.com/in/pilarluiz/"
                target="_blank"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
              </Link>
            </li>
            <li className="nav-item nav-icon">
              <Link
                to="https://github.com/pilarluiz"
                target="_blank"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faGithub} className="fa-icon" />
              </Link>
            </li>
            <li className="nav-item nav-icon">
              <Link
                to="https://www.instagram.com/pilarsprojectcar/"
                target="_blank"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
              </Link>
            </li>
            <li className="nav-item nav-icon">
              <Link
                to="https://www.tiktok.com/@pilarsprojectcar"
                target="_blank"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faTiktok} className="fa-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
