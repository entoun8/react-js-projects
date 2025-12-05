import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [opened, setOpened] = useState(false);

  return (
    <li className="border mb-5 p-3">
      <div className="flex justify-between items-center gap-4">
        <h3 className="font-bold">{title}</h3>
        <button
          className="bg-slate-200 rounded-full p-1 text-red-800"
          onClick={() => setOpened((prevVal) => !prevVal)}
        >
          {opened ? "-" : "+"}
        </button>
      </div>
      <p>{opened ? info : ""}</p>
    </li>
  );
};

export default Question;
