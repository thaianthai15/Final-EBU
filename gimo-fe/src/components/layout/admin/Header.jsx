import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoCartOutline,
  IoPersonOutline,
  IoMenu,
  IoLogOutOutline,
  IoPersonCircleOutline,
  IoHomeOutline,
} from "react-icons/io5";

import GimoLogo from "../../../assets/images/gimo-logo.png";

const AdminHeader = () => {
  const navigate = useNavigate();

  // --- STATE QUẢN LÝ ---
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Dropdown User
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // Danh sách các link điều hướng Admin
  const navLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Products", path: "/admin/products" },
    { name: "Users", path: "/admin/users" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Payments", path: "/admin/payments" },
    { name: "Reports", path: "/admin/reports" },
  ];

  // Kiểm tra trạng thái đăng nhập khi load trang
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    const userRole = localStorage.getItem("userRole");
    
    // Nếu không phải ADMIN có thể chuyển hướng về Home (Tùy chọn bảo mật)
    // if (userRole !== "ADMIN") navigate("/");

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
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Phần 1: Logo, Search, và các Icons */}
      <div className="border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/admin">
                <img
                  src={GimoLogo}
                  alt="GIMO Logo"
                  className="h-[150px] w-auto object-contain" 
                />
              </Link>
              <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded">
                ADMIN
              </span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-lg mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoSearchOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm nội dung quản trị..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A8D8C]"
                />
              </div>
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-6">
              {/* Nút về trang chủ User */}
              <Link to="/" title="Về trang chủ" className="text-gray-600 hover:text-[#4A8D8C]">
                <IoHomeOutline size={24} />
              </Link>
              
              <button className="text-gray-600 hover:text-black relative">
                <IoNotificationsOutline size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* USER DROPDOWN (Giống bên Header User) */}
              <div
                className="relative"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2 cursor-pointer py-2">
                   <div className="text-right hidden sm:block">
                      <p className="text-sm font-bold text-gray-800 leading-none">
                        {userInfo?.firstName || "Admin"}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">Administrator</p>
                   </div>
                   <IoPersonCircleOutline 
                    size={32} 
                    className={`${isLoggedIn ? "text-[#4A8D8C]" : "text-gray-400"}`}
                   />
                </div>

                {isMenuOpen && (
                  <div className="absolute top-full right-0 w-64 bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50">
                    <div className="pb-3 mb-3 border-b border-gray-100">
                      <p className="font-bold text-gray-800 truncate">
                        {userInfo?.firstName} {userInfo?.lastName}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {userInfo?.email}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <Link
                        to="/account"
                        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-gray-700 transition-colors"
                      >
                        <IoPersonOutline size={18} />
                        <span className="text-sm">Profile</span>
                      </Link>
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors w-full text-left"
                      >
                        <IoLogOutOutline size={18} />
                        <span className="text-sm font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần 2: Thanh điều hướng chính (Admin Nav) */}
      <div className="container mx-auto px-6">
        <nav className="flex items-center space-x-1 py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#4A8D8C] text-white shadow-md" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;