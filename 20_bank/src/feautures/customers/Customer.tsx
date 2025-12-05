import { useAppSelector } from "../../hooks/redux";

const Customer = () => {
  const fullName = useAppSelector((store) => store.customer.fullName);

  return (
    <div className="text-center">
      <div className="relative group inline-block mb-6">
        {/* Welcome badge glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

        <div className="relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg hover:bg-white/10 transition-all duration-300">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
            <span className="text-white text-sm relative z-10">👋</span>
          </div>
          <span className="text-white font-semibold">
            Welcome back, {fullName}!
          </span>
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent mb-4 tracking-tight">
        Account Dashboard
      </h2>
      <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
        Manage your finances with security and ease
      </p>
    </div>
  );
};

export default Customer;
