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
  return (
    <>
      <div className="app-content second__app__content mt-5">
        <div className="container">
          <div className="questions d-flex align-items-center">
            <div className="question-no">
              <p className="question-digit m-0 text-white">{`${
                activeQuestion + 1
              }/5`}</p>
            </div>
            <p className="who-will-win m-0">{question.question}</p>
          </div>
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
                // if (activeQuestion != 4) {
                //   setActiveQuestion((current) => current + 1);
                // }
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
            <button
              className="btn-previous"
              onClick={() => setActiveQuestion((current) => current - 1)}
            >
              PREVIOUS
            </button>
            {activeQuestion == 4 ? (
              <button
                disabled={!answers.answer}
                className={`${!answers.answer ? "disabled" : ""} btn-next`}
                onClick={onSubmit}
              >
                Submit
              </button>
            ) : (
              <button
                disabled={!answers.answer}
                className={`${!answers.answer ? "disabled" : ""} btn-next`}
                onClick={() => setActiveQuestion((current) => current + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
