import { useState } from "react";
import text from "./data";

function App() {
  const [lorems, setLorems] = useState([]);
  const [number, setNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDisplay = () => {
    let loremNum = number;

    if (loremNum > 9) {
      loremNum = 9;
    }

    if (loremNum < 0) {
      loremNum = 0;
    }

    const newArr = text.slice(0, loremNum);

    setLorems(newArr);
  };

  return (
    <div className="bg-blue-50 pt-16 pb-3 text-center min-h-screen">
      <h1 className="font-bold text-2xl mb-5">TIRED OF BORING LOREM IPSUM?</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <span className="font-semibold mr-1">Paragraph: </span>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-11 font-semibold p-1  rounded-md mr-3"
        />
        <button
          type="submit"
          onClick={handleDisplay}
          className="bg-blue-500 hover:bg-blue-400 py-1 px-3 rounded-lg font-semibold mt-3"
        >
          GENERATE
        </button>
      </form>
      <ul className="mx-16">
        {lorems.map((lorem, index) => (
          <li key={index} className="mb-8 last:mb-0">
            {lorem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
