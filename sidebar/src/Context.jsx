import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpened(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpened(false);
  };
  const openModal = () => {
    setIsModalOpened(true);
  };
  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpened,
        isModalOpened,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
