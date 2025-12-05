import type { Action } from "../types";

interface Props {
  points: number;
  totalPoints: number;
  highScore: number;
  dispatch: React.Dispatch<Action>; // ← accept dispatch
}

const FinishPage: React.FC<Props> = ({
  points,
  totalPoints,
  highScore,
  dispatch,
}) => {
  const percent = Math.round((points / totalPoints) * 100);

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center space-y-4">
      <h2 className="text-3xl font-semibold">Quiz Complete!</h2>
      <p className="text-xl">
        You scored <span className="font-bold">{points}</span> /{" "}
        <span className="font-bold">{totalPoints}</span> ({percent}%)
      </p>
      <p className="text-indigo-300">Highscore: {highScore}</p>
      <button
        className="mt-6 bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded-full shadow-lg"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default FinishPage;
