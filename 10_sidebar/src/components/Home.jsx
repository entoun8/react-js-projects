import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className={`p-2`} onClick={openSidebar}>
        <FaBars className="text-2xl" />
      </button>
      <button
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-2 text-lg rounded-xl hover:bg-gray-900"
        onClick={openModal}
      >
        Show Modal
      </button>
    </main>
  );
};

export default Home;
