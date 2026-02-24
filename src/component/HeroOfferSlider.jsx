import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroOffers = [
  {
    title: "Grilled Lobster",
    desc: "Freshly grilled, served with tropical sides",
    price: "$29.99",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1600&q=80",
    cta: "Order Now",
  },
  {
    title: "Conch Salad",
    desc: "Authentic Caribbean style, refreshing and light",
    price: "$12.99",
    img: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=1600&q=80",
    cta: "Order Now",
  },
  {
    title: "Rum Punch",
    desc: "Tropical cocktail to enjoy with your meals",
    price: "$6.99",
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1600&q=80",
    cta: "Grab Offer",
  },
];

export default function HeroOfferSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroOffers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-[55vh] overflow-hidden">
      <AnimatePresence>
        {heroOffers.map((slide, idx) =>
          idx === current ? (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
                  {slide.title}
                </h1>
                <p className="text-md md:text-2xl text-white drop-shadow-md mb-2">
                  {slide.desc}
                </p>
                <p className="text-orange-400 font-semibold text-lg md:text-xl mb-4">{slide.price}</p>
                <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-lg transition">
                  {slide.cta}
                </button>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Slider Dots */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {heroOffers.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${current === idx ? "bg-orange-500" : "bg-white/50"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}