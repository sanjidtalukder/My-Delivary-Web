import React from 'react';
import Marquee from 'react-fast-marquee';

import logo1 from '../../assets/brands/amazon.png';
import logo2 from '../../assets/brands/amazon_vector.png';
import logo3 from '../../assets/brands/casio.png';
import logo4 from '../../assets/brands/moonstar.png';
import logo5 from '../../assets/brands/randstad.png';
import logo6 from '../../assets/brands/start-people 1.png';
import logo7 from '../../assets/brands/start.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogos = () => {
  return (
    <section className="w-full bg-gray-300 py-10 rounded-xl m-2 p-2 mx-auto">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-green-800">
          Our Trusted Clients
        </h2>
         <h2 className="text-xl md:text-sm font-bold text-center mb-8 text-gray-700">
          We helps hundrade of clients in all days.
        </h2>
        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={false}
          direction="left"
          className="flex items-center"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-4 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-6 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogos;
