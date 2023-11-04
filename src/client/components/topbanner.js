import React from "react";

import style from "@/styles/pages/home.module.scss"


export const Topbanner = () => {
  return (

    <div className="mb-2">
    <div className="container">
      <div className={`${style.prediction_suggession} text-center p-3`}>
        <p className="suggestion-text mb-0">
          Predict the outcome of 5 questions & win exciting gifts and cash for FREE
        </p>
      </div>
    </div>
  </div>



    
  
  );
};
