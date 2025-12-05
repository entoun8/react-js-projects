import React from "react";
import questions from "../data";
import Question from "./Question";

const Questions = () => {
  return (
    <ul className="w-4/5">
      {questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
    </ul>
  );
};

export default Questions;
