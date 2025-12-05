import { useState } from "react";
const stepsInfo = ["learn React", "Apply for jobs", "Invest your new income"];

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step >= 3) {
      return;
    }

    setStep((step) => step + 1);
  };

  const handlePrevious = () => {
    if (step <= 1) {
      return;
    }

    setStep((step) => step - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200 px-4">
      <div className="bg-white p-6 rounded-3xl shadow-xl w-full max-w-md space-y-6">
        <div className="flex justify-between text-sm text-gray-500 font-medium">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
            1
          </span>
          <span
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              step >= 2
                ? "bg-blue-500 text-white"
                : "border border-blue-500 text-black"
            } `}
          >
            2
          </span>
          <span
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              step >= 3
                ? "bg-blue-500 text-white"
                : "border border-blue-500 text-black"
            } `}
          >
            3
          </span>
        </div>

        <div className="text-center text-lg font-semibold text-gray-700">
          Step {step}: {stepsInfo[step - 1]}
        </div>

        <div className="flex justify-between">
          <button
            className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
