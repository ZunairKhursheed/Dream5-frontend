import React from "react";
import style from "@/styles/pages/questionier.scss"









export const QuestionierCards = () => {
  return (
    
    <div className="container pt-150">
    <div
      className="country-card d-flex align-items-center justify-content-center p-2 "
    >
      <div className="flag-img col-3">
        <img src="/images/india.png" alt="" />
      </div>
      <div className="player-details col-9 px-3">
        <p className="player-name mb-0">INDIA</p>
        <div className="performance d-flex align-items-center">
          <div className="p-icon">
            <i className="fa-solid fa-user-group fa-flip-horizontal"></i>
          </div>
          <div className="score-percentange px-1">5%</div>
          <div className="performance-bar">
            <div className="progress-movement"></div>
          </div>
        </div>
      </div>
    </div>
    {/* <div
      className="country-card d-flex align-items-center justify-content-center p-2"
    >
      <div className="flag-img col-3">
        <img src="/images/austrailia.png" alt="" />
      </div>
      <div className="player-details col-9 px-3">
        <p className="player-name mb-0">AUSTRAILIA</p>
        <div className="performance d-flex align-items-center">
          <div className="p-icon">
            <i className="fa-solid fa-user-group fa-flip-horizontal"></i>
          </div>
          <div className="score-percentange px-1">5%</div>
          <div className="performance-bar">
            <div className="progress-movement"></div>
          </div>
        </div>
      </div>
    </div> */}
  </div>




    

  );
};