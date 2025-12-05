import type { Action } from "../types";

interface Props {
  dispatch: React.Dispatch<Action>;
  answer: number | null;
  index: number;
  questionsNum: number;
}

const NextButton: React.FC<Props> = ({
  dispatch,
  answer,
  index,
  questionsNum,
}) => {
  if (answer === null) return null;

  const label = index === questionsNum - 1 ? "Finish" : "Next";
  const actionType = index === questionsNum - 1 ? "finish" : "nextQuestion";

  return (
    <div className="flex justify-end">
      <button
        className="mt-4 bg-indigo-500 hover:bg-indigo-600 transition px-6 py-2 rounded-full shadow-lg"
        onClick={() => dispatch({ type: actionType })}
      >
        {label}
      </button>
    </div>
  );
};

export default NextButton;
