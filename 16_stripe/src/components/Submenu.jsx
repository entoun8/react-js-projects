import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../Contex";

const Submenu = () => {
  const container = useRef(null);
  const {
    position,
    isSubmenuOpen,
    page: { page, links },
  } = useGlobalContext();

  useEffect(() => {
    const subMenu = container.current;
    const { center, bottom } = position;
    const subMenuWidth = subMenu.getBoundingClientRect().width;

    subMenu.style.left = `${center - subMenuWidth / 2}px`;
    subMenu.style.top = `${bottom}px`;
  }, [position]);

  return (
    <div className={`submenu ${isSubmenuOpen ? "" : "hidden"}`} ref={container}>
      <h2 className="capitalize font-semibold mb-1">{`${page}:`}</h2>
      <ul className="grid grid-cols-2 gap-3">
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
};

export default Submenu;
