const Sidebar = ({ onStartAddProject, projects, onSelectProject }) => {
  return (
    <div className="bg-black h-screen text-white px-4 pt-9 col-span-2 md:col-span-1">
      <h1 className="font-bold text-xl mb-5">YOUR PROJECTS</h1>
      <button className="btn mb-3" onClick={onStartAddProject}>
        + Add Project
      </button>
      <ul>
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className="mb-2 capitalize text-xl cursor-pointer"
            >
              <button onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
