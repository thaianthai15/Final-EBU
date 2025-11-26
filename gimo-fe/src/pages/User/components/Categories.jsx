// src/components/Categories.jsx
import React from 'react';

// Import images
import computerImg from '../../../assets/images/computer.png';
import phonesImg from '../../../assets/images/phones.png';
import gamingImg from '../../../assets/images/gaming.png';
import cameraImg from '../../../assets/images/camera.png';
import musicImg from '../../../assets/images/music.png';
import droneImg from '../../../assets/images/drone.png';


const categoryData = [
  { name: 'Computers', image: computerImg },
  { name: 'Phones & Tablets', image: phonesImg },
  { name: 'Gaming & VR', image: gamingImg },
  { name: 'Cameras', image: cameraImg },
  { name: 'Audio & music', image: musicImg },
  { name: 'Drone', image: droneImg },
];

const CategoryCard = ({ name, image }) => (
  <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-between hover:shadow-lg transition-shadow cursor-pointer">
    <div className="flex-grow flex items-center justify-center mb-4">
      <img src={image} alt={name} className="max-h-32 object-contain" />
    </div>
    <h3 className="font-semibold text-gray-800">{name}</h3>
  </div>
);

const Categories = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categoryData.map((category) => (
            <CategoryCard key={category.name} name={category.name} image={category.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;