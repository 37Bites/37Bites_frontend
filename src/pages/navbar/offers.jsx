import React from "react";

const Offers = () => {

  const offers = [
    {
      title: "20% OFF on Pizza 🍕",
      restaurant: "Island Pizza",
      discount: "20% OFF",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
    },

    {
      title: "Free Drink with Burger 🍔",
      restaurant: "Burger House",
      discount: "Free Drink",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },

    {
      title: "30% OFF Seafood 🦐",
      restaurant: "Ocean Grill",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947"
    },

    {
      title: "Buy 1 Get 1 Free 🌮",
      restaurant: "Taco Spot",
      discount: "BOGO",
      image:
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b"
    }

  ];


  return (

    <div className="bg-gray-50 min-h-screen">


      {/* HERO */}
      <div className="bg-orange-500 text-white py-14">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-3">
            Special Offers 🎉
          </h1>

          <p>
            Best food deals in Saint Martin Island
          </p>

        </div>

      </div>



      {/* OFFERS */}
      <div className="max-w-7xl mx-auto px-6 py-14">


        <div className="grid md:grid-cols-3 gap-8">


          {offers.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >


              {/* IMAGE */}
              <img
                src={item.image}
                className="h-48 w-full object-cover"
              />


              {/* CONTENT */}
              <div className="p-6">


                <h3 className="text-xl font-bold mb-2">
                  {item.title}
                </h3>


                <p className="text-gray-600 mb-3">
                  {item.restaurant}
                </p>



                <div className="flex justify-between items-center">


                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {item.discount}
                  </span>



                  <button className="text-orange-500 font-semibold">
                    Order Now →
                  </button>


                </div>


              </div>


            </div>

          ))}


        </div>

      </div>



    </div>

  );
};

export default Offers;