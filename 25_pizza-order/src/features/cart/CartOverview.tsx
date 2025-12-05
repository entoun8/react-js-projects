import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartPrice = useAppSelector(getTotalCartPrice);
  const totalCartQuantity = useAppSelector(getTotalCartQuantity);

  if (totalCartQuantity === 0) {
    return;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-stone-800 to-stone-900 text-white shadow-2xl border-t-4 border-orange-500">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between max-w-4xl gap-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="bg-orange-500 rounded-full px-3 py-1 text-sm font-bold">
            {totalCartQuantity} pizzas
          </div>
          <div className="text-lg sm:text-xl font-bold text-green-400">
            {formatCurrency(totalCartPrice)}
          </div>
        </div>
        <Link
          to="/cart"
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          Open cart 🛒
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
