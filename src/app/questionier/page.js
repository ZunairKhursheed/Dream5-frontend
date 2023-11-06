"use client";

import { HeaderQuestionier } from "@/client/components/headerQuestionier";
import { HeaderSecond } from "@/client/components/headersecond";
import { QuestionierCards } from "@/client/components/questioniercards";
import { SecondQuestionierCard } from "@/client/components/secondQuestionierCard";
import { questionData } from "@/data/questionData";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/pages/questionier.scss";

export default function Questionier() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const router = useRouter();
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
  const onSubmit = () => {
    console.log(answers);
    localStorage.setItem("answers", JSON.stringify(answers));
    router.push("/review");
  };
  return (
    <main>
      <HeaderSecond />
      <div className="app-content">
        <HeaderQuestionier
          activeQuestion={activeQuestion}
          question={questionData[activeQuestion]}
        />
        {activeQuestion == 0 ? (
          <QuestionierCards
            question={questionData[0]}
            setActiveQuestion={setActiveQuestion}
            activeQuestion={activeQuestion}
            answers={answers[0]}
            setAnswers={setAnswers}
          />
        ) : (
          <SecondQuestionierCard
            question={questionData[activeQuestion]}
            setActiveQuestion={setActiveQuestion}
            answers={answers[activeQuestion]}
            activeQuestion={activeQuestion}
            setAnswers={setAnswers}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </main>
  );
}
