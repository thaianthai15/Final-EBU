import React from 'react';
import { FaArrowLeft, FaDesktop, FaKey, FaCommentDots } from 'react-icons/fa';
import Header from '../../components/layout/user/Header';


const AccountSecurity = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      
      {/* 1. HEADER */}
      <div className="w-full">
        <Header />
      </div>

      {/* 2. PROFILE CONTAINER */}
      <div className="w-full max-w-[720px] mx-auto px-5 py-10">
        
        {/* Navigation / Back */}
        <div className="flex items-center gap-3 mb-5 cursor-pointer hover:opacity-70 transition-opacity w-fit">
          <FaArrowLeft className="text-[20px] text-[#111]" />
          <h3 className="text-[1.1rem] font-semibold text-[#111]">Account</h3>
        </div>

        {/* Title & Sub-title */}
        <h2 className="text-[1.6rem] font-semibold mb-2 text-[#111]">
          Account security
        </h2>
        <p className="text-[0.95rem] text-[#333] mb-5">
          We do everything in our power to keep your account secure.
        </p>

        {/* List of Security Options */}
        <div className="flex flex-col gap-[26px] mt-[15px]">

          {/* Box 1: Devices & Browsers */}
          <div className="border border-[#eee] rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <FaDesktop className="text-[24px] text-[#111] mb-[10px]" />
            <h3 className="text-[1.1rem] font-semibold mb-[6px] text-[#111]">Devices & browsers</h3>
            <p className="text-[0.93rem] text-[#333] mb-4 opacity-80 leading-relaxed">
              Review and manage devices that have access to your account in this section.
            </p>
            <button className="bg-[#111] text-white rounded-[20px] px-4 py-2 text-[0.9rem] font-medium transition-colors hover:bg-[#333]">
              Review devices & browsers
            </button>
          </div>

          {/* Box 2: Password */}
          <div className="border border-[#eee] rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <FaKey className="text-[24px] text-[#111] mb-[10px]" />
            <h3 className="text-[1.1rem] font-semibold mb-[6px] text-[#111]">Password</h3>
            <p className="text-[0.93rem] text-[#333] mb-4 opacity-80 leading-relaxed">
              A strong, unique password is the important first step toward keeping your account safe.
            </p>
            <button className="bg-[#111] text-white rounded-[20px] px-4 py-2 text-[0.9rem] font-medium transition-colors hover:bg-[#333]">
              Reset password
            </button>
          </div>

          {/* Box 3: Phone Number (SMS Context) */}
          <div className="border border-[#eee] rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <FaCommentDots className="text-[24px] text-[#111] mb-[10px]" />
            <h3 className="text-[1.1rem] font-semibold mb-[6px] text-[#111]">Phone number</h3>
            <p className="text-[0.93rem] text-[#333] mb-2 font-medium">Missing</p>
            <p className="text-[0.93rem] text-[#333] mb-4 opacity-80 leading-relaxed">
              To place an order, you’re going to have to verify your mobile phone number.
            </p>
            <button className="bg-[#111] text-white rounded-[20px] px-4 py-2 text-[0.9rem] font-medium transition-colors hover:bg-[#333]">
              Update phone number
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountSecurity;