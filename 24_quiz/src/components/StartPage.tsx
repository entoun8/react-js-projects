import type { Action } from "../types";

interface Props {
  dispatch: React.Dispatch<Action>;
}

const StartPage: React.FC<Props> = ({ dispatch }) => (
  <div className="text-center space-y-6">
    <h2 className="text-4xl font-semibold">Welcome to The React Quiz!</h2>
    <p className="text-xl">15 questions to test your React mastery</p>
    <button
      className="mt-4 bg-indigo-500 hover:bg-indigo-600 transition px-6 py-2 rounded-full shadow-lg"
      onClick={() => dispatch({ type: "start" })}
    >
      Let's Start
    </button>
  </div>
);

export default StartPage;
