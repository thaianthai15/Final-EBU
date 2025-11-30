// src/components/Hero.jsx
import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Import images from assets folder
import orangeIphone from "../../../assets/images/orange-iphone.png";
import airpodsPro from "../../../assets/images/airpods-pro.png";
import headphoneCombo from "../../../assets/images/headphone-combo.png";
import appleLineup from "../../../assets/images/apple-lineup.png";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              The Biggest Apple Launch Ever
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              The iPhone 17 is the most powerful iPhone ever made, while the
              iPhone Air is the thinnest. Plus, there are brand-new Apple
              Watches and AirPods Pro 3.
            </p>
            <button className="mt-8 bg-[#4C8787] text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition-colors">
              Rent now
            </button>
          </div>
          <div className="lg:w-2/3 flex-1">
            {/* 
              Chúng ta sẽ tạo một lưới 3 cột và 2 hàng.
              - iPhone màu cam: Chiếm 2 cột đầu, hàng trên cùng.
              - Dải iPhone: Chiếm cột thứ 3, và kéo dài cả 2 hàng.
              - AirPods: Chiếm cột đầu tiên, hàng dưới.
              - Tai nghe: Chiếm cột thứ hai, hàng dưới.
            */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[450px] lg:h-[500px]">
              {/* 1. iPhone màu cam (Vị trí: Hàng 1, Cột 1-2) */}
              <div className="col-span-2 row-span-1 bg-white rounded-2xl p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={orangeIphone}
                  alt="Orange iPhone"
                  className="max-h-full max-w-full object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 2. Dải iPhone (Vị trí: Hàng 1-2, Cột 3) */}
              <div className="col-start-3 row-span-2 bg-white rounded-2xl p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={appleLineup}
                  alt="iPhone lineup"
                  className="h-full object-contain transform hover:scale-105 transition-transform duration-300" // Dùng object-cover để lấp đầy chiều cao
                />
              </div>

              {/* 3. AirPods (Vị trí: Hàng 2, Cột 1) */}
              <div className="col-start-1 row-start-2 bg-white rounded-2xl p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={airpodsPro} // Thay thế bằng ảnh phù hợp
                  alt="Airpods Pro and Max"
                  className="max-h-full max-w-full object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 4. Tai nghe (Vị trí: Hàng 2, Cột 2) */}
              <div className="col-start-2 row-start-2 bg-white rounded-2xl p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={headphoneCombo} // Thay thế bằng ảnh phù hợp
                  alt="Headphone Combo"
                  className="max-h-full max-w-full object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls - static for display */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 hover:bg-gray-100">
          <IoChevronBack className="h-4 w-4 text-gray-600" />
        </button>
        <button className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-gray-100">
          <IoChevronForward className="h-4 w-4 text-gray-600" />
        </button>

        {/* Carousel Dots */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex space-x-2">
          <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
