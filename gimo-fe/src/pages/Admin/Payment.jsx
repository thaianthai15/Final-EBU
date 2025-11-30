import React from 'react';
import { 
  FaFilePdf, 
  FaFileExcel, 
  FaCloudDownloadAlt, 
  FaSearch, 
  FaFilter, 
  FaAngleLeft, 
  FaAngleRight 
} from 'react-icons/fa';

// Mock Data (Dữ liệu giả lập thay cho HTML cứng)
const paymentData = [
  { id: 'GM-00124', date: '01/03/2025', total: '2,334,000 VND', deposit: '750,000 VND', remaining: '1,584,000 VND', status: 'Paid', method: 'Momo', refund: 'Refunded' },
  { id: 'GM-65784', date: '21/03/2025', total: '4,500,000 VND', deposit: '2,000,000 VND', remaining: '2,500,000 VND', status: 'Deposit Paid', method: 'Momo', refund: 'Refunded' },
  { id: 'GM-02173', date: '05/07/2025', total: '2,334,000 VND', deposit: '750,000 VND', remaining: '1,584,000 VND', status: 'Deposit Paid', method: 'Momo', refund: 'Refunded' },
  { id: 'GM-10213', date: '20/10/2025', total: '2,334,000 VND', deposit: '750,000 VND', remaining: '1,584,000 VND', status: 'Deposit Paid', method: 'Momo', refund: 'Refunded' },
  { id: 'GM-10096', date: '06/08/2025', total: '2,334,000 VND', deposit: '750,000 VND', remaining: '1,584,000 VND', status: 'Deposit Paid', method: 'Momo', refund: 'Refunded' },
  { id: 'GM-51452', date: '05/05/2025', total: '2,334,000 VND', deposit: '750,000 VND', remaining: '1,584,000 VND', status: 'Paid', method: 'Momo', refund: 'Refunded' },
];

// Helper component cho Status Badge
const StatusBadge = ({ status }) => {
  const styles = {
    'Paid': 'bg-green-100 text-green-700 border border-green-200',
    'Deposit Paid': 'bg-yellow-100 text-yellow-700 border border-yellow-200',
    'Refunded': 'bg-red-50 text-red-600 border border-red-200'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
};

const PaymentsPage = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 min-h-screen">
      
      {/* --- TOP ACTIONS --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Payment Management</h2>
        
        <div className="flex gap-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors" title="Export PDF">
            <FaFilePdf size={18} />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors" title="Export Excel">
            <FaFileExcel size={18} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#4A8D8C] text-white rounded-lg hover:bg-[#3a7574] transition-colors shadow-sm">
            <FaCloudDownloadAlt size={18} />
            <span>Import invoice</span>
          </button>
        </div>
      </div>

      {/* --- CONTROLS BAR (Search & Filter) --- */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
        
        {/* Search */}
        <div className="relative w-full lg:w-1/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search Order ID..." 
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] focus:border-transparent bg-white"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <FaFilter /> Filter
          </button>
          
          <select className="px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] cursor-pointer">
            <option>Status: All</option>
            <option>Status: Paid</option>
            <option>Status: Deposit Paid</option>
          </select>

          <select className="px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] cursor-pointer">
            <option>Method: All</option>
            <option>Momo</option>
            <option>VNPay</option>
            <option>PayPal</option>
            <option>Visa/MasterCard</option>
          </select>
        </div>
      </div>

      {/* --- TABLE --- */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-bold tracking-wider">
            <tr>
              <th className="p-4 w-10">
                <input type="checkbox" className="w-4 h-4 text-[#4A8D8C] rounded focus:ring-[#4A8D8C] cursor-pointer" />
              </th>
              <th className="p-4">Order ID</th>
              <th className="p-4">Date</th>
              <th className="p-4">Total Amount</th>
              <th className="p-4">Deposit Paid</th>
              <th className="p-4">Remaining</th>
              <th className="p-4">Status & Method</th>
              <th className="p-4">Refund Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paymentData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors text-sm text-gray-700">
                <td className="p-4">
                  <input type="checkbox" className="w-4 h-4 text-[#4A8D8C] rounded focus:ring-[#4A8D8C] cursor-pointer" />
                </td>
                <td className="p-4 font-medium text-gray-900">{item.id}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4 font-semibold">{item.total}</td>
                <td className="p-4 text-gray-600">{item.deposit}</td>
                <td className="p-4 text-gray-600">{item.remaining}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <StatusBadge status={item.status} />
                    {/* Placeholder cho Logo Momo */}
                    <div className="w-6 h-6 rounded bg-pink-600 flex items-center justify-center text-white text-[8px] font-bold" title="Momo">
                      Mo
                    </div>
                    {/* Nếu có ảnh thật hãy dùng thẻ img bên dưới:
                    <img src="/assets/images/momo.png" alt="Momo" className="w-6 h-6 object-contain" /> 
                    */}
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 border border-gray-200">
                    {item.refund}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- PAGINATION --- */}
      <div className="flex justify-end items-center mt-6 gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
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

export default PaymentsPage;