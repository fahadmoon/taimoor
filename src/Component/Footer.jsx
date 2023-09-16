import React from "react";
import Styles from "./Footer.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";



function Footer() {
  return (
    <footer  className={` pt-5 ${Styles.footer}`}>
        <h4 className=" text-center" style={{ color: "#1f1f38" }}>
          Taimoor Nasir
        </h4>
        <ul className={`pt-4 ${Styles.ul}`}>
          <li>
            <a href="#home" className={`${Styles.li}`}>
              Home
            </a>
          </li>
          <li className={`${Styles.li}`}>
            <a href="#about" className={`${Styles.li}`}>
              About{" "}
            </a>{" "}
          </li>
          <li className={`${Styles.li}`}>
            <a href="#experience" className={`${Styles.li}`}>
              Experience
            </a>{" "}
          </li>
          <li className={`${Styles.li}`}>
            <a href="#education" className={`${Styles.li}`}>
              Education
            </a>
          </li>
          <li className={`${Styles.li}`}>
            <a href="#contact" className={`${Styles.li}`}>
              Contact
            </a>{" "}
          </li>
        </ul>

        <div className="d-flex justify-content-center mt-5 mb-5" style={{gap:'5px'}}>
          <a className={`${Styles.link}`}
            href="https://www.linkedin.com/in/taimoornasir/"
            target="_black"
          ><FaLinkedinIn /></a>
           <a className={`${Styles.link}`}
            href="https://linktr.ee/taimoor.nasir"
            target="_black"
          ><SiLinktree /></a>
        </div>
        <p
          className="mt-5 d-flex justify-content-center pb-5"
          style={{ fontSize: "0.8rem" }}
        >
          © Created By Taimoor Nasir. All rights reserved.
        </p>
    </footer>
  );
}

export default Footer;
