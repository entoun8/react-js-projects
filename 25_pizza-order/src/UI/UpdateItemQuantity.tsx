import { useAppDispatch } from "../hooks/redux";
import { decreaseQuantity, increaseQuantity } from "../features/cart/cartSlice";

interface UpdateItemQuantityProps {
  pizzaId: number;
}

const UpdateItemQuantity = ({ pizzaId }: UpdateItemQuantityProps) => {
  const dispatch = useAppDispatch();

  const handleDecrease = () => {
    dispatch(decreaseQuantity(pizzaId));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(pizzaId));
  };

  return (
    <>
      <button
        onClick={handleDecrease}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold w-8 h-8 rounded-full transition-colors duration-200"
      >
        -
      </button>
      <button
        onClick={handleIncrease}
        className="bg-green-500 hover:bg-green-600 text-white font-bold w-8 h-8 rounded-full transition-colors duration-200"
      >
        +
      </button>
    </>
  );
};

export default UpdateItemQuantity;
