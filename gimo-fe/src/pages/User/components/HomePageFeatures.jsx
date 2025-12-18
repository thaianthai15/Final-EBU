// src/components/HomePageFeatures.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6"; // Import Heart Icon

// Import images assets (Giữ nguyên các ảnh cũ của bạn)
import starter1 from "../../../assets/images/arrival_1.webp";
import starter2 from "../../../assets/images/arrival_2.webp";
import starter3 from "../../../assets/images/arrival_3.webp";
import starter4 from "../../../assets/images/arrival_4.webp";
import rent1 from "../../../assets/images/rent_1.webp";
import rent2 from "../../../assets/images/rent_2.webp";
import rent3 from "../../../assets/images/rent_3.webp";
import rent4 from "../../../assets/images/rent_4.webp";

// --- DỮ LIỆU GIẢ LẬP SẢN PHẨM (Bạn thay ảnh thật vào src) ---
const mostPopularData = [
  {
    id: 1,
    name: "Apple iPhone 17 Pro Max - 256GB",
    specs: "6.9\" LTPO Super Retina XDR OLED, Triple Rear Camera, 12GB RAM, Apple A19 Pro, 5G",
    price: "74.90",
    image: "https://res.cloudinary.com/grover/image/upload/e_trim/f_webp,q_auto/b_white,c_pad,h_300,w_300/f_auto,q_auto/v1757605693/anjidnsjcdtnrgvvcopg.jpg",
    isNew: false,
  },
  {
    id: 2,
    name: "Sony PlayStation 5 Slim Digital Console",
    specs: "4K & 8K ready, 825GB custom SSD, up to 120fps",
    oldPrice: "34.90",
    price: "22.90",
    image: "src/assets/images/PS5_Mobile__2_.webp",
    discountTag: "-34%",
  },
  {
    id: 3,
    name: "Meta Quest 3 512 GB VR Headset",
    specs: "Mixed Reality, 4K+ Infinite Display, AR/VR, 90 Hz, Pancake lens, TruTouch Haptics",
    price: "29.90",
    image: "src/assets/images/Meta_Quest_Mobile.webp",
  },
  {
    id: 4,
    name: "Acer Nitro 50 (N50-656) Gaming Desktop",
    specs: "NVIDIA® GeForce® RTX™ 5060, 32GB, 1TB SSD",
    price: "74.90",
    image: "https://res.cloudinary.com/grover/image/upload/e_trim/f_webp,q_auto/b_white,c_pad,h_300,w_300/f_auto,q_auto/v1750925641/sx8nla5tlbqywztxnnre.png",
    tag: "NEW TO GIMO",
  },
];

const newArrivalsData = [
  {
    id: 5,
    name: 'MacBook Pro 14" - Apple M5 Chip 16GB Memory',
    specs: "M5, Liquid Retina XDR ProMotion 14.2-inch, Keyboard - English",
    price: "89.90",
    image: "src/assets/images/rent_pro_17.webp",
    tag: "NEW TO GIMO",
  },
  {
    id: 6,
    name: "Ninja ES701EU Luxe Cafe Pro",
    specs: "",
    price: "32.90",
    image: "https://res.cloudinary.com/grover/image/upload/e_trim/f_webp,q_auto/b_white,c_pad,h_300,w_300/f_auto,q_auto/v1699020029/uhyf7w6cqacgr638tolh.png",
    tag: "NEW TO GIMO",
  },
  {
    id: 7,
    name: "Dreame L40s Pro Ultra",
    specs: "",
    price: "39.90",
    image: "https://res.cloudinary.com/grover/image/upload/e_trim/f_webp,q_auto/b_white,c_pad,h_300,w_300/f_auto,q_auto/v1761137846/szi1qxdcpqvzqq9njcgn.png",
    tag: "NEW TO GIMO",
  },
  {
    id: 8,
    name: 'Apple 11" iPad Pro (2025) - WiFi - M5 - 256GB',
    specs: "11\" Ultra Retina XDR Display, Apple M5, 12GB RAM, WiFi",
    price: "54.90",
    image: "https://res.cloudinary.com/grover/image/upload/e_trim/f_webp,q_auto/b_white,c_pad,h_300,w_300/f_auto,q_auto/v1761233551/pptoi1metnhrv1mumzg2.png",
    tag: "NEW TO GIMO",
  },
];

const bestDealsData = [
  {
    id: 9,
    name: "Sony PlayStation 5 Pro Console",
    specs: "4K graphics, 120 Hz, 2 TB SSD storage drive, Built-in WiFi & Ethernet & Bluetooth",
    oldPrice: "49.90",
    price: "34.90",
    image: "src/assets/images/PS5_Mobile__2_.webp",
    discountTag: "-30%",
  },
  {
    id: 10,
    name: "Apple iPhone 16 Pro Max - 256GB - Dual SIM",
    specs: "6.9\" OLED Super Retina XDR, Triple Rear Camera, 8GB RAM, Apple A18 Pro, 5G",
    oldPrice: "69.90",
    price: "59.90",
    image: "src/assets/images/pic52.png",
    discountTag: "-14%",
  },
  {
    id: 11,
    name: "Apple Airpods Max with USB-C Over-ear",
    specs: "USB-C, Bluetooth 5.0, Up to 20 h with ANC",
    oldPrice: "34.90",
    price: "26.90",
    image: "src/assets/images/pic51.png",
    discountTag: "-23%",
  },
  {
    id: 12,
    name: 'Microsoft Surface Pro 12", Copilot+ PC',
    specs: "Touchscreen 13\", 2-in-1 Laptop, Copilot, Power adaptor not included",
    oldPrice: "49.90",
    price: "46.90",
    image: "src/assets/images/pic33.webp",
    discountTag: "-6%",
  },
];

