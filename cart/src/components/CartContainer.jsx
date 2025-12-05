import React from "react";
import { useGlobalContext } from "../Context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <header className="text-center mt-9">
        <h1 className="font-bold text-5xl mb-4">YOUR CART</h1>
        <p className="font-semibold text-xl">is currently empty</p>
      </header>
    );
  }

  return (
    <main className="p-5 text-center">
      <h1 className="text-center text-4xl mb-8">YOUR BAG</h1>
      <div className="w-96 mx-auto mb-9">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div>
        <div className="bg-slate-300 w-full h-[1px] mb-3"></div>
        <div className="flex justify-between items-center font-semibold text-xl mb-5">
          <span>Total</span>
          <span>{total}$</span>
        </div>
        <button
          className="border border-red-800 text-red-800 p-2 rounded-lg font-semibold hover:bg-red-800 hover:text-white transition-all duration-300 ease-in-out"
          onClick={clearCart}
        >
          CLEAR CART
        </button>
      </div>
    </main>
  );
};

export default CartContainer;
