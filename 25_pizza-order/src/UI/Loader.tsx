const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl flex items-center gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-orange-500 border-t-transparent"></div>
        <span className="text-lg font-medium text-stone-700">Loading delicious pizzas...</span>
      </div>
    </div>
  );
};

export default Loader;
