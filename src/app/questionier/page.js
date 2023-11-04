import { HeaderQuestionier } from "@/client/components/headerQuestionier";
import { HeaderSecond } from "@/client/components/headersecond";
import { QuestionierCards } from "@/client/components/questioniercards";





export default function Questionier() {
  return (
    <main>
      <HeaderSecond />
      <div className="app-content">
      <HeaderQuestionier />
      <QuestionierCards />
      </div>
    </main>
  );
}
