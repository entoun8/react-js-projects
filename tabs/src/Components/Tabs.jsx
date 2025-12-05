import React from "react";

const Tabs = ({ companies, handleClick, activeCompany }) => {
  return (
    <ul>
      {companies.map((company, index) => (
        <button
          key={index}
          className={`capitalize font-semibold mb-2 hover:text-teal-400 ${
            activeCompany === company ? "text-teal-400" : ""
          }`}
          onClick={() => handleClick(company)}
        >
          {company}
        </button>
      ))}
    </ul>
  );
};

export default Tabs;
