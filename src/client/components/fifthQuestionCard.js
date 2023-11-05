"use client";

const FifthQuestion = [
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
    name: "Gill",
    percent: "5%",
    image: "/images/rohit-removebg-preview.png",
  },
];
export const FifthQuestionierCard = ({
  setActiveQuestion,
  questionArray,
  setQuestionArray,
}) => {
  return (
    <div>
      <div className="app-content second__app__content mt-5">
        <div className="container">
          {FifthQuestion?.map((item, i) => (
            <div
              className={`player-card d-flex align-items-center justify-content-center px-2 cursor_pointer ${
                questionArray?.length > 3 &&
                questionArray[3]["name"] == item?.name
                  ? "active"
                  : ""
              }`}
              key={item?.name + i}
              onClick={() => {
                let returnItem = { question: 4, name: item?.name };
                if (questionArray?.length > 3) {
                  let array = [...questionArray];
                  array.splice(3, 1, returnItem);
                  setQuestionArray(array);
                } else {
                  let array = [...questionArray];
                  array.push(returnItem);
                  setQuestionArray(array);
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
            <div className="btn-previous" onClick={() => setActiveQuestion(4)}>
              PREVIOUS
            </div>
            <div
              className="btn-next"
              onClick={() =>
                window.localStorage.setItem(
                  "questions",
                  JSON.stringify(questionArray)
                )
              }
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
