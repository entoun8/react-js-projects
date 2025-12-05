interface Props {
  index: number;
  questionsNum: number;
  points: number;
  totalPoints: number;
  answer: number | null;
}

const Progress: React.FC<Props> = ({
  index,
  questionsNum,
  points,
  totalPoints,
  answer,
}) => (
  <div className="space-y-2">
    <progress
      className="w-full h-3 rounded-full overflow-hidden"
      value={index + (answer !== null ? 1 : 0)}
      max={questionsNum}
    />
    <div className="flex justify-between text-sm text-gray-300">
      <span>
        Q {index + 1} / {questionsNum}
      </span>
      <span>
        {points} / {totalPoints} pts
      </span>
    </div>
  </div>
);

export default Progress;
