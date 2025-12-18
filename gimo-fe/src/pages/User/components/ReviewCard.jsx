import React from 'react';
import { IoStar } from 'react-icons/io5';

const ReviewCard = ({ name, title, timeAgo }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-64 flex-shrink-0">
      <div className="flex items-center mb-2">
        {/* Trustpilot stars */}
        {[...Array(5)].map((_, i) => (
          <IoStar key={i} className="w-5 h-5 text-green-500 bg-green-700 p-0.5" />
        ))}
      </div>
      <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">
        <strong>{name}</strong>, {timeAgo}
      </p>
    </div>
  );
};

export default ReviewCard;