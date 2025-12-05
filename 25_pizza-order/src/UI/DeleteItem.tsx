import { useAppDispatch } from "../hooks/redux";
import { removeFromCart } from "../features/cart/cartSlice";

interface DeleteItemProps {
  pizzaId: number;
  variant?: "small" | "large";
}

const DeleteItem = ({ pizzaId, variant = "small" }: DeleteItemProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(removeFromCart(pizzaId));
  };

  const variants: Record<"small" | "large", string> = {
    small: "bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm transition-colors duration-200",
    large: "bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
  };

  return (
    <button
      onClick={handleDelete}
      className={variants[variant]}
    >
      {variant === "large" ? "Remove" : "Delete"}
    </button>
  );
};

export default DeleteItem;
