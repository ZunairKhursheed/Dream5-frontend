"use client";

import { FifthQuestionierCard } from "@/client/components/fifthQuestionCard";
import { FourthQuestionierCard } from "@/client/components/fourthQuestionCard";
import { HeaderQuestionier } from "@/client/components/headerQuestionier";
import { HeaderSecond } from "@/client/components/headersecond";
import { QuestionierCards } from "@/client/components/questioniercards";
import { SecondQuestionierCard } from "@/client/components/secondQuestionierCard";
import { ThirdQuestionierCard } from "@/client/components/thirdQuestionCard";
import { useMemo, useState } from "react";
import "../../styles/pages/questionier.scss";

export default function Questionier() {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [questionArray, setQuestionArray] = useState([]);
  console.log(questionArray, questionArray.length);

  const question = useMemo(() => {
    switch (activeQuestion) {
      case 1:
        return (
          <QuestionierCards
            setActiveQuestion={setActiveQuestion}
            setQuestionArray={setQuestionArray}
            questionArray={questionArray}
          />
        );
      case 2:
        return (
          <SecondQuestionierCard
            setActiveQuestion={setActiveQuestion}
            questionArray={questionArray}
            setQuestionArray={setQuestionArray}
          />
        );
      case 3:
        return (
          <ThirdQuestionierCard
            setActiveQuestion={setActiveQuestion}
            questionArray={questionArray}
            setQuestionArray={setQuestionArray}
          />
        );
      case 4:
        return (
          <FourthQuestionierCard
            setActiveQuestion={setActiveQuestion}
            questionArray={questionArray}
            setQuestionArray={setQuestionArray}
          />
        );
      case 5:
        return (
          <FifthQuestionierCard
            setActiveQuestion={setActiveQuestion}
            questionArray={questionArray}
            setQuestionArray={setQuestionArray}
          />
        );
      default:
        break;
    }
  }, [activeQuestion, questionArray]);

  return (
    <main>
      <HeaderSecond />
      <div className="app-content">
        <HeaderQuestionier
          questionArray={questionArray}
          activeQuestion={activeQuestion}
        />
        {question}
      </div>
    </main>
  );
}
