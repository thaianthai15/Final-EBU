import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/user/Header'; 
import Footer from '../../components/layout/user/Footer'; 
import BlogCard from './components/BlogCard';
import { heroArticle, blogPosts } from '../../data/blog';
import { IoGiftOutline } from 'react-icons/io5';

const POSTS_PER_PAGE = 9;

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const handleLoadMore = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + POSTS_PER_PAGE);
  };

  return (
    <div className="bg-white font-sans">
      {/* Giả sử Header của bạn đã được tùy chỉnh giống ảnh */}
      <Header /> 

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <section className="relative mb-16 rounded-lg overflow-hidden">
          <img 
            src={heroArticle.backgroundImage} 
            alt="Gaming and creation setup" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute top-1/2 left-10 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              {heroArticle.title}
            </h1>
            <button className="bg-pink-600 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-700 transition-colors">
              {heroArticle.buttonText}
            </button>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, visiblePosts).map(post => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </section>

        {/* Load More Button */}
        {visiblePosts < blogPosts.length && (
          <div className="text-center mb-16">
            <button
              onClick={handleLoadMore}
              className="border border-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors"
            >
              Load more
            </button>
          </div>
        )}
      </main>

      {/* Footer đã được tùy chỉnh */}
      <Footer />
    </div>
  );
};

export default BlogPage;