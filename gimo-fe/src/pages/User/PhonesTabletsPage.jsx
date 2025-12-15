import React from "react";
import Header from "../../components/layout/user/Header";
import Footer from "../../components/layout/user/Footer";
import { IoHeartOutline } from "react-icons/io5";

// Import ảnh Phones & Tablets
import pro16 from '../../assets/images/rent_pro_16.webp'; // iPad Air
import pro17 from '../../assets/images/rent_pro_17.webp'; // iPad 2022
import pro18 from '../../assets/images/rent_pro_18.webp'; // iPad 2021
import pro19 from '../../assets/images/rent_pro_19.webp'; // iPad Pro (phone)
import pro20 from '../../assets/images/rent_pro_20.webp'; // iPhone 17 Pro
import pro21 from '../../assets/images/rent_pro_21.webp'; // iPhone 16
import pro22 from '../../assets/images/rent_pro_22.webp'; // iPhone 17 Pro Max
import pro23 from '../../assets/images/rent_pro_23.webp'; // Galaxy S23 Ultra
import pro24 from '../../assets/images/rent_pro_24.webp'; // Galaxy Tab
import Sidebar from "../../components/layout/user/Sidebar";
// pro25, pro26, pro27, pro28 (dùng cho các danh mục khác)

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


const PhonesTabletsPage = () => {
  const products = [
    { title: "Apple iPhone 17 Pro - 256GB", specs: "6.7'' LTPO Super Retina XDR OLED", price: "€74.90", image: pro20 },
    { title: "Apple iPhone 16 - 128GB - Dual SIM", specs: "6.1'' OLED, Super Retina XDR", price: "€44.90", image: pro21 },
    { title: "Apple iPhone 17 Pro Max - 256GB", specs: "6.7'' LTPO Super Retina XDR OLED", price: "€74.90", image: pro22 },
    { title: "Apple iPad (2023) - WiFi - iOS - 128GB", specs: "11'' Liquid Retina IPS LCD", price: "€19.90", discountTag: "-25%", image: pro17 },
    { title: "Apple 11'' iPad Air (2023) - WiFi - iOS - 128GB", specs: "11'' Liquid Retina, Apple M3", price: "€29.90", discountTag: "-25%", image: pro16 },
    { title: "Samsung Galaxy S23 Ultra", specs: "6.8'' Dynamic AMOLED 2X", price: "€49.90", image: pro23 },
    { title: "Apple iPhone 16 Pro - 128GB", specs: "6.1'' LTPO Super Retina XDR", price: "€49.90", image: pro19 },
    { title: "Apple iPhone Air - 256GB", specs: "6.1'' LTPO Super Retina XDR OLED", price: "€39.90", image: pro21 }, // reusing pro21 for a different phone model for now
    { title: "Apple iPhone 15 - 128GB - Dual SIM", specs: "6.1'' OLED, Super Retina XDR", price: "€32.90", image: pro19 }, // reusing pro19 for a different phone model for now
    { title: "Samsung Tablet, Galaxy Tab S10 FE", specs: "10.4'' TFT, Android", price: "€22.90", image: pro24 },
    { title: "Apple iPhone 16 Plus - 128GB", specs: "6.7'' Liquid Retina XDR", price: "€49.90", image: pro21 }, // reusing pro21
    { title: "Apple iPhone 15 Pro Max - 256GB", specs: "6.7'' LTPO Super Retina XDR", price: "€74.90", image: pro20 }, // reusing pro20
  ];

  const subCategories = [
    { name: "Smartphones" },
    { name: "Tablets" },
    { name: "E-Readers & E-Paper Tablets" },
    { name: "Accessories" },
  ];

  const brands = [
    { name: "Apple", count: 94 },
    { name: "Google", count: 17 },
    { name: "Huawei", count: 1 },
    { name: "Lenovo", count: 1 },
    { name: "Samsung", count: 42 },
  ];

  return (
    <div className="bg-white font-sans text-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold mb-4">Rent Phones & Tablets</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          Our smartphones and mobile devices accompany us throughout our days. Rent the latest iPhones, iPads and Samsung Galaxy models.
        </p>
        
        {/* Top Category Chips (like in the original image) */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 items-center">
            {/* Navigational buttons for categories (similar to the image) */}
            <div className="flex items-center space-x-2"> {/* Added flex and space-x for better alignment */}
                <button className="p-2 border rounded-full hover:bg-gray-100 hidden sm:block"><IoHeartOutline size={16} className="rotate-90"/></button> {/* Placeholder for left arrow if needed */}
                <button className="p-2 border rounded-full hover:bg-gray-100 hidden sm:block"><IoHeartOutline size={16} className="-rotate-90"/></button> {/* Placeholder for right arrow if needed */}
            </div>
            
            {/* The main category chips with images */}
            <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
                    <img src="https://via.placeholder.com/60" alt="Samsung Galaxy" className="h-16 mb-1"/>
                    <span>Samsung Galaxy</span>
                </div>
                <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
                    <img src="https://via.placeholder.com/60" alt="iPhone" className="h-16 mb-1"/>
                    <span>iPhone</span>
                </div>
                 <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
                    <img src="https://via.placeholder.com/60" alt="iPhone 15" className="h-16 mb-1"/>
                    <span>iPhone 15</span>
                </div>
                <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
                    <img src="https://via.placeholder.com/60" alt="Google Pixel" className="h-16 mb-1"/>
                    <span>Google Pixel</span>
                </div>
                 <div className="flex-shrink-0 w-32 h-28 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 text-center text-sm font-medium shadow-sm hover:shadow-md cursor-pointer">
                    <img src="https://via.placeholder.com/60" alt="iPad" className="h-16 mb-1"/>
                    <span>iPad</span>
                </div>
            </div>
        </div>

        <div className="flex gap-8">
            <Sidebar
              activeCategory="All Phones & Tablets"
              subCategories={subCategories}
              defaultRentDuration="6 months"
              minPrice={2}
              maxPrice={290}
              defaultPriceRange={100} // Cập nhật defaultPriceRange để giống ảnh
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

export default PhonesTabletsPage;