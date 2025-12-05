import React, { useRef } from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = useRef();

  const searchCocktail = () => {
    setSearchTerm(searchRef.current.value);
  };

  return (
    <section className="bg-white p-8 max-w-[500px] mx-auto shadow-lg rounded-md mb-16">
      <label htmlFor="cocktail" className="block mb-2 font-semibold text-xl">
        Search Your Favorite Cocktail
      </label>
      <input
        id="cocktail"
        type="text"
        ref={searchRef}
        onChange={searchCocktail}
        className="bg-blue-100 border border-blue-800 p-1 w-full rounded-md"
      />
    </section>
  );
};

export default SearchForm;
