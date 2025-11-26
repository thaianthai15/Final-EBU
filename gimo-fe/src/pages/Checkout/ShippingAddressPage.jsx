import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronDownOutline } from 'react-icons/io5';

const ShippingAddressPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/checkout/payment');
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Shipping Address</h1>
      <p className="text-gray-500 mb-8">To order, please add your shipping address.</p>
      
      <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
            <input type="text" required className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
            <input type="text" required className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Province/commune <span className="text-red-500">*</span></label>
            <div className="relative">
              <select required className="w-full p-2.5 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option value="" disabled selected>Please, select a region, province or commune</option>
                <option>Ha Noi</option>
                <option>Ho Chi Minh City</option>
              </select>
              <IoChevronDownOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Street Address <span className="text-red-500">*</span></label>
            <input type="text" required className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address type</label>
            <div className="flex gap-2">
              <button type="button" className="px-6 py-2 border border-teal-600 bg-teal-50 text-teal-700 font-semibold rounded-full">Home</button>
              <button type="button" className="px-6 py-2 border border-gray-300 text-gray-600 font-semibold rounded-full hover:bg-gray-100">Company</button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="default-address" className="h-4 w-4 rounded text-teal-600 focus:ring-teal-500" />
            <label htmlFor="default-address" className="text-sm text-gray-600">Set As Default Address</label>
          </div>
        </div>
        <button 
          type="submit"
          className="w-full bg-[#4C8787] text-white font-semibold py-3 rounded-full mt-8 hover:bg-teal-700 transition-colors"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default ShippingAddressPage;