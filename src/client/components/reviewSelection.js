import React from "react";
import style from "@/styles/pages/reviewSelection.scss"









export const ReviewSelection = () => {
  return (
  
    <div className="container">
    <p className="review-heading text-center">Review your selections</p>
    <div className="prediction-1 my-4">
      <div className="prediction-heading p-2">Prediction 1 (P1)</div>
      <div className="container py-3">
        <div className="prediction-tab d-flex background-secondary mb-2">
          <div className="count d-flex justify-content-center align-items-center">
            1
          </div>
          <div className="prediction-tab-content">
            <p className="who-is-winner">Who Will Win Match?</p>
            <div className="country d-flex align-items-center">
              <img src="./Assets/Images/india.png" alt="" />
              <p className="country-name px-2 mb-0">INDIA</p>
            </div>
          </div>
        </div>
        <div className="prediction-tab d-flex background-secondary mb-2">
          <div className="count d-flex justify-content-center align-items-center">
            2
          </div>
          <div className="prediction-tab-content d-flex">
            <img
              className="prediction-player"
              src="./Assets/Images/rohit-removebg-preview.png"
              alt=""
            />
            <div className="country d-flex flex-column justify-content-center px-2">
              <p className="who-is-winner">India Top Run Scorer</p>
              <p className="country-name mb-0">Rohit Sharma</p>
            </div>
          </div>
        </div>
        <div className="prediction-tab d-flex background-secondary mb-2">
          <div className="count d-flex justify-content-center align-items-center">
            3
          </div>
          <div className="prediction-tab-content d-flex">
            <img
              className="prediction-player"
              src="./Assets/Images/rohit-removebg-preview.png"
              alt=""
            />
            <div className="country d-flex flex-column justify-content-center px-2">
              <p className="who-is-winner">India Top Run Scorer</p>
              <p className="country-name mb-0">Rohit Sharma</p>
            </div>
          </div>
        </div>
        <div className="prediction-tab d-flex background-secondary mb-2">
          <div className="count d-flex justify-content-center align-items-center">
            4
          </div>
          <div className="prediction-tab-content d-flex">
            <img
              className="prediction-player"
              src="./Assets/Images/rohit-removebg-preview.png"
              alt=""
            />
            <div className="country d-flex flex-column justify-content-center px-2">
              <p className="who-is-winner">India Top Run Scorer</p>
              <p className="country-name mb-0">Rohit Sharma</p>
            </div>
          </div>
        </div>
        <div className="prediction-tab d-flex background-secondary mb-2">
          <div className="count d-flex justify-content-center align-items-center">
            5
          </div>
          <div className="prediction-tab-content d-flex">
            <img
              className="prediction-player"
              src="./Assets/Images/rohit-removebg-preview.png"
              alt=""
            />
            <div className="country d-flex flex-column justify-content-center px-2">
              <p className="who-is-winner">India Top Run Scorer</p>
              <p className="country-name mb-0">Rohit Sharma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    




    

  );
};