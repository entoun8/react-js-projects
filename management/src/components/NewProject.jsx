import Input from "./Input";
import React, { useRef } from "react";
import Modal from "./Modal";

const NewProject = ({ onAddProject }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  const handleSave = () => {
    if (
      title.current.value === "" ||
      description.current.value === "" ||
      dueDate.current.value === ""
    ) {
      modal.current.open();
      return;
    }

    const newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      id: Math.random(),
    };

    onAddProject(newProject);
  };

  return (
    <div className="col-span-2 md:col-span-3 mt-20 ml-3 mr-10">
      <div className="flex justify-end flex-col lg:flex-row text-center">
        <div className="btn mr-1 bg-white text-black hover:bg-white">
          Cancel
        </div>
        <div className="btn" onClick={handleSave}>
          Save
        </div>
      </div>
      <div>
        <Modal ref={modal} />
        <Input label="Title" ref={title} type="text" />
        <Input label="Description" ref={description} textArea={true} />
        <Input label="Due date" ref={dueDate} type="date" />
      </div>
    </div>
  );
};

export default NewProject;
