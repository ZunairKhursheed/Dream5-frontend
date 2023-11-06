"use client";

export const QuestionierCards = ({
  question,
  setActiveQuestion,
  setAnswers,
  activeQuestion,
  answers,
}) => {
  return (
    <>
      <div className="container pt-120">
        <div className="questions d-flex align-items-center">
          <div className="question-no">
            <p className="question-digit m-0 text-white">{`${
              activeQuestion + 1
            }/5`}</p>
          </div>
          <p className="who-will-win m-0">{question.question}</p>
        </div>
        {question.options.map((item, i) => (
          <div
            className={`country-card d-flex align-items-center justify-content-center p-2 cursor_pointer ${
              answers.answer == item?.name ? "active" : ""
            }`}
            key={i + item?.name}
            onClick={() => {
              setAnswers((current) => {
                let newArray = [...current];
                newArray[0] = { ...newArray[0], answer: item?.name };
                return newArray;
              });
              // setActiveQuestion((current) => current + 1);
            }}
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
        <div className="previous-next d-flex justify-content-center p-4">
          <button
            className={`${!answers.answer ? "disabled" : ""} btn-next`}
            disabled={!answers.answer}
            onClick={() => setActiveQuestion((current) => current + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
