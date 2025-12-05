import React from "react";
import sublinks from "../data";
import { useGlobalContext } from "../Contex";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`sm:hidden fixed top-24 bg-white left-1/2 -translate-x-1/2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-[90%] h-[80%] p-5" : "w-0 h-0"
      }`}
    >
      <button
        className="absolute right-4 top-2 text-red-600 text-xl font-bold"
        onClick={closeSidebar}
      >
        X
      </button>
      <div className="mt-6">
        {sublinks.map((item, index) => {
          const { page, links } = item;
          return (
            <div key={index} className="mb-5">
              <h2 className="capitalize mb-1 font-bold text-lg">{`${page}:`}</h2>
              <ul className="grid grid-cols-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>
                      <div className="flex gap-2 items-center hover:text-slate-600">
                        <span>{link.icon}</span>
                        <span className="capitalize">{link.label}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
