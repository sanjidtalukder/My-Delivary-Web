import React from 'react';
import {
  Truck,
  Globe,
  Warehouse,
  DollarSign,
  BriefcaseBusiness,
  RotateCcw,
} from 'lucide-react';

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours.",
    icon: <Truck size={40} className="text-blue-600" />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <Globe size={40} className="text-green-600" />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
    icon: <Warehouse size={40} className="text-yellow-500" />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <DollarSign size={40} className="text-emerald-600" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which include warehouse and inventory management support.",
    icon: <BriefcaseBusiness size={40} className="text-indigo-600" />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility, we allow customers to return or exchange products with merchants.",
    icon: <RotateCcw size={40} className="text-red-500" />,
  },
];

const ServiceCards = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 bg-green-900 shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 border border-gray-400 shadow-md hover:shadow-xl hover:bg-blue-100 hover:-translate-y-1 transform transition-all duration-400 ease-in-out text-center flex flex-col items-center justify-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
