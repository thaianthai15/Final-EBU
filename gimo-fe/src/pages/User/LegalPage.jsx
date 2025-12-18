import React from 'react';
import { FaPlus } from 'react-icons/fa';

// Import Header/Footer
import Header from '../../components/layout/user/Header'; 
import Footer from '../../components/layout/user/Footer'; 
import Pic6 from '../../assets/images/pic6.webp'
import Pic7 from '../../assets/images/pic7.webp'
import Pic8 from '../../assets/images/pic8.webp'
import Pic9 from '../../assets/images/pic9.webp'

const LegalPage = () => {
  // Dữ liệu cho các thẻ Legal
  const legalResources = [
    {
      title: "Individuals",
      img: Pic8,
      desc: "Here you can find Gimo's terms of use applicable to the services and products between Gimo and consumers who are the end-users of the products or services. These are the main terms covering your rights, responsibilities and obligations as well as Gimo’s when you use our services.",
      links: ["Term of Use for individuals", "Term of Use for Digital products"]
    },
    {
      title: "Business",
      img: Pic7,
      desc: "Here you can find Gimo's terms of use and the data processing agreement including Gimo's security measures applicable to the business services and products for business customers.",
      links: ["Term of Use for Business Customers", "Business Premium Data Processing Agreement"]
    },
    {
      title: "Privacy",
      img: Pic6,
      desc: "Whenever you fill in a form on our site, whether you are placing an order, requesting sales information or applying to a job through Gimo, you are providing us with personal data, and below you can find these policies that govern how and when we can collect, use and disclose this data.",
      links: [
        "Privacy Webform for Your Privacy Requests - data deletion & account closure and more!",
        "Privacy Policy for Individuals and Business Customers",
        "Cookie Policy"
      ]
    },
    {
      title: "ESG",
      img: Pic9,
      desc: "Here you can find our Supplier Code of Conduct providing principles to guide Gimo, our Suppliers and Business Partners in our joint effort to grow our businesses in a fair and sustainable way globally.",
      links: ["Supplier Code of Conduct"]
    }
  ];

  // Dữ liệu FAQ
  const faqs = [
    {
      q: "What condition are the products in?",
      a: <>Gimo rents new and as good as new products. Before products are rented out again, they go through a detailed quality check and multi-stage processing, so that each device rented from Gimo arrives in flawless condition. If your device isn’t as expected, our customer service is happy to help. <a href="#" className="underline">Learn more about our Great Condition Promise.</a></>
    },
    {
      q: "When does the rent begin and end?",
      a: "The first monthly rental payment is charged when ordering, but the rental period does not officially start until you receive your product. The delivery date determines the recurring monthly payment date. If you fall in love and want to keep your product longer than the minimum rental period, you can extend your rental plan in your customer account at any time to reduce the monthly payment. At the end of the minimum rental period, you can keep renting on a monthly basis for the same price or cancel your subscription by returning your device for free."
    },
    {
      q: "What if my device gets damaged during the rental period?",
      a: <>If something happens during your rental, Gimo Care is there for you. We pay for 80% of the repair costs for damages of all kinds, including display breakage, water damage, and technical defects. Of course there are no charges for device errors from the manufacturer. <a href="#" className="underline">Learn more about Gimo Care</a></>
    },
    {
      q: "Do I have to worry about signs of use?",
      a: <>Don’t worry, we want you to enjoy your products as though they were yours. Small scratches and normal signs of use will be cleaned after return for free. In case of severe signs of wear, such as display breakage, Gimo Care covers 80% of the repair costs. <a href="#" className="underline">Here you'll find example photos</a> of normal signs of use that we repair for free and also photos of more severe damage where you'd have to pay 20% of the repair cost.</>
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      <Header />

      <main className="px-5 py-10">
        
        {/* --- PAGE TITLE --- */}
        <h1 className="text-[32px] md:text-[40px] font-bold text-center text-[#1a1a1a] mb-12">
          Gimo Legal Resources
        </h1>

        {/* --- LEGAL RESOURCES GRID --- */}
        <div className="max-w-[1400px] mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {legalResources.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center text-center h-full">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-[180px] h-[180px] object-contain mb-5"
                />
                <h3 className="text-[25px] font-semibold text-[#1a1a1a] mb-4">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#555] leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>
                <div className="w-full">
                  {item.links.map((link, linkIdx) => (
                    <p key={linkIdx} className="mb-2 last:mb-0">
                      <a href="#" className="text-[#555] hover:text-black hover:underline text-[15px] font-medium transition-colors">
                        {link}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section className="max-w-[850px] mx-auto mb-20">
          <h1 className="text-[38px] font-bold text-[#1a1a1a] text-center mb-12">
            Frequently asked questions
          </h1>

          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b border-[#e0e0e0] cursor-pointer">
              <summary className="flex justify-between items-center py-9 text-[20px] md:text-[25px] font-bold text-[#1a1a1a] list-none marker:content-none select-none">
                {faq.q}
                <FaPlus className="text-[24px] transform transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4" />
              </summary>
              <div className="pb-8 pl-0 pr-8">
                <div className="bg-[#e4e1e1] rounded-lg p-6 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                  <p className="text-[18px] md:text-[20px] text-[#555] leading-relaxed m-0">
                    {faq.a}
                  </p>
                </div>
              </div>
            </details>
          ))}

          <button className="block mx-auto mt-8 bg-[#4C8787] text-white px-8 py-4 rounded-[25px] text-[16px] font-semibold transition-colors hover:bg-[#c9004e]">
            Show all FAQs
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;