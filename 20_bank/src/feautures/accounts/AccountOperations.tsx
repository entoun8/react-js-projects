import { useState } from "react";
import Customer from "../customers/Customer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { deposite, withdraw, requestLoan, payLoan } from "./accountSlice";
import Loading from "../../components/Loading";

const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const dispatch = useAppDispatch();
  const balance = useAppSelector((state) => state.account.balance);
  const loan = useAppSelector((state) => state.account.loan);
  const isLoading = useAppSelector((state) => state.account.isLoading);

  const handleDeposite = () => {
    dispatch(deposite({ amount: +depositAmount, currency }));
    setDepositAmount("");
  };

  const handleWithdraw = () => {
    dispatch(withdraw(+withdrawAmount));
    setWithdrawAmount("");
  };

  const handleLoanRequest = () => {
    dispatch(requestLoan(+loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Welcome Section */}
      <Customer />

      {/* Balance Card */}
      <div className="flex justify-center">
        <div className="relative group">
          {/* Balance card glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/[0.06] transition-all duration-500 hover:border-white/30 min-w-[300px] sm:min-w-[400px]">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  {/* Icon shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                  <svg
                    className="w-8 h-8 text-white relative z-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-300 mb-2">
                Current Balance
              </h3>

              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 tracking-tight">
                  ${balance.toLocaleString()}
                </div>

                {/* Balance glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-purple-400/10 rounded-lg blur-sm opacity-60"></div>
              </div>

              <p className="text-gray-400 text-sm font-medium">
                Available for transactions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Operations Grid */}
      <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Deposit Section */}
        <div className="relative group">
          {/* Card glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-emerald-400/30 transition-all duration-500 hover:scale-[1.02] shadow-2xl flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                {/* Icon shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                <svg
                  className="w-6 h-6 text-white relative z-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300">
                Deposit
              </h3>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex-1 mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-emerald-400 transition-colors">
                  Amount
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      id="deposit"
                      type="number"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="w-full bg-gray-800/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/40 hover:border-gray-500/70"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-gray-800/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/40 hover:border-gray-500/70"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>

              <div className="relative group/btn">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl blur opacity-30 group-hover/btn:opacity-60 transition duration-300"></div>
                <button
                  onClick={handleDeposite}
                  disabled={isLoading}
                  className="relative w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white py-3 px-6 rounded-xl font-semibold shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                  <span className="relative z-10">
                    {isLoading ? (
                      <Loading text="Processing..." />
                    ) : (
                      "💰 Deposit Funds"
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Withdraw Section */}
        <div className="relative group">
          {/* Card glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-rose-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-red-400/30 transition-all duration-500 hover:scale-[1.02] shadow-2xl flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-rose-600 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                {/* Icon shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                <svg
                  className="w-6 h-6 text-white relative z-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent group-hover:from-red-200 group-hover:to-rose-200 transition-all duration-300">
                Withdraw
              </h3>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex-1 mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-red-400 transition-colors">
                  Amount
                </label>
                <div className="relative">
                  <input
                    id="withdraw"
                    type="number"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full bg-gray-800/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-red-400/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/40 hover:border-gray-500/70"
                    placeholder="0.00"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/10 to-rose-500/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="relative group/btn">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl blur opacity-30 group-hover/btn:opacity-60 transition duration-300"></div>
                <button 
                  onClick={handleWithdraw}
                  className="relative w-full bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white py-3 px-6 rounded-xl font-semibold shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                  <span className="relative z-10">🏧 Withdraw Funds</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Section */}
        <div className="relative group sm:col-span-2 lg:col-span-1">
          {/* Card glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-blue-400/30 transition-all duration-500 hover:scale-[1.02] shadow-2xl flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                {/* Icon shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                <svg
                  className="w-6 h-6 text-white relative z-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                Request Loan
              </h3>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex-1 mb-6">
                <div className="space-y-4">
                  <div className="group/field">
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within/field:text-blue-400 transition-colors">
                      Loan Amount
                    </label>
                    <div className="relative">
                      <input
                        id="requestLoan"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        className="w-full bg-gray-800/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/40 hover:border-gray-500/70"
                        placeholder="0.00"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within/field:text-blue-400 transition-colors">
                      Purpose
                    </label>
                    <div className="relative">
                      <input
                        id="loanPurpose"
                        type="text"
                        value={loanPurpose}
                        onChange={(e) => setLoanPurpose(e.target.value)}
                        className="w-full bg-gray-800/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/40 hover:border-gray-500/70"
                        placeholder="e.g., Home, Car, Education"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group/btn">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-30 group-hover/btn:opacity-60 transition duration-300"></div>
                <button 
                  onClick={handleLoanRequest}
                  className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                  <span className="relative z-10">🏦 Request Loan</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pay Loan Section - Only show if there's an active loan */}
        {loan > 0 && (
          <div className="relative group sm:col-span-2 lg:col-span-1">
            {/* Card glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-orange-400/30 transition-all duration-500 hover:scale-[1.02] shadow-2xl flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  {/* Icon shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                  <svg
                    className="w-6 h-6 text-white relative z-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent group-hover:from-orange-200 group-hover:to-yellow-200 transition-all duration-300">
                  Pay Loan
                </h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex-1 mb-6">
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <p className="text-sm font-semibold text-gray-300 mb-2">Outstanding Loan</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      ${loan.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="relative group/btn">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl blur opacity-30 group-hover/btn:opacity-60 transition duration-300"></div>
                  <button 
                    onClick={handlePayLoan}
                    className="relative w-full bg-gradient-to-r from-orange-600 to-yellow-700 hover:from-orange-500 hover:to-yellow-600 text-white py-3 px-6 rounded-xl font-semibold shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                    <span className="relative z-10">💳 Pay Off Loan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Security Notice */}
      <div className="text-center">
        <div className="relative group inline-block">
          {/* Security badge glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

          <div className="relative inline-flex items-center gap-3 bg-gray-800/20 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-600/30 shadow-lg hover:bg-gray-800/30 hover:border-gray-500/50 transition-all duration-300">
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
              🔒 Secured with bank-grade 256-bit encryption
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOperations;
