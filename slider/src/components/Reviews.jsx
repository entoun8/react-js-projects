import React from "react";
import Review from "./Review";

const Reviews = ({ reviews, activeIndex, handleLeft, handleRight, arrows }) => {
  const leftBtn = `text-3xl absolute left-2 top-24 ${
    !arrows.left ? "hidden" : ""
  }`;
  const rightBtn = `text-3xl absolute right-2 top-24 ${
    !arrows.right ? "hidden" : ""
  }`;

  return (
    <main className="mx-3">
      <div className="flex text-center justify-center mx-auto h-72 relative w-96 overflow-hidden">
        {reviews.map((review, reviewIndex) => (
          <Review
            {...review}
            activeIndex={activeIndex}
            reviewIndex={reviewIndex}
          />
        ))}
        <div>
          <button className={leftBtn} onClick={handleLeft}>
            &larr;
          </button>
          <button className={rightBtn} onClick={handleRight}>
            &rarr;
          </button>
        </div>
      </div>
    </main>
  );
};

export default Reviews;
