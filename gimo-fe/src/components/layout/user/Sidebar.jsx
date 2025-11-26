// src/components/Sidebar.jsx
import React from "react";
import {
  IoChevronForward,
  IoPhonePortraitOutline,
  IoGameControllerOutline,
  IoCameraOutline,
  IoMusicalNotesOutline,
} from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";

const Sidebar = ({ hideDealsFilter = false }) => {
  const categories = [
    { name: "Phones & Tablets", icon: IoPhonePortraitOutline },
    { name: "Computers", icon: FiMonitor },
    { name: "Cameras", icon: IoCameraOutline },
    { name: "Gaming & VR", icon: IoGameControllerOutline },
    { name: "Audio & Music", icon: IoMusicalNotesOutline },
  ];

  const rentDurations = [
    "1 month",
    "3 months",
    "6 months",
    "12 months",
    "18 months",
    "24 months",
  ];
  const sortOptions = [
    "Most popular",
    "Price (high to low)",
    "Price (low to high)",
    "New arrivals",
  ];
  const brands = [
    "Acer (26)",
    "Apple (195)",
    "Asus (17)",
    "Canon (39)",
    "Delonghi (0)",
    "Denon DJ (3)",
  ];

  return (
    <aside className="w-64 flex-shrink-0 pr-8">
      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-bold text-sm mb-3">BROWSE CATEGORIES</h3>
        <ul>
          {categories.map((cat) => (
            <li key={cat.name}>
              <a
                href="#"
                className="flex items-center justify-between py-2 text-gray-700 hover:text-black"
              >
                <span className="flex items-center gap-3">
                  <cat.icon /> {cat.name}
                </span>
                <IoChevronForward />
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="text-sm font-semibold hover:underline">
              Show all
            </a>
          </li>
        </ul>
      </div>

      {/* Rent For */}
      <div className="mb-8">
        <h3 className="font-bold text-sm mb-3">RENT FOR ⓘ</h3>
        <div className="grid grid-cols-2 gap-2">
          {rentDurations.map((duration) => (
            <button
              key={duration}
              className={`text-sm border rounded-md py-1.5 ${
                duration === "1 month"
                  ? "bg-black text-white"
                  : "border-gray-300 hover:border-black"
              }`}
            >
              {duration}
            </button>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-8">
        <h3 className="font-bold text-sm mb-3">SORT BY</h3>
        <div className="space-y-2">
          {sortOptions.map((option, index) => (
            <label
              key={option}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="sort"
                className="form-radio text-black focus:ring-black"
                defaultChecked={index === 0}
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Monthly Price */}
      <div className="mb-8">
        <h3 className="font-bold text-sm mb-3">MONTHLY PRICE</h3>
        <input
          type="range"
          min="2"
          max="290"
          defaultValue="290"
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm accent-black"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>€2</span>
          <span>€290</span>
        </div>
      </div>

      {/* Deals */}
      {!hideDealsFilter && (
        <div className="mb-8">
          <h3 className="font-bold text-sm mb-3">DEALS</h3>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox rounded text-black focus:ring-black"
            />
            <span className="text-sm">Deals</span>
          </label>
        </div>
      )}

      {/* Brands */}
      <div>
        <h3 className="font-bold text-sm mb-3">BRANDS</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                className="form-checkbox rounded text-black focus:ring-black"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
        <a
          href="#"
          className="text-sm font-semibold hover:underline mt-2 inline-block"
        >
          Show all brands
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
