import { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import { Outlet } from "react-router-dom";
import api from "../../api/axios";

export default function ResaurantDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [restaurantProfile, setRestaurantProfile] = useState(null);

  useEffect(() => {
    const fetchRestaurantProfile = async () => {
      try {
        const res = await api.get("/restaurant/profile");
        setRestaurantProfile(res?.data?.data || null);
      } catch (error) {
        console.error("Restaurant profile fetch error:", error);
      }
    };

    fetchRestaurantProfile();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Layout */}
      <div
        className={`min-h-screen transition-all duration-300 ${
          collapsed ? "lg:pl-24" : "lg:pl-72"
        }`}
      >
        
        {/* Header */}
        <Header
          collapsed={collapsed}
          restaurantProfile={restaurantProfile}
        />

        {/* Page Content */}
        <main className="pt-[78px]">
          <div className="min-h-[calc(100vh-78px)] bg-white p-4 sm:p-6">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}