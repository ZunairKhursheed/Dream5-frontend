import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import style from "@/styles/layout/carousel.module.scss"




export const Teamcarousel = () => {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (

    <div className="main_content">
    <div className="container overflow-hidden">
      <Slider {...settings} id="home_slider">
            <div className={style.slick_slide}>
             <div>
                <img src="../Images/team-pic.png" alt="" />
              </div>
            </div>
            <div className={style.slick_slide}>
              <div>
                <img src="../Images/team-pic.png" alt="" />
              </div>
            </div>
            <div className={style.slick_slide}>
              <div className="team-pic">
                <img src="../Images/team-pic.png" alt="" />
              </div>
            </div>
      </Slider>
    </div>
  </div>



    
  
  );
};