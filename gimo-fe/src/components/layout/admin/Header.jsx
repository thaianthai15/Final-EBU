import React from "react";
import { NavLink } from "react-router-dom"; // Sử dụng NavLink để style cho link active
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoCartOutline,
  IoPersonOutline,
  IoMenu,
} from "react-icons/io5";

import GimoLogo from "../../../assets/images/gimo-logo.png";

const AdminHeader = () => {
  // Danh sách các link điều hướng
  const navLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Products", path: "/admin/products" },
    { name: "Users", path: "/admin/users" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Payments", path: "/admin/payments" },
    { name: "Reports", path: "/admin/reports" },
  ];

  return (
    <header className="bg-white">
      {/* Phần 1: Logo, Search, và các Icons */}
      <div className="border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={GimoLogo}
                alt="GIMO Logo"
                className="h-[150px] w-auto" 
              />
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoSearchOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A8D8C]"
                />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-600 hover:text-black">
                <IoNotificationsOutline size={24} />
              </button>
              <button className="text-gray-600 hover:text-black">
                <IoCartOutline size={24} />
              </button>
              <button className="text-gray-600 hover:text-black">
                <IoPersonOutline size={24} />
              </button>
              <button className="text-gray-600 hover:text-black">
                <IoMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Phần 2: Thanh điều hướng chính */}
      <div className="container mx-auto px-6">
        <nav className="flex items-center space-x-2 py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              // Dùng function trong className để xác định trạng thái active
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[#4A8D8C] text-white" // Style cho link đang active
                    : "text-gray-600 hover:bg-gray-100 hover:text-black" // Style cho link không active
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
