import Map from "../components/Map";
import SideBar from "../components/SideBar";

const AppPage: React.FC = () => {
  return (
    <main className="flex flex-col lg:flex-row h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <SideBar />
      <div className="flex-1 relative">
        <Map />
      </div>
    </main>
  );
};

export default AppPage;
