import React from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { useGlobalContext } from "./Context";

function App() {
  const { isSidebarOpened, isModalOpened } = useGlobalContext();

  return (
    <div className="bg-blue-200 h-screen">
      <Home />
      {isSidebarOpened && <Sidebar />}
      {isModalOpened && <Modal />}
    </div>
  );
}

export default App;
