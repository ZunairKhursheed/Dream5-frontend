import React from "react";

export const SecondQuestionierCard = ({ setActiveQuestion }) => {
  return (
    <div>
      <div className="header-bottom container p-0 d-flex ">
        <div className="col header-tab active d-flex justify-content-center align-items-center">
          ALL
        </div>
        <div className="col header-tab d-flex justify-content-center align-items-center">
          WK
        </div>
        <div className="col header-tab d-flex justify-content-center align-items-center">
          BAT
        </div>
        <div className="col header-tab d-flex justify-content-center align-items-center">
          AR
        </div>
        <div className="col header-tab d-flex justify-content-center align-items-center">
          BOWL
        </div>
      </div>
      <div className="app-content second__app__content mt-5">
        <div className="container">
          <div className="player-card d-flex align-items-center justify-content-center px-2">
            <div className="player-img col-3">
              <img src="/images/rohit-removebg-preview.png" alt="" />
            </div>
            <div className="player-details col-9 px-3">
              <p className="player-name mb-0">Rohit Sharma</p>
              <div className="performance d-flex align-items-center">
                <div className="p-icon">
                  <i className="fa-solid fa-user-group fa-flip-horizontal" />
                </div>
                <div className="score-percentange px-1">5%</div>
                <div className="performance-bar">
                  <div className="progress-movement" />
                </div>
              </div>
            </div>
          </div>
          <div className="player-card active d-flex align-items-center justify-content-center px-2">
            <div className="player-img col-3">
              <img src="/images/rohit-removebg-preview.png" alt="" />
            </div>
            <div className="player-details col-9 px-3">
              <p className="player-name mb-0">Rohit Sharma</p>
              {/* <div className="performance d-flex align-items-center">
                  <div className="p-icon"><i className="fa-solid fa-user-group fa-flip-horizontal"></i></div>
                  <div className="score-percentange px-1">5%</div>
                  <div className="performance-bar">
                      <div className="progress-movement"></div>
                  </div>
              </div> */}
            </div>
          </div>
          <div className="player-card d-flex align-items-center justify-content-center px-2">
            <div className="player-img col-3">
              <img src="/images/rohit-removebg-preview.png" alt="" />
            </div>
            <div className="player-details col-9 px-3">
              <p className="player-name mb-0">Rohit Sharma</p>
              <div className="performance d-flex align-items-center">
                <div className="p-icon">
                  <i className="fa-solid fa-user-group fa-flip-horizontal" />
                </div>
                <div className="score-percentange px-1">5%</div>
                <div className="performance-bar">
                  <div className="progress-movement" />
                </div>
              </div>
            </div>
          </div>
          <div className="player-card d-flex align-items-center justify-content-center px-2">
            <div className="player-img col-3">
              <img src="/images/rohit-removebg-preview.png" alt="" />
            </div>
            <div className="player-details col-9 px-3">
              <p className="player-name mb-0">Rohit Sharma</p>
              <div className="performance d-flex align-items-center">
                <div className="p-icon">
                  <i className="fa-solid fa-user-group fa-flip-horizontal" />
                </div>
                <div className="score-percentange px-1">5%</div>
                <div className="performance-bar">
                  <div className="progress-movement" />
                </div>
              </div>
            </div>
          </div>
          <div className="previous-next d-flex justify-content-center p-4">
            <div className="btn-previous" onClick={() => setActiveQuestion(1)}>
              PREVIOUS
            </div>
            <div className="btn-next">NEXT</div>
          </div>
        </div>
      </div>
    </div>
  );
};
