import React from "react";

import style from "@/styles/vscard.scss"


export const Vscard = () => {
  return (
    <div className="container">
      <div className="match-card">
        <p className="match-card-heading">
          9th ODI, Rajhib Ghandi Stadium, Hyderabad, India
        </p>
        <div className="vs d-flex justify-content-between align-items-center">
          <div className="team">
            <img src="/images/india.png" alt="" />
            <p className="card-team-name">India</p>
          </div>
          <div className="time">
            <p className="start-in">Starts in</p>
            <p className="time-left">
              <span className="hour">02</span>h:<span className="mins">02</span>m
            </p>
          </div>
          <div className="team">
            <img src="/images/Afghanistan.png" alt="" />
            <p className="card-team-name">Afghanistan</p>
          </div>
        </div>
        <div className="add">
          <div className="d-flex flex-row align-items-center">
            <div className="col">
              <p className="add-txt win">Win Guaranteed</p>
            </div>
            <div className="col-1">
              <img className="add-img" src="/images/Iphone15.png" alt="" />
            </div>
            <div className="col">
              <p className="add-txt cash">+ Cash for Free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    



    
  
  );
};