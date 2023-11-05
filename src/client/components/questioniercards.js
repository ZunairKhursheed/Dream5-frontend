"use client";

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
export const QuestionierCards = ({
  setActiveQuestion,
  questionArray,
  setQuestionArray,
}) => {
  return (
    <>
      <div className="container pt-150">
        {dataCountry.map((item, i) => (
          <div
            className={`country-card d-flex align-items-center justify-content-center p-2 cursor_pointer ${
              questionArray?.length > 0 &&
              questionArray[0]["name"] == item?.name
                ? "active"
                : null
            }`}
            key={i + item?.name}
            onClick={() => {
              let returnItem = { question: 1, name: item?.name };
              setActiveQuestion(2);
              if (questionArray?.length > 0) {
                let array = [...questionArray];
                array.splice(0, 1, returnItem);
                array.splice(1, 1);
                setQuestionArray(array);
              } else {
                let array = [...questionArray];
                array.push(returnItem);
                setQuestionArray(array);
              }
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
      </div>
    </>
  );
};
