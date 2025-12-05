import React from "react";

const Error = ({ error }) => {
  return (
    <div className="text-7xl text-center mt-28 text-red-500 mx-5 mb-2">
      {error}
    </div>
  );
};

export default Error;
