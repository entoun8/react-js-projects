import type { Question as QType, Action } from "../types";
import clsx from "clsx";

interface Props {
  question: QType;
  dispatch: React.Dispatch<Action>;
  answer: number | null;
}

const Options: React.FC<Props> = ({ question, dispatch, answer }) => {
  const answered = answer !== null;

  return (
    <ul className="space-y-3">
      {question.options.map((opt, idx) => {
        const isCorrect = idx === question.correctOption;
        const isSelected = idx === answer;
        return (
          <li key={idx}>
            <button
              className={clsx(
                "w-full text-left px-4 py-3 rounded-xl shadow hover:scale-105 transition transform",
                !answered
                  ? "bg-gray-700 hover:bg-gray-600"
                  : isCorrect
                  ? "bg-green-700 text-white"
                  : isSelected
                  ? "bg-red-700 text-white"
                  : "bg-gray-700 text-gray-300"
              )}
              onClick={() =>
                !answered && dispatch({ type: "newAnswer", payload: idx })
              }
            >
              {opt}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
