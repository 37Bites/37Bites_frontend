import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import LoginModal from "../pages/LoginModal";
import api from "../api/axios";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [openModal, setOpenModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Logout handler (keeps API call)
  const handleLogout = async () => {
    try {
      await api.post("/auth/logout"); // backend logout
      dispatch(logout());             // clear redux state
      setDropdown(false);             // close dropdown
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.jpeg"
            alt="37BITES"
            className="h-14 w-14 object-contain transition-transform hover:scale-110"
          />
          <h1 className="text-2xl font-bold text-gray-700 hover:text-orange-500 transition">
            37BITES
          </h1>
        </div>

        {/* Menu Links */}
        <div className="flex gap-8 text-gray-700 font-medium">
          {["Menu", "Offers", "Catering", "About", "Contact"].map((link) => (
            <NavLink
              key={link}
              to={`/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `hover:text-orange-500 transition ${isActive ? "text-orange-500" : ""}`
              }
            >
              {link}
            </NavLink>
          ))}
          <NavLink
            to="/resturant-login"
            className={({ isActive }) =>
              `hover:text-orange-500 transition ${isActive ? "text-orange-500" : ""}`
            }
          >
            Partner With Us
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 relative" ref={dropdownRef}>
          {!user ? (
            <button
              onClick={() => setOpenModal(true)}
              className="border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
            >
              Login
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdown((prev) => !prev)}
                className="border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
              >
                {user.role?.toUpperCase()}
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-xl py-2 z-50">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {openModal && <LoginModal closeModal={() => setOpenModal(false)} />}
    </>
  );
};

export default Navbar;