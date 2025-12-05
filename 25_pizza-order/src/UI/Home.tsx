import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="text-center space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-stone-200">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 leading-tight">
          The best pizza.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        <div className="max-w-md mx-auto">
          <CreateUser />
        </div>

        {/* <div className="mt-8 pt-8 border-t border-stone-200">
          <Link 
            to="/menu" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Browse Menu 
            <span className="text-xl">🍕</span>
          </Link>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-shadow duration-200">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="font-bold text-stone-800 mb-2">Fast Delivery</h3>
          <p className="text-stone-600">
            Hot pizza delivered in 30 minutes or less
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-shadow duration-200">
          <div className="text-3xl mb-3">🌟</div>
          <h3 className="font-bold text-stone-800 mb-2">Premium Quality</h3>
          <p className="text-stone-600">
            Fresh ingredients, authentic Italian recipes
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-shadow duration-200">
          <div className="text-3xl mb-3">💯</div>
          <h3 className="font-bold text-stone-800 mb-2">100% Satisfaction</h3>
          <p className="text-stone-600">
            Love it or your money back, guaranteed
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
