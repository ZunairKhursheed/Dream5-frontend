"use client";

import { HeaderQuestionier } from "@/client/components/headerQuestionier";
import { HeaderSecond } from "@/client/components/headersecond";
import { QuestionierCards } from "@/client/components/questioniercards";
import { SecondQuestionierCard } from "@/client/components/secondQuestionierCard";
import { useState } from "react";

export default function Questionier() {
  const [activeQuestioin, setActiveQuestion] = useState(1);
  return (
    <main>
      <HeaderSecond />
      <div class="app-content">
        <HeaderQuestionier />
        {activeQuestioin == 1 ? (
          <QuestionierCards setActiveQuestion={setActiveQuestion} />
        ) : activeQuestioin == 2 ? (
          <SecondQuestionierCard setActiveQuestion={setActiveQuestion} />
        ) : null}
      </div>
    </main>
  );
}
