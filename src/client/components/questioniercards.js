import React from "react";
import style from "@/styles/pages/questionier.scss";

const dataCountry = [
  {
    name: "India",
    percent: "5%",
    image: "/images/india.png",
  },
  {
    name: "Australia",
    percent: "5%",
    image: "/images/austrailia.png",
  },
];
export const QuestionierCards = ({ setActiveQuestion }) => {
  return (
    <div className="container pt-150">
      {dataCountry.map((item, i) => (
        <div
          className="country-card d-flex align-items-center justify-content-center p-2 "
          key={i + item?.name}
          onClick={() => setActiveQuestion(2)}
        >
          <div className="flag-img col-3">
            <img src={item?.image} alt="" />
          </div>
          <div className="player-details col-9 px-3">
            <p className="player-name mb-0">{item?.name}</p>
            <div className="performance d-flex align-items-center">
              <div className="p-icon">
                <i className="fa-solid fa-user-group fa-flip-horizontal"></i>
              </div>
              <div className="score-percentange px-1">{item?.percent}</div>
              <div className="performance-bar">
                <div className="progress-movement"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
