import { useMemo } from "react";

export const HeaderQuestionier = ({ questionArray, activeQuestion }) => {
  const question = useMemo(() => {
    switch (activeQuestion) {
      case 1:
        return `Who will Win Match`;
      case 2:
        return `${questionArray[0]["name"]} Player of the match`;
      case 3:
        return `${questionArray[0]["name"]} Lead Run Scorer`;
      case 4:
        return `${questionArray[0]["name"]} Lead wicket taker`;
      case 5:
        return `Most Sixes of the ${questionArray[0]["name"]}'s Player`;
      default:
        break;
    }
  }, [activeQuestion, questionArray]);
  return (
    <header className="header">
      <div className="header_top container d-flex justify-content-between px-3 py-3">
        <div className="arrow-back">
          <i className="fa-solid fa-left-long"></i>
        </div>
        <div className="header-content text-center">
          <p className="teams m-0">IND vs AUS</p>
          <p className="time-left">
            <span className="hour">23</span>h:<span className="mins">34</span>m
            left
          </p>
          <div className="questions d-flex align-items-center">
            <div className="question-no">
              <p className="question-digit m-0">{`${activeQuestion}/5`}</p>
            </div>
            <p className="who-will-win m-0">{question}</p>
          </div>
        </div>
        <div className="cross-cancel">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </header>
  );
};
