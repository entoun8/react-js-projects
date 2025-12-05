import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { formatCurrency } from "../../utils/helpers";
import { addToCart, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../../UI/DeleteItem";
import type { Pizza } from "../../types";

interface MenuItemProps {
  pizza: Pizza;
}

function MenuItem({ pizza }: MenuItemProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useAppDispatch();

  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addToCart(newItem));
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden transition-all duration-200 hover:shadow-xl ${
        soldOut ? "opacity-75 grayscale" : ""
      }`}
    >
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        {soldOut && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-full text-lg">
              SOLD OUT
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-800 mb-2">{name}</h3>
        <p className="text-stone-600 mb-4 text-sm leading-relaxed">
          {ingredients.join(" • ")}
        </p>
        <div className="flex items-center justify-between">
          {!soldOut ? (
            <>
              <span className="text-2xl font-bold text-green-600">
                {formatCurrency(unitPrice)}
              </span>
              {isInCart ? (
                <DeleteItem pizzaId={id} variant="large" />
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Add to cart
                </button>
              )}
            </>
          ) : (
            <span className="text-xl font-bold text-red-500">Sold out</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
