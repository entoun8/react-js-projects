import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, handleDelete }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bg-white mb-2 last:mb-0 p-3">
      <img src={image} alt={name} className="w-96 h-60 mb-6" />
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <div className="bg-blue-400 text-white rounded-md p-1">{price}</div>
      </div>

      {!readMore ? (
        <>
          <p className="mb-2 inline">{info.slice(0, 80)}... </p>
          <button
            className="text-blue-600 mb-3 hover:underline"
            onClick={() => setReadMore(true)}
          >
            Read More
          </button>
        </>
      ) : (
        <>
          <p className="mb-2 inline">{info} </p>
          <button
            className="text-blue-600 mb-3 hover:underline"
            onClick={() => setReadMore(false)}
          >
            Read Less
          </button>
        </>
      )}

      <button
        className="block border border-red-600 text-red-600 p-2 hover:bg-red-600 hover:text-white mx-auto"
        onClick={() => handleDelete(id)}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
