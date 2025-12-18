import React from 'react';
import { 
  FiSlash, 
  FiHelpCircle, 
  FiAlertTriangle 
} from 'react-icons/fi';
import techcare from '../../assets/images/care-page.webp';

// Import các Layout Components dùng chung
import Header from '../../components/layout/user/Header';
import Footer from '../../components/layout/user/Footer'; 

const notCoveredItems = [
  { 
    icon: <FiSlash size={60} className="text-[#4C8787]" />, 
    title: "Burglary or theft" 
  },
  { 
    icon: <FiHelpCircle size={60} className="text-[#4C8787]" />, 
    title: "Loss" 
  },
  { 
    icon: <FiAlertTriangle size={60} className="text-[#4C8787]" />, 
    title: "Improper usage" 
  },
];

// --- CÁC COMPONENT CON ---
const TopBanner = () => (
  <div className="bg-[#4C8787] text-white text-center py-2 text-sm">
    <p>Not an April Fools' joke: Get a €50 Mindfactory online-only voucher on your first month when you rent for 6 months or more!</p>
  </div>
);

// --- COMPONENT TRANG CHÍNH ---
const GimoCarePage = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <TopBanner />
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        
        {/* Section 1: Rest easier */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Rest easier</h1>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Did your device take a tumble? Gimo Care provides damage protection and a quick replacement service for your device. Repair service fees will apply. The amount will depend on your Gimo Care option.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4C8787] to-teal-200 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src={techcare} 
              alt="Technician repairing a phone" 
              className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]" 
            />
          </div>
        </section>

        {/* Section 2: Info Boxes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <p className="text-gray-700 font-medium leading-relaxed">
              Gimo Care covers all kinds of damages—including technical defects, broken displays, water damage, and severe signs of use. Repair service fees will apply. The amount will depend on which Gimo Care option you choose.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <p className="text-gray-700 font-medium leading-relaxed">
              Device errors from the manufacturer and normal signs of use are completely covered by us.
            </p>
          </div>
        </section>

        {/* Section 3: Normal signs of use CTA */}
        <section className="text-center py-12 px-6 bg-[#4C8787]/5 rounded-[40px] mb-20">
          <p className="text-xl font-bold mb-6 text-gray-800">Normal signs of use do not count as damage, so don't worry about those at all.</p>
          <button className="bg-white border-2 border-gray-900 text-gray-900 rounded-full py-3 px-10 font-bold hover:bg-gray-900 hover:text-white transition-all duration-300">
            Learn more
          </button>
        </section>

        {/* Section 4: What's not covered */}
        <section className="text-center pb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">What's not covered?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Gimo Care doesn't cover stolen or lost devices—you're responsible for these costs. But, if you have liability insurance, you should be covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {notCoveredItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-3xl p-10 flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-5 bg-teal-50 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sử dụng Component Footer có sẵn đã import ở trên */}
      <Footer />
    </div>
  );
};

export default GimoCarePage;