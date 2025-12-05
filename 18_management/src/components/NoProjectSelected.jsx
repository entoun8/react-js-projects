import React from "react";
import noProjectImage from "../assets/no-projects.png";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="col-span-2 md:col-span-3 mx-3 flex flex-col justify-center items-center text-center">
      <img src={noProjectImage} className="w-20 h-20 mb-2" alt="" />
      <h2 className="font-bold text-xl mb-3">No Project Selected</h2>
      <p className="mb-3">Select a project or get started with a new one</p>
      <button className="btn" onClick={onStartAddProject}>
        Create New Project
      </button>
    </div>
  );
};

export default NoProjectSelected;
