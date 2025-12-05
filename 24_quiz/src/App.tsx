import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import StartPage from "./components/StartPage";
import ErrorScreen from "./components/ErrorScreen";
import Loader from "./components/Loader";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishPage from "./components/FinishPage";
import type { State, Action, Question as QType } from "./types";

const initialState: State = {
  questions: [],
  index: 0,
  status: "loading",
  answer: null,
  points: 0,
  highScore: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer": {
      const isCorrect =
        action.payload === state.questions[state.index].correctOption;
      return {
        ...state,
        answer: action.payload,
        points:
          state.points + (isCorrect ? state.questions[state.index].points : 0),
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finish",
        highScore: Math.max(state.highScore, state.points),
      };
    case "restart":
      return {
        ...state,
        status: "active",
        index: 0,
        points: 0,
        answer: null,
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ questions, index, status, answer, points, highScore }, dispatch] =
    useReducer(reducer, initialState);

  const questionsNum = questions.length;
  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data: QType[] = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch {
        dispatch({ type: "dataFailed" });
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center">
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorScreen />}
        {status === "ready" && <StartPage dispatch={dispatch} />}
        {status === "active" && questions.length > 0 && (
          <div className="w-full max-w-xl bg-gray-800 p-6 rounded-2xl shadow-xl space-y-6">
            <Progress
              index={index}
              questionsNum={questionsNum}
              points={points}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              questionsNum={questionsNum}
            />
          </div>
        )}
        {status === "finish" && (
          <FinishPage
            points={points}
            totalPoints={totalPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </main>
    </div>
  );
}

export default App;
