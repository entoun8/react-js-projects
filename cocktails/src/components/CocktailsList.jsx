import React from "react";
import { useGlobalContext } from "../Context";
import Cocktail from "./Cocktail";

const CocktailsList = () => {
  const { loading, cocktails } = useGlobalContext();
  if (loading) {
    return <div className="text-center font-bold text-5xl">Loading...</div>;
  }

  if (cocktails.length < 1) {
    return (
      <p className="text-center font-bold text-5xl">
        No Cocktail Matched Your Search Criteria
      </p>
    );
  }

  return (
    <section>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-[1000px] mx-auto">
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </section>
  );
};

export default CocktailsList;
