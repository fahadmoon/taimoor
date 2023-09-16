import React from "react";
import styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";

function Hero() {
  const roles = [
    "Founder and CFO of NEWAGE ENTERPRISES LLC",
    "Software Engineer",
  ];
  const Span = {
    color: "#007bff",
  };
  return (
    <section className={`${styles.hero}`}>
      <div className="d-flex justify-content-center align-item-center ">
        <div className="mt-5">
          <p className="mt-5 text-center" style={{ fontWeight: "500" }}>
            Hi, I am
          </p>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "2.5rem",
            }}
          >
            Taimoor Nasir
          </h1>
          <p className="mb-4 text-center">
            <span style={Span}>
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-item-center "
        style={{ gap: "10px" }}
      >
        <a
          href="https://www.linkedin.com/in/taimoor-nasir-a74394255/"
          className="mb-5 pb-5"
        >
          <button type="button" className={`${styles.btn}`}>
            Linkedin Profile
          </button>
        </a>
          <a
            href="#contact"
            className="mb-5 pb-5"
          >
            <button type="button" className={`${styles.btn}`}>
              Let's Connect
            </button>
          </a>
        </div>
    </section>
  );
}

export default Hero;
