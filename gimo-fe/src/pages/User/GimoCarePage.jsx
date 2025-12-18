import React from 'react';
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiMenu, FiGift, FiGlobe, FiChevronDown, FiInstagram, FiTwitter, FiLinkedin, FiSlash, FiHelpCircle, FiAlertTriangle } from 'react-icons/fi';
import { FaYoutube, FaCcMastercard, FaCcVisa, FaCcPaypal, FaGooglePlay, FaApple } from "react-icons/fa";
import techcare from '../../assets/images/care-page.webp'
import Header from '../../components/layout/user/Header';

const notCoveredItems = [
  { icon: <FiSlash size={60} className="text-[#4C8787]" />, title: "Burglary or theft" },
  { icon: <FiHelpCircle size={60} className="text-[#4C8787]" />, title: "Loss" },
  { icon: <FiAlertTriangle size={60} className="text-[#4C8787]" />, title: "Improper usage" },
];

const footerLinks = {
  company: ["Help Center", "Jobs", "Blog", "Press", "Reviews"],
  offerings: ["Top Products", "Deals %", "Grover Business", "Affiliate Program", "Become a Partner", "Invite Friends", "Student Discount", "Black Friday"],
  info: ["How it Works", "Great Condition Promise", "Grover Care", "Sustainability", "Legal", "Cancel contract"],
};


// --- CÁC COMPONENT CON ---

const TopBanner = () => (
  <div className="bg-[#4C8787] text-white text-center py-2 text-sm">
    <p>Not an April Fools' joke: Get a €50 Mindfactory online-only voucher on your first month when you rent for 6 months or more!</p>
  </div>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 text-sm">
    <div className="container mx-auto px-4 pt-16 pb-8">
      {/* Invite Friends Banner */}
      <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <FiGift className="text-[#4C8787] w-6 h-6"/>
          <div>
            <p className="font-bold">Invite friends, get €30 Gimo Cash.</p>
            <p className="text-gray-600">Each friend that joins Gimo gets 1 month's free, too!</p>
          </div>
        </div>
        <button className="bg-gray-800 text-white font-semibold rounded-full px-5 py-2 whitespace-nowrap hover:bg-gray-700">Invite friends</button>
      </div>

      {/* Main Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="font-bold mb-4 uppercase text-gray-500">Company</h4>
          <ul className="space-y-3">{footerLinks.company.map(link => <li key={link}><a href="#" className="hover:underline">{link}</a></li>)}</ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-gray-500">Offerings</h4>
          <ul className="space-y-3">{footerLinks.offerings.map(link => <li key={link}><a href="#" className="hover:underline">{link}</a></li>)}</ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-gray-500">Info</h4>
          <ul className="space-y-3">{footerLinks.info.map(link => <li key={link}><a href="#" className="hover:underline">{link}</a></li>)}</ul>
        </div>
        <div className="space-y-4">
          <button className="w-full border border-gray-300 rounded-lg p-3 flex justify-between items-center"><span className="flex items-center gap-2"><FiGlobe /> English</span> <FiChevronDown /></button>
          <button className="w-full border border-gray-300 rounded-lg p-3 flex justify-between items-center"><span className="flex items-center gap-2">🇩🇪 Deutschland</span> <FiChevronDown /></button>
        </div>
      </div>
      
      {/* Sub-footers */}
      <div className="border-t border-gray-200 pt-8 mb-8 flex justify-between items-center">
          <p>Did a question or need support?</p>
          <button className="border border-gray-800 rounded-full py-2 px-5 font-semibold hover:bg-gray-100">Get in touch</button>
      </div>
      <div className="border-t border-gray-200 pt-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 text-gray-400 text-2xl">
            <FaCcMastercard /> <FaCcVisa /> <FaCcPaypal /> {/* ... more payment icons */}
        </div>
        <div>Rating placeholder...</div>
        <div className="flex items-center gap-4">
            <a href="#"><FaApple size={30} /></a>
            <a href="#"><FaGooglePlay size={28} /></a>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
        <span>Grover Deutschland GmbH © 2023</span>
        <div className="flex gap-4 text-gray-700">
          <FiInstagram /> <FaYoutube /> <FiTwitter /> <FiLinkedin />
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Cookie settings</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Imprint</a>
        </div>
      </div>
    </div>
  </footer>
);


// --- COMPONENT TRANG CHÍNH ---

export default function GimoCarePage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <TopBanner />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        
        {/* Rest easier Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold mb-4">Rest easier</h1>
            <p className="text-gray-600 leading-relaxed font-semibold">
              Did your device take a tumble? Gimo Care provides damage protection and a quick replacement service for your device. Repair service fees will apply. The amount will depend on your Gimo Care option.
            </p>
          </div>
          <div>
            {/* THAY THẾ BẰNG ẢNH CỦA BẠN */}
            <img src={techcare} alt="Technician repairing a phone" className="rounded-lg shadow-md w-full" />
          </div>
        </section>

        {/* Info Boxes Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="border border-gray-200 rounded-lg p-6 font-semibold">
            <p>Gimo Care covers all kinds of damages—including technical defects, broken displays, water damage, and severe signs of use. Repair service fees will apply. The amount will depend on which Gimo Care option you choose.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 font-semibold">
            <p>Device errors from the manufacturer and normal signs of use are completely covered by us.</p>
          </div>
        </section>

        {/* Normal signs of use CTA */}
        <section className="text-center mb-20">
          <p className="font-semibold mb-4">Normal signs of use do not count as damage, so don't worry about those at all.</p>
          <button className="border border-gray-800 rounded-full py-2 px-6 font-semibold hover:bg-gray-100">Learn more</button>
        </section>

        {/* What's not covered Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-2">What's not covered?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">Gimo Care doesn't cover stolen or lost devices—you're responsible for these costs. But, if you have liability insurance, you should be covered.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {notCoveredItems.map(item => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center gap-6">
                {/* THAY THẾ BẰNG ILLUSTRATION CỦA BẠN */}
                {item.icon}
                <h3 className="font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}