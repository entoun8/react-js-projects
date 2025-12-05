import { Outlet } from "react-router";
import AppNav from "./AppNav";

const SideBar: React.FC = () => {
  return (
    <div className="w-full lg:w-96 bg-white/95 backdrop-blur-sm border-r border-slate-200 h-auto lg:h-screen flex flex-col shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="flex items-center justify-center gap-3 mb-1">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-xl font-bold">🌍</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            WorldWise
          </h1>
        </div>
        <p className="text-sm text-slate-600 text-center">Track your global adventures</p>
      </div>
      
      {/* Navigation */}
      <div className="px-6 py-4 border-b border-slate-200">
        <AppNav />
      </div>
      
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto max-h-64 lg:max-h-none">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
