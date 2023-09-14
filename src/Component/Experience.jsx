import React from "react";
import Styles from "./Experience.module.css";

function Experience() {
  return (
    <div>
      <h2
        className="mt-5 text-center text-white mb-5 pt-5 pb-3"
        style={{ fontWeight: "500", fontFamily: "Poppins" }}
      >
        Experience
      </h2>
      <div className={`${Styles.timeline}`}>
        <div className={`${Styles.container} ${Styles.left}`}>
          <div className={`${Styles.content}`}>
            <h3>Founder & CFO</h3>
            <h5 className="text-muted">
              Founder and CFO of NEWAGE ENTERPRISES LLC
            </h5>
            <small className="text-muted">Aug 2023 - Present </small>
            <p>
              I proudly founded two successful companies: Newage Enterprise in
              America and Evolve Tech Solution in Pakistan. These
              entrepreneurial endeavors have been driven by my vision and
              commitment to innovation and growth.
            </p>
            <a
              href="http://newagedispatch.com/"
              className={`mt-3 ${Styles.btn}`}
            >
              Company Website
            </a>
          </div>
        </div>

        <div className={`${Styles.container} ${Styles.right}`}>
          <div className={`${Styles.content}`}>
            <h3>Supervisor & Team Manager</h3>
            <h5 className="text-muted">ZAG Communication</h5>
            <small className="text-muted">Dec 2022 - Aug 2023 </small>
            <br />
            <p>
              I established and managed ZAG Communication, a thriving truck
              dispatch company, dedicating one year of diligent leadership to
              its growth and success.
            </p>
          </div>
        </div>

        <div className={`${Styles.container} ${Styles.left}`}>
          <div className={`${Styles.content}`}>
            <h3>Dispatch Manager</h3>
            <h5 className="text-muted">Soulbros LLC</h5>
            <small className="text-muted">Dec 2022 </small>
            <br />
            <p>
              In my career journey, I've served as a Customer Service
              Representative (CSR) for Soulbros Dispatch, accumulating 1 year
              and 6 months of experience. Additionally, I worked as a Front-end
              Dispatcher for 11 months at the same company. I also spent 7
              months at Insurego Inc. and had a 3-month stint as a salesman at
              Cakes & Bakes.
            </p>
          </div>
        </div>

        <div className={`${Styles.container} ${Styles.right}`}>
          <div className={`${Styles.content}`}>
            <h3>Teacher</h3>
            <h5 className="text-muted">QPHS</h5>
            <p>
              I served as a Science and Computer Teacher at QPHS, where I had
              the privilege of imparting knowledge and nurturing young minds in
              these subjects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
