import React from 'react';
import { FaPlus } from 'react-icons/fa';

// Import các component chung
import Header from '../../components/layout/user/Header'; 
import Footer from '../../components/layout/user/Footer'; 
import ProductCard from './components/ProductCard';
import { products } from '../../data/productData'; // Sử dụng lại dữ liệu sản phẩm
import Banner from '../../assets/images/dis-banner.webp'
import Pic19 from '../../assets/images/pic19.webp'
import Pic20 from '../../assets/images/pic20.webp'
import Pic21 from '../../assets/images/pic21.webp'
import Pic5 from '../../assets/images/pic5.webp'
import Pic6 from '../../assets/images/pic6.webp'
import Pic7 from '../../assets/images/pic7.webp'
import Pic8 from '../../assets/images/pic8.webp'
import Pic22 from '../../assets/images/pic22.webp'
import Pic23 from '../../assets/images/pic23.webp'
import Pic25 from '../../assets/images/pic25.webp'
import Pic45 from '../../assets/images/pic45.webp'
import Pic37 from '../../assets/images/pic37.webp'
import Pic43 from '../../assets/images/pic43.webp'
import Pic44 from '../../assets/images/pic44.webp'

const DiscountPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      <Header />

      <main className="max-w-[1280px] mx-auto px-5 py-10">
        
        {/* --- SECTION 1: BANNER 1 (Gimo vouchers) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10 border-b border-[#e5e5e5] lg:border-none">
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-[30px] lg:text-[35px] font-bold mb-4 text-[#1a1a1a] lg:whitespace-nowrap lg:ml-[80px]">
              Gimo vouchers
            </h2>
            <p className="text-[16px] leading-relaxed text-[#555] max-w-[500px] mx-auto lg:mx-0 lg:ml-[80px]">
              We want tech to be used by as many people as possible - and are happy to incentivize this with voucher codes. So, whether you’re a first-time renter or a Gimo pro, here’s how to save on your next device.
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full rounded-xl overflow-hidden bg-[#f0f0f0] shadow-[0_4px_20px_rgba(0,0,0,0.1)] order-1 lg:order-2 h-[300px] lg:h-[410px]">
            <img 
              src={Banner}
              alt="Woman dancing with phone" 
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* --- SECTION 2: VOUCHER INFO BOXES --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10">
          
          {/* Box 1 */}
          <div className="w-full lg:w-[48%] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-10 text-center flex flex-col items-center">
            <img 
              src={Pic20}
              alt="pic20" 
              className="w-full max-h-[200px] object-contain mb-6"
            />
            <h3 className="text-[24px] font-extrabold mb-4 text-[#1a1a1a]">
              For new Gimo users
            </h3>
            <p className="text-[16px] text-[#555] leading-relaxed">
              Use the code <strong>BF40</strong> to get 40€ off your first month (the discount applies to your entire cart). For all devices with subscription period of 6 months or longer.
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-full lg:w-[48%] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-10 text-center flex flex-col items-center">
            <img 
              src={Pic19} 
              alt="pic19" 
              className="w-full max-h-[200px] object-contain mb-6"
            />
            <h3 className="text-[24px] font-extrabold mb-4 text-[#1a1a1a]">
              Are you already a Gimo user?
            </h3>
            <p className="text-[16px] text-[#555] leading-relaxed">
              Use <strong>APP20</strong> code and the get 20€ discount, for your next rental, for the first month when renting 6+ months through the app.
            </p>
          </div>

        </div>

        {/* --- SECTION 3: BANNER 2 (Students) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20 py-10">
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-[30px] lg:text-[35px] font-bold mb-4 text-[#1a1a1a] lg:whitespace-nowrap lg:ml-[80px]">
              Students save extra
            </h2>
            <p className="text-[16px] leading-relaxed text-[#555] max-w-[500px] mx-auto lg:mx-0 lg:ml-[80px] mb-6">
              If you’re a student, then you have 2 ways to save: Choose to get either 30€ off your first month or 15% every month if you’re planning to rent longer term.
            </p>
            
            {/* Button */}
            <button className="bg-[#e5005b] text-white px-8 py-3 rounded-full text-[16px] font-semibold cursor-pointer transition-colors hover:bg-[#c7004f] lg:ml-[80px]">
              Save now
            </button>
          </div>

          {/* Image Content */}
          <div className="w-full rounded-xl overflow-hidden bg-[#f0f0f0] shadow-[0_4px_20px_rgba(0,0,0,0.1)] order-1 lg:order-2 h-[300px] lg:h-[410px]">
            <img 
              src={Pic21}
              alt="pic21" 
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* --- SECTION 4: BENEFITS GRID (4 Columns) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pb-10">
          
          {/* Item 1 */}
          <div className="text-center flex flex-col items-center">
            <img 
              src={Pic6}
              alt="pic6" 
              className="w-[180px] h-[180px] object-cover rounded-full mb-4"
            />
            <h3 className="text-[18px] font-bold mb-2 text-[#1a1a1a]">The best tech, flexibly</h3>
            <p className="text-[15px] text-[#555] leading-relaxed">
              With thousands of devices and rental plans from 3-18 months, access a range of tech however it suits best.
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-center flex flex-col items-center">
            <img 
              src={Pic7} 
              alt="pic7" 
              className="w-[180px] h-[180px] object-cover rounded-full mb-4"
            />
            <h3 className="text-[18px] font-bold mb-2 text-[#1a1a1a]">Byte-sized prices</h3>
            <p className="text-[15px] text-[#555] leading-relaxed">
              With Gimo's monthly plans, you get the tech you love without the high purchase prices or need to finance.
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-center flex flex-col items-center">
            <img 
              src={Pic5}
              alt="pic5" 
              className="w-[180px] h-[180px] object-cover rounded-full mb-4"
            />
            <h3 className="text-[18px] font-bold mb-2 text-[#1a1a1a]">Support circularity</h3>
            <p className="text-[15px] text-[#555] leading-relaxed">
              Returned devices are refurbished and recirculated. This means less e-waste and devices not being used.
            </p>
          </div>

          {/* Item 4 */}
          <div className="text-center flex flex-col items-center">
            <img 
              src={Pic8} 
              alt="pic8" 
              className="w-[180px] h-[180px] object-cover rounded-full mb-4"
            />
            <h3 className="text-[18px] font-bold mb-2 text-[#1a1a1a]">Use devices worry-free</h3>
            <p className="text-[15px] text-[#555] leading-relaxed">
              Gimo Care covers an essential part of any device repair costs, so our tech can be enjoyed to the fullest.
            </p>
          </div>
        </div>

        {/* --- SECTION 5: EXPLORE TECH --- */}
        <div className="mt-20">
          <h1 className="text-[40px] font-extrabold mb-8 text-left text-[#1a1a1a]">Explore tech</h1>
          
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Helper function or Map to render Categories */}
            {[
              { title: "Computers & Laptops", img: Pic22 },
              { title: "Gaming & VR", img: Pic22 },
              { title: "Cameras", img: Pic23 },
              { title: "Audio & music", img: Pic25 },
              { title: "TVs & protectors", img: Pic45 },
              { title: "Phones & Tablets", img: Pic37 },
              { title: "Wearables", img: Pic43 },
              { title: "Smart Home", img: Pic44 },
            ].map((cat, idx) => (
              <div key={idx} className="bg-white border border-[#e0e0e0] rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col items-center justify-between min-h-[280px]">
                <h2 className="text-[20px] font-extrabold text-[#333] mb-4 whitespace-nowrap w-full overflow-hidden text-ellipsis">
                  {cat.title}
                </h2>
                <div className="w-full h-[180px] flex items-center justify-center overflow-hidden">
                   <a href="#" className="block w-full h-full">
                     <img 
                       src={cat.img} 
                       alt={cat.title} 
                       className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                       loading="lazy"
                     />
                   </a>
                </div>
              </div>
            ))}

          </section>
        </div>

        {/* --- SECTION 6: FAQ --- */}
        <div className="max-w-[850px] mx-auto mt-20 px-5">
          <h1 className="text-[38px] font-bold text-[#1a1a1a] text-center mb-12">
            Frequently asked questions
          </h1>

          {/* FAQ 1 */}
          <details className="group border-b border-[#e0e0e0] cursor-pointer">
            <summary className="flex justify-between items-center py-8 text-[20px] md:text-[25px] font-bold text-[#1a1a1a] list-none marker:content-none select-none">
              Where do I add the voucher code?
              <FaPlus className="text-[24px] transform transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <div className="pb-8 text-[18px] text-[#555] leading-relaxed">
              <p>You can add the voucher code at the last step of checkout. Note that shipping costs still apply.</p>
            </div>
          </details>

          {/* FAQ 2 */}
          <details className="group border-b border-[#e0e0e0] cursor-pointer">
            <summary className="flex justify-between items-center py-8 text-[20px] md:text-[25px] font-bold text-[#1a1a1a] list-none marker:content-none select-none">
              What types of discount vouchers are there?
              <FaPlus className="text-[24px] transform transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <div className="pb-8 text-[18px] text-[#555] leading-relaxed">
              <p>In addition to the new and returning customer vouchers, and student discounts offered, we have our <a href="#" className="underline font-medium text-black">Referral Program</a> and a number of other partner offers. The terms for these can always be found on the partner’s website.</p>
            </div>
          </details>

          {/* FAQ 3 */}
          <details className="group border-b border-[#e0e0e0] cursor-pointer">
            <summary className="flex justify-between items-center py-8 text-[20px] md:text-[25px] font-bold text-[#1a1a1a] list-none marker:content-none select-none">
              Why isn’t the voucher code working?
              <FaPlus className="text-[24px] transform transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <div className="pb-8 text-[18px] text-[#555] leading-relaxed">
              <p>Check the terms of the voucher code, as often they have a minimum subscription period or similar conditions. Gimo voucher codes are also always capitalized, like CODE100.</p>
            </div>
          </details>

          <button className="block mx-auto mt-8 bg-[#e5005b] text-white px-8 py-4 rounded-[25px] text-[16px] font-semibold transition-colors hover:bg-[#c9004e]">
            Show all FAQs
          </button>
        </div>

        {/* --- SECTION 7: RECENTLY VIEWED --- */}
        <div className="mt-20 mb-20">
          <h1 className="text-[28px] font-extrabold text-[#2e2e2e] mb-6 text-left">
            Recently Viewed
          </h1>
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x">
             {products.slice(0, 5).map((product, index) => (
               <div key={`recent-${index}`} className="min-w-[280px] max-w-[300px] snap-start">
                 <a href={`/product/${product.id}`} className="no-underline block h-full">
                   <ProductCard {...product} />
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

export default DiscountPage;