import React, { useState, useEffect } from 'react';
import { 
  IoSearchOutline, 
  IoFilterOutline, 
  IoEyeOutline, 
  IoCloseOutline, 
  IoPrintOutline, 
  IoCheckmarkDoneCircleOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoCalendarOutline
} from "react-icons/io5";
import { FaTruckLoading } from "react-icons/fa";

// Dữ liệu giả lập
const mockOrders = [
  { 
    orderCode: 'GM-00124', 
    userName: 'Nguyen Van Thang', 
    phoneNumber: '0376533590', 
    email: 'thang.nv@gmail.com',
    address: '123 Le Loi, District 1, HCM City',
    product: 'iPhone Air 2', 
    rentalPeriod: '01/03 - 31/03/2025', 
    rentalStatus: 'In Rental', 
    paymentStatus: 'Deposit Only',
    totalAmount: '2,500,000 VND',
    deposit: '500,000 VND',
    orderDate: '25/02/2025'
  },
  { orderCode: 'GM-22512', userName: 'Nguyen Van Hoang', phoneNumber: '0387690331', product: 'Nintendo Switch 2', rentalPeriod: '01/02 - 28/02/2025', rentalStatus: 'Shipping', paymentStatus: 'Deposit Only', totalAmount: '1,200,000 VND', deposit: '300,000 VND', orderDate: '28/01/2025' },
  { orderCode: 'GM-03204', userName: 'Nguyen Minh Anh', phoneNumber: '0385201625', product: 'Playstation 5 Pro', rentalPeriod: '05/01 - 05/02/2025', rentalStatus: 'Shipping', paymentStatus: 'Paid', totalAmount: '3,000,000 VND', deposit: '0 VND', orderDate: '01/01/2025' },
];

const getStatusClasses = (status) => {
  switch (status) {
    case 'Delivered': return 'bg-green-100 text-green-800';
    case 'Shipping': return 'bg-teal-100 text-teal-800';
    case 'Returned': return 'bg-blue-100 text-blue-800';
    case 'In Rental': return 'bg-yellow-100 text-yellow-800';
    case 'Pending Return': return 'bg-gray-200 text-gray-800';
    case 'Cancelled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 font-sans min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Orders Management</h1>

      {/* Search & Filter */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="relative flex-1 max-w-md">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4A8D8C] outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
          <IoFilterOutline className="mr-2" /> Filter
        </button>
      </div>

      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-4">Order Code</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {mockOrders.map((order) => (
              <tr key={order.orderCode} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#4A8D8C]">{order.orderCode}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{order.userName}</div>
                  <div className="text-xs text-gray-400">{order.phoneNumber}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase ${getStatusClasses(order.rentalStatus)}`}>
                    {order.rentalStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button 
                    onClick={() => handleViewDetails(order)}
                    className="inline-flex items-center text-[#4A8D8C] hover:text-teal-700 font-bold text-xs gap-1"
                  >
                    <IoEyeOutline size={16} />
                    DETAILS
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MODAL VIEW DETAILS --- */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          
          {/* Modal Box */}
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in duration-200">
            
            {/* Header */}
            <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Order #{selectedOrder.orderCode}</h2>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <IoCalendarOutline /> Placed on {selectedOrder.orderDate}
                </p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full">
                <IoCloseOutline size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cột 1 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Customer</h3>
                    <p className="font-bold text-gray-800">{selectedOrder.userName}</p>
                    <p className="text-sm text-gray-600">{selectedOrder.phoneNumber}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{selectedOrder.address}</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Rental Status</h3>
                    <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase ${getStatusClasses(selectedOrder.rentalStatus)}`}>
                      {selectedOrder.rentalStatus}
                    </span>
                  </div>
                </div>

                {/* Cột 2 */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Product:</span>
                      <span className="font-semibold text-gray-900">{selectedOrder.product}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Period:</span>
                      <span className="font-medium">{selectedOrder.rentalPeriod}</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-bold text-[#4A8D8C]">
                      <span>Total:</span>
                      <span>{selectedOrder.totalAmount}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Demo */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-[#4A8D8C] text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#3a7170]">
                  <IoCheckmarkDoneCircleOutline size={20} /> Update Status
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                  <IoPrintOutline size={20} /> Print
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-gray-50 text-right">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-bold text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;