import { useState } from "react";
import Star from "./Star";

interface StarRatingProps {
  maxRating?: number;
  size?: number;
  onSetRating: (rating: number) => void;
  className?: string;
}

const StarRating = ({
  maxRating = 5,
  size = 36,
  onSetRating,
  className = "",
}: StarRatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [temp, setTemp] = useState<number>(0);

  const handle = (r: number) => {
    setRating(r);
    onSetRating(r);
  };

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={(temp || rating) > i}
            size={size}
            onRate={() => handle(i + 1)}
            onHoverIn={() => setTemp(i + 1)}
            onHoverOut={() => setTemp(0)}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
