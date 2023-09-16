import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";

function Navbar() {
  // Adding the states
  const [isActive, setIsActive] = useState(false);

  // Add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };



  return (
    <nav className={`${styles.navbar}`}>
      {/* logo */}
      <Link to="#home" className={`${styles.logo}`}>
        <DiCssdeck size="3rem" />
        <span> Taimoor Nasir</span>
      </Link>

      <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
        <li>
          <a href="#about" className={`${styles.navLink}`}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" className={`${styles.navLink}`}>
            Experience
          </a>
        </li>
        <li>
          <a href="#education" className={`${styles.navLink}`}>
            Education
          </a>
        </li>
        <li>
          <a href="#contact" className={`${styles.navLink}`}>
            Contact
          </a>
        </li>
      </ul>

      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
        onClick={toggleActiveClass}
      >
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>
      <Link
        to="https://www.linkedin.com/in/taimoor-nasir-a74394255/"
  
        className={`${styles.btn} ${isActive ? styles.active : ""}`}
      >
        Linkedin Profile
      </Link>
    </nav>
  );
}

export default Navbar;
