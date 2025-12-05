import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="text-center space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-12 border border-stone-200">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="text-3xl font-bold text-stone-800 mb-4">
          Your cart is empty
        </h2>
        <p className="text-xl text-stone-600 mb-8">
          Start adding some delicious pizzas to get started! 🍕
        </p>
        <Link 
          to="/menu" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          ← Browse our menu
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
