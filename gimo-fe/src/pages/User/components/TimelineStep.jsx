import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

const TimelineStep = ({ title, description, status, isLast }) => {
  const isCompleted = status === 'completed';

  return (
    <div className="flex gap-6">
      {/* Icon and Connector Line */}
      <div className="flex flex-col items-center">
        <div 
          className={`w-8 h-8 rounded-full flex items-center justify-center
            ${isCompleted ? 'bg-teal-600' : 'bg-gray-300'}
          `}
        >
          {isCompleted && <IoCheckmark className="w-5 h-5 text-white" />}
        </div>
        {!isLast && (
          <div 
            className={`w-0.5 flex-grow 
              ${isCompleted ? 'bg-teal-600' : 'bg-gray-300'}
            `}
          />
        )}
      </div>
      
      {/* Text Content */}
      <div className={`pb-8 ${isLast ? '' : 'border-l-transparent'}`}>
        <h3 
          className={`font-semibold 
            ${isCompleted ? 'text-gray-800' : 'text-gray-400'}
          `}
        >
          {title}
        </h3>
        <p 
          className={`text-sm 
            ${isCompleted ? 'text-gray-600' : 'text-gray-400'}
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineStep;