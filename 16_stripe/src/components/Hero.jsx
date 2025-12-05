import React from "react";
import { useGlobalContext } from "../Contex";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div
      className="h-[calc(100vh-68px)] bg-red-600"
      onMouseDown={closeSubmenu}
    ></div>
  );
};

export default Hero;
