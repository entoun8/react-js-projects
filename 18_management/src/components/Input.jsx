import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textArea, ...props }, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor="title" className="block font-bold uppercase">
        {label}
      </label>
      {textArea ? (
        <textarea ref={ref} className="bg-zinc-300 w-full p-2" {...props} />
      ) : (
        <input ref={ref} className="bg-zinc-300 w-full p-2" {...props} />
      )}
    </div>
  );
});

export default Input;
