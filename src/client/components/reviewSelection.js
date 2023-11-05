"use client";

import React, { useEffect, useState } from "react";
import style from "@/styles/pages/reviewSelection.scss";
import { questionData } from "@/data/questionData";

export const ReviewSelection = () => {
  const [answers, setAnswers] = useState([
    { question: questionData[0], answer: "" },
    { question: questionData[1], answer: "" },
    { question: questionData[2], answer: "" },
    { question: questionData[3], answer: "" },
    { question: questionData[4], answer: "" },
  ]);
  useEffect(() => {
    const ans = JSON.parse(localStorage.getItem("answers"));
    if (ans) {
      setAnswers(ans);
    }
  }, []);
  return (
    <div className="container">
      <p className="review-heading text-center">Review your selections</p>
      <div className="prediction-1 my-4">
        <div className="prediction-heading p-2">Prediction 1 (P1)</div>
        <div className="container py-3">
          {/* <div className="prediction-tab d-flex background-secondary mb-2">
            <div className="count d-flex justify-content-center align-items-center">
              1
            </div>
            <div className="prediction-tab-content">
              <p className="who-is-winner">Who Will Win Match?</p>
              <div className="country d-flex align-items-center">
                <img src="/images/india.png" alt="" />
                <p className="country-name px-2 mb-0">INDIA</p>
              </div>
            </div>
          </div> */}
          {answers.map((data, i) => (
            <div
              className="prediction-tab d-flex background-secondary mb-2"
              key={data.question}
            >
              <div className="count d-flex justify-content-center align-items-center">
                {i + 1}
              </div>
              {
                <div className="prediction-tab-content d-flex">
                  <img
                    className="prediction-player"
                    src={
                      answers[i]?.question?.options?.find(
                        (e) => e.name == answers[i].answer
                      )?.image
                    }
                    alt=""
                  />
                  <div className="country d-flex flex-column justify-content-center px-2">
                    <p className="who-is-winner">
                      {answers[i].question.question}
                    </p>
                    <p className="country-name mb-0">{answers[i].answer}</p>
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
