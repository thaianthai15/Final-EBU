import React from "react";
import Header from "../../components/layout/user/Header";
import Footer from "../../components/layout/user/Footer";
import { IoHeartOutline } from "react-icons/io5";

// Import ảnh Camera
import pro12 from '../../assets/images/rent_pro_12.webp'; // Sony ZV-E10
import pro13 from '../../assets/images/rent_pro_13.webp'; // GoPro
import pro14 from '../../assets/images/rent_pro_14.webp'; // Canon R50
import pro15 from '../../assets/images/rent_pro_15.webp'; // Sony Alpha 7
// Reusing some product images from Phones/Tablets as placeholders for other cameras
import pro18 from '../../assets/images/rent_pro_18.webp'; // Sony DSC-RX10V placeholder
import Sidebar from "../../components/layout/user/Sidebar";

// ProductCard component (có thể tách ra file riêng)
const ProductCard = ({ title, specs, price, image, discountTag }) => (
  <div className="flex flex-col bg-white p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow relative">
    {discountTag && (
      <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
        {discountTag}
      </span>
    )}
    <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500"><IoHeartOutline size={20} /></button>
    <div className="h-48 flex items-center justify-center mb-4"><img src={image} alt={title} className="max-h-full object-contain" /></div>
    <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">{title}</h3>
    <p className="text-xs text-gray-500 mb-3">{specs}</p>
    <div className="mt-auto">
      <p className="text-xs text-gray-400">from</p>
      <p className="text-pink-600 font-bold">{price}<span className="text-gray-500 text-xs font-normal">/month</span></p>
    </div>
  </div>
);

const CamerasPage = () => {
  const products = [
    { title: "Canon EOS R6 Mark II Mirrorless Camera Body", specs: "24MP Full-Frame CMOS Sensor", price: "€89.90", discountTag: "20%", image: pro14 },
    { title: "Canon EOS R50 Camera Kit with RF-S 18-45mm f/4.5-6.3 IS STM Lens", specs: "24.2MP, Dual Pixel AF", price: "€34.90", image: pro14 },
    { title: "Sony DSC-RX10V", specs: "20.1MP, BIONZ X, 25x Zoom", price: "€59.90", image: pro18 }, // Placeholder
    { title: "Sony FE 100-400mm f/4.5-5.6 G-Master", specs: "E-Mount, Full Frame", price: "€129.90", discountTag: "25%", image: pro15 },
    { title: "Sony Alpha 7 III Mirrorless Camera Body", specs: "24.2MP, 10fps, Full frame sensor", price: "€69.90", discountTag: "18%", image: pro15 },
    { title: "Sony FE 24-105mm f/4 G OSS", specs: "Dual and Moisture-Resistant", price: "€34.90", discountTag: "20%", image: pro12 }, // Placeholder
    { title: "Sony Alpha 7R V Camera Kit with FE 28-70 mm f/3.5-5.6 OSS Lens", specs: "61MP, Full Frame, 8K", price: "€84.90", image: pro15 },
    { title: "GoPro HERO 12 Black", specs: "Your next level Action Camera", price: "€17.90", image: pro13 },
    { title: "Sony FE 70-200mm f/2.8 GM II", specs: "E-Mount, Full Frame", price: "€109.90", image: pro12 }, // Placeholder
    { title: "Sony SEL-70-350mm f/4.5-6.3 G OSS", specs: "Sony E-Mount, Full Frame", price: "€39.90", image: pro15 }, // Placeholder
    { title: "Canon EOS R8 Mark II, Full-Frame Mirrorless Camera", specs: "24.2MP, RF Lens Mount", price: "€114.90", image: pro14 }, // Placeholder
    { title: "GoPro HERO 11 Black", specs: "Action Camera, 5.3K60 Video", price: "€17.90", image: pro13 }, // Placeholder
  ];

  const subCategories = [
    { name: "Digital Cameras" },
    { name: "Lenses" },
    { name: "Action Cameras" },
    { name: "Compact Cameras" },
    { name: "Camera Accessories" },
    { name: "Video Cameras" },
  ];

  const brands = [
    { name: "Canon", count: 41 },
    { name: "DJI", count: 4 },
    { name: "Fujifilm", count: 14 },
    { name: "Godox", count: 2 },
    { name: "GoPro", count: 9 },
    { name: "Insta360", count: 5 },
  ];

  return (
    <div className="bg-white font-sans text-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold mb-4">Cameras rental</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          Are you looking for the right camera? Rent professional cameras flexibly, starting from just 1 month. This gives you the opportunity to find out which is the perfect model for you.
        </p>

        {/* Top Category Chips (similar to Phones & Tablets) */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {/* These are not present in the Cameras mock, so removed or commented out for strict matching */}
          {/* You can add them back if you intend to have similar category navigation as Phones */}
        </div>

        <div className="flex gap-8">
          <Sidebar
            activeCategory="All Cameras"
            subCategories={subCategories}
            defaultRentDuration="1 month"
            minPrice={8}
            maxPrice={290}
            defaultPriceRange={290}
            brands={brands}
          />
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((p, i) => <ProductCard key={i} {...p} />)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CamerasPage;