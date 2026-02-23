import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-10 mt-10">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">
            Chennai Express
          </h2>
          <p className="text-gray-400 mt-2">
            Restaurant & Catering
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">
            Contact Us
          </h3>
          <p className="text-gray-400">
            +1 703-961-1600
          </p>
          <p className="text-gray-400">
            info@chennaiexpress.com
          </p>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-semibold">
            Location
          </h3>
          <p className="text-gray-400">
            14516 Lee Rd, Chantilly
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;