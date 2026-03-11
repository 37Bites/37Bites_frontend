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
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

export default function Sidebar({ collapsed = false, setCollapsed = () => {} }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  const BASE = "/ResaurantDashboard";
  const isCollapsed = collapsed;

  const menuPaths = useMemo(
    () => [
      `${BASE}/menu/all-items`,
      `${BASE}/menu/add-item`,
      `${BASE}/menu/premium-items`,
      `${BASE}/menu/combo-items`,
    ],
    [BASE]
  );

  const deliveryPaths = useMemo(
    () => [
      `${BASE}/delivery/riders`,
      `${BASE}/delivery/live-tracking`,
      `${BASE}/delivery/zones`,
      `${BASE}/delivery/charges`,
    ],
    [BASE]
  );

  useEffect(() => {
    if (menuPaths.includes(location.pathname)) {
      setDropdown("menu");
    } else if (deliveryPaths.includes(location.pathname)) {
      setDropdown("delivery");
    }
  }, [location.pathname, menuPaths, deliveryPaths]);

  const toggleDropdown = (name) => {
    if (isCollapsed) return;
    setDropdown((prev) => (prev === name ? null : name));
  };

  const closeMobileSidebar = () => setMobileOpen(false);

  const linkClass = ({ isActive }) =>
    `group relative flex items-center ${
      isCollapsed ? "justify-center px-2" : "gap-3 px-4"
    } py-3 rounded-2xl text-sm transition-all duration-200 ${
      isActive
        ? "bg-white text-orange-600 font-semibold shadow-md"
        : "text-white/90 hover:bg-white/10 hover:text-white"
    }`;

  const subLinkClass = ({ isActive }) =>
    `block rounded-xl ${
      isCollapsed ? "px-2 text-center" : "pl-11 pr-3"
    } py-2 text-sm transition ${
      isActive
        ? "bg-white/10 text-white font-medium"
        : "text-orange-100 hover:bg-white/5 hover:text-white"
    }`;

  const sectionTitleClass = `mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-200/80 ${
    isCollapsed ? "text-center" : ""
  }`;

  const dropdownButtonClass = (isActiveGroup) =>
    `group relative flex w-full items-center ${
      isCollapsed ? "justify-center px-2" : "justify-between px-4"
    } rounded-2xl py-3 text-sm transition-all duration-200 ${
      isActiveGroup
        ? "bg-white/10 text-white"
        : "text-white/90 hover:bg-white/10 hover:text-white"
    }`;

  const renderTooltip = (label) => {
    if (!isCollapsed) return null;

    return (
      <span className="pointer-events-none absolute left-[calc(100%+12px)] top-1/2 z-50 hidden -translate-y-1/2 whitespace-nowrap rounded-xl bg-gray-900 px-3 py-2 text-xs font-medium text-white shadow-xl group-hover:block">
        {label}
      </span>
    );
  };

  const isMenuActive = menuPaths.includes(location.pathname);
  const isDeliveryActive = deliveryPaths.includes(location.pathname);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-orange-500 p-2.5 text-white shadow-lg lg:hidden"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-[2px] lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 h-screen ${
          isCollapsed ? "w-24" : "w-72"
        } transform overflow-hidden border-r border-white/10 bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 text-white shadow-2xl transition-all duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Top */}
        <div
          className={`flex items-center border-b border-white/10 ${
            isCollapsed ? "justify-center px-3 py-5" : "justify-between px-4 py-5"
          }`}
        >
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "gap-3"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1 shadow-md">
              <img
                src="/logo.jpeg"
                alt="37BITES Logo"
                className="h-10 w-10 rounded-xl object-contain"
              />
            </div>

            {!isCollapsed && (
              <div>
                <h2 className="text-base font-bold tracking-wide text-white">
                  37BITES
                </h2>
                <p className="text-xs text-orange-100">Restaurant Admin Panel</p>
              </div>
            )}
          </div>

          {!isCollapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="hidden rounded-xl border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 lg:flex"
            >
              <PanelLeftClose size={18} />
            </button>
          )}
        </div>

        {/* Expand button in collapsed mode */}
        {isCollapsed && (
          <div className="hidden border-b border-white/10 px-3 py-3 lg:block">
            <button
              onClick={() => setCollapsed(false)}
              className="flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <PanelLeftOpen size={18} />
            </button>
          </div>
        )}

        {/* Content */}
        <div
          className={`no-scrollbar h-[calc(100vh-89px)] overflow-y-auto ${
            isCollapsed ? "px-3 py-4" : "px-4 py-4"
          }`}
        >
          <div className="space-y-6">
            {/* MAIN */}
            <div>
              <h2 className={sectionTitleClass}>
                {isCollapsed ? "M" : "Main"}
              </h2>

              <div className="space-y-2">
                <NavLink
                  to={BASE}
                  end
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <LayoutDashboard size={18} className="shrink-0" />
                  {!isCollapsed && <span>Dashboard</span>}
                  {renderTooltip("Dashboard")}
                </NavLink>

                <NavLink
                  to={`${BASE}/orders`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <ClipboardList size={18} className="shrink-0" />
                  {!isCollapsed && <span>Orders</span>}
                  {renderTooltip("Orders")}
                </NavLink>

                <NavLink
                  to={`${BASE}/live-orders`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Radio size={18} className="shrink-0" />
                  {!isCollapsed && <span>Live Orders</span>}
                  {renderTooltip("Live Orders")}
                </NavLink>

                <NavLink
                  to={`${BASE}/customers`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Users size={18} className="shrink-0" />
                  {!isCollapsed && <span>Customers</span>}
                  {renderTooltip("Customers")}
                </NavLink>

                <NavLink
                  to={`${BASE}/reviews`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Star size={18} className="shrink-0" />
                  {!isCollapsed && <span>Reviews</span>}
                  {renderTooltip("Reviews")}
                </NavLink>

                <NavLink
                  to={`${BASE}/bookings`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <CalendarDays size={18} className="shrink-0" />
                  {!isCollapsed && <span>Table Booking</span>}
                  {renderTooltip("Table Booking")}
                </NavLink>

                
              </div>
            </div>

            {/* MENU */}
            <div>
              <h2 className={sectionTitleClass}>
                {isCollapsed ? "M" : "Menu Management"}
              </h2>

              <div className="space-y-2">
                <div className="group relative">
                  <button
                    onClick={() => toggleDropdown("menu")}
                    className={dropdownButtonClass(isMenuActive)}
                  >
                    <span
                      className={`flex items-center ${
                        isCollapsed ? "justify-center" : "gap-3"
                      }`}
                    >
                      <UtensilsCrossed size={18} className="shrink-0" />
                      {!isCollapsed && <span>Menu</span>}
                    </span>

                    {!isCollapsed &&
                      (dropdown === "menu" ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      ))}
                  </button>

                  {renderTooltip("Menu")}

                  {!isCollapsed && dropdown === "menu" && (
                    <div className="mt-2 space-y-1">
                      <NavLink
                        to={`${BASE}/menu/all-items`}
                        className={subLinkClass}
                        onClick={closeMobileSidebar}
                      >
                        • All Items
                      </NavLink>
                      <NavLink
                        to={`${BASE}/menu/add-item`}
                        className={subLinkClass}
                        onClick={closeMobileSidebar}
                      >
                        • Add Item
                      </NavLink>
                      <NavLink
                        to={`${BASE}/menu/premium-items`}
                        className={subLinkClass}
                        onClick={closeMobileSidebar}
                      >
                        • Premium Items
                      </NavLink>
                      <NavLink
                        to={`${BASE}/menu/combo-items`}
                        className={subLinkClass}
                        onClick={closeMobileSidebar}
                      >
                        • Combo Items
                      </NavLink>
                    </div>
                  )}
                </div>

                <NavLink
                  to={`${BASE}/categories`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Grid2x2 size={18} className="shrink-0" />
                  {!isCollapsed && <span>Categories</span>}
                  {renderTooltip("Categories")}
                </NavLink>

                <NavLink
                  to={`${BASE}/addons`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Package size={18} className="shrink-0" />
                  {!isCollapsed && <span>Addons</span>}
                  {renderTooltip("Addons")}
                </NavLink>

                <NavLink
                  to={`${BASE}/offers`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Percent size={18} className="shrink-0" />
                  {!isCollapsed && <span>Offers & Discounts</span>}
                  {renderTooltip("Offers & Discounts")}
                </NavLink>

                <NavLink
                  to={`${BASE}/inventory`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Warehouse size={18} className="shrink-0" />
                  {!isCollapsed && <span>Inventory / Stock</span>}
                  {renderTooltip("Inventory / Stock")}
                </NavLink>

                <NavLink
                  to={`${BASE}/kitchen-display`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <ChefHat size={18} className="shrink-0" />
                  {!isCollapsed && <span>Kitchen Display</span>}
                  {renderTooltip("Kitchen Display")}
                </NavLink>
              </div>
            </div>

            {/* DELIVERY */}
            <div>
              <h2 className={sectionTitleClass}>
                {isCollapsed ? "D" : "Delivery"}
              </h2>

              <div className="space-y-2">
                <div className="group relative">
                  <button
                    onClick={() => toggleDropdown("delivery")}
                    className={dropdownButtonClass(isDeliveryActive)}
                  >
                    <span
                      className={`flex items-center ${
                        isCollapsed ? "justify-center" : "gap-3"
                      }`}
                    >
                      <Bike size={18} className="shrink-0" />
                      {!isCollapsed && <span>Delivery Management</span>}
                    </span>

                    {!isCollapsed &&
                      (dropdown === "delivery" ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      ))}
                  </button>

                  {renderTooltip("Delivery Management")}

                  {!isCollapsed && dropdown === "delivery" && (
                    <div className="mt-2 space-y-1">
                      <NavLink
                        to={`${BASE}/delivery/riders`}
                        className={subLinkClass}
                        onClick={closeMobileSidebar}
                      >
                        • Riders
                      </NavLink>
                      <NavLink
                        to={`${BASE}/delivery/live-tracking`}
                        className={subLinkClass}
                        onClick={closeMobileSidebar}
                      >
                        • Live Tracking
                      </NavLink>
                      <NavLink
                        to={`${BASE}/delivery/zones`}
                        className={subLinkClass}
                        onClick={closeMobileSidebar}
                      >
                        • Delivery Zones
                      </NavLink>
                      <NavLink
                        to={`${BASE}/delivery/charges`}
                        className={subLinkClass}
                        onClick={closeMobileSidebar}
                      >
                        • Delivery Charges
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* BUSINESS */}
            <div>
              <h2 className={sectionTitleClass}>
                {isCollapsed ? "B" : "Business"}
              </h2>

              <div className="space-y-2">
                <NavLink
                  to={`${BASE}/analytics`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <BarChart3 size={18} className="shrink-0" />
                  {!isCollapsed && <span>Analytics</span>}
                  {renderTooltip("Analytics")}
                </NavLink>

                <NavLink
                  to={`${BASE}/payments`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <CreditCard size={18} className="shrink-0" />
                  {!isCollapsed && <span>Payments / Payouts</span>}
                  {renderTooltip("Payments / Payouts")}
                </NavLink>

                <NavLink
                  to={`${BASE}/invoices`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Receipt size={18} className="shrink-0" />
                  {!isCollapsed && <span>Taxes & Invoices</span>}
                  {renderTooltip("Taxes & Invoices")}
                </NavLink>

                <NavLink
                  to={`${BASE}/messages`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <MessageCircle size={18} className="shrink-0" />
                  {!isCollapsed && <span>Messages</span>}
                  {renderTooltip("Messages")}
                </NavLink>
              </div>
            </div>

            {/* SETTINGS */}
            <div>
              <h2 className={sectionTitleClass}>
                {isCollapsed ? "S" : "Restaurant Settings"}
              </h2>

              <div className="space-y-2">
                <NavLink
                  to={`${BASE}/restaurant-profile`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Store size={18} className="shrink-0" />
                  {!isCollapsed && <span>Restaurant Profile</span>}
                  {renderTooltip("Restaurant Profile")}
                </NavLink>

                <NavLink
                  to={`${BASE}/staff-roles`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <UserCog size={18} className="shrink-0" />
                  {!isCollapsed && <span>Staff & Roles</span>}
                  {renderTooltip("Staff & Roles")}
                </NavLink>

                <NavLink
                  to={`${BASE}/notifications`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Bell size={18} className="shrink-0" />
                  {!isCollapsed && <span>Notifications</span>}
                  {renderTooltip("Notifications")}
                </NavLink>

                <NavLink
                  to={`${BASE}/settings`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Settings size={18} className="shrink-0" />
                  {!isCollapsed && <span>General Settings</span>}
                  {renderTooltip("General Settings")}
                </NavLink>
              </div>
            </div>

            {/* EXTRA */}
            <div>
              <h2 className={sectionTitleClass}>
                {isCollapsed ? "E" : "Extra"}
              </h2>

              <div className="space-y-2">
                <NavLink
                  to={`${BASE}/tools`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <Wrench size={18} className="shrink-0" />
                  {!isCollapsed && <span>Tools</span>}
                  {renderTooltip("Tools")}
                </NavLink>

                <NavLink
                  to={`${BASE}/support`}
                  className={linkClass}
                  onClick={closeMobileSidebar}
                >
                  <HelpCircle size={18} className="shrink-0" />
                  {!isCollapsed && <span>Support / Help</span>}
                  {renderTooltip("Support / Help")}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}