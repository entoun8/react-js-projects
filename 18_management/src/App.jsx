import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjectId: null,
      };
    });
  };

  const handleAddProject = (newProject) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjectId: id,
      };
    });
  };

  const handleDeleteProject = () => {
    let newProject = projectState.projects.filter((project) => {
      return project.id !== projectState.selectProjectId;
    });

    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: newProject,
        selectProjectId: undefined,
      };
    });
  };

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      let newTask = {
        id: Math.random(),
        text: text,
        projectId: prevState.selectProjectId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleClearTask = (id) => {
    let newTasks = projectState.tasks.filter((task) => {
      return task.id !== id;
    });

    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: newTasks,
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectProjectId
  );

  const currentTasks = projectState.tasks.filter((task) => {
    return task.projectId === projectState.selectProjectId;
  });

  let content = (
    <SelectedProject
      selectedProject={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      tasks={currentTasks}
      onClearTask={handleClearTask}
    />
  );

  if (projectState.selectProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  }

  return (
    <div className="grid grid-cols-4">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </div>
  );
}

export default App;
