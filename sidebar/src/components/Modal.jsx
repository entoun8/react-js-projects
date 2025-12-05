import React from "react";
import { useGlobalContext } from "../Context";

const Modal = () => {
  const { closeModal } = useGlobalContext();

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-32 z-10">
      <button
        className="absolute right-3 top-1 text-red-600 hover:text-red-500 font-bold"
        onClick={closeModal}
      >
        X
      </button>
      <h2 className="flex items-center justify-center h-full font-semibold text-xl">
        Modal Content
      </h2>
    </div>
  );
};

export default Modal;
