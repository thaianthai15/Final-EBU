// src/components/Sidebar.jsx
import React from "react";
// Không cần các icon category ở đây nữa vì chúng ta sẽ dùng danh sách text
// IoChevronForward không được dùng trong ảnh mẫu của sidebar, nên có thể bỏ
// Các icon khác cũng không có trong sidebar lọc, có thể bỏ
// Chỉ giữ IoChevronForward nếu bạn muốn dùng cho các mục "Show all" hoặc các nút navigation khác

const Sidebar = ({
  // Props mới để cấu hình sidebar
  title = "All products", // Tiêu đề lớn nhất, ví dụ "All products"
  activeCategory,       // Danh mục chính đang được chọn, ví dụ "All Phones & Tablets"
  subCategories = [],   // Danh sách các danh mục con, ví dụ: [{name: "Smartphones"}, {name: "Tablets"}]
  
  rentDurations = ["1 month", "3 months", "6 months", "12 months", "18 months", "24 months"], // Mặc định nếu không truyền
  defaultRentDuration = "6 months", // Thời gian thuê mặc định được active

  sortOptions = ["Most popular", "Price (high to low)", "Price (low to high)", "New arrivals"], // Tùy chọn sắp xếp
  
  minPrice = 2,         // Giá trị min cho thanh trượt giá
  maxPrice = 290,         // Giá trị max cho thanh trượt giá
  defaultPriceRange = 290, // Giá trị mặc định của thanh trượt

  brands = [],          // Danh sách các nhãn hiệu, ví dụ: [{name: "Apple", count: 94}]
  hideDealsFilter = false, // Ẩn/hiện bộ lọc Deals
}) => {
  return (
    <aside className="w-64 flex-shrink-0 pr-8">
      {/* 1. Main Filter Categories */}
      <div className="mb-8">
        <h3 className="font-bold text-sm text-gray-900 mb-3">{title}</h3> {/* "All products" */}
        <ul className="bg-gray-50 rounded-lg p-3 space-y-2">
          {/* Active Category */}
          <li className="font-semibold text-gray-900 bg-white p-2 rounded-md shadow-sm">
            {activeCategory}
          </li>
          {/* Sub-categories */}
          {subCategories.map((cat, index) => (
            <li key={index}>
              <a href="#" className="block py-2 pl-2 text-gray-700 hover:text-black text-sm">
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Rent For */}
      <div className="mb-8">
        <h3 className="font-bold text-sm text-gray-900 mb-3">RENT FOR <span className="text-gray-400 text-xs">ⓘ</span></h3>
        <div className="grid grid-cols-2 gap-2">
          {rentDurations.map((duration) => (
            <button
              key={duration}
              className={`text-sm border rounded-md py-1.5 ${
                duration === defaultRentDuration
                  ? "bg-black text-white"
                  : "border-gray-300 text-gray-700 hover:border-black hover:text-black"
              } transition-colors`}
            >
              {duration}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Sort By */}
      <div className="mb-8">
        <h3 className="font-bold text-sm text-gray-900 mb-3">SORT BY</h3>
        <div className="space-y-2">
          {sortOptions.map((option, index) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="sort"
                className="form-radio text-black focus:ring-black h-4 w-4" // Tailwind form plugin styling
                defaultChecked={index === 0} // Mặc định chọn "Most popular"
              />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 4. Monthly Price */}
      <div className="mb-8">
        <h3 className="font-bold text-sm text-gray-900 mb-3">MONTHLY PRICE</h3>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          defaultValue={defaultPriceRange}
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm accent-black"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>€{minPrice}</span>
          <span>€{maxPrice}</span>
        </div>
      </div>

      {/* 5. Deals */}
      {!hideDealsFilter && (
        <div className="mb-8">
          <h3 className="font-bold text-sm text-gray-900 mb-3">DEALS</h3>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox rounded text-black focus:ring-black h-4 w-4"
            />
            <span className="text-sm text-gray-700">Deals</span>
          </label>
        </div>
      )}

      {/* 6. Brands */}
      <div>
        <h3 className="font-bold text-sm text-gray-900 mb-3">BRANDS</h3>
        <div className="space-y-2">
          {brands.map((brand, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox rounded text-black focus:ring-black h-4 w-4"
              />
              <span className="text-sm text-gray-700">{brand.name} ({brand.count})</span>
            </label>
          ))}
        </div>
        <a href="#" className="text-sm font-semibold hover:underline mt-2 inline-block text-gray-700">
          Show all brands
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;