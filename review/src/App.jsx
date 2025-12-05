import { useState } from "react";
import Review from "./components/Review";
import reviews from "./data";

function App() {
  const [index, setIndex] = useState(0);

  const activeReview = reviews[index];

  const handleSurprise = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * reviews.length);
    } while (randomNumber === index);

    setIndex(randomNumber);
  };

  const handleIncrease = () => {
    setIndex((prevIndex) => {
      if (prevIndex < reviews.length - 1) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const handleDecrease = () => {
    setIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return reviews.length - 1;
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div>
        <h1 className="text-center font-bold text-3xl mb-10">Our Reviews</h1>
        <Review
          {...activeReview}
          handleSurprise={handleSurprise}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      </div>
    </div>
  );
}

export default App;
