import { useState } from "react";
import Values from "values.js";
import SingleColor from "./component/SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
      console.log(list);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <section className="bg-blue-50 min-h-screen p-4">
      <form onSubmit={handleSubmit} className="mb-5">
        <label htmlFor="generator" className="font-semibold mr-3">
          Color Generator
        </label>
        <input
          type="text"
          id="generator"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="p-1"
          placeholder="Enter color (e.g., #f15025)"
        />
        <button type="submit" className="p-1 bg-blue-400 text-white">
          Submit
        </button>
        {error && (
          <p className="text-red-600 ml-3 inline-block">
            Invalid color value
          </p>
        )}
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  justify-center content-center">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} />
        ))}
      </div>
    </section>
  );
}

export default App;
