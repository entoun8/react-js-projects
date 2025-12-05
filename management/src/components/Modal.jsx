import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({}, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="p-5 rounded-lg">
      <h2 className="text-center text-red-800 text-3xl mb-2">Invalid Inputs</h2>
      <p className="text-xl mb-3">
        Oops..looks like you forgot to enter a value
      </p>
      <form method="dialog">
        <button className="btn">Cancel</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
