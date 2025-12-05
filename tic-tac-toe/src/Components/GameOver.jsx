import React from "react";

const GameOver = ({ winner, draw, handleRematch }) => {
  return (
    <div className="absolute left-0 top-0 w-full h-full bg-black opacity-95 flex items-center text-center">
      <div className="container">
        <h2 className="text-4xl text-yellow-300 mb-2">Game Over</h2>
        <p className="font-bold text-2xl mb-4">
          {draw ? "Draw!" : `${winner} won!`}
        </p>{" "}
        <button
          onClick={handleRematch}
          className="border border-yellow-200 p-3 rounded-lg hover:bg-yellow-200 hover:text-black font-bold"
        >
          Rematch!
        </button>
      </div>
    </div>
  );
};

export default GameOver;
