import { useState } from "react";
import Reviews from "./components/Reviews";
import people from "./data";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [arrows, setArrows] = useState({ left: false, right: true });

  const handleLeft = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;

      if (newIndex === 0) {
        setArrows({ left: false, right: true });
      } else {
        setArrows({ left: true, right: true });
      }

      return newIndex;
    });
  };

  const handleRight = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      if (newIndex === people.length - 1) {
        setArrows({ left: true, right: false });
      } else {
        setArrows({ left: true, right: true });
      }

      return newIndex;
    });
  };

  return (
    <div className="bg-blue-50 h-screen pt-16">
      <h1 className="text-center font-semibold text-3xl mb-12">Reviews</h1>
      <Reviews
        reviews={people}
        activeIndex={activeIndex}
        handleLeft={handleLeft}
        handleRight={handleRight}
        arrows={arrows}
      />
    </div>
  );
}

export default App;
