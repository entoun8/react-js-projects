import DeleteItem from "../../UI/DeleteItem";
import UpdateItemQuantity from "../../UI/UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";
import type { CartItem as CartItemType } from "../../types";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-stone-50 rounded-xl p-4 border border-stone-200 gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm">
          {quantity}
        </div>
        <span className="font-medium text-stone-800">{name}</span>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-4">
        <span className="font-bold text-green-600 text-lg">
          {formatCurrency(totalPrice)}
        </span>
        <div className="flex gap-2">
          <UpdateItemQuantity pizzaId={pizzaId} />
          <DeleteItem pizzaId={pizzaId} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
