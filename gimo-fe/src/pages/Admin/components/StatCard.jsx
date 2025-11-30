import React from 'react';

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4 border border-gray-200">
      <div>{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;