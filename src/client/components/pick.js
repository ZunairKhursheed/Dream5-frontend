import React from "react";

import style from "@/styles/pages/results.scss";
import Link from "next/link";

export const Pick = () => {
  return (
    <div className="container">
      <div className="pick-main my-3">
        <div className="pick-header d-flex justify-content-between">
          <p className="pick-header-text mb-0">Username P1</p>
          <div className="d-flex gap-2">
            <Link
              href={"/questionier"}
              className="pick-header-text mb-0 text-white pe-2"
            >
              EDIT
            </Link>
            <Link
              href={"/questionier"}
              className="pick-header-text mb-0 text-white pe-2"
            >
              EDIT
            </Link>
          </div>
        </div>
        <div className="short-summery-conainer py-2">
          <div className="winner-announcement d-flex justify-content-center align-items-center mx-4">
            <p className="winner-label">Match Winner:</p>
            <img src="/images/india.png" alt="" />
            <p className="winning-team">INDIA</p>
          </div>
          <div className="short-summary d-flex justify-content-center">
            <div className="top-batsmen-contianer">
              <p className="top-scrorer-label text-center py-2">
                Top Runs Scorer
              </p>
              <div className="top-scorer d-flex">
                <div className="batsman">
                  <img src="/images/rohit-removebg-preview.png" alt="" />
                  <div className="batsman-name">R. Sharma</div>
                </div>
                <div className="batsman">
                  <img src="/images/rohit-removebg-preview.png" alt="" />
                  <div className="batsman-name">V. Kohli</div>
                </div>
              </div>
            </div>
            <div className="vertical-line mt-4"></div>
            <div className="top-bowlers-container">
              <p className="top-bowler-label text-center py-2">
                Top Wickets taker
              </p>
              <div className="top-bowler d-flex">
                <div className="bowler">
                  <img src="/images/rohit-removebg-preview.png" alt="" />
                  <div className="bowler-name">R. Sharma</div>
                </div>
                <div className="bowler">
                  <img src="/images/rohit-removebg-preview.png" alt="" />
                  <div className="bowler-name">V. Kohli</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
