import React from "react";
import Header from "../../components/layout/user/Header";
import Footer from "../../components/layout/user/Footer";
import { IoHeartOutline } from "react-icons/io5";

// Import ảnh Gaming
import pro4 from '../../assets/images/rent_pro_4.webp'; // Switch Bundle
import pro5 from '../../assets/images/rent_pro_5.webp'; // PS5 Pro
import pro6 from '../../assets/images/rent_pro_6.webp'; // MSI Claw
import pro7 from '../../assets/images/rent_pro_7.webp'; // PS5 Slim
import pro25 from '../../assets/images/rent_pro_25.webp'; // Meta Quest (tái sử dụng)
import pro26 from '../../assets/images/rent_pro_26.webp'; // ROG Ally (tái sử dụng)
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

const GamingVRPage = () => {
  const products = [
    { title: "Nintendo Switch 2 Console", specs: '7.0" 1080p, 120fps, 4K resolution', price: "€27.90", discountTag: "-30%", image: pro4 },
    { title: "Sony PlayStation 5 Slim Digital Console", specs: "4K graphics, 825GB custom SSD", price: "€22.90", discountTag: "-24%", image: pro7 },
    { title: "Sony PlayStation 5 Pro Console", specs: "4K, 2TB SSD storage drive", price: "€34.90", discountTag: "-12%", image: pro5 },
    { title: "Sony PlayStation 5 Slim Console", specs: "4K & 8K ready, 1TB custom SSD", price: "€28.90", image: pro7 },
    { title: "Nintendo Switch 2 + Mario Kart World Bundle", specs: '7.0" 1080p, 120fps, 4K resolution', price: "€27.90", discountTag: "-30%", image: pro4 },
    { title: "Nintendo Switch (OLED-Model)", specs: "LCD, 60Hz, 720p, up to 9 hours battery", price: "€17.90", image: pro4 }, // Reusing
    { title: "Asus ROG Ally Extreme Console", specs: "Z1 Extreme, 120Hz, 16GB RAM", price: "€32.90", image: pro6 },
    { title: "Meta Quest 3 128 GB VR Headset", specs: "128GB, Pancake lens, Wi-Fi 6E", price: "€27.90", image: pro25 }, // Reusing pro25
    { title: "Meta Quest 3 512 GB VR Headset", specs: "512GB, Pancake lens, Wi-Fi 6E", price: "€32.90", image: pro25 }, // Reusing pro25
    { title: "Sony PlayStation 5 Slim with Disc Drive + 2x DualSense Wireless Controller", specs: "4K & 8K ready, 1TB custom SSD", price: "€34.90", image: pro7 },
    { title: "Sony PlayStation Portal Remote Player", specs: "8\" LCD, 60fps, PlayStation app", price: "€19.90", image: pro6 }, // Reusing pro6
    { title: "MSI Claw A1M-G36 Handheld Console", specs: "120Hz, Windows 11", price: "€19.90", image: pro6 }, // Reusing pro6
  ];

  const subCategories = [
    { name: "Gaming Consoles" },
    { name: "VR Headsets" },
    { name: "Gaming Accessories" },
  ];

  const brands = [
    { name: "Asus", count: 4 },
    { name: "Gigabyte", count: 7 },
    { name: "HP", count: 2 },
    { name: "Lenovo", count: 7 },
    { name: "Logitech", count: 5 },
  ];

  return (
    <div className="bg-white font-sans text-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold mb-4">Rent Gaming & VR</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          For the win: Whether your couch already has a gaming dent or you're new to the gaming universe, you can rent game consoles, VR headsets, and gaming accessories flexibly and effortlessly at Gimo. We have the latest tech for you.
        </p>

        {/* Top Category Chips (like in the original image) */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 items-center">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
              <img src="src/assets/images/PS5_Mobile__2_.webp" alt="PS5" className="h-16 mb-1" />
              <span>PS5</span>
            </div>
            <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
              <img src="src/assets/images/Xbox_Mobile.webp" alt="Xbox" className="h-16 mb-1" />
              <span>Xbox</span>
            </div>
            <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
              <img src="src/assets/images/Meta_Quest_Mobile.webp" alt="Meta Quest" className="h-16 mb-1" />
              <span>Meta Quest</span>
            </div>
            <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
              <img src="src/assets/images/Nintendo_Switch_Mobile.webp" alt="Nintendo Switch" className="h-16 mb-1" />
              <span>Nintendo Switch</span>
            </div>
            <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
              <img src="src/assets/images/Pico_Mobile.webp" alt="Pico" className="h-16 mb-1" />
              <span>Pico</span>
            </div>
            <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
              <img src="src/assets/images/Stean_Deck_Mobile.webp" alt="Steam Deck" className="h-16 mb-1" />
              <span>Steam Deck</span>
            </div>
            <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
              <img src="src/assets/images/HTC_Mobile.webp" alt="HTC" className="h-16 mb-1" />
              <span>HTC</span>
            </div>
            <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
              <img src="src/assets/images/Gaming_controllers_Mobile.webp" alt="Gaming Controllers" className="h-16 mb-1" />
              <span>Gaming Controllers</span>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <Sidebar
            activeCategory="All Gaming & VR"
            subCategories={subCategories}
            defaultRentDuration="3 months"
            minPrice={3}
            maxPrice={75}
            defaultPriceRange={75}
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

export default GamingVRPage;