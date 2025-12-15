import React from "react";
import Header from "../../components/layout/user/Header";
import Footer from "../../components/layout/user/Footer";
import Sidebar from "../../components/layout/user/Sidebar"; // Import Sidebar
import { IoHeartOutline } from "react-icons/io5";

// Import ảnh Audio
import pro24 from '../../assets/images/rent_pro_24.webp'; // AirPods Max
import pro25 from '../../assets/images/rent_pro_25.webp'; // AirPods Pro 2
import pro26 from '../../assets/images/rent_pro_26.webp'; // Sonos Arc
import pro27 from '../../assets/images/rent_pro_27.webp'; // Sonos Sub
// Reusing other products
import pro1 from '../../assets/images/rent_pro_1.jpeg'; // Sony XM5 Placeholder
import pro2 from '../../assets/images/rent_pro_2.webp'; // Sonos Era 300 Placeholder
import pro3 from '../../assets/images/rent_pro_3.webp'; // Sonos Beam Gen2 Placeholder

// ProductCard component (có thể tách ra file riêng)
const ProductCard = ({ title, specs, price, image, discountTag }) => (
  <div className="flex flex-col bg-white p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow relative">
    {discountTag && (
      <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
        {discountTag}
      </span>
    )}
    <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500"><IoHeartOutline size={20}/></button>
    <div className="h-48 flex items-center justify-center mb-4"><img src={image} alt={title} className="max-h-full object-contain"/></div>
    <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">{title}</h3>
    <p className="text-xs text-gray-500 mb-3">{specs}</p>
    <div className="mt-auto">
        <p className="text-xs text-gray-400">from</p>
        <p className="text-pink-600 font-bold">{price}<span className="text-gray-500 text-xs font-normal">/month</span></p>
    </div>
  </div>
);

const AudioMusicPage = () => {
  const products = [
    { title: "Sony WH-1000XM5 Noise-cancelling Over-ear Bluetooth Headphones", specs: "Industry-leading Noise Cancelling", price: "€22.90", discountTag: "-10%", image: pro1 }, // Placeholder
    { title: "Apple AirPods Pro 3 In-ear Bluetooth Headphones", specs: "USB-C, Active Noise Cancellation", price: "€17.90", discountTag: "-10%", image: pro25 },
    { title: "Apple Airpods Max with USB-C Over-ear Bluetooth Headphones", specs: "USB-C, Bluetooth 5.3", price: "€26.90", discountTag: "-10%", image: pro24 },
    { title: "Apple Airpods 4 with Active Noise Cancellation In-ear Bluetooth Headphones", specs: "Wireless Charging Case", price: "€12.90", discountTag: "-10%", image: pro25 }, // Reusing
    { title: "Sonos Sub 4", specs: "Premium wireless subwoofer", price: "€22.90", discountTag: "-10%", image: pro27 },
    { title: "Sonos Arc Ultra", specs: "Premium smart soundbar with Sound Motion", price: "€27.90", discountTag: "-10%", image: pro26 },
    { title: "Sonos ERA 300", specs: "Smart speaker with spatial audio", price: "€19.90", discountTag: "-10%", image: pro2 }, // Placeholder
    { title: "Sonos Beam (Gen2) Soundbar", specs: "Soundbar, AirPlay, WiFi, Voice Assistant", price: "€15.90", discountTag: "-10%", image: pro3 }, // Placeholder
    { title: "Sonos Sub Mini", specs: "Wireless subwoofer", price: "€13.90", discountTag: "-10%", image: pro27 }, // Reusing
    { title: "Sony WH-1000XM3 Noise-cancelling Over-ear Bluetooth Headphones", specs: "Industry-leading Noise Cancelling", price: "€17.90", discountTag: "-10%", image: pro1 }, // Placeholder
    { title: "Sonos Arc", specs: "Premium smart soundbar with AirPlay", price: "€24.90", image: pro26 }, // Reusing
    { title: "Samsung HW-Q990C/ZG", specs: "11.1.4ch, Q-Symphony", price: "€27.90", image: pro27 }, // Placeholder
  ];

  const subCategories = [
    { name: "Headphones" },
    { name: "Bluetooth Speakers" },
    { name: "Home Cinema" },
    { name: "DJ & Studio Equipment" },
    { name: "Hi-Fi & Home Audio" },
    { name: "Musical Instruments" },
  ];

  const brands = [
    { name: "Anker Soundcore", count: 1 },
    { name: "Apple", count: 8 },
    { name: "Devialet", count: 2 },
    { name: "Pioneer", count: 3 },
    { name: "Sennheiser", count: 2 },
    { name: "Sonos", count: 8 },
  ];

  return (
    <div className="bg-white font-sans text-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold mb-4">Rent Audio & Music</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          Whether you're an audiophile needing to hear the finer details of every sound, a musician striving for the perfect recording, or just looking to stay immersed in your work with noise cancellation. The world of audio technology offers endless possibilities.
        </p>
        
        {/* Top Category Chips (Not present in Audio & Music mock) */}

        <div className="flex gap-8">
            <Sidebar
              activeCategory="All Audio & Music"
              subCategories={subCategories}
              defaultRentDuration="6 months"
              minPrice={5}
              maxPrice={115}
              defaultPriceRange={115}
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

export default AudioMusicPage;