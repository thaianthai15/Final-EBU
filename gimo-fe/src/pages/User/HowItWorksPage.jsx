import React from 'react';
import { 
  FaTruck, 
  FaCreditCard, 
  FaLock, 
  FaRecycle, 
  FaCalendarAlt, 
  FaStar 
} from 'react-icons/fa';
import Header from '../../components/layout/user/Header';
import Footer from '../../components/layout/user/Footer';
import Banner from '../../assets/images/banner_how_it_work.webp'
import Pic1 from '../../assets/images/pic1.webp'
import Pic2 from '../../assets/images/pic2.webp'
import Pic3 from '../../assets/images/pic3.webp'
import Pic4 from '../../assets/images/pic4.webp'
import Pic5 from '../../assets/images/pic5.webp'
import Pic6 from '../../assets/images/pic6.webp'
import Pic7 from '../../assets/images/pic7.webp'
import Pic8 from '../../assets/images/pic8.webp'
import Pic9 from '../../assets/images/pic9.webp'
import Pic10 from '../../assets/images/pic10.webp'
import Pic11 from '../../assets/images/pic11.webp'
import Pic12 from '../../assets/images/pic12.webp'
import Pic13 from '../../assets/images/pic13.webp'
import Reviewsio from '../../assets/images/reviewsio-logo.webp'


