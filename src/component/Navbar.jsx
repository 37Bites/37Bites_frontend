import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import LoginModal from "../pages/LoginModal";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [openModal, setOpenModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setDropdown(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="37BITES"
            className="h-14 w-14 object-contain"
          />
          <h1 className="text-xl font-bold text-gray-700">
            37BITES
          </h1>
        </div>

        {/* Center - Menu */}
        <div className="flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-500 transition">Menu</a>
          <a href="#" className="hover:text-orange-500 transition">Offers</a>
          <a href="#" className="hover:text-orange-500 transition">Catering</a>
          <a href="#" className="hover:text-orange-500 transition">About</a>
          <a href="#" className="hover:text-orange-500 transition">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 relative">
          
          <button className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition">
            Order Now
          </button>

          {!user ? (
            // If NOT logged in
            <button
              onClick={() => setOpenModal(true)}
              className="border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
            >
              My Account
            </button>
          ) : (
            // If logged in
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
              >
                {user.role?.toUpperCase()}
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-xl py-2">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
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