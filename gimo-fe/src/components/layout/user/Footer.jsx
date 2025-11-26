import React from "react";
// Import các icon cần thiết từ react-icons
import {
  IoLanguage,
  IoLocationOutline,
  IoChevronDown,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoStar,
} from "react-icons/io5";

// Dữ liệu cho các cột link để dễ quản lý
const companyLinks = [
  { name: "About us", href: "#" },
  { name: "Help Center", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Press", href: "#" },
  { name: "Reviews", href: "#" },
];

const offeringsLinks = [
  { name: "Top Products", href: "#" },
  { name: "Deals %", href: "#" },
  { name: "Affiliates program", href: "#" },
  { name: "Invite Friends", href: "#" },
  { name: "Student Discount", href: "#" },
  { name: "Discount vouchers", href: "#" },
  { name: "Military discount", href: "#" },
  { name: "Black Friday", href: "#" },
];

const infoLinks = [
  { name: "How It Works", href: "#" },
  { name: "Great Condition Promise", href: "#" },
  { name: "Grover Care", href: "#" },
  { name: "Sustainability", href: "#" },
  { name: "Legal", href: "#" },
  { name: "Cancel contract", href: "#" },
];

// Component cho mỗi cột link
const FooterLinkColumn = ({ title, links }) => (
  <div className="flex-col justify-self-center items-center">
    <h3 className="text-md font-semibold uppercase tracking-wider">
      {title}
    </h3>
    <ul className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-md text-gray-600 hover:text-gray-900 transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 font-sans">
      <hr className="border-t border-gray-200" />
      <div className="container mx-auto px-6 pt-12 pb-4">
        {/* Phần link chính */}
        <div className="grid grid-cols-3 gap-6">
          <FooterLinkColumn
            title="Company"
            links={companyLinks}
            className="flex justify-center"
          />
          <FooterLinkColumn title="Offerings" links={offeringsLinks} />
          <FooterLinkColumn title="Info" links={infoLinks} />
        </div>

        {/* Phần liên hệ */}
        <div className="text-center mt-12 mb-8">

          <hr className="border-t border-gray-200 pt-8" />

          <span className="text-gray-600 mr-4">
            Got a question or need support?
          </span>
          <button className="border border-gray-400 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-100 transition">
            Get in touch
          </button>
        </div>

        {/* Đường kẻ ngang */}
        <hr className="border-t border-gray-200" />

        {/* Phần thanh toán và đánh giá */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6"
            />
            <span className="text-xs text-gray-500">SSL Secure</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-gray-500">©REVIEWS</span>
              <div className="flex text-yellow-500">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar className="text-gray-300" />
              </div>
              <span className="text-sm font-semibold">4.42 / 5</span>
            </div>
          </div>
        </div>

        {/* Đường kẻ ngang */}
        <hr className="border-t border-gray-200" />

        {/* Phần cuối cùng */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-5 text-sm text-gray-500 gap-4">
          <p>&copy; Gimo Tech, Inc. 2025</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-800">
              <IoLogoFacebook />
            </a>
            <a href="#" className="hover:text-gray-800">
              <IoLogoInstagram />
            </a>
            <a href="#" className="hover:text-gray-800">
              <IoLogoYoutube />
            </a>
            <a href="#" className="hover:text-gray-800">
              <IoLogoTwitter />
            </a>
            <a href="#" className="hover:text-gray-800">
              <IoLogoLinkedin />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-800">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-gray-800">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
