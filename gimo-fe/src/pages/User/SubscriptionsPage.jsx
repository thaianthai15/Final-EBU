import React from 'react';
import { FiSearch, FiUser, FiHeart, FiMenu, FiShoppingBag, FiHelpCircle } from 'react-icons/fi';
import Header from '../../components/layout/user/Header';

// Header của trang
const SubscriptionsHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top Header */}
      <div className="container mx-auto px-4">
        <Header />
      </div>
    </header>
  );
};


export default function SubscriptionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <SubscriptionsHeader />

      <main className="container mx-auto p-4 md:p-8">
        <div className="bg-white border border-gray-200 rounded-lg min-h-[70vh] flex flex-col items-center justify-center text-center p-8">
          
          {/* Thay thế icon này bằng thẻ <img> nếu bạn có ảnh */}
          <FiShoppingBag className="w-28 h-28 text-[#4C8787] mb-8" />
          
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            There's nothing here but potential.
          </h2>
          <p className="text-gray-500 max-w-sm mb-8">
            This is where your subscriptions will show up. For now, it's a ghost town.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row items-center gap-4 max-w-lg w-full">
            <div className="bg-gray-100 rounded-full p-2">
              <FiHelpCircle className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-700">Questions? Our support team is always happy to help.</p>
            </div>
            <button className="bg-gray-800 text-white font-semibold rounded-full px-5 py-2.5 w-full sm:w-auto hover:bg-gray-700 transition">
              Send a message
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}