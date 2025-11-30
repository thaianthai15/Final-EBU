import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../../components/layout/user/Header';

const UpdatePhoneNumberPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      
      {/* 1. HEADER */}
      <div className="w-full">
        <Header />
      </div>

      {/* 2. MAIN CONTAINER */}
      {/* max-w-[450px] tương ứng với width giới hạn trong CSS gốc */}
      <div className="w-full max-w-[450px] mx-auto px-5 py-10 mt-5">
        
        {/* Navigation / Back Button */}
        <div className="flex items-center gap-3 mb-6 cursor-pointer hover:opacity-70 transition-opacity w-fit">
          <FaArrowLeft className="text-[20px] text-[#111]" />
          <h3 className="text-[1.1rem] font-semibold text-[#111]">Personal information</h3>
        </div>

        {/* Title */}
        <h2 className="text-[1.6rem] font-bold mb-4 text-[#111] leading-tight">
          Update your phone number
        </h2>

        {/* Description Text */}
        <p className="text-[0.95rem] text-[#333] leading-relaxed mb-8">
          For security reasons, we just sent an email to <strong className="font-bold">hnhi6974@gmail.com</strong> containing instructions on updating your phone number. Please check your inbox now.
        </p>

        {/* Action Button */}
        {/* Thay vì lồng thẻ <a> vào trong <button> (không hợp lệ trong HTML5 chuẩn), 
            ta bọc button bằng thẻ a hoặc dùng Link của react-router-dom */}
        <a href="/profile" className="block w-full no-underline">
          <button className="w-full bg-[#333] text-white py-[14px] px-[24px] rounded-[25px] font-semibold text-[1rem] hover:bg-[#1a1a1a] transition-colors shadow-sm cursor-pointer">
            Got it
          </button>
        </a>

      </div>
    </div>
  );
};

export default UpdatePhoneNumberPage;