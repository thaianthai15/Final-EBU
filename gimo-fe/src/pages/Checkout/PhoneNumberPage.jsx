import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderSummary from './components/OrderSummary';
import { IoChevronDownOutline } from 'react-icons/io5';

const PhoneNumberPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/checkout/verify-phone');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-center">
      <div className="lg:col-span-2 flex justify-center">
        <div className="bg-white rounded-xl p-8 shadow-sm w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-2">Enter your phone number</h1>
          <p className="text-gray-500 mb-6">
            We need your phone number for secure logins. You'll get a verification code via SMS.
          </p>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Country code</label>
            <div className="relative mt-1">
              <select className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>+84 (Vietnam)</option>
              </select>
              <IoChevronDownOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">Phone number</label>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full mt-1 p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-[#4C8787] text-white font-semibold py-3 rounded-full hover:bg-teal-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start">
        <OrderSummary onEdit={() => navigate('/cart-page')} />
      </div>
    </div>
  );
};

export default PhoneNumberPage;