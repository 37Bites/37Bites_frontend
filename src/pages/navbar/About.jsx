import React from "react";

const About = () => {
  return (
    <div className="w-full bg-gray-50">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About 37 Bites 🍔
          </h1>

          <p className="text-lg md:text-xl">
            Fast & Reliable Food Delivery in Saint Martin Island 🌴
          </p>
        <button className="btn-secondary">login</button>
        </div>
      </div>


      {/* ABOUT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            <h2 className="heading-lg">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4">
              37 Bites is a food delivery platform designed to make
              ordering food easy and fast in Saint Martin Island.
            </p>

            <p className="text-gray-600">
              We connect customers with the best local restaurants
              and deliver fresh meals directly to your door.
            </p>

          </div>


          {/* RIGHT IMAGE */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              className="rounded-2xl shadow-lg"
            />

          </div>

        </div>

      </div>



      {/* MISSION VISION */}
      <div className="bg-white py-14">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">


          {/* Mission */}
          <div className="card">

            <h3 className="text-2xl font-bold mb-3">
              🎯 Our Mission
            </h3>

            <p className="text-gray-600">
              To provide fast, simple and reliable food delivery
              while supporting local restaurants.
            </p>

          </div>



          {/* Vision */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-3">
              🚀 Our Vision
            </h3>

            <p className="text-gray-600">
              To become the most trusted food delivery platform
              in Saint Martin Island.
            </p>

          </div>


        </div>

      </div>



      {/* WHY CHOOSE US */}
      <div className="py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose 37 Bites ⭐
          </h2>


          <div className="grid md:grid-cols-4 gap-6">


            <div className="bg-white p-6 rounded-xl shadow">

              <h4 className="font-semibold text-lg">
                Fast Delivery 🚴
              </h4>

              <p className="text-gray-600 mt-2">
                Quick delivery across the island
              </p>

            </div>



            <div className="bg-white p-6 rounded-xl shadow">

              <h4 className="font-semibold text-lg">
                Best Restaurants 🍕
              </h4>

              <p className="text-gray-600 mt-2">
                Top local restaurants
              </p>

            </div>



            <div className="bg-white p-6 rounded-xl shadow">

              <h4 className="font-semibold text-lg">
                Easy Ordering 📱
              </h4>

              <p className="text-gray-600 mt-2">
                Simple and user friendly
              </p>

            </div>



            <div className="bg-white p-6 rounded-xl shadow">

              <h4 className="font-semibold text-lg">
                Secure Payment 🔒
              </h4>

              <p className="text-gray-600 mt-2">
                Safe payment methods
              </p>

            </div>


          </div>

        </div>

      </div>



      {/* FOOTER SECTION */}
      <div className="bg-black text-white py-10 text-center">

        <h3 className="text-2xl font-bold mb-2">
          37 Bites 🍽️
        </h3>

        <p>
          Good Food Delivered Fast
        </p>

      </div>


    </div>
  );
};

export default About;