import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Submenu from "./components/Submenu";

function App() {
  return (
    <div className="h-screen bg-blue-600 relative">
      <Nav />
      <SideBar />
      <Submenu />
      <Hero />
    </div>
  );
}

export default App;
