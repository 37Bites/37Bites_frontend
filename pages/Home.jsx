import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RestaurantSlider from "../component/RestaurantSlider"

const categories = [
  { name: "Asian", img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { name: "Thai", img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
  { name: "Italian", img: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png" },
  { name: "Mexican/ Caribbean", img: "https://cdn-icons-png.flaticon.com/512/3480/3480618.png" },
  { name: "International", img: "https://cdn-icons-png.flaticon.com/512/3174/3174880.png" },
  { name: "Fusion", img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png" },
  { name: "Mediterranean", img: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png" },
  { name: "Indian", img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
  { name: "Steak & Seafood", img: "https://cdn-icons-png.flaticon.com/512/3480/3480618.png" },
  { name: "American", img: "https://cdn-icons-png.flaticon.com/512/5787/5787016.png" },
  { name: "Caribbean", img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
];

const menuItems = [
  { name: "Chicken Biryani", price: "$13.99", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" },
  { name: "Shrimp Biryani", price: "$16.99", img: "https://images.unsplash.com/photo-1628294895950-9805252327bc" },

  { name: "Vegetable Biryani", price: "$10.99", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
  { name: "Veg Fried Rice", price: "$13.99", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b" },
  { name: "Veg Noodles", price: "$16.99", img: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6" },
  { name: "Butter Chicken", price: "$15.99", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },

  { name: "Masala Dosa", price: "$12.99", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a" },
  { name: "Sada Dosa", price: "$10.99", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7" },
 
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">


    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* Left Side - Logo */}
      <div className="flex items-center gap-3">
        <img
          src="\logo.jpeg"   // apna logo public folder me daalna
          alt="Chennai Express"
          className="h-15 w-15 object-contain"
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
      <div className="flex items-center gap-4 relative">

        {/* Order Button */}
        <button className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition">
          Order Now
        </button>

        {/* My Account Button */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
          >
            My Account
          </button>

        </div>

      </div>
    </nav>

 {/* Category Section */}
<div className="sticky top-[80px] z-40 bg-gray-100 shadow-sm overflow-hidden">

  <div className="flex justify-center">

    <div className="flex overflow-x-auto no-scrollbar px-6 md:px-12 py-4 gap-10 md:gap-12 whitespace-nowrap items-center w-full max-w-[1400px] min-h-[90px]">

      {categories.map((cat, index) => (
        <div
          key={index}
          className="flex flex-col items-center min-w-fit cursor-pointer"
        >
          <div
            className={`transition-all duration-300 ${
              scrolled
                ? "h-0 opacity-0 mb-0"
                : "h-16 opacity-100 mb-2"
            }`}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="h-16 w-16 object-contain"
            />
          </div>

          <p className="text-sm md:text-base font-medium text-gray-700 text-center">
            {cat.name}
          </p>
        </div>
      ))}

    </div>

  </div>
</div>
<RestaurantSlider/>
      {/* Hero Section */}
      <div
        className="h-72 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604908176997-125f25cc6f3d')",
        }}
      >
        <h2 className="text-white text-5xl font-bold bg-black/40 px-6 py-3 rounded-2xl">
          Menu
        </h2>
      </div>


      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        {["Starter", "Sides", "Main Course", "Dessert", "Beverages"].map((cat) => (
          <button
            key={cat}
            className="border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-12">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={`${item.img}?auto=format&fit=crop&w=500&q=60`}
              alt={item.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600">
                {item.price}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold">Chennai Express</h2>
            <p className="text-gray-400 mt-2">Restaurant & Catering</p>
          </div>
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-gray-400">+1 703-961-1600</p>
            <p className="text-gray-400">info@chennaiexpress.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-400">14516 Lee Rd, Chantilly</p>
          </div>
        </div>
      </footer>

    </div>
  );
}