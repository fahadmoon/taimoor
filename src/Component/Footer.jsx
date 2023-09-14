import React from "react";
import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";
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
            <Link to="" className={`${Styles.li}`}>
              Home
            </Link>{" "}
          </li>
          <li className={`${Styles.li}`}>
            <Link to="" className={`${Styles.li}`}>
              About{" "}
            </Link>{" "}
          </li>
          <li className={`${Styles.li}`}>
            <Link to="" className={`${Styles.li}`}>
              Experience
            </Link>{" "}
          </li>
          <li className={`${Styles.li}`}>
            <Link to="" className={`${Styles.li}`}>
              Education
            </Link>{" "}
          </li>
          <li className={`${Styles.li}`}>
            <Link to="" className={`${Styles.li}`}>
              Contact
            </Link>{" "}
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
