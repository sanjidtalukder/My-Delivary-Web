import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// Feedback data
const feedbacks = [
  {
    name: "Rakib Hossain",
    email: "rakib@example.com",
    message: "Very fast delivery and polite deliveryman!",
    img: "https://i.ibb.co/xKxnLg7Z/Lawyer-2.jpg",
    rating: 5
  },
  {
    name: "Mitu Akter",
    email: "mitu@example.com",
    message: "Packaging was excellent. Will order again.",
    img: "https://i.ibb.co/Dg9Mt88X/Lawyer-1.jpg",
    rating: 4
  },
  {
    name: "Raihan Uddin",
    email: "raihan@example.com",
    message: "I received my parcel within 5 hours. Impressed!",
    img: "https://i.ibb.co/vxTjy2YM/Lawer-4.jpg",
    rating: 5
  },
  {
    name: "Tania Rahman",
    email: "tania@example.com",
    message: "Support team was very helpful and responsive.",
    img: "https://i.ibb.co/4g8Cx9B6/Lawyer-3.jpg",
    rating: 4
  },
  {
    name: "Jamil Hasan",
    email: "jamil@example.com",
    message: "Reliable service for COD delivery.",
    img: "https://i.ibb.co/Dg9Mt88X/Lawyer-1.jpg",
    rating: 4
  },
  {
    name: "Shila Ahmed",
    email: "shila@example.com",
    message: "The live tracking feature is awesome!",
    img: "https://i.ibb.co/DDy4GNkp/Lawyer-5.jpg",
    rating: 5
  },
  {
    name: "Rashed Karim",
    email: "rashed@example.com",
    message: "Fastest delivery I’ve experienced in Dhaka.",
    img: "https://i.ibb.co/k6rZhj1b/Lawyer-6.jpg",
    rating: 5
  },
  {
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    message: "Professional and timely service, recommended.",
    img: "https://i.ibb.co/nNrW2tsn/Sanjida.webp",
    rating: 5
  },
  {
    name: "Himel Chowdhury",
    email: "himel@example.com",
    message: "Got updates throughout the process. Loved it!",
    img: "https://i.ibb.co/DDy4GNkp/Lawyer-5.jpg",
    rating: 4
  },
  {
    name: "Farzana Yeasmin",
    email: "farzana@example.com",
    message: "Very user-friendly system and cooperative team.",
    img: "https://i.ibb.co/xKxnLg7Z/Lawyer-2.jpg",
    rating: 5
  },
];

const FeedbackCard = ({ feedback }) => {
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < count ? (
          <AiFillStar key={i} className="text-yellow-400" />
        ) : (
          <AiOutlineStar key={i} className="text-gray-300" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 flex flex-col items-center text-center space-y-4">
      <img
        src={feedback.img}
        alt={feedback.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-green-500 shadow-md hover:scale-105 transition-transform duration-300"
      />
      <h3 className="text-xl font-semibold text-gray-800">{feedback.name}</h3>
      <p className="text-sm text-gray-500">{feedback.email}</p>
      <div className="flex justify-center text-xl">{renderStars(feedback.rating)}</div>
      <p className="text-gray-700 text-sm">{feedback.message}</p>
    </div>
  );
};

const UserFeedback = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 3;

  const indexOfLast = currentPage * feedbacksPerPage;
  const indexOfFirst = indexOfLast - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        What Our Users Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {currentFeedbacks.map((fb, index) => (
          <FeedbackCard key={index} feedback={fb} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-4 py-2 border rounded font-medium ${
              currentPage === idx + 1
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-100'
            } transition`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserFeedback;
