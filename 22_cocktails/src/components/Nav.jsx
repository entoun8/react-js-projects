import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-lg">
      <div className="text-3xl">
        The<span className="text-blue-800">Cocktails</span>DB
      </div>
      <nav className="flex gap-2 text-xl font-semibold">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Nav;
