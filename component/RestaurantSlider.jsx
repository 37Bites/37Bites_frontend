import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const restaurants = [
  {
    name: "Ocean Lounge",
    rating: "4.6",
    time: "20-30 mins",
    cuisine: "Seafood, Caribbean",
    location: "Philipsburg",
    offer: "20% OFF upto $20",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de"
  },
  {
    name: "Chesterfields",
    rating: "4.5",
    time: "25-35 mins",
    cuisine: "International, Seafood",
    location: "Great Bay",
    offer: "Free Drink",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    name: "Emilio’s Restaurant",
    rating: "4.7",
    time: "30-40 mins",
    cuisine: "Fine Dining, Caribbean",
    location: "Cole Bay",
    offer: "15% OFF",
    img: "https://images.unsplash.com/photo-1555992336-03a23c4a4e5d"
  },
  {
    name: "The Greenhouse",
    rating: "4.4",
    time: "20-25 mins",
    cuisine: "Steak, Seafood",
    location: "Simpson Bay",
    offer: "50% OFF",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  {
    name: "Big Fish",
    rating: "4.8",
    time: "25-30 mins",
    cuisine: "Seafood, Caribbean",
    location: "Oyster Pond",
    offer: "Chef Special",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  }
];

export default function RestaurantSlider() {
  const sliderRef = useRef(null);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 320;

        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // MANUAL SCROLL
  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft +=
        direction === "left" ? -320 : 320;
    }
  };

  return (
    <div className="bg-gray-100 py-16">

      <div className="flex justify-between items-center w-[90%] mx-auto mb-6">
        <h2 className="text-3xl font-bold">
          Top Restaurant 
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 bg-white rounded-full shadow hover:bg-gray-200"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 bg-white rounded-full shadow hover:bg-gray-200"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto no-scrollbar w-[90%] mx-auto scroll-smooth"
      >
        {restaurants.map((res, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={`${res.img}?auto=format&fit=crop&w=600&q=60`}
                alt={res.name}
                className="h-48 w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                {res.offer}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg">{res.name}</h3>
              <p className="text-green-600 font-semibold">
                ⭐ {res.rating} • {res.time}
              </p>
              <p className="text-gray-600 text-sm">{res.cuisine}</p>
              <p className="text-gray-500 text-sm">{res.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}