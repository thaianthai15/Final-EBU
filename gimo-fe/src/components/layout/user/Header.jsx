// src/components/layout/user/Header.jsx
import React, { useState, useEffect } from "react";
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoCartOutline,
  IoPersonOutline,
  IoMenu,
  IoLogOutOutline,
  IoPersonCircleOutline
} from "react-icons/io5";

import GimoLogo from "../../../assets/images/gimo-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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

  // --- STATE QUẢN LÝ ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // Lưu thông tin chi tiết user

  // 1. Kiểm tra trạng thái đăng nhập & Lấy thông tin User khi load trang
  useEffect(() => {
    // Lấy trạng thái đăng nhập
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);

    // Lấy thông tin user hiện tại (nếu có)
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  // 2. Hàm xử lý đăng xuất
  const handleLogout = () => {
    // Xóa toàn bộ dữ liệu phiên làm việc
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");
    
    // Reset state
    setIsLoggedIn(false);
    setUserInfo(null);
    setIsMenuOpen(false); // Đóng menu
    
    navigate("/login"); // Chuyển về trang login
  };

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
                  className="h-[150px] w-auto"
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

              {/* --- USER ICON & DROPDOWN --- */}
              <div
                className="relative"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                {/* Link dẫn đến Account nếu đã login, ngược lại về Login */}
                <Link to={isLoggedIn ? "/account" : "/login"}>
                    <IoPersonOutline 
                      className={`h-6 w-6 cursor-pointer hover:text-black transition-colors ${isLoggedIn ? "text-[#4C8787]" : "text-gray-600"}`} 
                    />
                </Link>

                {/* --- MENU DROPDOWN --- */}
                {isMenuOpen && (
                  <div className="absolute top-4 right-0 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-5 z-20 text-center">
                    
                    {/* TRƯỜNG HỢP 1: CHƯA ĐĂNG NHẬP */}
                    {!isLoggedIn ? (
                      <>
                        <p className="font-semibold text-gray-800 mb-4">
                          Welcome to Gimo !
                        </p>
                        <div className="flex items-center gap-3 mb-4">
                          <Link to="/signup" className="flex-1">
                            <button className="w-full bg-[#4C8787] text-white font-semibold px-4 py-2 rounded-full hover:bg-teal-700 transition">
                              Sign up
                            </button>
                          </Link>
                          <Link to="/login" className="flex-1">
                            <button className="w-full border border-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition">
                              Log in
                            </button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      /* TRƯỜNG HỢP 2: ĐÃ ĐĂNG NHẬP */
                      <div className="flex flex-col gap-2">
                        {/* Hiển thị Tên người dùng */}
                        <p className="font-bold text-gray-800 text-lg mb-0 truncate">
                          Hi, {userInfo?.firstName} {userInfo?.lastName}
                        </p>
                        
                        {/* Hiển thị Email người dùng */}
                        <p className="text-xs text-gray-500 mb-4 truncate">
                          {userInfo?.email}
                        </p> 
                        
                        <Link to="/account" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors text-left text-gray-700">
                            <IoPersonCircleOutline size={20} />
                            <span>My Account</span>
                        </Link>
                        
                        {/* Kiểm tra quyền Admin dựa trên localStorage hoặc userInfo */}
                        {localStorage.getItem('userRole') === 'ADMIN' && (
                             <Link to="/admin" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors text-left text-gray-700">
                                <IoPersonOutline size={20} />
                                <span>Admin Dashboard</span>
                            </Link>
                        )}

                        <div className="border-t border-gray-100 my-1"></div>

                        <button 
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors text-left w-full"
                        >
                            <IoLogOutOutline size={20} />
                            <span>Log out</span>
                        </button>
                      </div>
                    )}

                    <Link
                      to="/help-center"
                      className="block mt-4 text-sm text-gray-600 hover:text-black underline"
                    >
                      Help Center
                    </Link>
                  </div>
                )}
              </div>
              
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
            <a key={link} href="/category" className="text-gray-600 hover:text-black">
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