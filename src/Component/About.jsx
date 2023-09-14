import React from "react";
import styles from "./About.module.css";
import { AiFillProject } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';


function About() {

  return (
    <section id='about' className={`${styles.AboutMain}`}>
      <div className="container pt-3">
        <p className="text-center">Get to know</p>
        <h1 className="text-center">About Me</h1>
        <br />
        <div className="row ">
          <div className="col-md-6">
            <div className={`${styles.img}`}>
              <img
                src="./taimoor.jpg"
                alt=""
                style={{ width: "380px"}}
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* text part */}
          <div className="col-md-6">
            <div className="row d-flex">
              <div className="col-lg-6 justify-content-center mb-3">
                <div className="d-flex flex-column align-items-center">
                  <div className={`${styles.cardPart}`}>
                    <BiMedal />
                    <p className="text-center mt-3">Experience</p>
                    <p className="text-muted text-center">3+ years</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <div className={`${styles.cardPart}`}>
                    <AiFillProject />
                    <p className="text-center mt-3">Projects</p>
                    <p className="text-muted text-center">10+ Completed Projects
</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-4" style={{ backgroundColor: "transparent" }}>
              <p className="p-2">
                Enthusiastic and committed computer science student with a
                fervent drive for software engineering. Possessing a robust
                academic foundation and a genuine zeal for tackling challenges
                head-on. I excel in various programming languages, including
                Java, Python, and C++, and I'm eager to channel my proficiency
                and insights into a dynamic software firm as an entry-level
                professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
