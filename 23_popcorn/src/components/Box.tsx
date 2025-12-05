import { useState, type ReactNode } from "react";

interface BoxProps {
  title?: string;
  children: ReactNode;
}

const Box = ({ title, children }: BoxProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg flex flex-col">
      {title && (
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="self-start mb-3 text-red-400 hover:text-red-300 transition"
        >
          {isOpen ? "−" : "+"} {title}
        </button>
      )}
      {isOpen && children}
    </div>
  );
};

export default Box;
