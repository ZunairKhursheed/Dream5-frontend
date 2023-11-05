"use client";
import { useState } from "react";

const secondQuestion = [
  {
    name: "Rohit Sharma",
    percent: "5%",
    image: "/images/rohit-removebg-preview.png",
  },
  {
    name: "Virat Kohli",
    percent: "5%",
    image: "/images/rohit-removebg-preview.png",
  },
  {
    name: "Dhoni",
    percent: "5%",
    image: "/images/rohit-removebg-preview.png",
  },
  {
    name: "Shami",
    percent: "5%",
    image: "/images/rohit-removebg-preview.png",
  },
];

export const SecondQuestionierCard = ({
  setActiveQuestion,
  setAnswers,
  answers,
  question,
  activeQuestion,
  onSubmit,
}) => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="header-bottom container p-0 d-flex cursor_pointer">
        <div
          className={`col header-tab d-flex justify-content-center align-items-center ${
            activeTab == "all" ? "active" : null
          }`}
          onClick={() => setActiveTab("all")}
        >
          ALL
        </div>
        <div
          className={`col header-tab d-flex justify-content-center align-items-center ${
            activeTab == "wk" ? "active" : null
          }`}
          onClick={() => setActiveTab("wk")}
        >
          WK
        </div>
        <div
          className={`col header-tab d-flex justify-content-center align-items-center ${
            activeTab == "bat" ? "active" : null
          }`}
          onClick={() => setActiveTab("bat")}
        >
          BAT
        </div>
        <div
          className={`col header-tab d-flex justify-content-center align-items-center ${
            activeTab == "ar" ? "active" : null
          }`}
          onClick={() => setActiveTab("ar")}
        >
          AR
        </div>
        <div
          className={`col header-tab d-flex justify-content-center align-items-center ${
            activeTab == "bowl" ? "active" : null
          }`}
          onClick={() => setActiveTab("bowl")}
        >
          BOWL
        </div>
      </div>
      <div className="app-content second__app__content mt-5">
        <div className="container">
          {question.options?.map((item, i) => (
            <div
              className={`player-card d-flex align-items-center justify-content-center px-2 cursor_pointer ${
                answers.answer == item?.name ? "active" : ""
              }`}
              key={item?.name + i}
              onClick={() => {
                setAnswers((current) => {
                  let newArray = [...current];
                  newArray[activeQuestion] = {
                    ...newArray[activeQuestion],
                    answer: item?.name,
                  };
                  return newArray;
                });
                if (activeQuestion != 4) {
                  setActiveQuestion((current) => current + 1);
                }
              }}
            >
              <div className="player-img col-3">
                <img src={item?.image} alt="" />
              </div>
              <div className="player-details col-9 px-3">
                <p className="player-name mb-0">{item?.name}</p>
                <div className="performance d-flex align-items-center">
                  <div className="p-icon">
                    <i className="fa-solid fa-user-group fa-flip-horizontal" />
                  </div>
                  <div className="score-percentange px-1">{item?.percent}</div>
                  <div className="performance-bar">
                    <div className="progress-movement" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="previous-next d-flex justify-content-center p-4">
            <div
              className="btn-previous"
              onClick={() => setActiveQuestion((current) => current - 1)}
            >
              PREVIOUS
            </div>
            {activeQuestion == 4 ? (
              <div className="btn-next" onClick={onSubmit}>
                Submit
              </div>
            ) : (
              <div
                className="btn-next"
                onClick={() => setActiveQuestion((current) => current + 1)}
              >
                Next
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