const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#2e2e2e]">
      <Header />

      {/* --- BANNER --- */}
      <div className="bg-[#f1f1f1] w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-10 lg:py-0">
          <div className="flex-1 lg:pr-10 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-[40px] lg:text-[48px] font-bold mb-4 leading-tight">
              How renting works
            </h1>
            <p className="text-[18px] text-[#666] leading-relaxed">
              Learn about placing an order, the benefits of renting, and our commitment to saving resources.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img 
              src={Banner}
              alt="How it works banner" 
              className="max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-5 py-16">

        {/* --- SECTION 1: GETTING STARTED (Horizontal Scroll) --- */}
        <div className="mb-20 text-center">
          <h3 className="text-[14px] font-bold text-[#999] uppercase tracking-[2px] mb-2">
            HOW IT WORKS
          </h3>
          <p className="text-[32px] md:text-[40px] font-bold mb-10">
            Getting started with Gimo
          </p>

          {/* Scroll Container */}
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x scrollbar-hide px-2">
            {[
              { num: 1, title: "Choose your tech", desc: "Find your dream tech and ideal rental plan. Shorter and more flexible, or longer at a lower price?", img: Pic4 },
              { num: 2, title: "Check out", desc: "After placing your order, we run a credit check and email you the result and shipping details within 24 hours.", img: Pic2 },
              { num: 3, title: "Use it, love it", desc: "We deliver your device ASAP. Then you’re free to enjoy your tech to the fullest.", img: Pic3 },
              { num: 4, title: "Refurbish and recirculate", desc: "Returned devices are wiped of all data, cleaned, repaired, and rented again for others to enjoy.", img: Pic1 },
            ].map((item, idx) => (
              <div key={idx} className="min-w-[300px] max-w-[350px] bg-white rounded-[30px] p-8 shadow-[0_4px_12px_rgba(0,0,0,0.1)] snap-center flex flex-col relative overflow-hidden text-left">
                <div className="w-[60px] h-[60px] rounded-full bg-[#f0f0f0] flex items-center justify-center font-bold text-[18px] mb-5">
                  {item.num}
                </div>
                <h3 className="text-[20px] font-bold mb-3">{item.title}</h3>
                <p className="text-[16px] text-[#333] leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-auto mt-auto -mb-8 rounded-b-[30px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: BENEFITS (Grid) --- */}
        <div className="mb-20 text-center">
          <h3 className="text-[14px] font-bold text-[#999] uppercase tracking-[2px] mb-2">
            Tech on your terms
          </h3>
          <p className="text-[32px] md:text-[40px] font-bold mb-10">
            The benefits of renting
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Low monthly costs", desc: "Say goodbye to high upfront prices and long-term financing. Get the tech you need at byte-sized prices.", img: Pic5 },
              { title: "Get the latest tech", desc: "Access new devices as soon as they’re available—and sync your rental plan to the release of next year's model.", img: Pic7 },
              { title: "Own less, waste less", desc: "Recirculated devices don't end up unused or as e-waste, instead being enjoyed by more people, for longer.", img: Pic9 },
              { title: "Rent as long as you like", desc: "1 month, 3 months, 6 months, or 1 year? Then, continue renting at your current price, extend for less, or return for free.", img: Pic6 },
              { title: "Damage coverage", desc: "Gimo Care helps cover the costs. Normal signs of use are completely covered.", img: Pic8 },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-[180px] h-[180px] object-contain mb-4"
                />
                <h3 className="text-[20px] font-bold mb-2">{item.title}</h3>
                <p className="text-[16px] text-[#555] leading-relaxed max-w-[300px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 3: ADVANTAGES (Icons) --- */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-[14px] font-bold text-[#999] uppercase tracking-[2px] mb-2">
              Other advantages
            </h3>
            <p className="text-[32px] md:text-[40px] font-bold">
              All part of the package
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 lg:justify-between px-4">
            {[
              { icon: FaTruck, text: "Free returns" },
              { icon: FaCreditCard, text: "No hidden costs" },
              { icon: FaLock, text: "Data cleaning" },
              { icon: FaRecycle, text: "Support circularity" },
              { icon: FaCalendarAlt, text: "Flexible rental plans" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 min-w-[120px]">
                <div className="w-[65px] h-[65px] bg-[#ffe6eb] rounded-full flex items-center justify-center text-[#ff3366] text-[30px]">
                  <item.icon />
                </div>
                <p className="text-[18px] font-bold text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 4: GUARANTEE (Grid Bento) --- */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-[14px] font-bold text-[#999] uppercase tracking-[2px] mb-2">
              Gimo Guarantee
            </h3>
            <p className="text-[32px] md:text-[40px] font-bold">
              Feel better about your tech
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="bg-[#f9f9f9] rounded-2xl p-10 pr-[180px] relative overflow-hidden min-h-[250px] flex flex-col justify-center shadow-sm">
              <h3 className="text-[22px] font-bold mb-2">Cover your tech</h3>
              <p className="text-[14px] text-[#555] mb-6">Be ready for whatever life throws at you. In case of damages, Gimo Care helps cover the costs.</p>
              <button className="bg-[#222] text-white rounded-full px-5 py-2 text-sm font-bold w-fit hover:bg-[#444] transition-colors">Read more</button>
              <div className="absolute top-[-20px] right-[-50px] w-[280px] h-[280px]">
                <img src={Pic10} alt="Cover" className="w-[120%] h-[120%] object-cover rounded-full border-[3px] border-[#00c8ff]" />
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-[#f9f9f9] rounded-2xl p-10 pr-[180px] relative overflow-hidden min-h-[250px] flex flex-col justify-center shadow-sm">
              <h3 className="text-[22px] font-bold mb-2">Our devices are recirculated</h3>
              <p className="text-[14px] text-[#555] mb-6">We want to reduce unused devices and our impact on the planet. Between 2015-2022, Gimo rentals prevented an estimated 160,000 e-waste product.</p>
              <div className="absolute top-[-20px] right-[-50px] w-[280px] h-[280px]">
                <img src={Pic13} alt="Recirculated" className="w-[120%] h-[120%] object-cover rounded-full border-[3px] border-[#ffb400]" />
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-[#f9f9f9] rounded-2xl p-10 pr-[180px] relative overflow-hidden min-h-[250px] flex flex-col justify-center shadow-sm">
              <h3 className="text-[22px] font-bold mb-2">Devices are new or like-new</h3>
              <p className="text-[14px] text-[#555] mb-6">Each returned device is thoroughly inspected and repaired—so all the tech at Gimo is new or as good as new. That's our Great Condition Promise.</p>
              <button className="bg-[#222] text-white rounded-full px-5 py-2 text-sm font-bold w-fit hover:bg-[#444] transition-colors">Read more</button>
              <div className="absolute top-[-20px] right-[-50px] w-[280px] h-[280px]">
                <img src={Pic12} alt="Like-new" className="w-[120%] h-[120%] object-cover rounded-full border-[3px] border-[#ffb400]" />
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-[#f9f9f9] rounded-2xl p-10 pr-[180px] relative overflow-hidden min-h-[250px] flex flex-col justify-center shadow-sm">
              <h3 className="text-[22px] font-bold mb-2">Your data is safe</h3>
              <p className="text-[14px] text-[#555] mb-6">As soon as a device is returned, we perform a complete data wipe. This ensures that none of your personal information remains.</p>
              <div className="absolute top-[-20px] right-[-50px] w-[280px] h-[280px]">
                <img src={Pic11} alt="Safe" className="w-[120%] h-[120%] object-cover rounded-full border-[3px] border-[#00c8ff]" />
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 5: CUSTOMER REVIEWS (Horizontal Scroll) --- */}
        <div className="mb-10 text-center">
          <h3 className="text-[14px] font-bold text-[#999] uppercase tracking-[2px] mb-2">
            Customer reviews
          </h3>
          <p className="text-[32px] md:text-[40px] font-bold mb-6">
            Rated 4.4/5 stars
          </p>
          <button className="bg-[#dd1111] text-white rounded-full px-6 py-2.5 text-sm font-bold hover:bg-[#f59c9c] transition-colors mb-10">
            Reviews.io
          </button>

          {/* Reviews List */}
          <div className="flex gap-5 overflow-x-auto pb-8 snap-x scrollbar-hide px-2">
            {[
              { name: "Anonym", time: "1 months ago", text: "So so" },
              { name: "Christian E", time: "3 months ago", text: "Nice!" },
              { name: "Tanja M", time: "4 months ago", text: "Have good!" },
              { name: "Tanja M", time: "4 months ago", text: "Have good!" },
              { name: "Tanja M", time: "4 months ago", text: "Have good!" },
            ].map((review, idx) => (
              <div key={idx} className="min-w-[280px] max-w-[320px] bg-white rounded-xl p-6 shadow-md border border-[#f0f0f0] flex flex-col h-[230px] snap-start text-left">
                <div className="flex justify-between items-center mb-1 font-bold text-[14px]">
                  {review.name}
                  <div className="flex text-black">
                    {[...Array(5)].map((_, i) => <FaStar key={i} size={12} />)}
                  </div>
                </div>
                <div className="text-[10px] text-[#999] mb-4">{review.time}</div>
                <p className="text-[13px] font-semibold flex-grow">{review.text}</p>
                <div className="pt-3 border-t border-[#f0f0f0] mt-auto">
                  <img src={Reviewsio} alt="Logo" className="h-[16px] w-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;