import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const CartItem = ({ id, title, price, img, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <div key={id} className="flex items-center justify-between mb-4">
      <img src={img} alt="" />
      <div className="text-lg">
        <h2 className="font-semibold">{title}</h2>
        <span className="block font-light">{price}$</span>
        <button
          className="text-blue-500 font-bold hover:underline"
          onClick={() => remove(id)}
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col">
        <button className="text-blue-500" onClick={() => increase(id)}>
          <FaArrowUp />
        </button>
        <span>{amount}</span>
        <button className="text-blue-500" onClick={() => decrease(id)}>
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
