import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">


      {/* HEADER */}

      <div className="bg-orange-500 text-white py-14 text-center">

        <h1 className="text-4xl font-bold">
          Contact Us 📞
        </h1>

      </div>



      {/* CONTACT */}

      <div className="max-w-5xl mx-auto px-6 py-16">


        <div className="grid md:grid-cols-2 gap-10">


          {/* LEFT */}

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Get in Touch
            </h2>


            <p className="text-gray-600 mb-3">
              📍 Saint Martin Island
            </p>


            <p className="text-gray-600 mb-3">
              📞 +1 234 567 890
            </p>


            <p className="text-gray-600">
              ✉ info@37bites.com
            </p>


          </div>



          {/* FORM */}

          <div className="bg-white p-8 shadow rounded-xl">


            <input
              placeholder="Name"
              className="border p-3 w-full mb-3 rounded"
            />


            <input
              placeholder="Email"
              className="border p-3 w-full mb-3 rounded"
            />


            <textarea
              placeholder="Message"
              className="border p-3 w-full mb-3 rounded"
            />


            <button className="bg-orange-500 text-white px-6 py-3 rounded w-full">
              Send
            </button>


          </div>


        </div>


      </div>



    </div>
  );
};

export default Contact;