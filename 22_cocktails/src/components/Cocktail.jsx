import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <div className="bg-white mb-6 rounded-lg">
      <img src={image} alt={name} className="w-full rounded-t-lg" />
      <div className="p-5">
        <h3 className="font-bold text-3xl">{name}</h3>
        <span className="block font-semibold text-lg">{glass}</span>
        <span className="block font-light mb-2">{info}</span>
        <Link
          to={`cocktails/${id}`}
          className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg text-white"
        >
          DETAILS
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
