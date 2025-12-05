import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const Nav = () => {
  const { amount } = useGlobalContext();

  return (
    <header className="flex justify-between items-center p-5 bg-blue-500 text-white text-2xl">
      <h2>UseReducer</h2>
      <div className="relative">
        <span>
          <FaShoppingBag />
        </span>
        <span className="absolute -top-4 left-3 bg-blue-300 rounded-full px-2 py-1 text-xs">
          {amount}
        </span>
      </div>
    </header>
  );
};

export default Nav;
