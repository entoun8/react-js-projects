import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-8 py-4 bg-black text-gray-200 text-xl">
      <div className="title">Movie App</div>
      <div className="links">
        <Link to="/" className="mr-3">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </header>
  );
};

export default Header;
