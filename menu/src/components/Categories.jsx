import React from "react";

const Categories = ({ categories, handleFilter }) => {
  return (
    <ul className="flex justify-between gap-2 w-2/5 mx-auto mb-8">
      {categories.map((category, index) => (
        <li key={index}>
          <button
            className="text-blue-600 hover:underline capitalize"
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
