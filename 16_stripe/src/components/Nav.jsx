import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Contex";

const Nav = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent.toLowerCase();
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 8;
    openSubmenu(page, { center, bottom });
  };

  const handleOnMouseOver = (e) => {
    if (!e.target.classList.contains("btn")) {
      closeSubmenu();
    }
  };

  return (
    <header
      className="py-4 px-7 flex justify-between items-center"
      onMouseOver={handleOnMouseOver}
    >
      <h1 className="text-white text-3xl font-semibold">Stripe</h1>
      <button className="text-2xl text-white sm:hidden" onClick={openSidebar}>
        <FaBars />
      </button>
      <ul className="hidden sm:flex gap-2">
        <li>
          <button
            onMouseOver={displaySubMenu}
            className="btn text-white hover:text-slate-100 text-xl"
          >
            Products
          </button>
        </li>
        <li>
          <button
            onMouseOver={displaySubMenu}
            className="btn text-white hover:text-slate-100 text-xl"
          >
            Developers
          </button>
        </li>
        <li>
          <button
            onMouseOver={displaySubMenu}
            className="btn text-white hover:text-slate-100 text-xl"
          >
            Company
          </button>
        </li>
      </ul>
      <button className="hidden sm:block bg-black text-white px-6 py-1 rounded-lg hover:bg-slate-700">
        Sign in
      </button>
    </header>
  );
};

export default Nav;
