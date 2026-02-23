import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* Left Side - Logo */}
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

      {/* Middle - Menu Links */}
      <div className="flex gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-orange-500 transition">Menu</a>
        <a href="#" className="hover:text-orange-500 transition">Offers</a>
        <a href="#" className="hover:text-orange-500 transition">Catering</a>
        <a href="#" className="hover:text-orange-500 transition">About</a>
        <a href="#" className="hover:text-orange-500 transition">Contact</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Order Button */}
        <button className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition">
          Order Now
        </button>

        {/* My Account */}
        <button
          onClick={() => setOpen(!open)}
          className="border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
        >
          My Account
        </button>

      </div>
    </nav>
  );
};

export default Navbar;