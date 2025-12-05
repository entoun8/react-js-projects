import { useState } from "react";
import { createOrder } from "../../services/apiRestaurant";
import { redirect, useActionData } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";
import EmptyCart from "../cart/EmptyCart";
import { getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import type { FormErrors, CreateOrderData } from "../../types";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string): boolean =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState<boolean>(false);
  const formErrors = useActionData() as FormErrors | undefined;
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.cart);
  const username = useAppSelector((state) => state.user.username);
  const {
    address,
    status: addressStatus,
    error: addressError,
  } = useAppSelector((state) => state.user);
  const totalCartPrice = useAppSelector(getTotalCartPrice);

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const isLoadingAddress = addressStatus === "loading";

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
        <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
          Ready to order? Let's go! 🍕
        </h2>

        {formErrors?.errors?.general && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {formErrors.errors.general}
          </div>
        )}

        <form method="POST" className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="customer"
              required
              defaultValue={username}
              className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200"
            />
            {formErrors?.errors?.phone && (
              <p className="text-red-600 text-sm mt-1">
                {formErrors.errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              required
              key={address}
              defaultValue={address}
              className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => dispatch(fetchAddress())}
              disabled={isLoadingAddress}
              className="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm disabled:text-stone-400 disabled:cursor-not-allowed"
            >
              {isLoadingAddress ? "⏳ Getting position..." : "📍 Get position"}
            </button>
            {addressError && (
              <p className="text-red-600 text-sm mt-1">{addressError}</p>
            )}
          </div>

          <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="priority"
                id="priority"
                checked={withPriority}
                onChange={(e) => setWithPriority(e.target.checked)}
                className="w-5 h-5 text-orange-600 border-2 border-orange-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="priority" className="font-medium text-stone-800">
                Want to give your order priority? (+20% cost)
              </label>
            </div>
          </div>

          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            Order now from {formatCurrency(totalPrice)} 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (!isValidPhone(data.phone as string)) {
    return {
      errors: {
        phone:
          "Please give us your correct phone number. We might need it to contact you.",
      },
    };
  }

  const order: CreateOrderData = {
    customer: data.customer as string,
    phone: data.phone as string,
    address: data.address as string,
    cart: JSON.parse(data.cart as string),
    priority: data.priority === "on",
  };

  try {
    const newOrder = await createOrder(order);
    return redirect(`/order/${newOrder.id}`);
  } catch {
    return {
      errors: {
        general: "There was a problem placing your order. Please try again.",
      },
    };
  }
};

export default CreateOrder;
