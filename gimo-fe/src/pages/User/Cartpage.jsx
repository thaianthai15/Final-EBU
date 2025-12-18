// src/pages/CartPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import {
  IoTrashOutline,
  IoChevronDownOutline,
  IoTimeOutline,
  IoBusinessOutline,
} from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { LuTruck } from "react-icons/lu";

// Import images
import iphoneImage from "../../assets/images/iphone_cart.png";
import visaLogo from "../../assets/images/visa.png";
import mastercardLogo from "../../assets/images/mastercard.png";
import momoLogo from "../../assets/images/momo.png";
import vnpayLogo from "../../assets/images/vnpay.png";
import paypalLogo from "../../assets/images/paypal.png";
import Header from "../../components/layout/user/Header";
import Footer from "../../components/layout/user/Footer";
import DatePickerModal from "./components/DatePickerModal";

const CartPage = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rentalDates, setRentalDates] = useState({
    start: new Date("2025-11-03"),
    end: new Date("2025-12-03"),
  });

  const handleSaveDates = (newDates) => {
    setRentalDates(newDates);
    setIsModalOpen(false); // Đóng modal sau khi lưu
  };

  const formatDateForDisplay = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount)); // Không cho phép số lượng < 1
  };

  // Định dạng số
  const formatCurrency = (number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(number)
      .replace("₫", "VND");
  };

  const monthlyPrice = 2334000;
  const deposit = 700000;
  const shippingFee = 50000;
  const total = monthlyPrice * quantity + deposit + shippingFee;

  return (
    <div className="bg-[#F0F4F8] min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Cart Details */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <h1 className="text-2xl font-bold mb-6">Your card</h1>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={iphoneImage}
                  alt="iPhone Air"
                  className="w-24 h-auto object-contain mx-auto md:mx-0"
                />
                <div className="flex-grow">
                  <h2 className="font-bold text-lg">
                    Apple iPhone Air – 256GB, Cloud White
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    6.5" LTPO Super Retina XDR OLED, Rear Camera, 8GB RAM, Apple
                    A19 Pro, 5G
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-[#4C8787]">
                    <LuTruck className="w-5 h-5" />
                    <span>
                      Delivered In: <strong>2-4 Working Days</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Color Selector */}
                <button className="w-full flex items-center justify-between border border-gray-300 rounded-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                  <span className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full border-2 border-gray-400 bg-white"></span>
                    Cloud White
                  </span>
                  <IoChevronDownOutline />
                </button>
                {/* Duration Selector */}
                <button className="w-full flex items-center justify-between border border-gray-300 rounded-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                  <span className="flex items-center gap-2">
                    <IoTimeOutline className="w-4 h-4 text-gray-500" />
                    One Month
                  </span>
                  <IoChevronDownOutline />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-4">
                  <button className="text-gray-500 hover:text-red-500">
                    <IoTrashOutline className="w-5 h-5" />
                  </button>
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-full"
                    >
                      <FiMinus />
                    </button>
                    <span className="px-4 text-center font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-full"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
                <div className="text-sm text-gray-600 text-right">
                  <p>
                    <strong>Starts On:</strong> March 3, 2025
                  </p>
                  <p>
                    <strong>Ends On:</strong> April 3, 2025
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm font-semibold text-yellow-600 hover:underline"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Price Summary */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Monthly Price:</span>
                <span className="font-semibold text-gray-800">
                  {formatCurrency(monthlyPrice * quantity)}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Deposit (30%):</span>
                <span className="font-semibold text-gray-800">
                  {formatCurrency(deposit)}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping Fee:</span>
                <span className="font-semibold text-gray-800">
                  {formatCurrency(shippingFee)}
                </span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-[#4C8787]">{formatCurrency(total)}</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 mt-6">
              <div className="flex items-start gap-3">
                <IoBusinessOutline className="w-6 h-6 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">
                    Deposit 30%. Small, secure payments
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <img
                      src={mastercardLogo}
                      alt="Mastercard"
                      className="h-5"
                    />
                    <img src={visaLogo} alt="Visa" className="h-5" />
                    <img src={momoLogo} alt="Momo" className="h-5" />
                    <img src={vnpayLogo} alt="VNPAY" className="h-5" />
                    <img src={paypalLogo} alt="PayPal" className="h-5" />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout/phone-number")} // Thêm sự kiện onClick
              className="w-full bg-[#4C8787] text-white font-semibold py-3 rounded-full mt-6 hover:bg-teal-700 transition-colors"
            >
              Continue to checkout
            </button>
          </div>
        </div>
      </main>

      <Footer />

      <DatePickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveDates}
        initialDates={rentalDates}
      />
    </div>
  );
};

export default CartPage;
