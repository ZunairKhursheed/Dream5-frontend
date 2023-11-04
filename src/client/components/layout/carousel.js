"use client";
import React from "react";
import Slider from "react-slick";

import style from "@/styles/layout/carousel.module.scss";

export const Teamcarousel = () => {
  const settings = {
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
  };
  return (
    <div className="main_content">
      <div className="container overflow-hidden">
        <Slider {...settings} className="home_slider">
          {[1, 2, 3, 4, 5].map((data) => (
            <div key={data + "homeSlider"} className="home_slider-img">
              <img src="/images/team-pic.png" alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
