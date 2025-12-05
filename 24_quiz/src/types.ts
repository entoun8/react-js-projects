export interface Question {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface State {
  questions: Question[];
  index: number;
  status: "loading" | "ready" | "active" | "finish" | "error";
  answer: number | null;
  points: number;
  highScore: number;
}

export type Action =
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" };
