import React from 'react';
import locationmar from '../../assets/dalybari-logo/location-merchant.png';

const BeMarcen = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r from-green-950 to-green-100 rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
          
          {/* Left Side: Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={locationmar}
              alt="Merchant"
              className="w-full h-auto max-h-80 object-contain rounded-lg"
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 leading-snug">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>
            <p className="text-gray-600 text-lg">
              Join our delivery network to grow your business and serve your customers faster. We believe in empowering merchants with top-notch logistics solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300">
                Become a Merchant
              </button>
              <button className="bg-white border-2 border-green-600 hover:bg-green-50 text-green-700 px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300">
                Earn with Profast Couriers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeMarcen;
