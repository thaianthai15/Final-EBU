import React, { useState } from "react";
import Header from "../../components/layout/user/Header";
import Footer from "../../components/layout/user/Footer";
import { IoHeartOutline, IoAdd } from "react-icons/io5";

// Import các hình ảnh
import logo1 from "../../assets/images/rent_logo.webp";
import logo2 from "../../assets/images/rent_logo_2.webp";
import logo3 from "../../assets/images/rent_logo_3.webp";
import logo4 from "../../assets/images/rent_logo_4.webp";
import logo5 from "../../assets/images/rent_logo_5.webp";

// Import ảnh sản phẩm
import pro1 from "../../assets/images/rent_pro_1.jpeg";
import pro2 from "../../assets/images/rent_pro_2.webp";
import pro3 from "../../assets/images/rent_pro_3.webp";
import pro4 from "../../assets/images/rent_pro_4.webp";
import pro5 from "../../assets/images/rent_pro_5.webp";
import pro6 from "../../assets/images/rent_pro_6.webp";
import pro7 from "../../assets/images/rent_pro_7.webp";
import pro8 from "../../assets/images/rent_pro_8.webp";
import pro9 from "../../assets/images/rent_pro_9.jpeg";
import pro10 from "../../assets/images/rent_pro_10.jpeg";
import pro11 from "../../assets/images/rent_pro_11.webp";
import pro12 from "../../assets/images/rent_pro_12.webp";
import pro13 from "../../assets/images/rent_pro_13.webp";
import pro14 from "../../assets/images/rent_pro_14.webp";
import pro15 from "../../assets/images/rent_pro_15.webp";
import pro16 from "../../assets/images/rent_pro_16.webp";
import pro17 from "../../assets/images/rent_pro_17.webp";
import pro18 from "../../assets/images/rent_pro_18.webp";
import pro19 from "../../assets/images/rent_pro_19.webp";
import pro20 from "../../assets/images/rent_pro_20.webp";
import pro21 from "../../assets/images/rent_pro_21.webp";
import pro22 from "../../assets/images/rent_pro_22.webp";
import pro23 from "../../assets/images/rent_pro_23.webp";
import pro24 from "../../assets/images/rent_pro_24.webp";
import pro25 from "../../assets/images/rent_pro_25.webp";
import pro26 from "../../assets/images/rent_pro_26.webp";
import pro27 from "../../assets/images/rent_pro_27.webp";
// import pro28 from '../../assets/images/rent_pro_28.webp'; // Dư thì có thể để dành

// Component hiển thị thẻ sản phẩm (dùng chung)
const ProductCard = ({
  title,
  specs,
  oldPrice,
  newPrice,
  discountTag,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 relative flex flex-col hover:shadow-md transition-shadow h-full">
      {/* Discount Tag */}
      {discountTag && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          {discountTag}
        </span>
      )}
      {/* Heart Icon */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 z-10">
        <IoHeartOutline size={20} />
      </button>

      {/* Image */}
      <div className="h-48 flex items-center justify-center mb-4 p-2">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 min-h-[40px]">
          {title}
        </h3>
        {specs && (
          <p className="text-xs text-gray-500 mb-2 line-clamp-1">{specs}</p>
        )}
      </div>

      {/* Price */}
      <div className="mt-2">
        <p className="text-xs text-gray-400">
          from <span className="line-through">{oldPrice}</span>
        </p>
        <p className="text-sm font-bold text-pink-600">
          {newPrice}
          <span className="text-gray-500 font-normal text-xs">/month</span>
        </p>
      </div>
    </div>
  );
};

// Component Section Title & Banner
const CategorySection = ({
  title,
  description,
  bannerImage,
  products,
  colorClass = "bg-pink-500",
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
          </div>
          <div className="md:w-2/3 flex justify-end">
            {/* Banner Image */}
            <div className="relative w-full max-w-lg h-64 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50">
              <img
                src={bannerImage}
                alt={title}
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <ProductCard key={idx} {...prod} />
          ))}
        </div>

        <div className="mt-8 text-center md:text-right">
          <button
            className={`${colorClass} text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition`}
          >
            Discover{" "}
            {title
              .toLowerCase()
              .replace("gifts for ", "")
              .replace("gifts to ", "")}
          </button>
        </div>
      </div>
    </section>
  );
};

