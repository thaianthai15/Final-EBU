import React from 'react';
import Header from '../../components/layout/user/Header';
import Footer from '../../components/layout/user/Footer';
import Sidebar from '../../components/layout/user/Sidebar';
import ProductCard from './components/ProductCard';
import { products } from '../../data/productData'; 

const DealsPage = () => {
  // Giả lập dữ liệu nhiều hơn cho trang Deals
  const dealProducts = [...products, ...products].slice(0, 15); 

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      <Header />

      {/* BANNER SECTION - Giống trang Category */}
      <div className="w-full bg-[#f1f1f1] py-8 text-center px-4">
        <h1 className="text-[28px] md:text-[38px] font-bold text-[#2e2e2e] m-0">
          Lower prices on your favorite devices
        </h1>
        <p className="text-[#666] mt-2 text-[16px]">
          {dealProducts.length} products found
        </p>
      </div>

      <main className="max-w-[1400px] mx-auto px-5 py-8">
        
        {/* LAYOUT: SIDEBAR + GRID */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* SIDEBAR - Ẩn trên Mobile, Hiện trên Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            {/* Truyền prop để ẩn bộ lọc Deals */}
            <Sidebar hideDealsFilter={true} /> 
          </div>
          
          {/* MAIN CONTENT AREA */}
          <div className="flex-1">
            
            {/* GRID SẢN PHẨM */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {dealProducts.map((product, index) => (
                // Dùng thẻ a hoặc Link nếu cần chuyển hướng
                <a href={`/product/${product.id}`} key={`${product.id}-${index}`} className="no-underline block h-full">
                  <ProductCard {...product} />
                </a>
              ))}
            </div>

            {/* LOAD MORE BUTTON - Style giống Category */}
            <div className="flex justify-center mt-10 mb-4">
              <button className="bg-white border border-[#ccc] rounded-[20px] px-6 py-2.5 text-[14px] font-bold text-[#333] hover:bg-[#f1f1f1] cursor-pointer transition-colors shadow-sm">
                Load next
              </button>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;