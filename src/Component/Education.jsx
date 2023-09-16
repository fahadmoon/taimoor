import React from "react";
import Styles from "./Experience.module.css";

function Education() {
  return (
    <div>
      <h2
        className="mt-5 text-center text-white mb-5 pt-5 pb-3"
        style={{ fontWeight: "500", fontFamily: "Poppins" }}
      >
        Education
      </h2>
      <div className={`${Styles.timeline}`}>
        <div className={`${Styles.container} ${Styles.left}`}>
          <div className={`${Styles.content}`}>
            <h3>Bachelor of computer science</h3>
            <h5 className="text-muted">Riphah International University</h5>
            <small className="text-muted">Aug 2020 - Present </small>
            <br />
            <p>
              I earned a Bachelor of Computer Science degree with a major in
              Computer Science and a minor in Web Development, combining a
              strong foundation in computer science with specialized skills in
              web development.
            </p>
          </div>
        </div>

        <div className={`${Styles.container} ${Styles.right}`}>
          <div className={`${Styles.content}`}>
            <h3>FSC (Engineering)</h3>
            <h5 className="text-muted">Punjab Group of Colleges </h5>
            <small className="text-muted">2018 -2020</small>
            <p>
              I completed my intermediate education in the field of Sciences
              with a focus on FSC (Engineering), which provided me with a solid
              academic background in engineering-related subjects.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Education;
