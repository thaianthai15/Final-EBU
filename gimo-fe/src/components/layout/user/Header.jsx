import React, { useState, useEffect } from "react";
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoCartOutline,
  IoPersonOutline,
  IoMenu,
  IoLogOutOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

import GimoLogo from "../../../assets/images/gimo-logo.png"; // Đảm bảo đường dẫn đúng
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // --- DATA ---
  const navLinks = [
    { name: "Phones & Tablets", path: "/phones-tablets" },
    { name: "Gaming & VR", path: "/gaming-vr" },
    { name: "Cameras", path: "/cameras" },
    { name: "Audio & Music", path: "/audio-music" },
  ];

  // Lưu ý: Mình đã xóa "Brands" khỏi đây để xử lý riêng bên dưới
  const secondaryLinks = [
    { text: "Top products", path: "/top-products" },
    { text: "Deals %", path: "/deals" },
  ];

  // Dữ liệu cho Mega Menu Brands (Giống ảnh mẫu)
  const brandData = {
    col1: ["Lenovo", "Razer", "Google", "Nintendo", "Xiaomi"],
    col2: ["Acer", "HP", "Microsoft", "GoPro"],
    newBrands: ["Samsung", "Apple", "Canon"],
  };

  // --- STATE QUẢN LÝ ---
  const [isMenuOpen, setIsMenuOpen] = useState(false); // User Menu
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false); // Burger Menu
  const [isBrandsMenuOpen, setIsBrandsMenuOpen] = useState(false); // NEW: Brands Mega Menu

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setUserInfo(null);
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    // Thêm relative vào header để Menu con có thể căn chỉnh theo nó nếu cần
    <header className="bg-white sticky top-0 z-50 font-sans">
      <div className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 h-[100%]">
              <Link to="/">
                <img
                  src={GimoLogo}
                  alt="GIMO Logo"
                  className="h-[150px] w-auto object-contain" // Thêm object-contain để tránh méo logo
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-xl mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoSearchOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for Action Cameras..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4C8787]"
                />
              </div>
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-6">
              <Link to="/notifications">
                <IoNotificationsOutline className="h-6 w-6 cursor-pointer text-gray-600 hover:text-black" />
              </Link>
              <Link to="/cart-page">
                <IoCartOutline className="h-6 w-6 cursor-pointer text-gray-600 hover:text-black" />
              </Link>

              {/* USER ICON & DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <Link to={isLoggedIn ? "/account" : "/login"}>
                  <IoPersonOutline
                    className={`h-6 w-6 cursor-pointer hover:text-black transition-colors ${
                      isLoggedIn ? "text-[#4C8787]" : "text-gray-600"
                    }`}
                  />
                </Link>

                {isMenuOpen && (
                  <div className="absolute top-4 right-0 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-5 z-20 text-center">
                    {!isLoggedIn ? (
                      <>
                        <p className="font-semibold text-gray-800 mb-4">
                          Welcome to Gimo !
                        </p>
                        <div className="flex items-center gap-3 mb-4">
                          <Link to="/sign-up" className="flex-1">
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
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-gray-800 text-lg mb-0 truncate">
                          Hi, {userInfo?.firstName} {userInfo?.lastName}
                        </p>
                        <p className="text-xs text-gray-500 mb-4 truncate">
                          {userInfo?.email}
                        </p>
                        <Link
                          to="/account"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors text-left text-gray-700"
                        >
                          <IoPersonCircleOutline size={20} />
                          <span>My Account</span>
                        </Link>
                        {localStorage.getItem("userRole") === "ADMIN" && (
                          <Link
                            to="/admin"
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors text-left text-gray-700"
                          >
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

              {/* MENU DROPDOWN (Hamburger) */}
              <div
                className="relative"
                onMouseEnter={() => setIsNavMenuOpen(true)}
                onMouseLeave={() => setIsNavMenuOpen(false)}
              >
                <div className="h-full flex items-center cursor-pointer">
                  <IoMenu className="h-6 w-6 text-gray-600 hover:text-black" />
                </div>
                {isNavMenuOpen && (
                  <div className="absolute top-4 right-0 mt-3 w-60 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
                    <div className="flex flex-col">
                      <Link to="/gimo-care" className="px-5 py-3 text-md font-bold text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-left">Gimo Care</Link>
                      <Link to="#" className="px-5 py-3 text-md font-bold text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-left">Invite Friends</Link>
                      <Link to="/discount" className="px-5 py-3 text-md font-bold text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-left">Student Discount</Link>
                    </div>
                    <div className="border-t border-gray-100 my-1"></div>
                    <div className="flex flex-col">
                      <Link to="/gimo-business" className="px-5 py-3 text-md font-bold text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-left">Gimo Business</Link>
                    </div>
                    <div className="border-t border-gray-100 my-1"></div>
                    <div className="flex flex-col">
                      <Link to="/how-it-work" className="px-5 py-3 text-md font-bold text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-left">How It Works</Link>
                      <Link to="/reviews" className="px-5 py-3 text-md font-bold text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-left">Reviews</Link>
                      <Link to="/help-center" className="px-5 py-3 text-md font-bold text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-left">Help Center</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION LINKS BAR --- */}
      <div className="border-b relative"> 
        {/* Thêm relative ở đây là quan trọng để Mega Menu căn theo thanh nav này */}
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-8 py-3 text-sm font-medium">
          
          <Link to="#" className="px-4 py-2 rounded-full hover:bg-gray-100">
            All categories
          </Link>

          {/* Main Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Divider */}
          <div className="h-5 border-l border-gray-300"></div>

          {/* --- "BRANDS" MEGA MENU SECTION --- */}
          <div 
            className=""
            onMouseEnter={() => setIsBrandsMenuOpen(true)}
            onMouseLeave={() => setIsBrandsMenuOpen(false)}
          >
            <div className="cursor-pointer text-gray-600 hover:text-black h-full flex items-center py-2 border-b-2 border-transparent hover:border-black transition-all">
               Brands
            </div>

            {/* Dropdown Content */}
            {isBrandsMenuOpen && (
              <div className="absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-100 z-40 py-6 animate-fade-in-down">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-4 gap-8">
                    {/* Cột 1: Brands list 1 */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 text-base">Brands</h3>
                      <ul className="space-y-3">
                        {brandData.col1.map((brand) => (
                          <li key={brand}>
                            <Link to={`/brand/${brand.toLowerCase()}`} className="text-gray-500 hover:text-[#4C8787] hover:underline">
                              {brand}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cột 2: Brands list 2 (Không cần title, nối tiếp cột 1) */}
                    <div className="pt-10"> {/* Padding top để nó ngang hàng với list bên kia (bù cho cái title) */}
                      <ul className="space-y-3">
                        {brandData.col2.map((brand) => (
                          <li key={brand}>
                            <Link to={`/brand/${brand.toLowerCase()}`} className="text-gray-500 hover:text-[#4C8787] hover:underline">
                              {brand}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cột 3: New Brands */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 text-base">New Brands</h3>
                      <ul className="space-y-3">
                        {brandData.newBrands.map((brand) => (
                          <li key={brand}>
                            <Link to={`/brand/${brand.toLowerCase()}`} className="text-gray-500 hover:text-[#4C8787] hover:underline">
                              {brand}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cột 4: (Có thể để trống hoặc thêm ảnh quảng cáo) */}
                    <div>
                        {/* Ví dụ placeholder */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* --- END BRANDS SECTION --- */}

          {/* Các Secondary Links còn lại */}
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