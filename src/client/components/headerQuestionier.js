import React from "react";
import style from "@/styles/pages/questionier.scss"









export const HeaderQuestionier = () => {
  return (
    
  
    <header className="header">
      <div
        className="header_top container d-flex justify-content-between px-3 py-3"
      >
        <div className="arrow-back"><i className="fa-solid fa-left-long"></i></div>
        <div className="header-content text-center">
          <p className="teams m-0">IND vs AUS</p>
          <p className="time-left">
            <span className="hour">23</span>h:<span className="mins">34</span>m left
          </p>
          <div className="questions d-flex align-items-center">
            <div className="question-no">
              <p className="question-digit m-0">1/5</p>
            </div>
            <p className="who-will-win m-0">Who will Win Mach</p>
          </div>
        </div>
        <div className="cross-cancel"><i className="fa-solid fa-xmark"></i></div>
      </div>
    </header>



    

  );
};