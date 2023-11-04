"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "@/styles/layout/carousel.module.scss";

export const Teamcarousel = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true,
  };
  return (
    <div className="main_content">
      <div className="container overflow-hidden">
        <Slider id="home_slider" {...settings} className="home_slider">
          <div className={style.slick_slide}>
            <div>
              <img src="/images/team-pic.png" alt="" />
            </div>
          </div>
          <div className={style.slick_slide}>
            <div>
              <img src="/images/team-pic.png" alt="" />
            </div>
          </div>
          <div className={style.slick_slide}>
            <div className="team-pic">
              <img src="/images/team-pic.png" alt="" />
            </div>
          </div>
          <div className={style.slick_slide}>
            <div className="team-pic">
              <img src="/images/team-pic.png" alt="" />
            </div>
          </div>
          <div className={style.slick_slide}>
            <div className="team-pic">
              <img src="/images/team-pic.png" alt="" />
            </div>
          </div>
          <div className={style.slick_slide}>
            <div className="team-pic">
              <img src="/images/team-pic.png" alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
