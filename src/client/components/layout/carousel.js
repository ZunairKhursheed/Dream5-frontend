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
    // centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };
  return (
    <div className="main_content">
      <div className="container overflow-hidden">
        <Slider {...settings} id="home_slider">
          <div>
            <img src="/images/team-pic.png" className="c-img" alt="" />
          </div>

          <div>
            <img src="/images/team-pic.png" className="c-img" alt="" />
          </div>

          <div className="team-pic">
            <img src="/images/team-pic.png" className="c-img" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
