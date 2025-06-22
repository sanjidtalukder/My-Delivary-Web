import React from 'react';
import expressImg from '../../assets/dalybari-logo/live-tracking.png';
import sameDayImg from '../../assets/dalybari-logo/location-merchant.png';
import standardImg from '../../assets/dalybari-logo/live-tracking.png';
import codImg from '../../assets/dalybari-logo/tiny-deliveryman.png';

const deliveryTypes = [
  {
    title: "Express Delivery",
    description: "Fast delivery within 4–6 hours in major cities. Perfect for time-sensitive deliveries, ensuring your products reach the customer quickly.",
    img: expressImg,
  },
  {
    title: "Same Day Delivery",
    description: "Pickup and delivery within the same day. We guarantee same-day delivery for urgent orders, ensuring faster service for your business.",
    img: sameDayImg,
  },
  {
    title: "Standard Delivery",
    description: "Nationwide delivery within 48–72 hours. A reliable solution for deliveries across the country, ensuring timely deliveries every time.",
    img: standardImg,
  },
  {
    title: "Cash on Delivery",
    description: "Secure cash collection from customers. Offering the convenience of paying at the time of delivery for all customers, ensuring secure transactions.",
    img: codImg,
  },
];

const DeliveryCards = () => {
  return (
    <section className="w-full bg-white py-8">
         <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
        Why choos us
      </h2>
      <div className="max-w-screen-xl mx-auto px-4 space-y-8">
        {deliveryTypes.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gray-50 hover:bg-green-50 border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            {/* Left Side */}
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Right Side Image with border */}
           <div className="md:w-1/3 flex justify-center md:justify-end">
  <div className="w-1000 h-60 p-2 bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center">
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-full object-contain"
    />
  </div>
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryCards;
