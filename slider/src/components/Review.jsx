import React from "react";

const Review = ({ image, name, title, quote, activeIndex, reviewIndex }) => {
  let slide = "lastSlide";

  if (reviewIndex === activeIndex) {
    slide = "activeSlide";
  }

  if (reviewIndex === activeIndex - 1) {
    slide = "leftSlide";
  }

  return (
    <div
      className={`${
        slide === "leftSlide"
          ? "-translate-x-full opacity-0"
          : slide === "lastSlide"
          ? "translate-x-full opacity-0"
          : ""
      } absolute transition duration-100`}
    >
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className=" capitalize text-red-800 font-bold">{name}</h2>
      <h3 className="font-semibold mb-4 capitalize text-sm">{title}</h3>
      <p>{quote}</p>
    </div>
  );
};

export default Review;
