import React from 'react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import Header from '../../components/layout/user/Header';

const PaymentMethods= () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      
      {/* 1. HEADER */}
      <div className="w-full">
        <Header />
      </div>

      {/* 2. MAIN CONTAINER */}
      <div className="w-full max-w-[720px] mx-auto px-5 py-10">
        
        {/* Navigation / Back */}
        <div className="flex items-center gap-3 mb-5 cursor-pointer hover:opacity-70 transition-opacity w-fit">
          <FaArrowLeft className="text-[20px] text-[#111]" />
          <h3 className="text-[1.1rem] font-semibold text-[#111]">Account</h3>
        </div>

        {/* Title & Sub-title */}
        <h2 className="text-[1.6rem] font-semibold mb-2 text-[#111]">
          Payment methods
        </h2>
        <p className="text-[0.95rem] text-[#333] mb-8">
          Review and update your payment details
        </p>

        {/* Add Payment Button */}
        {/* Sử dụng thẻ a hoặc Link của router để chuyển trang */}
        <a href="/add-payment-method" className="inline-block text-decoration-none">
          <button className="flex items-center gap-2 bg-[#c3c0c0] text-black text-[14px] font-medium border-none rounded-[50px] px-[18px] py-[10px] cursor-pointer transition-all duration-200 hover:bg-[#b0b0b0] hover:scale-105">
            <FaPlus className="text-[16px]" />
            Add a payment methods
          </button>
        </a>

      </div>
    </div>
  );
};

export default PaymentMethods;