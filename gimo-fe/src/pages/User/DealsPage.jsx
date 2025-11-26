import React from 'react';
import Header from '../../components/layout/user/Header';
import Footer from '../../components/layout/user/Footer';
import Sidebar from '../../components/layout/user/Sidebar';
import ProductCard from './components/ProductCard';
import { products } from '../../data/productData'; 

const DealsPage = () => {
  // Giả sử trang Deals hiển thị nhiều sản phẩm hơn
  const dealProducts = [...products, ...products].slice(0, 15); // Lấy 15 sản phẩm

  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Thay đổi tiêu đề */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Lower prices on your favorite devices</h1>
        <p className="text-gray-500 mb-8">{dealProducts.length} products</p>
        
        <div className="flex">
          {/* Truyền prop vào Sidebar để ẩn bộ lọc Deals */}
          <Sidebar hideDealsFilter={true} /> 
          
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dealProducts.map((product, index) => (
                <ProductCard key={`${product.id}-${index}`} {...product} />
              ))}
            </div>
            {/* TODO: Add pagination or "Load More" button here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;