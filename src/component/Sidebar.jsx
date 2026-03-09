import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const BASE = "/ResaurantDashboard";

  const menuPaths = useMemo(
    () => [
      `${BASE}/menu/all-items`,
      `${BASE}/menu/add-item`,
      `${BASE}/menu/premium-items`,
      `${BASE}/menu/combo-items`,
    ],
    []
  );

  const deliveryPaths = useMemo(
    () => [
      `${BASE}/delivery/riders`,
      `${BASE}/delivery/live-tracking`,
      `${BASE}/delivery/zones`,
      `${BASE}/delivery/charges`,
    ],
    []
  );

  useEffect(() => {
    if (menuPaths.includes(location.pathname)) {
      setDropdown("menu");
    } else if (deliveryPaths.includes(location.pathname)) {
      setDropdown("delivery");
    }
  }, [location.pathname, menuPaths, deliveryPaths]);

  const toggle = (name) => {
    setDropdown((prev) => (prev === name ? null : name));
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

  const dropdownButtonClass = (isActiveGroup) =>
    `flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-200 ${
      isActiveGroup
        ? "bg-orange-500/50 text-white"
        : "hover:bg-orange-500/70 text-white"
    }`;

  const isMenuActive = menuPaths.includes(location.pathname);
  const isDeliveryActive = deliveryPaths.includes(location.pathname);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed left-4 top-4 z-[60] rounded-xl bg-orange-500 p-2.5 text-white shadow-lg lg:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[280px] transform overflow-hidden bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 text-white shadow-2xl transition-transform duration-300 sm:w-72 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo / Header */}
        <div className="border-b border-orange-400/60 bg-white/5 px-5 py-5 backdrop-blur-sm sm:px-6">
          <h1 className="text-xl font-extrabold tracking-wide sm:text-2xl">
            37BITES
          </h1>
          <p className="mt-1 text-xs text-orange-100">Restaurant Admin Panel</p>
        </div>

        {/* Scroll Content */}
        <div className="no-scrollbar h-[calc(100vh-88px)] space-y-6 overflow-y-auto px-3 py-4 sm:px-4">
          {/* MAIN */}
          <div>
            <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-orange-200">
              Main
            </h2>

            <div className="space-y-2">
              <NavLink
                to={BASE}
                end
                className={linkClass}
                onClick={closeSidebar}
              >
                <LayoutDashboard size={18} /> Dashboard
              </NavLink>

              <NavLink
                to={`${BASE}/orders`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <ClipboardList size={18} /> Orders
              </NavLink>

              <NavLink
                to={`${BASE}/live-orders`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Radio size={18} /> Live Orders
              </NavLink>

              <NavLink
                to={`${BASE}/customers`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Users size={18} /> Customers
              </NavLink>

              <NavLink
                to={`${BASE}/reviews`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Star size={18} /> Reviews
              </NavLink>

              <NavLink
                to={`${BASE}/bookings`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <CalendarDays size={18} /> Table Booking
              </NavLink>
            </div>
          </div>

          {/* MENU MANAGEMENT */}
          <div>
            <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-orange-200">
              Menu Management
            </h2>

            <div className="space-y-2">
              <button
                onClick={() => toggle("menu")}
                className={dropdownButtonClass(isMenuActive)}
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
                <div className="mt-1 space-y-1">
                  <NavLink
                    to={`${BASE}/menu/all-items`}
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • All Items
                  </NavLink>
                  <NavLink
                    to={`${BASE}/menu/add-item`}
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Add Item
                  </NavLink>
                  <NavLink
                    to={`${BASE}/menu/premium-items`}
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Premium Items
                  </NavLink>
                  <NavLink
                    to={`${BASE}/menu/combo-items`}
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Combo Items
                  </NavLink>
                </div>
              )}

              <NavLink
                to={`${BASE}/categories`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Grid2x2 size={18} /> Categories
              </NavLink>

              <NavLink
                to={`${BASE}/addons`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Package size={18} /> Addons
              </NavLink>

              <NavLink
                to={`${BASE}/offers`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Percent size={18} /> Offers & Discounts
              </NavLink>

              <NavLink
                to={`${BASE}/inventory`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Warehouse size={18} /> Inventory / Stock
              </NavLink>

              <NavLink
                to={`${BASE}/kitchen-display`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <ChefHat size={18} /> Kitchen Display
              </NavLink>
            </div>
          </div>

          {/* DELIVERY */}
          <div>
            <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-orange-200">
              Delivery
            </h2>

            <div className="space-y-2">
              <button
                onClick={() => toggle("delivery")}
                className={dropdownButtonClass(isDeliveryActive)}
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
                <div className="mt-1 space-y-1">
                  <NavLink
                    to={`${BASE}/delivery/riders`}
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Riders
                  </NavLink>
                  <NavLink
                    to={`${BASE}/delivery/live-tracking`}
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Live Tracking
                  </NavLink>
                  <NavLink
                    to={`${BASE}/delivery/zones`}
                    className={subLinkClass}
                    onClick={closeSidebar}
                  >
                    • Delivery Zones
                  </NavLink>
                  <NavLink
                    to={`${BASE}/delivery/charges`}
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
            <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-orange-200">
              Business
            </h2>

            <div className="space-y-2">
              <NavLink
                to={`${BASE}/analytics`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <BarChart3 size={18} /> Analytics
              </NavLink>

              <NavLink
                to={`${BASE}/payments`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <CreditCard size={18} /> Payments / Payouts
              </NavLink>

              <NavLink
                to={`${BASE}/invoices`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Receipt size={18} /> Taxes & Invoices
              </NavLink>

              <NavLink
                to={`${BASE}/messages`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <MessageCircle size={18} /> Messages
              </NavLink>
            </div>
          </div>

          {/* SETTINGS */}
          <div>
            <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-orange-200">
              Restaurant Settings
            </h2>

            <div className="space-y-2">
              <NavLink
                to={`${BASE}/restaurant-profile`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Store size={18} /> Restaurant Profile
              </NavLink>

              <NavLink
                to={`${BASE}/staff-roles`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <UserCog size={18} /> Staff & Roles
              </NavLink>

              <NavLink
                to={`${BASE}/notifications`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Bell size={18} /> Notifications
              </NavLink>

              <NavLink
                to={`${BASE}/settings`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Settings size={18} /> General Settings
              </NavLink>
            </div>
          </div>

          {/* EXTRA */}
          <div>
            <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-orange-200">
              Extra
            </h2>

            <div className="space-y-2">
              <NavLink
                to={`${BASE}/tools`}
                className={linkClass}
                onClick={closeSidebar}
              >
                <Wrench size={18} /> Tools
              </NavLink>

              <NavLink
                to={`${BASE}/support`}
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