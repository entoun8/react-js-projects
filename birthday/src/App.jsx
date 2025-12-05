import { useState } from "react";
import Birthdays from "./components/Birthdays";
import data from "./data";

function App() {
  const [birthdays, setBirthdays] = useState(data);

  return (
    <main className="h-screen flex items-center justify-center bg-pink-400">
      <div className="bg-white w-96 p-4 rounded-lg mx-2">
        <h1 className="font-semibold text-xl mb-3">
          {birthdays.length} Birthdays today
        </h1>
        <Birthdays birthdays={birthdays} />
        <button
          className="bg-pink-400 w-full text-white py-2 rounded-md hover:bg-pink-300 transition duration-200 ease-in"
          onClick={() => setBirthdays([])}
        >
          Clear All
        </button>
      </div>
    </main>
  );
}

export default App;