const brands = [
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Samsung_old_logo_before_year_2015.svg/1200px-Samsung_old_logo_before_year_2015.svg.png?20221128191222" },
  { name: "Nintendo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Razer", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png" },
  { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Acer_Logo.svg" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HP_logo_2025.svg/1202px-HP_logo_2025.svg.png?20250601014346" },
];

const gettingStartedSteps = [
  { step: 1, title: "Choose your tech", description: "Find your dream tech and ideal rental plan. Shorter and more flexible, or longer at a lower price?", image: starter1 },
  { step: 2, title: "Check out", description: "After placing your order, we run a credit check and email you the result and shipping details within 24 hours.", image: starter2 },
  { step: 3, title: "Use it, love it", description: "We deliver your device ASAP. Then you're free to enjoy your tech to the fullest.", image: starter3 },
  { step: 4, title: "Refurbish and re-rent", description: "Returned devices are cleaned, repaired, and re-rented for others to enjoy.", image: starter4 },
];

const safetyFeatures = [
  { title: "New or high-quality tech devices", subtitle: "With Quality Check", icon: rent1 },
  { title: "Damage protection", subtitle: "Up to 90% is covered", icon: rent2 },
  { title: "No hidden costs", subtitle: "You only pay for what you see", icon: rent3 },
  { title: "True top models", subtitle: "Original & latest technology", icon: rent4 },
];

// --- COMPONENT: PRODUCT CARD (Card sản phẩm tái sử dụng) ---
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-shadow relative h-full">
      {/* Tags & Heart */}
      <div className="flex justify-between items-start mb-2 z-10">
        <div className="flex flex-col gap-1">
          {product.discountTag && (
            <span className="bg-[#FF004F] text-white text-[10px] font-bold px-2 py-1 rounded-sm w-fit">
              {product.discountTag}
            </span>
          )}
          {product.tag && (
            <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase w-fit">
              {product.tag}
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
      <div className="mb-2">
        <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>
        {product.specs && (
          <p className="text-xs text-gray-500 mb-3 line-clamp-2">
            {product.specs}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="mt-auto">
        <div className="flex items-baseline gap-1 flex-wrap">
          <span className="text-xs text-gray-500">from</span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through decoration-black">
              €{product.oldPrice}
            </span>
          )}
          <span className={`font-bold text-sm ${product.oldPrice ? 'text-red-600' : 'text-gray-900'}`}>
            €{product.price}
          </span>
          <span className="text-[10px] text-gray-500">/Month</span>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: SECTION HEADER (Đã thêm prop linkTo) ---
const SectionHeader = ({ title, showAllText, linkTo, nav = false, onNavClick }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
    <div className="flex items-center gap-4">
      {showAllText && linkTo && (
        <Link to={linkTo}>
          <button className="bg-gray-100 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-gray-200 transition text-gray-700">
            {showAllText}
          </button>
        </Link>
      )}
      {nav && (
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => onNavClick("left")}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <IoChevronBack className="h-4 w-4 text-gray-600" />
          </button>
          <button
            onClick={() => onNavClick("right")}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <IoChevronForward className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const HomePageFeatures = () => {
  const brandsScrollRef = useRef(null);

  const handleBrandsScroll = (direction) => {
    const scrollAmount = 300;
    if (brandsScrollRef.current) {
      if (direction === "left") {
        brandsScrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        brandsScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="py-12 md:py-16 space-y-16">

      {/* 1. MOST POPULAR */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section>
          <SectionHeader
            title="Most Popular"
            showAllText="Show all"
            linkTo="/top-products"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mostPopularData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* 2. BRANDS */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section>
          <SectionHeader title="Brands" nav onNavClick={handleBrandsScroll} />
          <div className="relative">
            <div ref={brandsScrollRef} className="overflow-x-auto pb-4 -mb-4 scrollbar-hide">
              <div className="flex space-x-4">
                {brands.map((brand) => (
                  <div key={brand.name} className="flex-shrink-0 w-40 h-24 bg-gray-50 rounded-lg flex flex-col items-center justify-center p-4 hover:bg-gray-100 transition cursor-pointer">
                    <img src={brand.logo} alt={brand.name} className="max-h-8 object-contain" />
                    <span className="text-sm mt-2 text-gray-600">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. NEW ARRIVALS */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section>
          <SectionHeader
            title="New arrivals"
            showAllText="Show all"
            linkTo="/top-products"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivalsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* 4. GETTING STARTED */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Getting started with Gimo" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gettingStartedSteps.map((item) => (
              <div key={item.step} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium text-gray-500">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{item.description}</p>
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden h-40">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-work">
              <button className="bg-[#4C8787] text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition-colors">
                Find out more
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. RENT SAFELY */}
      <section className="text-center container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-gray-500 tracking-wider">500.000+ RENTERS</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Rent safely with Gimo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyFeatures.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="w-28 h-28 mb-4 flex items-center justify-center">
                <img src={feature.icon} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR BEST DEALS */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section>
          <SectionHeader
            title="Our best deals"
            showAllText="Show all deals"
            linkTo="/deals"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestDealsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageFeatures;