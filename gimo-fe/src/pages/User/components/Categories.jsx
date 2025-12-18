// src/components/Categories.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

// Import images
import phonesImg from '../../../assets/images/phones.png';
import gamingImg from '../../../assets/images/gaming.png';
import cameraImg from '../../../assets/images/camera.png';
import musicImg from '../../../assets/images/music.png';

const categoryData = [
  // 2. Thêm thuộc tính path khớp với các route bạn đã định nghĩa
  { name: 'Phones & Tablets', image: phonesImg, path: '/phones-tablets' },
  { name: 'Gaming & VR', image: gamingImg, path: '/gaming-vr' },
  { name: 'Cameras', image: cameraImg, path: '/cameras' },
  { name: 'Audio & music', image: musicImg, path: '/audio-music' },
];

const CategoryCard = ({ name, image }) => (
  // Thêm h-full để thẻ div kéo dài hết chiều cao của Link
  <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-between hover:shadow-lg transition-shadow cursor-pointer h-full border border-transparent hover:border-gray-200">
    <div className="flex-grow flex items-center justify-center mb-4">
      <img src={image} alt={name} className="max-h-32 object-contain mix-blend-multiply" />
    </div>
    <h3 className="font-semibold text-gray-800 text-center">{name}</h3>
  </div>
);

const Categories = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Categories</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((category) => (
            // 3. Bọc card bằng thẻ Link
            <Link 
              to={category.path} 
              key={category.name} 
              className="block no-underline" // block để Link chiếm hết ô lưới
            >
              <CategoryCard name={category.name} image={category.image} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;