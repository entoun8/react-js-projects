const Loader: React.FC = () => (
  <div className="flex flex-col items-center space-y-4 animate-pulse">
    <div className="w-16 h-16 border-4 border-t-indigo-400 border-gray-700 rounded-full"></div>
    <p className="text-lg">Loading questions...</p>
  </div>
);

export default Loader;
