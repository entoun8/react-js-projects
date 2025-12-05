import { useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";

interface SearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const Search = ({ query, setQuery }: SearchProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
      className="bg-gray-700 placeholder-gray-400 text-white px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-red-500 transition"
    />
  );
};

export default Search;
