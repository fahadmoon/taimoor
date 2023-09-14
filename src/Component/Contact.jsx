import React from "react";
import Styles from "./Contact.module.css";
import { SiLinktree } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className={`${Styles.contact}`}>
      <div className="container">
        <h2
          className="mt-5 text-center text-white mb-5 pt-5 pb-3"
          style={{ fontWeight: "500", fontFamily: "Poppins" }}
        >
          Contact Me
        </h2>
        <div className={` mb-5 ${Styles.row}`}>
          <div className={`${Styles.cardPart}`}>
            <SiLinktree />
            <p className="text-center mt-3">Linktree</p>
            <span className="text-muted text-center mt-0">https://linktr.ee/taimoor.nasir</span>
            <a
              href="https://linktr.ee/taimoor.nasir"
              className={`${Styles.btn}`}
              target="_black"
            >
              Checkout
            </a>
          </div>

          <div className={`${Styles.cardPart}`}>
            <FaLinkedinIn />
            <p className="text-center mt-3">Linkedin</p>
            <span className="text-muted text-center mt-0">https://bit.ly/3Pddv2Y</span>
            <a
              href="https://www.linkedin.com/in/taimoor-nasir-a74394255/"
              className={`${Styles.btn}`}
              target="_black"
            >
              Send Message
            </a>
          </div>

          <div className={`${Styles.cardPart}`}>
            <AiOutlineMail />
            <p className="text-center mt-3">Email</p>
            <span className="text-muted text-center mt-0">taimoornasir11@gmail.com</span>
            <a
              href="mailto:taimoornasir11@gmail.com"
              className={`${Styles.btn}`}
              target="_black"
            >
              Send Message
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
