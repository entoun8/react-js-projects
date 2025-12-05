import React from "react";

const Birthday = ({ name, age, image }) => {
  return (
    <li className="flex gap-3 mb-4 last:mb-0">
      <img src={image} alt="" className="w-14 h-14 rounded-full" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <span className="font-light">{age} years</span>
      </div>
    </li>
  );
};

export default Birthday;
