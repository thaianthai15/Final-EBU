import React from "react";
import { FaTimes, FaLock } from "react-icons/fa";
import Header from "../../components/layout/user/Header";
import Paypal from '../../assets/images/Paypal-Logo-2022.png'
import MasterCard from '../../assets/images/Mastercard-logo.png'
import Momo from '../../assets/images/momo copy.png'
import Visa from '../../assets/images/visa copy.png'
import Vnpay from '../../assets/images/vnpay copy.png'

const AddPaymentMethod = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans text-[#333]">
      {/* 2. HEADER SECTION */}
      <div className="w-full">
        <Header />
      </div>

      {/* 3. MAIN CONTENT SECTION (Centered) */}
      <div className="flex-grow flex items-center justify-center py-10 px-4">
        {/* FORM CONTAINER */}
        <div className="w-full max-w-[750px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 relative">
          {/* CLOSE BUTTON */}
          <button className="absolute top-5 right-5 text-gray-500 hover:text-black transition-colors p-2">
            <FaTimes className="text-[20px]" />
          </button>

          {/* --- SECTION 1: TOP BUTTONS --- */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[25px] font-extrabold mt-2 mb-2 text-black">
              Add payment method
            </h2>

            <div className="flex flex-col gap-3 mt-2">
              {/* Apple Pay Button */}
              <button className="w-full h-[52px] rounded-full bg-black text-white text-[20px] font-medium flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                Rent with
                {/* Apple Logo SVG */}
                <svg
                  className="ml-2 h-[20px] w-auto fill-current"
                  viewBox="0 0 105 43"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.4028,5.5674 C20.6008,4.0684 21.4138,2.0564 21.1998,0.0004 C19.4458,0.0874 17.3058,1.1574 16.0668,2.6564 C14.9538,3.9414 13.9688,6.0374 14.2258,8.0074 C16.1948,8.1784 18.1618,7.0244 19.4028,5.5674"></path>
                  <path d="M21.1772,8.3926 C18.3182,8.2226 15.8872,10.0156 14.5212,10.0156 C13.1552,10.0156 11.0642,8.4786 8.8022,8.5196 C5.8592,8.5626 3.1282,10.2276 1.6342,12.8746 C-1.4378,18.1696 0.8232,26.0246 3.8112,30.3376 C5.2622,32.4716 7.0102,34.8206 9.3142,34.7366 C11.4912,34.6506 12.3442,33.3266 14.9902,33.3266 C17.6352,33.3266 18.4042,34.7366 20.7082,34.6936 C23.0972,34.6506 24.5922,32.5586 26.0422,30.4226 C27.7072,27.9906 28.3882,25.6426 28.4312,25.5126 C28.3882,25.4706 23.8232,23.7186 23.7812,18.4676 C23.7382,14.0706 27.3652,11.9786 27.5362,11.8496 C25.4882,8.8196 22.2872,8.4786 21.1772,8.3926"></path>
                  <path d="M85.5508,43.0381 L85.5508,39.1991 C85.8628,39.2421 86.6158,39.2871 87.0158,39.2871 C89.2138,39.2871 90.4558,38.3551 91.2108,35.9581 L91.6548,34.5371 L83.2428,11.2321 L88.4368,11.2321 L94.2958,30.1421 L94.4068,30.1421 L100.2668,11.2321 L105.3278,11.2321 L96.6048,35.7141 C94.6078,41.3291 92.3208,43.1721 87.4828,43.1721 C87.1048,43.1721 85.8838,43.1271 85.5508,43.0381"></path>
                  <path d="M42.6499,19.3555 L48.3549,19.3555 C52.6829,19.3555 55.1469,17.0255 55.1469,12.9855 C55.1469,8.9455 52.6829,6.6375 48.3769,6.6375 L42.6499,6.6375 L42.6499,19.3555 Z M49.6869,2.4425 C55.9009,2.4425 60.2289,6.7265 60.2289,12.9625 C60.2289,19.2225 55.8129,23.5285 49.5309,23.5285 L42.6499,23.5285 L42.6499,34.4705 L37.6779,34.4705 L37.6779,2.4425 L49.6869,2.4425 Z"></path>
                  <path d="M76.5547,25.7705 L76.5547,23.9715 L71.0287,24.3275 C67.9207,24.5275 66.3007,25.6815 66.3007,27.7015 C66.3007,29.6545 67.9887,30.9195 70.6287,30.9195 C74.0027,30.9195 76.5547,28.7665 76.5547,25.7705 M61.4617,27.8345 C61.4617,23.7285 64.5917,21.3755 70.3627,21.0205 L76.5547,20.6425 L76.5547,18.8675 C76.5547,16.2705 74.8457,14.8495 71.8057,14.8495 C69.2967,14.8495 67.4777,16.1375 67.0997,18.1125 L62.6167,18.1125 C62.7497,13.9615 66.6567,10.9435 71.9387,10.9435 C77.6207,10.9435 81.3267,13.9175 81.3267,18.5345 L81.3267,34.4705 L76.7327,34.4705 L76.7327,30.6305 L76.6217,30.6305 C75.3127,33.1395 72.4267,34.7145 69.2967,34.7145 C64.6807,34.7145 61.4617,31.9625 61.4617,27.8345"></path>
                </svg>
              </button>

              {/* PayPal Button */}
              <button className="w-full h-[52px] rounded-full bg-[#ffc439] flex items-center justify-center cursor-pointer hover:bg-[#f0b429] transition-colors">
                {/* Thay src bằng ảnh PayPal thật của bạn */}
                <img
                  src={Paypal}
                  alt="PayPal"
                  className="h-[50px] w-auto"
                />
              </button>
            </div>
          </div>

          {/* --- OR SEPARATOR --- */}
          <div className="relative text-center my-6">
            <span className="bg-white px-2 text-[#777] text-sm relative z-10">
              OR
            </span>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#ddd] -z-0"></div>
          </div>

          {/* --- SECTION 2: CARD INPUTS --- */}
          <div className="flex flex-col gap-4">
            {/* Card Icons */}
            <div className="flex items-center gap-3 mb-1">
              <img
                src={MasterCard}
                alt="Mastercard"
                className="h-[24px] w-auto object-cover"
              />
              <img
                src={Visa}
                alt="Visa"
                className="h-[24px] w-auto object-cover"
              />
              <img
                src={Momo}
                alt="Momo"
                className="h-[24px] w-auto object-cover"
              />
              <img
                src={Vnpay}
                alt="Vnpay"
                className="h-[24px] w-auto object-cover"
              />
            </div>

            {/* Form Inputs */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Card number"
                className="w-full p-3 border border-gray-300 rounded-md text-[16px] focus:border-black focus:outline-none h-[55px]"
                required
              />
              <input
                type="text"
                placeholder="Cardholder name"
                className="w-full p-3 border border-gray-300 rounded-md text-[16px] focus:border-black focus:outline-none h-[55px]"
                required
              />

              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text" // Dùng text để giữ placeholder MM/YY, hoặc dùng thư viện date picker
                    placeholder="DD/MM/YY"
                    onFocus={(e) => (e.target.type = "date")} // Hack nhỏ để hiện date picker
                    onBlur={(e) => !e.target.value && (e.target.type = "text")}
                    className="w-full p-3 border border-gray-300 rounded-md text-[16px] focus:border-black focus:outline-none h-[55px]"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="password"
                    placeholder="CVV/CVC"
                    maxLength={4}
                    className="w-full p-3 border border-gray-300 rounded-md text-[16px] focus:border-black focus:outline-none h-[55px]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-start gap-3 p-3 bg-[#f9f9f9] border border-[#ddd] rounded-md mt-2">
              <FaLock className="text-[#555] mt-1 shrink-0 text-[16px]" />
              <p className="text-[13px] text-[#555] leading-snug">
                To protect your account, your bank may ask you to verify
                yourself as cardholder. No money will be charged.
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full h-[52px] bg-[#eee] text-black font-semibold rounded-full text-[16px] hover:bg-[#f0b429] transition-colors mt-2 cursor-pointer">
              Add payment method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentMethod;
