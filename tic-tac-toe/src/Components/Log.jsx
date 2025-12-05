import React from "react";

const Log = ({ turns }) => {
  return (
    <ul className="text-xl text-center mt-3">
      {turns.map((turn) => {
        return (
          <li className="pb-2">
            {turn.player} play on {turn.square.row}
            {turn.square.col}
          </li>
        );
      })}
    </ul>
  );
};

export default Log;
