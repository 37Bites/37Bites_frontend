import React, { useState } from "react";
import LoginModal from "../pages/LoginModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const auth = JSON.parse(localStorage.getItem("auth"));

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-40">

        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="37BITES" className="h-12 w-12" />
          <h1 className="text-xl font-bold text-gray-700">
            37BITES
          </h1>
        </div>

        {/* Middle Menu */}
        <div className="flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-500">Menu</a>
          <a href="#" className="hover:text-orange-500">Offers</a>
          <a href="#" className="hover:text-orange-500">Catering</a>
          <a href="#" className="hover:text-orange-500">About</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {auth ? (
            <>
              <span className="text-gray-700 font-medium">
                {auth.user.role.toUpperCase()}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="bg-orange-500 text-white px-5 py-2 rounded-xl"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* LOGIN MODAL */}
      {open && <LoginModal closeModal={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;