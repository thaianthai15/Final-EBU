import React, { useState } from "react";
import {
  FaChevronRight,
  FaRegHeart,
  FaShareAlt,
  FaChevronLeft,
  FaAngleDown,
  FaRegClock,
  FaShieldAlt,
  FaTruck,
  FaTag,
  FaCreditCard,
  FaStar,
  FaPlus,
} from "react-icons/fa";

import Paypal from '../../assets/images/Paypal-Logo-2022.png'
import MasterCard from '../../assets/images/Mastercard-logo.png'
import Momo from '../../assets/images/momo copy.png'
import Visa from '../../assets/images/visa copy.png'
import Vnpay from '../../assets/images/vnpay copy.png'

import { products } from "../../data/productData";
import Header from "../../components/layout/user/Header";
import ProductCard from "./components/ProductCard";
import Footer from "../../components/layout/user/Footer";
import Thumbnail1 from "../../assets/images/pic14.webp";
import Thumbnail2 from "../../assets/images/pic15.webp";
import Thumbnail3 from "../../assets/images/pic16.webp";
import Thumbnail4 from "../../assets/images/pic17.webp";
import Thumbnail5 from "../../assets/images/pic18.webp";

const ProductDetailPage = () => {
  // State giả lập cho gallery ảnh

  const thumbnails = [
    "https://res.cloudinary.com/grover/image/upload/e_trim/f_webp,q_auto/b_white,c_pad,h_300,w_300/f_auto,q_auto/v1747654497/grr7i5aoaa16ez5koohv.png",
    Thumbnail1,
    Thumbnail2,
    Thumbnail3,
    Thumbnail4,
    Thumbnail5,
  ];

  const [mainImage, setMainImage] = useState(thumbnails[0]);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      <Header />

      <main className="max-w-[1200px] mx-auto px-5 py-8">
        {/* --- BREADCRUMBS --- */}
        <div className="flex items-center gap-2 text-[14px] text-[#666] mb-6">
          <span className="cursor-pointer hover:text-black">All products</span>
          <FaChevronRight className="text-[10px]" />
          <span className="cursor-pointer hover:text-black">Gaming & VR</span>
          <FaChevronRight className="text-[10px]" />
          <span className="font-semibold text-black">Gaming Consoles</span>
        </div>

        {/* --- MAIN PRODUCT SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* --- LEFT: GALLERY --- */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="bg-white rounded-xl border border-[#eee] p-10 flex items-center justify-center relative min-h-[400px] lg:min-h-[500px]">
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="bg-red-500 text-white text-[12px] font-bold px-2 py-1 rounded-full w-fit">
                  -24%
                </span>
                <span className="bg-black text-white text-[12px] font-bold px-2 py-1 rounded-full w-fit">
                  Black Friday
                </span>
              </div>

              {/* Action Buttons (Heart/Share) */}
              <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
                <button className="w-[40px] h-[40px] rounded-full bg-white border border-[#eee] flex items-center justify-center hover:bg-[#f7f7f7] shadow-sm">
                  <FaRegHeart className="text-[#ccc] hover:text-[#4C8787] text-[18px]" />
                </button>
                <button className="w-[40px] h-[40px] rounded-full bg-white border border-[#eee] flex items-center justify-center hover:bg-[#f7f7f7] shadow-sm">
                  <FaShareAlt className="text-[#333] text-[18px]" />
                </button>
              </div>

              {/* Navigation Arrows */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-white border border-[#eee] flex items-center justify-center shadow-md hover:bg-[#f7f7f7]">
                <FaChevronLeft />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-white border border-[#eee] flex items-center justify-center shadow-md hover:bg-[#f7f7f7]">
                <FaChevronRight />
              </button>

              <img
                src={mainImage}
                alt="Main Product"
                className="max-w-full max-h-[350px] object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4 overflow-x-auto py-2 scrollbar-hide">
              {thumbnails.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb}
                  alt={`Thumbnail ${idx}`}
                  className="w-[80px] h-[80px] object-cover rounded-lg border-2 border-transparent hover:border-[#4C8787] cursor-pointer bg-white"
                  onClick={() => setMainImage(thumb)} // (Optional logic)
                />
              ))}
            </div>
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="flex flex-col gap-4">
            {/* Main Info Box */}
            <div className="bg-white border border-[#eee] rounded-xl p-6 shadow-sm">
              <h1 className="text-[28px] lg:text-[30px] font-extrabold text-[#111] mb-4 leading-tight">
                Nintendo Switch 2 Console
              </h1>

              {/* Color Picker */}
              <div className="mb-4">
                <p className="text-[16px] text-[#333] mb-2">
                  Select your color: <strong>Black</strong>
                </p>
                <button className="w-[32px] h-[32px] rounded-full bg-black border-2 border-white ring-1 ring-[#ccc] focus:ring-black"></button>
              </div>

              {/* Rental Period Selector */}
              <div className="mb-4">
                <p className="text-[14px] text-[#333] mb-2">
                  Select your{" "}
                  <a href="#" className="underline">
                    minimum rental period
                  </a>
                </p>
                <div className="flex gap-3 flex-wrap">
                  <button className="flex-1 min-w-[140px] bg-[#f6f6f6] border border-[#eee] rounded-full px-4 py-2.5 flex justify-between items-center text-[14px] font-medium text-[#333]">
                    Start day <FaAngleDown className="text-[#999]" />
                  </button>
                  <button className="flex-1 min-w-[140px] bg-[#f6f6f6] border border-[#eee] rounded-full px-4 py-2.5 flex justify-between items-center text-[14px] font-medium text-[#333]">
                    End day <FaAngleDown className="text-[#999]" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-3 text-[14px] text-[#444]">
                  <FaRegClock /> One month
                </div>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 border-t border-[#f0f0f0]">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-1 text-[#4C8787] font-bold text-[13px] uppercase">
                    <FaShieldAlt /> FREE{" "}
                    <a href="#" className="underline">
                      Gimo care
                    </a>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="text-[#4C8787] font-extrabold text-[24px]">
                        €24.90
                      </span>
                      <span className="text-[14px] text-[#333]">/Month</span>
                    </div>
                    <div className="text-[14px] text-[#888] line-through">
                      Original: €32.90
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-white text-[#175e5e] py-3.5 rounded-full font-bold text-[16px] hover:bg-[#98cccc] transition-colors">
                    Add to cart
                  </button>
                  <button className="flex-1 bg-[#5ba0a0] text-white py-3.5 rounded-full font-bold text-[16px] hover:bg-[#4C8787] transition-colors">
                    Rent now
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <div className="bg-white border border-[#eee] rounded-xl p-5 shadow-sm flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <FaTruck className="text-[20px] text-[#333] mt-1" />
                <p className="text-[14px] text-[#333]">
                  Delivery in 1-4 business days for €4.90
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaTag className="text-[20px] text-[#333] mt-1" />
                <a
                  href="#"
                  className="text-[14px] font-bold text-[#333] underline"
                >
                  Available to own
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- POLICY & BENEFITS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="bg-[#fafafa] border border-[#eee] p-6 rounded-xl">
            <FaTruck className="text-[24px] text-[#333] mb-3" />
            <h3 className="font-bold text-[16px] mb-1">Delivery and returns</h3>
            <p className="text-[14px] text-[#555]">
              Get your device in 1-4 working days for €4.90.{" "}
              <a href="#" className="underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="bg-[#fafafa] border border-[#eee] p-6 rounded-xl">
            <FaCreditCard className="text-[24px] text-[#333] mb-3" />
            <h3 className="font-bold text-[16px] mb-1">Easy payments</h3>
            <p className="text-[14px] text-[#555] mb-3">
              No deposit. Small, secure payments.{" "}
              <a href="#" className="underline">
                Learn more
              </a>
            </p>
            <div className="flex gap-2 opacity-80">
              <img
                src={MasterCard}
                className="h-[20px] w-auto"
                alt="Mastercard"
              />
              <img
                src={Visa}
                className="h-[20px] w-auto"
                alt="Visa"
              />
              <img
                src={Paypal}
                className="h-[20px] w-auto"
                alt="Paypal"
              />
            </div>
          </div>
          <div className="bg-[#fafafa] border border-[#eee] p-6 rounded-xl">
            <FaStar className="text-[24px] text-[#333] mb-3" />
            <h3 className="font-bold text-[16px] mb-1">
              Great Condition Promise
            </h3>
            <p className="text-[14px] text-[#555]">
              All of our tech is quality checked.{" "}
              <a href="#" className="underline">
                Learn more
              </a>
            </p>
          </div>
        </div>

        {/* --- SPECIFICATIONS & DETAILS --- */}
        <div className="flex flex-col gap-6 mb-16">
          {/* Specifications */}
          <div className="border border-[#e6e6e6] rounded-xl p-8 bg-white">
            <h3 className="text-[22px] font-extrabold mb-6">
              Product specifications
            </h3>
            <ul className="grid grid-cols-[150px_1fr] gap-y-4 text-[15px]">
              <li className="contents">
                <strong className="text-[12px] font-bold uppercase tracking-wide text-black">
                  WEIGHT
                </strong>
                <span className="text-[#333]">534g</span>
              </li>
              <li className="contents">
                <strong className="text-[12px] font-bold uppercase tracking-wide text-black">
                  DISPLAY
                </strong>
                <span className="text-[#333]">LCD</span>
              </li>
              <li className="contents">
                <strong className="text-[12px] font-bold uppercase tracking-wide text-black">
                  PLATFORM
                </strong>
                <span className="text-[#333]">Nintendo Switch 2</span>
              </li>
            </ul>
            <a href="#" className="block mt-6 font-bold text-[14px] underline">
              Show more
            </a>
          </div>

          {/* Inside the box */}
          <div className="border border-[#e6e6e6] rounded-xl p-8 bg-white">
            <h3 className="text-[22px] font-extrabold mb-6">Inside the box</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[15px] text-[#333]">
              <div>📘 User manual</div>
              <div>🎮 Controller</div>
              <div>📦 Gaming console</div>
              <div>🔌 HDMI cable</div>
              <div>⚡ Charger</div>
              <div>🔋 Charging cable</div>
            </div>
          </div>

          {/* Product Information */}
          <div className="border border-[#e6e6e6] rounded-xl p-8 bg-white">
            <h3 className="text-[22px] font-extrabold mb-6">
              Product information
            </h3>
            <p className="text-[15px] text-[#333] leading-relaxed mb-4">
              Want to play flexibly - at home, on the go or with friends? The
              Nintendo Switch makes it possible. As a hybrid console, it
              combines classic TV gaming with handheld convenience. And with the
              upcoming Nintendo Switch 2, the next evolutionary step is already
              in the starting blocks. But until then, the current Switch remains
              one of the most versatile consoles around.
            </p>
            <a href="#" className="font-bold text-[14px] underline">
              Show more
            </a>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section className="max-w-[850px] mx-auto mb-20">
          <h1 className="text-[32px] font-bold text-[#1a1a1a] text-center mb-10">
            Frequently asked questions
          </h1>

          {[
            {
              q: "Are Gimo devices brand new?",
              a: "Gimo devices are either brand new or fully refurbished to be as good as new. All refurbished tech is wiped of all data, cleaned, repaired, and rented out again for more people to enjoy. By reusing and recirculating tech, we extend the lifespan and usage of devices, helping reduce e-waste and our impact on the planet.",
            },
            {
              q: "What if I damage a device or cause signs of use?",
              a: "We want you to enjoy our products as though they were yours. Small scratches and normal signs of use will be cleaned after return for free. In case of severe damage, Gimo Care covers up to 80% of damages for all rental categories.",
            },
            {
              q: "How can I return the device?",
              a: "You can return your device for free when your minimum rental period ends. You just need to reset the device and remove any data. This way, we can rent the device safely to the next person. Then print out the shipping label, return the device, and your monthly payments will be stopped.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group border-b border-[#e0e0e0] cursor-pointer"
            >
              <summary className="flex justify-between items-center py-8 text-[20px] font-bold text-[#1a1a1a] list-none marker:content-none select-none">
                {faq.q}
                <FaPlus className="text-[24px] transform transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4" />
              </summary>
              <div className="pb-8 text-[18px] text-[#555] leading-relaxed">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}

          <button className="block mx-auto mt-8 bg-[#6ab4b4] text-white px-8 py-3 rounded-[25px] text-[16px] font-semibold transition-colors hover:bg-[#4C8787]">
            Show all FAQs
          </button>
        </section>

        {/* --- RECENTLY VIEWED (Carousel) --- */}
        <div className="mt-16 mb-20">
          <h2 className="text-[28px] font-extrabold text-[#2e2e2e] mb-6 text-left border-b border-[#e5e5e5] pb-4">
            We think you may also like
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x">
            {/* Reuse ProductCard from data */}
            {products.slice(0, 5).map((product, index) => (
              <div
                key={`recent-${index}`}
                className="min-w-[280px] max-w-[300px] snap-start"
              >
                <a href="#" className="no-underline block h-full">
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

export default ProductDetailPage;
