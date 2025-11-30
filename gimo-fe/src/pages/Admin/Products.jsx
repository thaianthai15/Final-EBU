import React from 'react';
import { 
  FaFilePdf, 
  FaFileExcel, 
  FaPlusSquare, 
  FaCloudDownloadAlt, 
  FaSearch, 
  FaFilter, 
  FaEye, 
  FaPenSquare, 
  FaTrashAlt, 
  FaAngleLeft, 
  FaAngleRight 
} from 'react-icons/fa';

// Mock Data
const productData = [
  { id: '001', name: 'iPhone 16 Pro Max - 256GB', price: '1,134,000 VND', category: 'Phone', brand: 'Apple', stock: 12, rentals: 45, status: 'Active', img: 'https://via.placeholder.com/40' },
  { id: '002', name: 'iPhone 17 Pro - 256GB', price: '2,353,000 VND', category: 'Phone', brand: 'Apple', stock: 3, rentals: 56, status: 'Active', img: 'https://via.placeholder.com/40' },
  { id: '003', name: 'Samsung Galaxy S25 Ultra - 256 GB', price: '1,825,000 VND', category: 'Phone', brand: 'Samsung', stock: 11, rentals: 21, status: 'Active', img: 'https://via.placeholder.com/40' },
  { id: '004', name: 'iPad (2025) - Wi-Fi + Cellular', price: '2,030,000 VND', category: 'Tablet', brand: 'Apple', stock: 5, rentals: 35, status: 'Active', img: 'https://via.placeholder.com/40' },
  { id: '005', name: 'EOS R6 II Camera Kit with RF 24-105mm', price: '3,520,000 VND', category: 'Camera', brand: 'Canon', stock: 7, rentals: 17, status: 'Active', img: 'https://via.placeholder.com/40' },
  { id: '006', name: 'Airpods Max with USB-C Over-ear', price: '2,334,000 VND', category: 'Audio & Music', brand: 'Apple', stock: 6, rentals: 21, status: 'Active', img: 'https://via.placeholder.com/40' },
];

// Helper để style Stock
const getStockStyle = (stock) => {
  if (stock <= 3) return 'text-red-600 bg-red-100'; // Danger
  if (stock <= 7) return 'text-yellow-600 bg-yellow-100'; // Low
  return 'text-green-600 bg-green-100'; // High
};

const ProductsPage = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 min-h-screen font-sans">
      
      {/* --- HEADER ACTIONS --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        
        <div className="flex gap-3 flex-wrap">
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors" title="Export PDF">
            <FaFilePdf size={18} />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors" title="Export Excel">
            <FaFileExcel size={18} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#4A8D8C] text-white rounded-lg hover:bg-[#3a7574] transition-colors shadow-sm">
            <FaPlusSquare size={18} />
            <span>Add Product</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#4A8D8C] text-[#4A8D8C] rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <FaCloudDownloadAlt size={18} />
            <span>Import Product</span>
          </button>
        </div>
      </div>

      {/* --- CONTROLS BAR --- */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
        
        {/* Search */}
        <div className="relative w-full lg:w-1/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search Product..." 
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] bg-white"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <FaFilter /> Filter
          </button>
          
          <select className="px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] cursor-pointer">
            <option>Category: All</option>
            <option>Phones</option>
            <option>Tablets</option>
            <option>Game & VR</option>
            <option>Cameras</option>
            <option>Computers</option>
          </select>

          <select className="px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] cursor-pointer">
            <option>Brand: All</option>
            <option>Apple</option>
            <option>Canon</option>
            <option>Samsung</option>
            <option>Dell</option>
          </select>

          <select className="px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] cursor-pointer">
            <option>Status: Active</option>
            <option>Status: Inactive</option>
          </select>
        </div>
      </div>

      {/* --- TABLE --- */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-bold tracking-wider">
            <tr>
              <th className="p-4 w-10">
                <input type="checkbox" className="w-4 h-4 text-[#4A8D8C] rounded focus:ring-[#4A8D8C] cursor-pointer" />
              </th>
              <th className="p-4">ID</th>
              <th className="p-4">Product Name</th>
              <th className="p-4">Monthly Price</th>
              <th className="p-4">Category</th>
              <th className="p-4">Brand</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Rentals</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {productData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <input type="checkbox" className="w-4 h-4 text-[#4A8D8C] rounded focus:ring-[#4A8D8C] cursor-pointer" />
                </td>
                <td className="p-4 font-medium">{item.id}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.img} // Thay bằng đường dẫn ảnh thật
                      alt={item.name} 
                      className="w-10 h-10 object-cover rounded bg-gray-100 border border-gray-200"
                    />
                    <span className="font-semibold text-gray-900">{item.name}</span>
                  </div>
                </td>
                <td className="p-4 font-medium">{item.price}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">{item.brand}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${getStockStyle(item.stock)}`}>
                    {item.stock} units
                  </span>
                </td>
                <td className="p-4">{item.rentals} rentals</td>
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700 border border-green-200 mr-2">
                      {item.status}
                    </span>
                    <button className="text-gray-500 hover:text-blue-600 transition-colors" title="View">
                      <FaEye size={16} />
                    </button>
                    <button className="text-gray-500 hover:text-yellow-600 transition-colors" title="Edit">
                      <FaPenSquare size={16} />
                    </button>
                    <button className="text-gray-500 hover:text-red-600 transition-colors" title="Delete">
                      <FaTrashAlt size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- PAGINATION --- */}
      <div className="flex justify-end items-center mt-6 gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50">
          <FaAngleLeft />
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#4A8D8C] text-white font-medium shadow-md">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          4
        </button>
        <span className="w-8 h-8 flex items-center justify-center text-gray-500">...</span>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          15
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          <FaAngleRight />
        </button>
      </div>

    </div>
  );
};

export default ProductsPage;