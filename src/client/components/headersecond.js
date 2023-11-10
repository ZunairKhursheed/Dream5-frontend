import React from "react";
// import style from "@/styles/pages/results.scss"

export const HeaderSecond = ({ children }) => {
  return (
    <header className="header">
      <div className="header_top container d-flex justify-content-between px-3 py-3">
        <div className="arrow-back">
          <i className="fa-solid fa-left-long"></i>
        </div>
        <div className="header-content text-center">
          <p className="teams m-0">IND vs AUS</p>
          <p className="time-left mb-0">
            <span className="hour">23</span>h:<span className="mins">34</span>m
            left
          </p>
        </div>
        <div className="cross-cancel">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      {children}
    </header>
  );
};
