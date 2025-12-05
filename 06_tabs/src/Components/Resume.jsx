import React from "react";

const Resume = ({ title, dates, duties, company }) => {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-1">{title}</h2>
      <span className="block bg-slate-200 text-slate-600 font-semibold w-fit p-1 rounded-lg mb-1">
        {company}
      </span>
      <span className="block font-light mb-3">{dates}</span>
      <ul>
        {duties.map((duty, index) => (
          <li key={index} className="text-sm mb-2">
            - {duty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
