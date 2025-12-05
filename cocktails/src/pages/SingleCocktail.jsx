import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";

const SingleCocktail = () => {
  const { cocktailId } = useParams();
  const { cocktails } = useGlobalContext();
  const singleCocktail = cocktails.find(
    (cocktail) => cocktail.id.toString() === cocktailId
  );

  return (
    <main>
      <section className="px-8 pt-8 bg-blue-100 min-h-[calc(100vh-68px)]">
        <Link
          to="/"
          className="bg-blue-800 hover:bg-blue-700 rounded-lg mx-auto text-white p-2 block w-fit mb-8"
        >
          BACK HOME
        </Link>
        <h1 className="text-center text-3xl  font-bold mb-8">
          {singleCocktail.name}
        </h1>
        <div className="flex items-center gap-8 max-w-1000">
          <img
            src={singleCocktail.image}
            alt={singleCocktail.name}
            className="w-80"
          />
          <div className="info">
            <ul>
              <li className="mb-5">
                <span className="bg-blue-200 text-blue-800 font-bold mr-2">
                  Name:{" "}
                </span>
                <span className="font-semibold">{singleCocktail.name}</span>
              </li>
              <li className="mb-5">
                <span className="bg-blue-200 text-blue-800 font-bold mr-2">
                  Info:{" "}
                </span>
                <span className="font-semibold">{singleCocktail.info}</span>
              </li>
              <li className="">
                <span className="bg-blue-200 text-blue-800 font-bold mr-2">
                  Glass:{" "}
                </span>
                <span className="font-semibold">{singleCocktail.glass}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleCocktail;
