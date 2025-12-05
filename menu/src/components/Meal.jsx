import React from "react";

const Meal = ({ title, price, img, desc }) => {
  return (
    <li>
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt={title}
          className="w-32 h-32 border-4 border-blue-200 rounded-lg"
        />
        <div className="info">
          <div className="flex justify-between items-center mb-2 border-b pb-1">
            <h3 className="capitalize font-bold">{title}</h3>
            <span className="text-blue-400">${price}</span>
          </div>
          <p className="font-light">{desc}</p>
        </div>
      </div>
    </li>
  );
};

export default Meal;
