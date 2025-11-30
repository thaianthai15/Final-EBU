import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Header from "../../components/layout/user/Header";
import Turnstile from "react-turnstile";

const CancelContractPage = () => {
  const [token, setToken] = useState("");

  // Hàm xử lý khi xác thực thành công
  const handleVerify = (token) => {
    console.log("Turnstile Token:", token);
    setToken(token);
    // Lưu token này để gửi xuống Backend khi user bấm nút Submit/Đăng ký
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans text-[#333]">
      {/* 1. HEADER */}
      <div className="w-full">
        <Header />
      </div>

      {/* 2. MAIN CONTENT */}
      <main className="flex-grow flex justify-center w-full py-10 px-4">
        <div className="bg-white p-10 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-full max-w-[800px] h-fit">
          <h2 className="text-[28px] font-semibold text-[#1a1a1a] mt-0 mb-[30px] whitespace-nowrap">
            Cancel contract
          </h2>

          {/* --- TOP INPUTS --- */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-5 mb-2">
              <div className="flex-1">
                {/* Label ẩn hoặc hiển thị tùy thiết kế, ở đây dùng placeholder */}
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full p-[12px_15px] border border-[#dcdcdc] rounded-[4px] text-[16px] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-[12px_15px] border border-[#dcdcdc] rounded-[4px] text-[16px] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  required
                />
              </div>
            </div>
            <p className="text-[#666] text-[14px] m-0">
              Enter your name exactly as written on your ID
            </p>
          </div>

          {/* --- RADIO BUTTONS --- */}
          <div className="mb-8">
            <h3 className="text-[19px] font-bold text-[#1a1a1a] mb-[15px]">
              Type of termination
            </h3>
            <ul className="list-none p-0 m-0 flex gap-[30px]">
              {/* Radio 1 */}
              <li className="flex items-center">
                <div className="relative flex items-center">
                  <input
                    className="peer hidden"
                    id="form-cancel"
                    type="radio"
                    name="radio"
                    defaultChecked
                  />
                  <label
                    htmlFor="form-cancel"
                    className="pl-[25px] cursor-pointer text-[16px] text-[#333] relative select-none
                      before:content-[''] before:absolute before:left-0 before:top-[2px] before:w-[16px] before:h-[16px] before:border-[2px] before:border-[#999] before:rounded-full before:bg-white
                      peer-checked:before:border-[#1a1a1a]
                      after:content-[''] after:absolute after:left-[4px] after:top-[6px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#1a1a1a] after:opacity-0 peer-checked:after:opacity-100 after:transition-opacity"
                  >
                    Extraordinary
                  </label>
                </div>
              </li>

              {/* Radio 2 */}
              <li className="flex items-center">
                <div className="relative flex items-center">
                  <input
                    className="peer hidden"
                    id="form-cancel-1"
                    type="radio"
                    name="radio"
                  />
                  <label
                    htmlFor="form-cancel-1"
                    className="pl-[25px] cursor-pointer text-[16px] text-[#333] relative select-none
                      before:content-[''] before:absolute before:left-0 before:top-[2px] before:w-[16px] before:h-[16px] before:border-[2px] before:border-[#999] before:rounded-full before:bg-white
                      peer-checked:before:border-[#1a1a1a]
                      after:content-[''] after:absolute after:left-[4px] after:top-[6px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#1a1a1a] after:opacity-0 peer-checked:after:opacity-100 after:transition-opacity"
                  >
                    Ordinary
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {/* --- BOTTOM FORM --- */}
          <form action="#" method="POST" className="flex flex-col gap-1">
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <div className="flex-1">
                <input
                  type="text"
                  id="subcription"
                  placeholder="Subscription ID"
                  className="w-full p-[12px_15px] border border-[#dcdcdc] rounded-[4px] text-[16px] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  required
                />
              </div>

              <div className="flex-1 relative">
                <input
                  type="text"
                  id="termination"
                  placeholder="Termination date"
                  onFocus={(e) => (e.target.type = "date")}
                  className="w-full p-[12px_15px] pr-[40px] border border-[#dcdcdc] rounded-[4px] text-[16px] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  required
                />
                <FaCalendarAlt className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[#666] pointer-events-none" />
              </div>
            </div>

            <textarea
              id="termination-reason"
              placeholder="Termination reason"
              className="w-full p-[12px_15px] border border-[#dcdcdc] rounded-[4px] text-[16px] focus:outline-none focus:border-[#1a1a1a] transition-colors h-[120px] resize-y mb-5"
              required
            ></textarea>

            {/* Cloudflare Turnstile */}
            <div className="cf-status-container mb-[30px] flex items-center">
              {/* Lưu ý: Mình thêm justify-center để widget nằm giữa nếu container rộng hơn 300px */}

              <Turnstile
                sitekey="0x4AAAAAAAZC94IX7Co6naKo" 
                onVerify={handleVerify}
                theme="light" 
                language="vi" 
              />
            </div>

            {/* Submit Button */}
            <button
              id="btn-cancel-contract"
              className="w-full py-[15px] bg-[#1a1a1a] text-white border-none rounded-[4px] text-[18px] font-semibold cursor-pointer transition-colors hover:bg-[#333]"
            >
              Cancel now
            </button>
          </form>
        </div>
      </main>

      {/* 3. FOOTER BOTTOM */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center py-[20px] px-[40px] border-t border-[#e5e5e5] text-[14px] text-[#333] mt-auto gap-4 md:gap-0">
        <div className="bottom-left-cancel-contract">
          <p>Gimo Deutschland GmbH © 2025</p>
        </div>
        <div className="flex gap-[30px] flex-wrap justify-center">
          <a
            href="#"
            className="no-underline text-[#333] hover:text-black transition-colors"
          >
            Cookie settings
          </a>
          <a
            href="#"
            className="no-underline text-[#333] hover:text-black transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="no-underline text-[#333] hover:text-black transition-colors"
          >
            Terms and Conditions
          </a>
          <a
            href="#"
            className="no-underline text-[#333] hover:text-black transition-colors"
          >
            Imprint
          </a>
        </div>
      </div>
    </div>
  );
};

export default CancelContractPage;