// FAQ Item
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <IoAdd
          className={`transform transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      {isOpen && <p className="mt-2 text-gray-600 text-sm">{answer}</p>}
    </div>
  );
};

const RentNowPage = () => {
  const gamingProducts = [
    {
      title: "Nintendo Switch 2 + Mario Kart Bundle",
      specs: '7" OLED, 64GB storage',
      oldPrice: "€34.90",
      newPrice: "€17.90",
      discountTag: "-48%",
      image: pro4,
    },
    {
      title: "Sony PlayStation 5 Pro Console",
      specs: "4K graphics, 120Hz",
      oldPrice: "€49.90",
      newPrice: "€24.90",
      discountTag: "-50%",
      image: pro5,
    },
    {
      title: "MSI Claw A1M Handheld",
      specs: '7" FHD, 120Hz display',
      oldPrice: "€39.90",
      newPrice: "€19.90",
      discountTag: "-50%",
      image: pro6,
    },
    {
      title: "Sony PlayStation 5 Slim Digital",
      specs: "1TB SSD, 4K 120Hz",
      oldPrice: "€29.90",
      newPrice: "€14.90",
      discountTag: "-50%",
      image: pro7,
    },
  ];

  const movieProducts = [
    {
      title: 'LG 55UR78006LK 55" 4K TV',
      specs: "4K LCD, a5 Gen6 AI",
      oldPrice: "€39.90",
      newPrice: "€22.90",
      discountTag: "-42%",
      image: pro8,
    },
    {
      title: 'LG OLED55B39LA 55"',
      specs: "OLED, 120Hz",
      oldPrice: "€79.90",
      newPrice: "€44.90",
      discountTag: "-43%",
      image: pro9,
    },
    {
      title: "Xgimi Halo+ GTV Projector",
      specs: "Full HD, 900 Lumens",
      oldPrice: "€59.90",
      newPrice: "€31.90",
      discountTag: "-46%",
      image: pro10,
    },
    {
      title: "Samsung Freestyle 2nd Gen",
      specs: "Full HD Projector",
      oldPrice: "€49.90",
      newPrice: "€24.90",
      discountTag: "-50%",
      image: pro11,
    },
  ];

  const creativityProducts = [
    {
      title: "Sony ZV-E10 Mirrorless Camera",
      specs: "16-50mm Lens",
      oldPrice: "€44.90",
      newPrice: "€22.90",
      discountTag: "-49%",
      image: pro12,
    },
    {
      title: "GoPro HERO 12 Black",
      specs: "5.3K60 Video",
      oldPrice: "€24.90",
      newPrice: "€17.90",
      discountTag: "-28%",
      image: pro13,
    },
    {
      title: "Canon EOS R50 Camera Kit",
      specs: "RF-S 18-45mm",
      oldPrice: "€49.90",
      newPrice: "€32.90",
      discountTag: "-34%",
      image: pro14,
    },
    {
      title: "Sony Alpha 7 IV Camera Kit",
      specs: "28-70mm Lens",
      oldPrice: "€149.90",
      newPrice: "€114.90",
      discountTag: "-23%",
      image: pro15,
    },
    {
      title: 'Apple 11" iPad Air (2024)',
      specs: "M2, WiFi, 128GB",
      oldPrice: "€39.90",
      newPrice: "€29.90",
      discountTag: "-25%",
      image: pro16,
    },
    {
      title: "Apple iPad (2022)",
      specs: "WiFi, 64GB",
      oldPrice: "€24.90",
      newPrice: "€17.90",
      discountTag: "-28%",
      image: pro17,
    },
    {
      title: "Apple iPad (2021)",
      specs: "WiFi, 64GB",
      oldPrice: "€19.90",
      newPrice: "€11.90",
      discountTag: "-40%",
      image: pro18,
    },
    {
      title: 'Apple 13" iPad Air (2024)',
      specs: "M2, WiFi, 128GB",
      oldPrice: "€49.90",
      newPrice: "€38.90",
      discountTag: "-22%",
      image: pro19,
    },
  ];

  const athleteProducts = [
    {
      title: "Apple Watch Ultra 2 GPS + Cellular",
      specs: "Titanium Case, 49mm",
      oldPrice: "€49.90",
      newPrice: "€39.90",
      discountTag: "-20%",
      image: pro20,
    },
    {
      title: "Apple Watch Series 9 GPS",
      specs: "Aluminum Case, 45mm",
      oldPrice: "€29.90",
      newPrice: "€21.90",
      discountTag: "-26%",
      image: pro21,
    },
    {
      title: "Apple Watch Ultra 2",
      specs: "Ocean Band, 49mm",
      oldPrice: "€49.90",
      newPrice: "€39.90",
      discountTag: "-20%",
      image: pro22,
    },
    {
      title: "Garmin Fenix 7 Solar",
      specs: "Multisport Smartwatch",
      oldPrice: "€44.90",
      newPrice: "€32.90",
      discountTag: "-26%",
      image: pro23,
    },
    {
      title: "Apple AirPods Max",
      specs: "Active Noise Cancellation",
      oldPrice: "€29.90",
      newPrice: "€26.90",
      discountTag: "-10%",
      image: pro24,
    },
    {
      title: "Apple AirPods Pro 2",
      specs: "USB-C MagSafe Case",
      oldPrice: "€19.90",
      newPrice: "€11.90",
      discountTag: "-40%",
      image: pro25,
    },
    {
      title: "Sonos Arc Ultra",
      specs: "Premium Soundbar",
      oldPrice: "€44.90",
      newPrice: "€37.90",
      discountTag: "-15%",
      image: pro26,
    },
    {
      title: "Sonos Sub 4",
      specs: "Wireless Subwoofer",
      oldPrice: "€39.90",
      newPrice: "€33.90",
      discountTag: "-15%",
      image: pro27,
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Header />

      <main>
        {/* 1. Hero Section */}
        <div className="bg-white pt-8 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            {/* Phần Text bên trái */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Big gifts without the big spend
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Forget the small stuff. Go big with the tech you actually want —
                for a small monthly fee. Oh, and one more thing: Don't forget to
                check our Instagram.
              </p>
            </div>

            {/* Phần Ảnh bên phải - Đã sửa */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src={logo1}
                alt="Big Gifts"
                // Đã xóa: rounded-xl, shadow-lg (để ảnh hòa vào nền)
                // Đã sửa: max-w-lg -> max-w-2xl (để ảnh to hơn)
                className="w-full max-w-2xl h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* 2. Our Best Gift Picks */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Our best gift picks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProductCard
                title="De'Longhi Eletta Explore Coffee Machine"
                specs="LatteCrema Cool System"
                oldPrice="€49.90"
                newPrice="€29.90"
                discountTag="-40%"
                image={pro1}
              />
              <ProductCard
                title="Dreame X40 Ultra Complete Robot"
                specs="12,000Pa Suction"
                oldPrice="€59.90"
                newPrice="€39.90"
                discountTag="-33%"
                image={pro2}
              />
              <ProductCard
                title="Insta360 X4 - Essential Bundle"
                specs="8K 360 Video"
                oldPrice="€39.90"
                newPrice="€24.90"
                discountTag="-30%"
                image={pro3}
              />
            </div>
          </div>
        </section>

        {/* 3. Vouchers Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-8 text-center shadow-sm">
              <p className="text-sm text-gray-500 mb-2">For new Gimo users</p>
              <h3 className="text-4xl font-black text-gray-900 mb-2">FEST50</h3>
              <p className="text-gray-600 text-sm">
                Use the voucher FEST50 to get €50 off your first month as a new
                Grover user.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 text-center shadow-sm">
              <p className="text-sm text-gray-500 mb-2">
                Are you already a Gimo user?
              </p>
              <h3 className="text-4xl font-black text-gray-900 mb-2">APP25</h3>
              <p className="text-gray-600 text-sm">
                Use APP25 code and get 25€ discount for your next rental.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Contest Banner */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <span className="text-2xl mb-2 block">🎁</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Win a full year of free tech!
            </h2>
            <p className="text-gray-600 mb-6">
              This December, you'll have multiple chances to rent a device for
              free for an entire year.
            </p>
            <button className="bg-pink-600 text-white font-bold py-2 px-8 rounded-full hover:bg-pink-700">
              Go to Instagram
            </button>
          </div>
        </section>

        {/* 5. Gifts for Gamers */}
        <CategorySection
          title="Gifts for gamers"
          description="Whether you're the one playing or you're surprising someone else, this gaming gear always hits the mark."
          bannerImage={logo2}
          products={gamingProducts}
          colorClass="bg-[#4C8787]"
        />

        {/* 6. Gifts for Movie Lovers */}
        <CategorySection
          title="Gifts for movie lovers"
          description="Treat yourself or someone else to a new way to enjoy movies at home. TVs, projectors, and soundbars."
          bannerImage={logo3}
          products={movieProducts} // Updated with specific data
          colorClass="bg-[#4C8787]"
        />

        {/* 7. Gifts to Spark Creativity */}
        <CategorySection
          title="Gifts to spark creativity"
          description="Give the gift of creativity. Cameras, iPads, and more to shoot, draw or edit."
          bannerImage={logo4}
          products={creativityProducts} // Updated with specific data (Cameras + Tablets)
          colorClass="bg-[#4C8787]"
        />

        {/* 8. Gifts for Athletes */}
        <CategorySection
          title="Gifts for athletes"
          description="Give someone a boost - or give it to yourself - with a sporty gift. Smartwatches to track progress."
          bannerImage={logo5}
          products={athleteProducts} // Updated with specific data (Watches + Audio)
          colorClass="bg-[#4C8787]"
        />

        {/* 9. FAQ Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently asked questions
            </h2>
            <FaqItem
              question="What condition are the products in?"
              answer="All our products are in excellent condition. We check and clean every device before it is rented out again."
            />
            <FaqItem
              question="When does the rent begin and end?"
              answer="The rental period begins on the day you receive the product. It ends on the day you drop it off at the return station."
            />
            <FaqItem
              question="What if my device gets damaged during the rental period?"
              answer="Don't worry! With Gimo Care, we cover 90% of repair costs for technical defects, display breakage, and water damage."
            />
            <FaqItem
              question="Do I have to worry about signs of use?"
              answer="No, normal signs of use are completely fine. We want you to enjoy the tech!"
            />

            <div className="text-center mt-8">
              <button className="bg-[#5ea5a5] text-white font-bold py-2 px-8 rounded-full hover:bg-[#4C8787]">
                Show all FAQs
              </button>
            </div>
          </div>
        </section>

    
      </main>
      <Footer />
    </div>
  );
};

export default RentNowPage;
