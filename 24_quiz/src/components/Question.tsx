import type { Question as QType, Action } from "../types";
import Options from "./Options";

interface Props {
  question: QType;
  dispatch: React.Dispatch<Action>;
  answer: number | null;
}

const Question: React.FC<Props> = ({ question, dispatch, answer }) => (
  <div className="space-y-4">
    <p className="text-2xl font-medium">{question.question}</p>
    <Options dispatch={dispatch} question={question} answer={answer} />
  </div>
);

export default Question;
