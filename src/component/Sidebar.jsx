import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  ClipboardList,
  UtensilsCrossed,
  Grid2x2,
  Package,
  Percent,
  Star,
  Users,
  Bike,
  BarChart3,
  Store,
  CreditCard,
  UserCog,
  Bell,
  Settings,
  Wrench,
  MessageCircle,
  Radio,
  Receipt,
  Warehouse,
  ChefHat,
  HelpCircle,
  CalendarDays,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggle = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
      isActive
        ? "bg-white text-orange-600 font-semibold shadow-md"
        : "text-white hover:bg-orange-500/70"
    }`;

  const subLinkClass = ({ isActive }) =>
    `block pl-11 pr-4 py-2 text-sm rounded-lg transition-all duration-200 ${
      isActive
        ? "text-white font-semibold bg-orange-500/40"
        : "text-orange-100 hover:text-white hover:bg-orange-500/30"
    }`;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-orange-500 text-white p-2.5 rounded-xl shadow-lg"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[280px] sm:w-72 overflow-hidden bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 text-white shadow-2xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo / Header */}
        <div className="px-5 sm:px-6 py-5 border-b border-orange-400/60 bg-white/5 backdrop-blur-sm">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide">
            37BITES
          </h1>
          <p className="text-xs text-orange-100 mt-1">Restaurant Admin Panel</p>
        </div>

        {/* Scroll Content */}
        <div className="h-[calc(100vh-88px)] overflow-y-auto no-scrollbar px-3 sm:px-4 py-4 space-y-6">
          {/* MAIN */}
          <div>
            <h2 className="text-xs uppercase text-orange-200 mb-3 font-semibold tracking-wider px-1">
              Main
            </h2>

            <div className="space-y-2">
              <NavLink
                to="/ResaurantDashboard"
                className={linkClass}
                onClick={closeSidebar}
              >
                <LayoutDashboard size={18} /> Dashboard
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/orders"
                className={linkClass}
                onClick={closeSidebar}
              >
                <ClipboardList size={18} /> Orders
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/live-orders"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Radio size={18} /> Live Orders
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/customers"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Users size={18} /> Customers
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/reviews"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Star size={18} /> Reviews
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/bookings"
                className={linkClass}
                onClick={closeSidebar}
              >
                <CalendarDays size={18} /> Table Booking
              </NavLink>
            </div>
          </div>

          {/* MENU MANAGEMENT */}
          <div>
            <h2 className="text-xs uppercase text-orange-200 mb-3 font-semibold tracking-wider px-1">
              Menu Management
            </h2>

            <div className="space-y-2">
              <button
                onClick={() => toggle("menu")}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-orange-500/70 transition-all duration-200"
              >
                <span className="flex items-center gap-3 text-sm">
                  <UtensilsCrossed size={18} /> Menu
                </span>
                {dropdown === "menu" ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {dropdown === "menu" && (
                <div className="space-y-1 mt-1">
                  <NavLink
                    to="/ResaurantDashboard/menu/all-items"
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • All Items
                  </NavLink>
                  <NavLink
                    to="/ResaurantDashboard/menu/add-item"
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Add Item
                  </NavLink>
                  <NavLink
                    to="/ResaurantDashboard/menu/premium-items"
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Premium Items
                  </NavLink>
                  <NavLink
                    to="/ResaurantDashboard/menu/combo-items"
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Combo Items
                  </NavLink>
                </div>
              )}

              <NavLink
                to="/ResaurantDashboard/categories"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Grid2x2 size={18} /> Categories
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/addons"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Package size={18} /> Addons
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/offers"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Percent size={18} /> Offers & Discounts
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/inventory"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Warehouse size={18} /> Inventory / Stock
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/kitchen-display"
                className={linkClass}
                onClick={closeSidebar}
              >
                <ChefHat size={18} /> Kitchen Display
              </NavLink>
            </div>
          </div>

          {/* DELIVERY */}
          <div>
            <h2 className="text-xs uppercase text-orange-200 mb-3 font-semibold tracking-wider px-1">
              Delivery
            </h2>

            <div className="space-y-2">
              <button
                onClick={() => toggle("delivery")}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-orange-500/70 transition-all duration-200"
              >
                <span className="flex items-center gap-3 text-sm">
                  <Bike size={18} /> Delivery Management
                </span>
                {dropdown === "delivery" ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {dropdown === "delivery" && (
                <div className="space-y-1 mt-1">
                  <NavLink
                    to="/ResaurantDashboard/delivery/riders"
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Riders
                  </NavLink>
                  <NavLink
                    to="/ResaurantDashboard/delivery/live-tracking"
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Live Tracking
                  </NavLink>
                  <NavLink
                    to="/ResaurantDashboard/delivery/zones"
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Delivery Zones
                  </NavLink>
                  <NavLink
                    to="/ResaurantDashboard/delivery/charges"
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Delivery Charges
                  </NavLink>
                </div>
              )}
            </div>
          </div>

          {/* BUSINESS */}
          <div>
            <h2 className="text-xs uppercase text-orange-200 mb-3 font-semibold tracking-wider px-1">
              Business
            </h2>

            <div className="space-y-2">
              <NavLink
                to="/ResaurantDashboard/analytics"
                className={linkClass}
                onClick={closeSidebar}
              >
                <BarChart3 size={18} /> Analytics
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/payments"
                className={linkClass}
                onClick={closeSidebar}
              >
                <CreditCard size={18} /> Payments / Payouts
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/invoices"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Receipt size={18} /> Taxes & Invoices
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/messages"
                className={linkClass}
                onClick={closeSidebar}
              >
                <MessageCircle size={18} /> Messages
              </NavLink>
            </div>
          </div>

          {/* SETTINGS */}
          <div>
            <h2 className="text-xs uppercase text-orange-200 mb-3 font-semibold tracking-wider px-1">
              Restaurant Settings
            </h2>

            <div className="space-y-2">
              <NavLink
                to="/ResaurantDashboard/restaurant-profile"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Store size={18} /> Restaurant Profile
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/staff-roles"
                className={linkClass}
                onClick={closeSidebar}
              >
                <UserCog size={18} /> Staff & Roles
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/notifications"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Bell size={18} /> Notifications
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/settings"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Settings size={18} /> General Settings
              </NavLink>
            </div>
          </div>

          {/* EXTRA */}
          <div>
            <h2 className="text-xs uppercase text-orange-200 mb-3 font-semibold tracking-wider px-1">
              Extra
            </h2>

            <div className="space-y-2">
              <NavLink
                to="/ResaurantDashboard/tools"
                className={linkClass}
                onClick={closeSidebar}
              >
                <Wrench size={18} /> Tools
              </NavLink>

              <NavLink
                to="/ResaurantDashboard/support"
                className={linkClass}
                onClick={closeSidebar}
              >
                <HelpCircle size={18} /> Support / Help
              </NavLink>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}