import React, { useState, useEffect } from 'react';
import {
  FaFilePdf, FaFileExcel, FaPlusSquare, FaCloudDownloadAlt,
  FaSearch, FaFilter, FaEye, FaPenSquare, FaTrashAlt,
  FaAngleLeft, FaAngleRight, FaTimes
} from 'react-icons/fa';

// Import ảnh mẫu (Giữ nguyên các import ảnh của bạn)
import ad_product_1 from '../../assets/images/iphone_16_mobile-1.webp';
import ad_product_2 from '../../assets/images/iphone_15_desktop-1.webp';
import ad_product_3 from '../../assets/images/smasung_galaxy_mobile.webp';
import ad_product_4 from '../../assets/images/ipad_desktop.webp';
import ad_product_5 from '../../assets/images/top_1.webp';
import ad_product_6 from '../../assets/images/top_7.webp';

const initialData = [
  { id: '001', name: 'iPhone 16 Pro Max - 256GB', price: '1,134,000 VND', category: 'Phone', brand: 'Apple', stock: 12, rentals: 45, status: 'Active', img: ad_product_1 },
  { id: '002', name: 'iPhone 17 Pro - 256GB', price: '2,353,000 VND', category: 'Phone', brand: 'Apple', stock: 3, rentals: 56, status: 'Active', img: ad_product_2 },
  { id: '003', name: 'Samsung Galaxy S25 Ultra - 256 GB', price: '1,825,000 VND', category: 'Phone', brand: 'Samsung', stock: 11, rentals: 21, status: 'Active', img: ad_product_3 },
  { id: '004', name: 'iPad (2025) - Wi-Fi + Cellular', price: '2,030,000 VND', category: 'Tablet', brand: 'Apple', stock: 5, rentals: 35, status: 'Active', img: ad_product_4 },
  { id: '005', name: 'EOS R6 II Camera Kit with RF 24-105mm', price: '3,520,000 VND', category: 'Camera', brand: 'Canon', stock: 7, rentals: 17, status: 'Active', img: ad_product_5 },
  { id: '006', name: 'Airpods Max with USB-C Over-ear', price: '2,334,000 VND', category: 'Audio & Music', brand: 'Apple', stock: 6, rentals: 21, status: 'Active', img: ad_product_6 },
];

const ProductsPage = () => {
  // --- STATE ---
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    id: '', name: '', price: '', category: 'Phone', brand: '', stock: 0, status: 'Active'
  });

  // --- EFFECT: Load data from LocalStorage ---
  useEffect(() => {
    const savedProducts = localStorage.getItem('admin_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialData);
      localStorage.setItem('admin_products', JSON.stringify(initialData));
    }
  }, []);

  // --- CRUD FUNCTIONS ---
  
  const saveToLocal = (data) => {
    localStorage.setItem('admin_products', JSON.stringify(data));
    setProducts(data);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updated = products.filter(p => p.id !== id);
      saveToLocal(updated);
    }
  };

  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      setEditingProduct(null);
      setFormData({ id: Date.now().toString().slice(-3), name: '', price: '', category: 'Phone', brand: '', stock: 0, status: 'Active', rentals: 0, img: ad_product_1 });
    }
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedProducts;
    if (editingProduct) {
      updatedProducts = products.map(p => p.id === editingProduct.id ? formData : p);
    } else {
      updatedProducts = [formData, ...products];
    }
    saveToLocal(updatedProducts);
    setIsModalOpen(false);
  };

  // --- FILTER LOGIC ---
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStockStyle = (stock) => {
    if (stock <= 3) return 'text-red-600 bg-red-100';
    if (stock <= 7) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 min-h-screen font-sans relative">

      {/* --- HEADER ACTIONS --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Products Management</h1>
        <div className="flex gap-3 flex-wrap">
          <button onClick={() => handleOpenModal()} className="flex items-center gap-2 px-4 py-2 bg-[#4A8D8C] text-white rounded-lg hover:bg-[#3a7574] transition-colors shadow-sm font-semibold">
            <FaPlusSquare size={18} />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* --- SEARCH & FILTERS --- */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
        <div className="relative w-full lg:w-1/3">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4A8D8C] outline-none"
          />
        </div>
      </div>

      {/* --- TABLE --- */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-bold tracking-wider">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Product Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Category</th>
              <th className="p-4">Stock</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {filteredProducts.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium">{item.id}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={item.img} alt="" className="w-10 h-10 object-cover rounded bg-gray-100 border" />
                    <span className="font-semibold text-gray-900">{item.name}</span>
                  </div>
                </td>
                <td className="p-4 font-medium text-[#4A8D8C]">{item.price}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${getStockStyle(item.stock)}`}>
                    {item.stock} units
                  </span>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <button onClick={() => handleOpenModal(item)} className="text-yellow-600 hover:scale-110 transition-transform" title="Edit">
                      <FaPenSquare size={20} />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:scale-110 transition-transform" title="Delete">
                      <FaTrashAlt size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MODAL (ADD / EDIT) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            <div className="bg-[#4A8D8C] p-4 text-white flex justify-between items-center">
              <h2 className="text-xl font-bold">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={() => setIsModalOpen(false)}><FaTimes size={20}/></button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Product Name</label>
                <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded focus:border-[#4A8D8C] outline-none" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Monthly Price</label>
                <input required name="price" value={formData.price} onChange={handleInputChange} placeholder="e.g. 1,000,000 VND" className="w-full p-2 border border-gray-300 rounded focus:border-[#4A8D8C] outline-none" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Brand</label>
                <input required name="brand" value={formData.brand} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded focus:border-[#4A8D8C] outline-none" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded focus:border-[#4A8D8C] outline-none">
                  <option>Phone</option>
                  <option>Tablet</option>
                  <option>Camera</option>
                  <option>Audio & Music</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Stock</label>
                <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded focus:border-[#4A8D8C] outline-none" />
              </div>

              <div className="col-span-2 flex gap-3 mt-4">
                <button type="submit" className="flex-1 bg-[#4A8D8C] text-white py-3 rounded-lg font-bold hover:bg-[#3a7574] transition-colors">
                  {editingProduct ? 'Update Product' : 'Create Product'}
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;