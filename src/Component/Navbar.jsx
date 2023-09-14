import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { DiCssdeck } from 'react-icons/di';

function Navbar() {
  // Adding the states
  const [isActive, setIsActive] = useState(false);
  const [activeNav, setActiveNav] = useState('#home'); // Initialize activeNav with a default value

  // Add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  // Clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
     <nav className={`${styles.navbar}`} >

      {/* logo */}
      <Link to="#home" className={`${styles.logo}`}>
      <DiCssdeck size="3rem" /> 
       <span> Taimoor Nasir</span>
      </Link>

      <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
        <li onClick={removeActive}>
          <NavLink to="/about" onClick={() => setActiveNav('/about')} className={`${activeNav === '/about' ? 'active' : ''} ${styles.navLink}`} >
            About
          </NavLink>
        </li>
        <li onClick={removeActive}>
          <NavLink to="/experience" onClick={() => setActiveNav('/experience')} className={`${activeNav === '/experience' ? 'active' : ''} ${styles.navLink}`}>
            Experience
          </NavLink>
        </li>
        <li onClick={removeActive}>
          <NavLink to="/education" onClick={() => setActiveNav('/education')} className={`${activeNav === '/education' ? 'active' : ''}  ${styles.navLink}`}>
            Education
          </NavLink>
        </li>
        <li onClick={removeActive}>
          <NavLink to="/contact" onClick={() => setActiveNav('/contact')} className={`${activeNav === '/contact' ? 'active' : ''} ${styles.navLink}`}>
            Contact
          </NavLink>
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
      <Link to="#home" className={`${styles.btn} ${isActive ? styles.active : ""}`}>
        Linkedin Profile
      </Link>

    </nav>
  );
}

export default Navbar;
