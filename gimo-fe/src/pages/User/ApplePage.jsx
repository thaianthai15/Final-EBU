import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaApple } from "react-icons/fa6";
import Header from "../../components/layout/user/Header";
import Footer from "../../components/layout/user/Footer"; 

// Import images
import Banner1 from '../../assets/images/brand_banner.webp'
import Banner2 from '../../assets/images/brand_banner2.webp'
import pro1 from '../../assets/images/apple_1.webp'
import pro2 from '../../assets/images/apple_2.webp'
import pro3 from '../../assets/images/apple_3.webp'
import pro4 from '../../assets/images/apple_4.webp'
import pro5 from '../../assets/images/apple_5.webp'
import pro6 from '../../assets/images/apple_6.webp'
import pro7 from '../../assets/images/apple_7.webp'
import pro8 from '../../assets/images/apple_8.webp'
import pro9 from '../../assets/images/apple_9.webp'
import deal1 from '../../assets/images/best_deal1.webp'
import deal2 from '../../assets/images/best_deal2.webp'
import deal3 from '../../assets/images/best_deal3.webp'
import deal4 from '../../assets/images/best_deal4.webp'

// --- MOCK DATA (Đã thay ảnh thật) ---
const categories = [
  {
    title: "iPhones",
    image: pro1, // Dùng ảnh sản phẩm iPhone
    bg: "bg-[#F9F9F9]",
  },
  {
    title: "iPads",
    image: pro2, // Dùng ảnh sản phẩm iPad
    bg: "bg-[#F9F9F9]",
  },
  {
    title: "Apple Watches",
    image: pro3, // Dùng ảnh Apple Watch
    bg: "bg-[#F9F9F9]",
  },
  {
    title: "Mac",
    image: pro4, // Dùng ảnh Macbook
    bg: "bg-[#F9F9F9]",
  },
];

const bestDeals = [
  {
    id: 1,
    name: "Apple AirPods Pro 3 In-ear Bluetooth Headphones",
    specs: "Bluetooth 5.0, Noise Cancellation",
    oldPrice: "19.90",
    price: "17.90",
    image: deal1, // Ảnh Deal 1
    tag: "-10%",
  },
  {
    id: 2,
    name: "Apple iPad (2025) - WiFi - iOS - 128GB",
    specs: "11\" Liquid Retina IPS LCD, Apple A16 Bionic",
    oldPrice: "32.90",
    price: "19.90",
    image: deal2, // Ảnh Deal 2
    tag: "-40%",
  },
  {
    id: 3,
    name: "Apple 11\" iPad Air (2025) - WiFi - iOS - 128GB",
    specs: "11\" Liquid Retina, Apple M2, 8GB RAM",
    oldPrice: "39.90",
    price: "29.90",
    image: deal3, // Ảnh Deal 3
    tag: "-25%",
  },
  {
    id: 4,
    name: "Apple Airpods Max with USB-C Over-ear",
    specs: "USB-C, Bluetooth 5.0, Up to 20h with ANC",
    oldPrice: "34.90",
    price: "26.90",
    image: deal4, // Ảnh Deal 4
    tag: "-23%",
  },
];

const allProducts = [
  {
    id: 5,
    name: "Apple iPhone 17 Pro - 256GB",
    specs: "6.3\" LTPO Super Retina XDR OLED, Triple Rear Camera",
    price: "69.90",
    image: pro5, // Ảnh Pro 5
    isNew: true,
  },
  {
    id: 6,
    name: "Apple iPhone 16 - 128GB - Dual SIM",
    specs: "6.1\" OLED Super Retina XDR, Dual Rear Camera",
    price: "44.90",
    image: pro6, // Ảnh Pro 6
    isNew: false,
  },
  {
    id: 7,
    name: "Apple AirPods Pro 3 In-ear Bluetooth",
    specs: "MagSafe Charging Case, ANC",
    oldPrice: "19.00",
    price: "17.90",
    image: pro7, // Ảnh Pro 7
    tag: "-5%",
  },
  {
    id: 8,
    name: "Apple iPhone 17 Pro Max - 256GB",
    specs: "6.9\" LTPO Super Retina XDR OLED",
    price: "74.90",
    image: pro8, // Ảnh Pro 8
    isNew: false,
  },
];

