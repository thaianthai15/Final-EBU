import React from "react";
import { FaPlus } from "react-icons/fa";

// Import Header/Footer
import Header from "../../components/layout/user/Header";
import Footer from "../../components/layout/user/Footer";
import Pic27 from "../../assets/images/pic27.webp";
import Pic34 from "../../assets/images/pic34.webp";
import Pic35 from "../../assets/images/pic35.webp";
import Pic36 from "../../assets/images/pic36.webp";
import Pic31 from "../../assets/images/pic31.webp";
import Pic30 from "../../assets/images/pic30.webp";
import Pic29 from "../../assets/images/pic29.webp";
import Pic28 from "../../assets/images/pic28.webp";
import Pic39 from "../../assets/images/pic39.webp";
import Pic40 from "../../assets/images/pic40.webp";
import Pic41 from "../../assets/images/pic41.webp";
import Pic22 from "../../assets/images/pic22.webp";
import Pic37 from "../../assets/images/pic37.webp";
import Pic33 from "../../assets/images/pic33.webp";
import Pic32 from "../../assets/images/pic32.webp";
import Pic26 from "../../assets/images/pic26.webp";
import Pic43 from "../../assets/images/pic43.webp";
import Pic44 from "../../assets/images/pic44.webp";
import Pic45 from "../../assets/images/pic45.webp";
import Pic38 from "../../assets/images/pic38.webp";
import Pic42 from "../../assets/images/pic42.webp";
import Pic46 from "../../assets/images/pic46.webp";
import Pic47 from "../../assets/images/pic47.webp";
import Pic48 from "../../assets/images/pic48.webp";
import Allianz from "../../assets/images/Allianz_logo.svg";
import Bosch from "../../assets/images/Bosch_logo.svg";
import Deutsche from "../../assets/images/Deutsche_telekom_logo.svg";
import DeutscheRentenversicherung from "../../assets/images/deutsche_rentenversicherung_logo.svg";
import Flink from "../../assets/images/Flink_logo.svg";
import Toogoodtogo from "../../assets/images/Toogoodtogo_logo.svg";
import { Link } from "react-router-dom";

const GimoBusinessPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Header />

      {/* --- SECTION 1: BANNER --- */}
      {/* --- SECTION 1: BANNER --- */}
      <section className="py-16 bg-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="text-center lg:text-left z-10">
              <h1 className="text-[40px] lg:text-[56px] font-extrabold mb-6 leading-[1.1]">
                Rent tech for your business
              </h1>
              <p className="text-[20px] text-[#555] mb-8 font-semibold">
                Flexibly, worry-free, at low monthly prices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* ĐIỀU HƯỚNG SIGN UP */}
                <Link to="/sign-up">
                  <button className="w-full sm:w-auto bg-[#4C8787] text-white px-10 py-3 rounded-full font-bold text-[16px] hover:bg-[#3a6969] transition-colors shadow-lg">
                    Sign up
                  </button>
                </Link>
                <button className="bg-white text-[#1a1a1a] border-[2px] border-black px-8 py-3 rounded-full font-bold text-[16px] hover:bg-[#f0f0f0] transition-colors">
                  Request Offer
                </button>
              </div>
            </div>
            {/* Image */}
            <div className="w-full flex justify-center lg:justify-end z-10">
              <img
                src={Pic27}
                alt="Business Banner"
                className="w-full max-w-[600px] lg:max-w-none h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: VALUE PROPS (Cập nhật link cho Card Gimo Care) --- */}
      <section className="py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Always use the best tech",
              desc: (
                <>
                  and still have budget for your business ideas due to{" "}
                  <strong>low monthly prices</strong>
                </>
              ),
              img: Pic34,
              link: null,
            },
            {
              title: "Stay agile in turbulent times",
              desc: (
                <>
                  by adjusting rentals to your current needs thanks to{" "}
                  <strong>flexible rental periods</strong>
                </>
              ),
              img: Pic35,
              link: null,
            },
            {
              title:
                "If an asset breaks, we'll cover up to 80% of the repair costs",
              small: "GIMO CARE",
              img: Pic36,
              link: "/gimo-care", // Thêm link cho Gimo Care
            },
            {
              title: "Gimo Great Condition Promise",
              desc: "Every device you rent from Gimo is new or like new and fully tested — that’s our Great Condition Promise.",
              img: Pic31,
              link: null,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f9f9f9] rounded-xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[350px]"
            >
              <div>
                {item.small && (
                  <small className="block text-[#4C8787] font-bold mb-2 uppercase text-sm">
                    {item.small}
                  </small>
                )}
                <h3 className="text-[22px] font-bold mb-3 leading-tight">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="text-[16px] text-[#555] leading-relaxed">
                    {item.desc}
                  </p>
                )}
                {item.link && (
                  <Link
                    to={item.link}
                    className="text-[#4C8787] font-bold text-sm mt-2 inline-block hover:underline"
                  >
                    Learn more →
                  </Link>
                )}
              </div>
              <img
                src={item.img}
                alt={`prop-${idx}`}
                className="w-full max-w-[180px] self-end mt-4 rounded-lg object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: GIMO PROMISE (3 Cards) --- */}
      <section className="py-10 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tip-top tech",
                text: "We guarantee you tech in great condition. Damaged devices don't come in Gimo boxes.",
                img: Pic30,
              },
              {
                title: "Put to the test",
                text: "After each product is returned, it goes through a multi-process quality check. Only the best go out again.",
                img: Pic29,
              },
              {
                title: "Squeaky clean",
                text: "We scrub your devices inside and out: erasing all data and cleaning every groove.",
                img: Pic28,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f9f9f9] rounded-xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[300px] text-center"
              >
                <div className="mb-4">
                  <h4 className="text-[20px] font-bold mb-2">{item.title}</h4>
                  <p className="text-[14px] text-[#555] leading-relaxed max-w-[250px] mx-auto">
                    {item.text}
                  </p>
                </div>
                <img
                  src={item.img}
                  alt={`promise-${idx}`}
                  className="mx-auto max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: COMPANY TYPE --- */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto bg-[#f9f9f9] rounded-[40px] p-8 md:p-16 text-center">
          <small className="block text-[#8a8a8a] font-bold tracking-widest uppercase mb-4 text-[12px]">
            Renting helps most businesses
          </small>
          <h2 className="text-[32px] md:text-[38px] font-extrabold mb-12">
            What kind of company do you work for?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { type: "Freelancer", img: Pic39 },
              { type: "Startup", prefix: "I work for a (growing)", img: Pic40 },
              {
                type: "Corporation",
                prefix: "I work for an established",
                img: Pic41,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg h-[420px] group"
              >
                <img
                  src={item.img}
                  alt={item.type}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-left text-white z-10">
                  <h3 className="text-[20px] font-normal leading-tight mb-4">
                    {item.prefix ? item.prefix : "I'm a"} <br />
                    <span className="text-[30px] font-bold">{item.type}</span>
                  </h3>
                  <button className="bg-white text-[#1a1a1a] border-2 border-transparent px-6 py-2 rounded-full font-bold text-[14px] hover:bg-[#f0f0f0] transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-[20px] font-bold mb-8 text-center">
              Companies that trust Gimo Business
            </h2>
            <div className="flex flex-wrap justify-center gap-10 items-center opacity-70">
              {/* Replace with your SVGs */}
              <img
                src={Allianz}
                alt="Allianz"
                className="h-8 md:h-10 hover:opacity-100 transition-opacity"
              />
              <img
                src={Bosch}
                alt="Bosch"
                className="h-8 md:h-10 hover:opacity-100 transition-opacity"
              />
              <img
                src={Deutsche}
                alt="Telekom"
                className="h-8 md:h-10 hover:opacity-100 transition-opacity"
              />
              <img
                src={DeutscheRentenversicherung}
                alt="DRV"
                className="h-8 md:h-10 hover:opacity-100 transition-opacity"
              />
              <img
                src={Flink}
                alt="Flink"
                className="h-8 md:h-10 hover:opacity-100 transition-opacity"
              />
              <img
                src={Toogoodtogo}
                alt="Toogoodtogo"
                className="h-8 md:h-10 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CATEGORIES --- */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[30px] font-extrabold mb-10">
            Choose from more than 3,000 products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "Laptops", img: Pic22 },
              { name: "Smartphones", img: Pic37 },
              { name: "Monitors", img: Pic33 },
              { name: "Headphones", img: Pic32 },
              { name: "Computer accessories", img: Pic26 },
              { name: "Wearables", img: Pic43 },
              { name: "Air treatment", img: Pic44 },
              { name: "Protectors", img: Pic45 },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#f7f7f7] rounded-lg p-4 flex flex-col items-center justify-center min-h-[160px] cursor-pointer hover:bg-[#eee] hover:shadow-md transition-all"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-[80px] h-[80px] object-contain mb-3"
                />
                <div className="text-[13px] font-semibold text-[#555]">
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: PREMIUM FEATURE --- */}
      <section className="py-10 bg-white">
        <div className="max-w-[1200px] mx-auto bg-[#f9f9f9] rounded-[40px] p-10 md:p-16 text-center">
          <small className="block text-[#555] font-bold uppercase mb-2">
            Introducing
          </small>
          <h2 className="text-[32px] font-extrabold mb-2">
            Gimo Business Premium
          </h2>
          <p className="text-[18px] text-[#555] mb-6">
            Manage all your tech in one tool
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-[16px] hover:bg-gray-800 transition-colors mb-12">
            Learn more
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { text: "Keep track of your tech at a glance", img: Pic48 },
              { text: "Equip your team faster using kits", img: Pic47 },
              { text: "Assign and ship tech to employees", img: Pic46 },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 border border-pink-500/20 rounded-full scale-110"></div>
                  <div className="absolute inset-0 border border-pink-500/10 rounded-full scale-125"></div>
                  <img
                    src={item.img}
                    alt={`feature-${idx}`}
                    className="w-full max-w-[250px] relative z-10"
                  />
                </div>
                <p className="text-[18px] font-bold text-[#1a1a1a]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: CIRCULAR ECONOMY --- */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
            <div className="flex-1">
              <img
                src={Pic38}
                alt="Circular Economy"
                className="w-full rounded-xl shadow-md"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-[32px] md:text-[38px] font-extrabold mb-5">
                Join the circular economy
              </h2>
              <p className="text-[18px] text-[#555] leading-relaxed mb-6">
                We believe sharing tech will help further our collective goal to
                leave this planet better than we found it.
              </p>
              <a
                href="#"
                className="text-black font-bold hover:opacity-70 text-[16px]"
              >
                Why is the circular economy so important? →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: GIMO CARE --- */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <img src={Pic42} alt="Gimo Care" className="w-full rounded-xl" />
            </div>
            <div className="flex-1 text-center md:text-left md:pl-10">
              <h3 className="text-[30px] font-extrabold mb-4">Gimo Care</h3>
              <p className="text-[16px] text-[#555] leading-relaxed mb-8">
                Rent your tech worry-free with Gimo Care. Repair service fees
                will apply. The amount will depend on your Gimo Care option.
              </p>
              {/* ĐIỀU HƯỚNG GIMO CARE */}
              <Link to="/gimo-care">
                <button className="bg-[#4C8787] text-white px-8 py-3 rounded-full font-bold text-[16px] hover:bg-[#3a6969] transition-colors shadow-md">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 9: CTA BOTTOM (ĐIỀU HƯỚNG SIGN UP) --- */}
      <section className="py-10 bg-white">
        <div className="max-w-[1200px] mx-auto bg-[#f9f9f9] rounded-[50px] p-16 text-center">
          <h2 className="text-[32px] md:text-[40px] font-extrabold mb-2">
            Ready to get started?
          </h2>
          <h3 className="text-[20px] md:text-[24px] font-semibold text-[#555] mb-8">
            Register with Gimo Business
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* ĐIỀU HƯỚNG SIGN UP */}
            <Link to="/sign-up">
              <button className="w-full sm:w-auto bg-[#4C8787] text-white px-10 py-3 rounded-full font-bold text-[16px] hover:bg-[#3a6969] transition-colors shadow-lg">
                Sign up
              </button>
            </Link>
            <Link to="/rent-now">
              <button className="w-full sm:w-auto bg-white text-[#1a1a1a] border border-[#ccc] px-10 py-3 rounded-full font-bold text-[16px] hover:bg-[#f0f0f0] transition-colors">
                Find tech
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 10: FAQ --- */}
      <section className="max-w-[900px] mx-auto mt-10 mb-20 px-5">
        <h1 className="text-[38px] font-bold text-[#1a1a1a] text-center mb-12">
          Frequently asked questions
        </h1>

        {[
          {
            q: "How do I get a Business offer?",
            a: "If you can’t find the right assets or want to order in larger amounts, please get in touch with our business support. Reach them via the chatbot, or email: offers@gimo.com.",
          },
          {
            q: "What happens if an asset gets damaged?",
            a: "If your product is damaged during the rental period, Gimo Care covers up to 80% of the repair costs (50% coverage for drones). You won’t be charged for any device errors or defects from the manufacturer. If the damage to your device is beyond repair, Gimo Care will only require you to pay 20% (or 50% for drones) of the Recommended Retail Price (RRP) determined at the beginning of your rental. Normal signs of use will be removed for free.",
          },
          {
            q: "How can I return a device I no longer need?",
            a: "After your minimum rental period, you can return your assets for free. Go to My Tech > End rental to download your return label. Please make sure to reset the asset to its factory settings and unpair any user accounts. As soon as your package is received by the shipping service provider, your monthly payments will be paused. The rental ends when we've received the product and checked if it’s in good condition.",
          },
        ].map((faq, idx) => (
          <details
            key={idx}
            className="group border-b border-[#e0e0e0] cursor-pointer"
          >
            <summary className="flex justify-between items-center py-8 text-[20px] md:text-[25px] font-bold text-[#1a1a1a] list-none marker:content-none select-none">
              {faq.q}
              <FaPlus className="text-[24px] transform transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4" />
            </summary>
            <div className="pb-8 text-[18px] text-[#555] leading-relaxed bg-[#f9f9f9] rounded-lg p-6">
              <p>{faq.a}</p>
            </div>
          </details>
        ))}

        <button className="block mx-auto mt-8 bg-[#4C8787] text-white px-8 py-4 rounded-[25px] text-[16px] font-semibold transition-colors hover:bg-[#e6004a]">
          Show all FAQs
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default GimoBusinessPage;
