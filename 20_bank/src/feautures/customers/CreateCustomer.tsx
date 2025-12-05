import { useState } from "react";
import { store } from "../../store";
import { useAppDispatch } from "../../hooks/redux";
import { createCustomer } from "./customerSlice";

const CreateCustomer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !nationalId) {
      return;
    }

    dispatch(createCustomer(fullName, nationalId));
    console.log(store.getState());
  };

  return (
    <div className="w-full max-w-lg px-4">
      {/* Form Section */}
      <div className="relative group">
        {/* Form glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

        <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hover:bg-white/[0.05] transition-all duration-300 hover:border-white/20 flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="p-6 flex-1">
              <div className="space-y-6">
                <div className="group/field">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-200 mb-3 group-focus-within/field:text-blue-400 transition-colors duration-200"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      className="w-full bg-gray-800/30 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 backdrop-blur-sm transition-all duration-300 text-lg hover:bg-gray-800/40 hover:border-gray-500/70"
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullName}
                      placeholder="Enter your full name"
                      required
                    />
                    {/* Input glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="group/field">
                  <label
                    htmlFor="nationalId"
                    className="block text-sm font-semibold text-gray-200 mb-3 group-focus-within/field:text-blue-400 transition-colors duration-200"
                  >
                    National ID
                  </label>
                  <div className="relative">
                    <input
                      id="nationalId"
                      type="text"
                      className="w-full bg-gray-800/30 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 backdrop-blur-sm transition-all duration-300 text-lg hover:bg-gray-800/40 hover:border-gray-500/70"
                      onChange={(e) => setNationalId(e.target.value)}
                      value={nationalId}
                      placeholder="Enter your national ID"
                      required
                    />
                    {/* Input glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button at bottom of card */}
            <div className="p-6 pt-0">
              <div className="relative group/btn">
                {/* Button glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl blur opacity-30 group-hover/btn:opacity-60 transition duration-500 group-disabled/btn:opacity-10"></div>

                <button
                  type="submit"
                  disabled={!fullName || !nationalId}
                  className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-600 disabled:from-gray-700 disabled:via-gray-700 disabled:to-gray-700 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                  <span className="relative z-10">🚀 Create Account</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Security Notice */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-3 bg-gray-800/20 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-600/30 shadow-lg hover:bg-gray-800/30 hover:border-gray-500/50 transition-all duration-300">
          <svg
            className="w-5 h-5 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-300 text-sm font-medium">
            🔒 Bank-grade security & encryption
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomer;
