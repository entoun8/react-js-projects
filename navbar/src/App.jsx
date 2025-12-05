import React, { useState } from "react";
import { links, icons } from "./data";
import { FaBars } from "react-icons/fa";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="bg-blue-300 h-screen">
      <header className="sm:flex sm:justify-between sm:items-center p-4 bg-white">
        <div className="flex justify-between">
          <div className="text-xl font-semibold">
            Web Design <span className="text-blue-600">Agency</span>
          </div>
          <button
            className="sm:hidden text-2xl"
            onClick={() => setOpened((oldOpened) => !oldOpened)}
          >
            <FaBars />
          </button>
        </div>
        <nav
          className={`transition-all duration-300 ease-in-out overflow-hidden sm:overflow-visible sm:h-full  ${
            opened ? "h-0" : "h-[128px]"
          }`}
        >
          <ul className="sm:flex pt-2 sm:pt-0">
            {links.map((link) => (
              <li className="sm:mr-2" key={link.id}>
                <a
                  className="hover:text-blue-600 transition duration-500"
                  href={link.url}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:flex">
          {icons.map((icon) => (
            <a href={icon.url} key={icon.id}>
              {icon.icon}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
