import { Outlet } from "react-router";
import Header from "./Header";

const SharedLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
