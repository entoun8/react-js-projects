import React from "react";
import { links } from "../data";
import { useGlobalContext } from "../Context";

const Sidebar = () => {
  const { closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`h-screen w-[100%] sm:w-[50%] md:w-[40%] lg:w-[30%] bg-white absolute left-0 top-0 p-3`}
    >
      <header className="flex justify-between items-center text-2xl mb-6">
        <h1>
          Coding <span className="text-blue-300">Addict</span>
        </h1>
        <button
          className="text-red-600 font-semibold hover:text-red-500"
          onClick={closeSidebar}
        >
          X
        </button>
      </header>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a className="flex gap-3 items-center mb-4 text-gray-600 cursor-pointer hover:text-gray-500 text-xl">
                <span>{link.icon}</span>
                <p>{link.text}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