// Tạo mảng New Arrivals từ các ảnh còn lại
const newArrivals = [
    { id: 101, name: "MacBook Pro 16 M3", specs: "16GB RAM, 512GB SSD", price: "89.90", image: pro9 },
    { id: 102, name: "iPad Pro M4 13-inch", specs: "WiFi + Cellular", price: "55.90", image: pro1 },
    { id: 103, name: "Apple Watch Ultra 2", specs: "Titanium Case, Trail Loop", price: "35.90", image: pro2 },
    { id: 104, name: "Mac Studio M2 Max", specs: "32GB RAM, 1TB SSD", price: "99.90", image: pro3 },
];

// --- COMPONENTS ---

// 1. Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-shadow relative h-full">
      {/* Tags & Heart */}
      <div className="flex justify-between items-start mb-2">
        <div>
          {product.tag && (
            <span className="bg-[#FF004F] text-white text-[10px] font-bold px-2 py-1 rounded-sm">
              {product.tag}
            </span>
          )}
          {product.isNew && !product.tag && (
            <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-sm">
              NEW TO GIMO
            </span>
          )}
        </div>
        <button className="text-gray-300 hover:text-red-500">
          <FaRegHeart size={18} />
        </button>
      </div>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Info */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">
          {product.specs}
        </p>
      </div>

      {/* Price */}
      <div className="mt-auto">
        <div className="flex items-baseline gap-2">
          <span className="text-xs text-gray-500">From</span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              €{product.oldPrice}
            </span>
          )}
          <span className="text-red-600 font-bold text-sm">
            €{product.price}
          </span>
          <span className="text-[10px] text-gray-500">/Month</span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE ---
const ApplePage = () => {
  return (
    <div className="bg-white font-sans">
      <Header />

      <main className="pb-20">
        {/* === HERO BANNER === */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="relative w-full h-[250px] md:h-[350px] bg-[#111111] rounded-2xl overflow-hidden flex items-end p-8 md:p-12">
            {/* Background Graphic (Giả lập đường cong) */}
            <div className="absolute top-0 right-0 w-2/3 h-full border-l border-gray-700 rounded-full opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
            
            {/* Logo */}
            <div className="relative z-10 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                <FaApple size={32} className="text-black" />
            </div>

            {/* Product Image in Banner: Thay bằng Banner1 */}
            <div className="absolute right-0 bottom-0 h-full w-full md:w-2/3 flex items-end justify-end">
                 <img 
                    src={Banner1} 
                    alt="Hero Devices" 
                    className="h-full w-full object-cover md:object-contain object-right"
                 />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-6">Apple</h1>
        </section>

        {/* === CATEGORIES === */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <Link to="#" key={index} className="group block">
                <div className={`${cat.bg} rounded-2xl p-6 h-64 relative overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-md`}>
                  <h3 className="font-bold text-lg text-gray-900">{cat.title}</h3>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute bottom-4 right-4 w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* === BEST DEALS === */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Our best deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestDeals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8">
             <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
              Show all deals
            </button>
          </div>
        </section>

        {/* === PROMO BANNER (First in line) === */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-black rounded-2xl overflow-hidden flex flex-col md:flex-row items-center relative min-h-[300px]">
            {/* Text Content */}
            <div className="w-full md:w-1/2 p-10 z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                First in line for Apple
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
                Have you seen Apple's keynote? Then you know the amazing technology that is coming.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                Explore Apple
              </button>
            </div>

            {/* Image Content: Thay bằng Banner2 */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
                 <img 
                    src={Banner2} 
                    alt="iPhone Lineup"
                    className="object-cover h-full w-full opacity-90"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* === ALL PRODUCTS === */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">All products from Apple</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
             {/* Lặp lại products để lấp đầy grid - Có thể thay bằng deal1 -> deal4 để khác biệt */}
             {bestDeals.map((product) => (
              <ProductCard key={`dup-${product.id}`} product={product} />
            ))}
          </div>
           <div className="mt-8">
             <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
              Show all
            </button>
          </div>
        </section>

        {/* === NEW ARRIVALS SECTION === */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
           <h2 className="text-xl font-bold text-gray-900 mb-6">New arrivals</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Dùng mảng newArrivals đã map ảnh */}
             {newArrivals.map((product) => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between mb-2">
                         <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">New to Gimo</span>
                         <FaRegHeart className="text-gray-300" />
                    </div>
                    {/* Hình ảnh New Arrivals */}
                    <div className="flex justify-center mb-4">
                        <img src={product.image} className="h-40 w-auto object-contain" alt={product.name} />
                    </div>
                    <h3 className="font-bold text-sm mb-1">{product.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{product.specs}</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xs text-gray-500">From</span>
                        <span className="text-gray-900 font-bold text-sm">€{product.price}</span>
                        <span className="text-[10px] text-gray-500">/Month</span>
                    </div>
                </div>
             ))}
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ApplePage;