import React from "react";
import {
  FiSearch,
  FiChevronDown,
  FiUser,
  FiBox,
  FiCreditCard,
  FiBriefcase,
  FiZap,
  FiInfo,
  FiMessageSquare,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import GimmoLogo from "../../assets/images/gimo-logo.png";

const faqButtons = [
  "Damaged products",
  "Payments FAQs",
  "How to buy your Gimo device",
  "Contact the Gimo support team",
];

const immediateAnswersData = [
  {
    icon: <FiUser size={24} />,
    title: "Account management",
    links: [
      "Change names",
      "Change e-mail address or phone number",
      "How to login/register?",
    ],
  },
  {
    icon: <FiBox size={24} />,
    title: "Orders, subscriptions, and returns",
    links: ["Damaged products", "Rental FAQs", "Where does Gimo ship to?"],
  },
  {
    icon: <FiCreditCard size={24} />,
    title: "Payments, Invoices & Vouchers",
    links: [
      "Payments FAQs",
      "Late Payment Fee FAQ",
      "Something went wrong with your payment",
    ],
  },
  {
    icon: <FiBriefcase size={24} />,
    title: "Gimo services",
    links: [
      "How to buy your Gimo device",
      "Product FAQs",
      "Digital license & one-time purchase FAQs",
    ],
  },
  {
    icon: <FiZap size={24} />,
    title: "Gimo Business",
    links: [
      "Gimo Business Premium",
      "Combining subscription payments [consolidated billing]",
    ],
  },
  {
    icon: <FiInfo size={24} />,
    title: "About Gimo",
    links: [
      "Contact the Gimo support team",
      "Gimo Group GmbH and its national companies",
      "About Gimo",
    ],
  },
];

// Component Header
const Header = () => (
  <header className="bg-[#4C8787] text-white">
    <div className="container mx-auto px-6 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-3 h-[100%]">
        <img
          src={GimmoLogo}
          alt="GIMO Logo"
          className="h-[100px] w-auto" // Điều chỉnh kích thước ở đây
        />
      </div>
      <nav className="flex items-center space-x-6 text-sm font-semibold">
        <a href="#" className="hover:underline">
          Submit a request
        </a>
        <button className="flex items-center space-x-1">
          <span>EN</span>
          <FiChevronDown />
        </button>
      </nav>
    </div>
  </header>
);

// Component Hero Section
const HeroSection = () => (
  <section className="bg-[#4C8787] text-white text-center py-16">
    <h1 className="text-4xl font-bold mb-6">Help Center</h1>
    <div className="relative w-full max-w-lg mx-auto">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        placeholder="How can we help you?"
        className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
    </div>
  </section>
);

// Component Card cho mục câu hỏi
const AnswerCard = ({ icon, title, links }) => (
  <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-gray-800 text-white rounded-full p-3 mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    <ul className="space-y-2 text-sm text-gray-600 mb-6 text-left">
      {links.map((link, index) => (
        <li key={index} className="flex items-start">
          <FiMessageSquare className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
          <span>{link}</span>
        </li>
      ))}
    </ul>
    <button className="mt-auto w-full border border-gray-800 rounded-full py-2 px-4 font-semibold hover:bg-gray-100 transition">
      Further questions
    </button>
  </div>
);

// Component Footer
const Footer = () => (
  <footer className="bg-white border-t border-gray-200 text-gray-500 text-sm">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <span>Gimo Tech, Inc. © 2025</span>
        <div className="flex space-x-4 text-gray-700">
          <a href="#" className="hover:text-[#4C8787]">
            <FiFacebook size={20} />
          </a>
          <a href="#" className="hover:text-[#4C8787]">
            <FiInstagram size={20} />
          </a>
          <a href="#" className="hover:text-[#4C8787]">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="hover:text-[#4C8787]">
            <FiTwitter size={20} />
          </a>
          <a href="#" className="hover:text-[#4C8787]">
            <FiLinkedin size={20} />
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <a href="#" className="hover:underline">
            Imprint
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function HelpCenterPage() {
  return (
    <div className="bg-white font-sans">
      <Header />

      <main>
        <HeroSection />

        {/* Frequently asked questions */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">
              Frequently asked questions
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {faqButtons.map((text, index) => (
                <button
                  key={index}
                  className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:border-gray-800 transition"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Immediate answers */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Immediate answers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {immediateAnswersData.map((card) => (
                <AnswerCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">Customer care</p>
              <h3 className="text-2xl font-bold my-2">
                Visit our Help Center!
              </h3>
              <p className="text-gray-600">
                Find your answer in just a few clicks.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white text-center">
              <h4 className="font-bold">Learn more</h4>
              <p className="text-sm text-gray-600 my-3">
                Get answers to the most common questions via our Help Center.
              </p>
              <button className="bg-[#4C8787] text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 transition">
                Visit our Help Center
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
