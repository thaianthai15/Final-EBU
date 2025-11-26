// src/pages/TopProductsPage.jsx
import React from 'react';
import Header from '../../components/layout/user/Header';
import Footer from '../../components/layout/user/Footer';
import Sidebar from '../../components/layout/user/Sidebar';
import ProductCard from './components/ProductCard';
import { products } from '../../data/productData';

const TopProductsPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Top tech made easy—rent, use, repeat.</h1>
        <p className="text-gray-500 mb-8">{products.length} products</p>
        
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} {...product} />
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

export default TopProductsPage;