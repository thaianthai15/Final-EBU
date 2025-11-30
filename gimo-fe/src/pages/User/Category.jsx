import React from 'react';
import Header from '../../components/layout/user/Header';
import Sidebar from '../../components/layout/user/Sidebar';
import ProductCard from './components/ProductCard';
import Footer from '../../components/layout/user/Footer';
import { products } from '../../data/product'; 

const Category = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      <Header />

      {/* BANNER SECTION */}
      <div className="w-full bg-[#f1f1f1] py-8 text-center px-4">
        <h1 className="text-[28px] md:text-[38px] font-bold text-[#2e2e2e] m-0">
          Top tech made easy—rent, use, repeat.
        </h1>
      </div>

      <main className="max-w-[1400px] mx-auto px-5 py-8">
        
        {/* LAYOUT: SIDEBAR (Left) + PRODUCT GRID (Right) */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* SIDEBAR - Hiển thị trên Desktop, ẩn trên Mobile (có thể thêm nút toggle sau) */}
          <div className="hidden lg:block w-64 shrink-0">
            <Sidebar />
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1">
            
            {/* GRID SẢN PHẨM */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <a href="/detail-product" key={product.id} className="no-underline">
                  <ProductCard
                    name={product.name}
                    image={product.image}
                    tags={product.tags}
                    specs={product.specs}
                    originalPrice={product.originalPrice}
                    currentPrice={product.currentPrice}
                  />
                </a>
              ))}
            </div>

            {/* LOAD MORE BUTTON */}
            <div className="flex justify-center mt-10 mb-4">
              <button className="bg-white border border-[#ccc] rounded-[20px] px-6 py-2.5 text-[14px] font-bold text-[#333] hover:bg-[#f1f1f1] cursor-pointer transition-colors shadow-sm">
                Load next
              </button>
            </div>

          </div>
        </div>

        {/* RECENTLY VIEWED SECTION */}
        <div className="mt-16 mb-20">
          <h2 className="text-[28px] font-extrabold text-[#2e2e2e] mb-6 text-left border-b border-[#e5e5e5] pb-4">
            Recently Viewed
          </h2>
          
          {/* Carousel cuộn ngang */}
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x">
             {/* Hiển thị một vài sản phẩm mẫu */}
             {products.slice(0, 5).map((product) => (
               <div key={`recent-${product.id}`} className="min-w-[280px] max-w-[300px] snap-start">
                 <a href="/detail-product" className="no-underline">
                   <ProductCard
                      name={product.name}
                      image={product.image}
                      tags={product.tags}
                      specs={product.specs}
                      originalPrice={product.originalPrice}
                      currentPrice={product.currentPrice}
                   />
                 </a>
               </div>
             ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Category;