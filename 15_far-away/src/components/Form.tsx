import { useState } from "react";
import type { FormProps } from "../types";

const Form = ({ onAddItem }: FormProps) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddItem(name, number);
    setName("");
    setNumber(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-gray-50 p-6 rounded-xl shadow-md space-y-4"
    >
      <label className="block text-lg font-medium">
        What do you need for your trip?
      </label>
      <input
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        type="number"
        min={1}
        max={20}
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(41,144,255)]"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(41,144,255)]"
      />
      <input
        type="submit"
        value="Add Item"
        className="w-full bg-[rgb(41,144,255)] text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
      />
    </form>
  );
};

export default Form;
