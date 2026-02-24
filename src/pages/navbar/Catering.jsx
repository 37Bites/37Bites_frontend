import React from "react";

const Catering = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-orange-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Catering Services 🍽️
          </h1>

          <p className="text-lg">
            Delicious food for your special events in Saint Martin
          </p>

        </div>

      </div>


      {/* ABOUT CATERING */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 gap-10 items-center">


          <div>

            <h2 className="text-3xl font-bold mb-4">
              Event Catering
            </h2>

            <p className="text-gray-600 mb-4">
              37 Bites provides catering services for
              parties, weddings, birthdays and corporate events.
            </p>

            <p className="text-gray-600">
              We deliver fresh and delicious food
              anywhere in Saint Martin Island.
            </p>

          </div>



          <div>

            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033"
              className="rounded-2xl shadow"
            />

          </div>


        </div>

      </div>



      {/* SERVICES */}
      <div className="bg-white py-14">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Our Catering Services 🎉
          </h2>



          <div className="grid md:grid-cols-4 gap-6">


            <div className="bg-gray-50 p-6 rounded-xl shadow">

              <h4 className="font-bold mb-2">
                Birthday Parties 🎂
              </h4>

              <p className="text-gray-600">
                Food for birthday events
              </p>

            </div>



            <div className="bg-gray-50 p-6 rounded-xl shadow">

              <h4 className="font-bold mb-2">
                Beach Events 🌴
              </h4>

              <p className="text-gray-600">
                Catering for beach parties
              </p>

            </div>



            <div className="bg-gray-50 p-6 rounded-xl shadow">

              <h4 className="font-bold mb-2">
                Weddings 💍
              </h4>

              <p className="text-gray-600">
                Wedding catering services
              </p>

            </div>



            <div className="bg-gray-50 p-6 rounded-xl shadow">

              <h4 className="font-bold mb-2">
                Corporate Events 🏢
              </h4>

              <p className="text-gray-600">
                Business event catering
              </p>

            </div>


          </div>

        </div>

      </div>



      {/* FORM */}
      <div className="py-16">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white p-10 rounded-2xl shadow">


            <h2 className="text-3xl font-bold mb-6 text-center">
              Book Catering 📅
            </h2>



            <div className="grid md:grid-cols-2 gap-4">


              <input
                placeholder="Your Name"
                className="border p-3 rounded"
              />


              <input
                placeholder="Phone Number"
                className="border p-3 rounded"
              />


              <input
                placeholder="Event Date"
                type="date"
                className="border p-3 rounded"
              />


              <input
                placeholder="Number of People"
                className="border p-3 rounded"
              />


            </div>



            <textarea
              placeholder="Event Details"
              className="border p-3 rounded w-full mt-4"
            />


            <button className="bg-orange-500 text-white px-6 py-3 rounded mt-4 w-full">
              Submit Request
            </button>


          </div>

        </div>

      </div>



    </div>
  );
};

export default Catering;