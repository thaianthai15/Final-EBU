import React from 'react';
import { 
  FaRegUser, 
  FaWallet, 
  FaLock, 
  FaUniversity, 
  FaQuestionCircle, 
  FaSignOutAlt, 
  FaArrowRight 
} from 'react-icons/fa';
import Header from '../../components/layout/user/Header';


const AccountPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      
      {/* 1. HEADER */}
      <div className="w-full">
        <Header />
      </div>

      {/* 2. USER INFO BANNER */}
      <div className="text-center mt-8 mb-8 px-4">
        <h2 className="text-[20px] font-bold text-[#2e2e2e] mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
          Vu Hoai Nhi
        </h2>
        <h4 className="text-[14px] font-normal text-[#666]">
          hnhi6974@gmail.com
        </h4>
      </div>

      {/* 3. MAIN CONTENT */}
      <main className="max-w-[1200px] mx-auto px-5 pb-20">
        
        {/* GRID BOXES (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Box 1: Personal Info */}
          <div className="border border-[#e0e0e0] rounded-xl bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
            <FaRegUser className="text-[24px] text-[#111] mb-3" />
            <h3 className="text-[18px] font-semibold text-[#222] mb-2">Personal information</h3>
            <p className="text-[14px] text-[#555] mb-5 leading-relaxed flex-grow">
              Review and update personal info such as name, email, and phone number for a smooth rental experience.
            </p>
            <a href="/profile" className="w-full">
              <button className="w-full py-3 px-4 bg-[#222] text-white rounded-full font-semibold hover:bg-black transition-colors cursor-pointer">
                Manage my info
              </button>
            </a>
          </div>

          {/* Box 2: Payment Methods */}
          <div className="border border-[#e0e0e0] rounded-xl bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
            <FaWallet className="text-[24px] text-[#111] mb-3" />
            <h3 className="text-[18px] font-semibold text-[#222] mb-2">Payment methods</h3>
            <p className="text-[14px] text-[#555] mb-5 leading-relaxed flex-grow">
              Review and update your personal payment information.
            </p>
            <a href="/payment-method" className="w-full">
              <button className="w-full py-3 px-4 bg-[#222] text-white rounded-full font-semibold hover:bg-black transition-colors cursor-pointer">
                Manage payment methods
              </button>
            </a>
          </div>

          {/* Box 3: Account Security */}
          <div className="border border-[#e0e0e0] rounded-xl bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
            <FaLock className="text-[24px] text-[#111] mb-3" />
            <h3 className="text-[18px] font-semibold text-[#222] mb-2">Account security</h3>
            <p className="text-[14px] text-[#555] mb-5 leading-relaxed flex-grow">
              Change your password and update phone number.
            </p>
            <a href="/account-security" className="w-full">
              <button className="w-full py-3 px-4 bg-[#222] text-white rounded-full font-semibold hover:bg-black transition-colors cursor-pointer">
                Manage account security
              </button>
            </a>
          </div>

        </div>

        {/* BOTTOM LINKS BOX */}
        <div className="bg-white rounded-2xl shadow-[0_2px_6px_rgba(0,0,0,0.05)] p-8 flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-[#eee]">
          
          {/* Link 1: Payments */}
          <div className="flex-1 flex items-center justify-between px-0 md:px-5 py-4 md:py-0 first:pl-0">
            <div className="flex items-center gap-3">
              <FaUniversity className="text-[24px] text-black shrink-0" />
              <div className="flex flex-col">
                <h3 className="text-[16px] font-semibold text-[#111]">Go to Payments</h3>
                <p className="text-[14px] text-[#666] mt-1">Review your invoices</p>
              </div>
            </div>
            <button className="w-9 h-9 rounded-full bg-[#f7f7f7] flex items-center justify-center hover:bg-[#e6e6e6] hover:translate-x-1 transition-all cursor-pointer">
              <FaArrowRight className="text-[14px] text-[#111]" />
            </button>
          </div>

          {/* Link 2: Support */}
          <div className="flex-1 flex items-center justify-between px-0 md:px-5 py-4 md:py-0">
            <div className="flex items-center gap-3">
              <FaQuestionCircle className="text-[24px] text-black shrink-0" />
              <div className="flex flex-col">
                <h3 className="text-[16px] font-semibold text-[#111]">Support</h3>
                <p className="text-[14px] text-[#666] mt-1">Get help and contact us</p>
              </div>
            </div>
            <button className="w-9 h-9 rounded-full bg-[#f7f7f7] flex items-center justify-center hover:bg-[#e6e6e6] hover:translate-x-1 transition-all cursor-pointer">
              <FaArrowRight className="text-[14px] text-[#111]" />
            </button>
          </div>

          {/* Link 3: Log out */}
          <div className="flex-1 flex items-center justify-between px-0 md:px-5 py-4 md:py-0 last:pr-0">
            <div className="flex items-center gap-3">
              <FaSignOutAlt className="text-[24px] text-black shrink-0" />
              <div className="flex flex-col">
                <h3 className="text-[16px] font-semibold text-[#111]">Log out</h3>
                <p className="text-[14px] text-[#666] mt-1">Sign out of your account</p>
              </div>
            </div>
            <button className="w-9 h-9 rounded-full bg-[#f7f7f7] flex items-center justify-center hover:bg-[#e6e6e6] hover:translate-x-1 transition-all cursor-pointer">
              <FaArrowRight className="text-[14px] text-[#111]" />
            </button>
          </div>

        </div>

      </main>
    </div>
  );
};

export default AccountPage;