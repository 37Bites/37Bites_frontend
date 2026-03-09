import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  UtensilsCrossed,
  Tags,
  Star,
  BarChart3,
  Settings,
  Store,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { name: "Orders", icon: ShoppingBag, path: "/admin/orders" },
  { name: "Menu", icon: UtensilsCrossed, path: "/admin/menu" },
  { name: "Offers", icon: Tags, path: "/admin/offers" },
  { name: "Reviews", icon: Star, path: "/admin/reviews" },
  { name: "Analytics", icon: BarChart3, path: "/admin/analytics" },
  { name: "Restaurants", icon: Store, path: "/admin/restaurants" },
  { name: "Customers", icon: Users, path: "/admin/customers" },
  { name: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <div
      className={`h-screen bg-slate-950 text-white flex flex-col border-r border-slate-800 transition-all duration-300 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Top Logo Section */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-slate-800">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-orange-500/30">
            F
          </div>

          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold tracking-wide">Food Admin</h2>
              <p className="text-xs text-slate-400">Restaurant Panel</p>
            </div>
          )}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex w-8 h-8 items-center justify-center rounded-lg bg-slate-900 hover:bg-slate-800 transition"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        {!collapsed && (
          <p className="text-xs uppercase tracking-widest text-slate-500 px-3 mb-2">
            Main Menu
          </p>
        )}

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`w-full flex items-center ${
                collapsed ? "justify-center" : "justify-start"
              } gap-3 px-3 py-3 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <Icon
                size={20}
                className={`${
                  isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                }`}
              />
              {!collapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="p-3 border-t border-slate-800">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-between"
          } bg-slate-900 rounded-2xl p-3`}
        >
          {!collapsed && (
            <div>
              <p className="text-sm font-semibold">Admin Panel</p>
              <p className="text-xs text-slate-400">Online</p>
            </div>
          )}

          <button className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}