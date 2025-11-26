// src/components/Header.jsx
import React, { useState } from "react"; // Bước 1: Import useState
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoCartOutline,
  IoPersonOutline,
  IoMenu,
} from "react-icons/io5";

import GimoLogo from "../../../assets/images/gimo-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    "Phones & Tablets",
    "Gaming & VR",
    "Cameras",
    "Audio & Music",
  ];
  const secondaryLinks = [
    { text: "Brands", path: "#" },
    { text: "Top products", path: "/top-products" },
    { text: "Deals %", path: "/deals" },
  ];

  // Bước 2: Tạo state để quản lý việc hiển thị menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Giả sử chúng ta có state để kiểm tra đăng nhập
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 h-[100%]">
              <Link to="/">
                <img
                  src={GimoLogo}
                  alt="GIMO Logo"
                  className="h-[150px] w-auto" // Các class CSS vẫn được giữ nguyên
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-xl">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoSearchOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <Link to="/notifications">
                <IoNotificationsOutline className="h-6 w-6 cursor-pointer text-gray-600 hover:text-black" />
              </Link>
              <Link to="/cart-page">
                <IoCartOutline className="h-6 w-6 cursor-pointer text-gray-600 hover:text-black" />
              </Link>
              {/* Bước 3: Bọc icon User và Dropdown vào một div chung */}
              <div
                className="relative"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <IoPersonOutline className="h-6 w-6 cursor-pointer text-gray-600 hover:text-black" />

                {/* Bước 4: Render có điều kiện menu dropdown */}
                {isMenuOpen && !isLoggedIn && (
                  <div className="absolute top-4 right-0 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-5 z-20 text-center">
                    <p className="font-semibold text-gray-800 mb-4">
                      Welcome to Gimo !
                    </p>
                    <div className="flex items-center gap-3 mb-4">
                      <button className="flex-1 bg-[#4C8787] text-white font-semibold px-4 py-2 rounded-full hover:bg-teal-700 transition">
                        Sign up
                      </button>
                      <button className="flex-1 border border-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition">
                        Log in
                      </button>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-black underline"
                    >
                      Help Center
                    </a>
                  </div>
                )}
              </div>{" "}
              <IoMenu className="h-6 w-6 cursor-pointer text-gray-600 hover:text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="border-b">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-8 py-3 text-sm font-medium">
          <a href="#" className="px-4 py-2 rounded-full">
            All categories
          </a>
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-gray-600 hover:text-black">
              {link}
            </a>
          ))}
          <div className="h-5 border-l border-gray-300"></div>
          {secondaryLinks.map((link) => (
            <Link
              key={link.text}
              to={link.path}
              className="text-gray-600 hover:text-black"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
