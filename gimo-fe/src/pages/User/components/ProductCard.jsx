// src/components/ProductCard.jsx
import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';

const ProductCard = ({ name, image, tags, specs, originalPrice, currentPrice }) => {
  const formatPrice = (price) => `€${price.toFixed(2)}`;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden group">
      <div className="relative p-4">
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-white text-[10px] font-bold px-2 py-0.5 rounded-full
                ${tag.includes('%') ? 'bg-red-500' : 'bg-black'}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
        <IoHeartOutline className="absolute top-3 right-3 w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer z-10" />
        <img src={image} alt={name} className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4 border-t border-gray-200 bg-white">
        <h3 className="font-bold text-gray-800 truncate">{name}</h3>
        <p className="text-xs text-gray-500 mt-1 truncate h-4">{specs}</p>
        <div className="mt-3">
          <span className="text-sm text-gray-500">from </span>
          {originalPrice && originalPrice !== currentPrice && (
            <span className="line-through text-gray-400 text-sm mr-2">{formatPrice(originalPrice)}</span>
          )}
          <span className="font-bold text-lg text-gray-900">{formatPrice(currentPrice)}</span>
          <span className="text-sm text-gray-500">/Month</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;