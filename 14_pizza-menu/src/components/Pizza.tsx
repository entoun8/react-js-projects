import type { PizzaType } from "../types";

const Pizza = ({ name, ingredients, price, photoName, soldOut }: PizzaType) => {
  return (
    <li
      className={`flex items-start gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition
        ${soldOut ? "opacity-50 grayscale" : ""}`}
    >
      <img
        src={`/${photoName}`}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm mb-2">{ingredients}</p>
        <span className="text-md font-semibold text-[#2990FF]">
          {soldOut ? "Sold Out" : `$${price}`}
        </span>
      </div>
    </li>
  );
};

export default Pizza;
