import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Review = ({
  name,
  job,
  image,
  text,
  handleSurprise,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <main className="flex justify-center bg-white p-5 rounded-lg max-w-96 text-center mx-2">
      <div className="container">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-1"
        />
        <h3 className="font-bold capitalize">{name}</h3>
        <span className="block capitalize text-blue-400">{job}</span>
        <p className="font-extralight">{text}</p>
        <div className="mb-2">
          <button className="text-blue-400 mr-2" onClick={handleDecrease}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="text-blue-400 ml-2" onClick={handleIncrease}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <button
          className="bg-blue-400 text-white py-1 px-3 rounded-lg"
          onClick={handleSurprise}
        >
          Surprise Me
        </button>
      </div>
    </main>
  );
};

export default Review;
