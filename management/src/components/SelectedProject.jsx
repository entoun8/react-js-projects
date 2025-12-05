import { useState } from "react";

const SelectedProject = ({
  selectedProject,
  onDeleteProject,
  onAddTask,
  tasks,
  onClearTask,
}) => {
  const [text, setText] = useState("");

  const handleAddTask = () => {
    onAddTask(text);
    setText("");
  };

  return (
    <div className="col-span-2 md:col-span-3 mt-20 mx-3">
      <div className=" mb-5 border-b pb-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">{selectedProject.title}</h1>
          <button className="btn" onClick={onDeleteProject}>
            Delete
          </button>
        </div>
        <span className="block opacity-55 mb-2">{selectedProject.dueDate}</span>
        <p className="text-lg">{selectedProject.description}</p>
      </div>
      <div>
        <label className="block mb-2">Tasks</label>
        <div className="flex justify-between items-center gap-2 mb-2">
          <input
            type="text"
            className="bg-zinc-300 w-full p-2"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button className="btn" onClick={handleAddTask}>
            Add
          </button>
        </div>
        {tasks.length === 0 ? (
          <p>The project does not have any tasks yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => {
              return (
                <li
                  className=" bg-gray-100 mt-3 p-3 capitalize flex justify-between"
                  key={task.id}
                >
                  <p>{task.text}</p>
                  <button onClick={() => onClearTask(task.id)}>Clear</button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectedProject;
