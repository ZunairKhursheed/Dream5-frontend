import React from "react";

import style from "@/styles/pages/results.scss"









export const Pick = () => {
  return (
    <div className="container">
    <div className="pick-main mb-3">
      <div className="pick-header">
        <p className="pick-header-text mb-0">Username P1</p>
      </div>
      <div className="short-summery-conainer py-2">
        <div className="winner-announcement d-flex justify-content-center align-items-center mx-4">
          <p className="winner-label">Match Winner:</p>
          <img src="../Images/india.png" alt="" />
          <p className="winning-team">INDIA</p>
        </div>
        <div className="short-summary d-flex justify-content-center">
          <div className="top-batsmen-contianer">
            <p className="top-scrorer-label text-center py-2">Top Runs Scorer</p>
            <div className="top-scorer d-flex">
              <div className="batsman">
                <img src="../Images/rohit-removebg-preview.png" alt="" />
                <div className="batsman-name">R. Sharma</div>
              </div>
              <div className="batsman">
                <img src="../Images/rohit-removebg-preview.png" alt="" />
                <div className="batsman-name">V. Kohli</div>
              </div>
            </div>
          </div>
          <div className="vertical-line mt-4"></div>
          <div className="top-bowlers-container">
            <p className="top-bowler-label text-center py-2">Top Wickets taker</p>
            <div className="top-bowler d-flex">
              <div className="bowler">
                <img src="../Images/rohit-removebg-preview.png" alt="" />
                <div className="bowler-name">R. Sharma</div>
              </div>
              <div className="bowler">
                <img src="../Images/rohit-removebg-preview.png" alt="" />
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