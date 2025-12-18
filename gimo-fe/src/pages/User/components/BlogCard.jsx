import React from 'react';

const BlogCard = ({ tag, title, description, image, bgColor }) => {
  return (
    <a href="#" className="block group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className={`aspect-video w-full ${bgColor} flex items-center justify-center`}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 bg-white">
        <span className="inline-block bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-md mb-3">
          {tag}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
};

export default BlogCard;