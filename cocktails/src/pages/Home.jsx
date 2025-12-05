import React from "react";
import SearchForm from "../components/SearchForm";
import CocktailsList from "../components/CocktailsList";

const Home = () => {
  return (
    <main className="px-8 pt-8 bg-blue-100 min-h-[calc(100vh-68px)]">
      <SearchForm />
      <CocktailsList />
    </main>
  );
};

export default Home;
