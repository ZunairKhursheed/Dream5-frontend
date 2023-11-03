import React from "react";

import style from "@/styles/layout/carousel.scss"



export const Teamcarousel = () => {
  return (

    <div className="main_content mt-2">
    <div className="container overflow-hidden">
      <div className="slider" id="home_slider">
        <div className="slick-slide">
          <div className="team-pic">
            <img src="../Images/team-pic.png" alt="" />
          </div>
        </div>
        <div className="slick-slide">
          <div className="team-pic">
            <img src="../Images/team-pic.png" alt="" />
          </div>
        </div>
        <div className="slick-slide">
          <div className="team-pic">
            <img src="../Images/team-pic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>



    
  
  );
};