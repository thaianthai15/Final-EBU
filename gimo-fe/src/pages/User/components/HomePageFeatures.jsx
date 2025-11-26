// src/components/HomePageFeatures.jsx
import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import starter1 from "../../../assets/images/arrival_1.webp";
import starter2 from "../../../assets/images/arrival_2.webp";
import starter3 from "../../../assets/images/arrival_3.webp";
import starter4 from "../../../assets/images/arrival_4.webp";
import rent1 from "../../../assets/images/rent_1.webp";
import rent2 from "../../../assets/images/rent_2.webp";
import rent3 from "../../../assets/images/rent_3.webp";
import rent4 from "../../../assets/images/rent_4.webp";

// --- Dữ liệu giả lập ---
// Bạn nên thay thế các URL hình ảnh bằng các file trong project của bạn
const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Samsung_old_logo_before_year_2015.svg/1200px-Samsung_old_logo_before_year_2015.svg.png?20221128191222",
  },
  {
    name: "Nintendo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Razer",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png",
  },
  {
    name: "Acer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Acer_Logo.svg",
  },
  {
    name: "Lenovo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HP_logo_2025.svg/1202px-HP_logo_2025.svg.png?20250601014346",
  },
];

const gettingStartedSteps = [
  {
    step: 1,
    title: "Choose your tech",
    description:
      "Find your dream tech and ideal rental plan. Shorter and more flexible, or longer at a lower price?",
    image: starter1,
  },
  {
    step: 2,
    title: "Check out",
    description:
      "After placing your order, we run a credit check and email you the result and shipping details within 24 hours.",
    image: starter2,
  },
  {
    step: 3,
    title: "Use it, love it",
    description:
      "We deliver your device ASAP. Then you're free to enjoy your tech to the fullest.",
    image: starter3,
  },
  {
    step: 4,
    title: "Refurbish and re-rent",
    description:
      "Returned devices are cleaned, repaired, and re-rented for others to enjoy.",
    image: starter4,
  },
];

const safetyFeatures = [
  {
    title: "New or high-quality tech devices",
    subtitle: "With Quality Check",
    icon: rent1,
  },
  {
    title: "Damage protection",
    subtitle: "Up to 90% is covered",
    icon: rent2,
  },
  {
    title: "No hidden costs",
    subtitle: "You only pay for what you see",
    icon: rent3,
  },
  {
    title: "True top models",
    subtitle: "Original & latest technology",
    icon: rent4,
  },
];

// --- Component con ---
const SectionHeader = ({ title, showAllText, nav = false, onNavClick }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
    <div className="flex items-center gap-4">
      {showAllText && (
        <button className="bg-gray-100 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-gray-200 transition">
          {showAllText}
        </button>
      )}
      {nav && (
        <div className="hidden md:flex items-center gap-2">
          {/* Thêm onClick vào các nút */}
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

const HomePageFeatures = () => {
  const brandsScrollRef = useRef(null);
  const handleBrandsScroll = (direction) => {
    const scrollAmount = 300; // Khoảng cách cuộn mỗi lần click (bạn có thể điều chỉnh)
    if (brandsScrollRef.current) {
      if (direction === "left") {
        brandsScrollRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        brandsScrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="py-12 md:py-16 space-y-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- New Arrivals Section --- */}
        <section>
          <SectionHeader title="Most Popular" showAllText="Show all" />
          {/* Component sản phẩm sẽ được thêm vào đây */}
        </section>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Brands Section --- */}
        <section>
          <SectionHeader title="Brands" nav onNavClick={handleBrandsScroll} />
          <div className="relative">
            <div
              ref={brandsScrollRef}
              className="overflow-x-auto pb-4 -mb-4 scrollbar-hide"
            >
              <div className="flex space-x-4">
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex-shrink-0 w-40 h-24 bg-gray-50 rounded-lg flex flex-col items-center justify-center p-4 hover:bg-gray-100 transition cursor-pointer"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-8 object-contain"
                    />
                    <span className="text-sm mt-2 text-gray-600">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- New Arrivals Section --- */}
        <section>
          <SectionHeader title="New arrivals" showAllText="Show all" />
          {/* Component sản phẩm sẽ được thêm vào đây */}
        </section>
      </div>

      {/* --- Getting Started Section --- */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Getting started with Grover" nav />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gettingStartedSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium text-gray-500">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#4C8787] text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
              Find out more
            </button>
          </div>
        </div>
      </section>

      {/* --- Rent Safely Section --- */}
      <section className="text-center container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-gray-500 tracking-wider">
          500.000+ RENTERS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">
          Rent safely with Grover
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyFeatures.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="w-28 h-28 mb-4 flex items-center justify-center">
                <img src={feature.icon} alt="" className="w-full h-full" />
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Our Best Deals Section --- */}
        <section>
          <SectionHeader title="Our best deals" showAllText="Show all deals" />
          {/* Component sản phẩm sẽ được thêm vào đây */}
        </section>
      </div>
    </div>
  );
};

export default HomePageFeatures;
