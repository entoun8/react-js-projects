import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const username = useAppSelector((state) => state.user.username);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  if (!cart.length) return <EmptyCart />;

  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          ← Back to menu
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
        <h2 className="text-3xl font-bold text-stone-800 mb-6">
          Your cart, {username}
        </h2>

        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <CartItem key={item.pizzaId} item={item} />
          ))}
        </div>

        <div className="border-t border-stone-200 pt-6">
          <div className="flex items-center justify-between text-2xl font-bold text-stone-800 mb-6">
            <span>Total:</span>
            <span className="text-green-600">{formatCurrency(totalPrice)}</span>
          </div>

          <div className="flex gap-4 flex-col sm:flex-row">
            <Link
              to="/order/new"
              className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              Order pizzas 🍕
            </Link>
            <button
              onClick={() => dispatch(clearCart())}
              className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
