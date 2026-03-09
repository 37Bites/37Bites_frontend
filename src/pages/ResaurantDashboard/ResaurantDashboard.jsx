import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import { Outlet } from "react-router-dom";

export default function ResaurantDashboard() {
  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      <Sidebar />

      <div className="flex flex-col flex-1 lg:ml-72 min-w-0">
        <div className="fixed top-0 left-0 lg:left-72 right-0 z-40 h-16">
          <Header />
        </div>

        <main className="flex-1 mt-16 p-4 sm:p-5 md:p-6 bg-slate-50 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}