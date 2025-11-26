// src/pages/Admin/OrdersPage.js

import React, { useState, useEffect } from 'react';
import { FunnelIcon, MagnifyingGlassIcon, EyeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Dữ liệu giả lập cho bảng đơn hàng
const mockOrders = [
  { orderCode: 'GM-00124', userName: 'Nguyen Van Thang', phoneNumber: '0376533590', product: 'iPhone Air 2', rentalPeriod: '01/03 - 31/03/2025', rentalStatus: 'In Rental', paymentStatus: 'Deposit Only' },
  { orderCode: 'GM-22512', userName: 'Nguyen Van Hoang', phoneNumber: '0387690331', product: 'Nintendo Switch 2', rentalPeriod: '01/02 - 31/02/2025', rentalStatus: 'Shipping', paymentStatus: 'Deposit Only' },
  { orderCode: 'GM-03204', userName: 'Nguyen Minh Anh', phoneNumber: '0385201625', product: 'Playstation 5 Pro', rentalPeriod: '05/01 - 05/02/2025', rentalStatus: 'Shipping', paymentStatus: 'Paid' },
  { orderCode: 'GM-65784', userName: 'Nguyen Anh Duc', phoneNumber: '0328749236', product: 'DJI Osmo Pocket 3', rentalPeriod: '10/11 - 10/12/2024', rentalStatus: 'Delivered', paymentStatus: 'Paid' },
  { orderCode: 'GM-10360', userName: 'Tran Kim Oanh', phoneNumber: '0376532810', product: 'Gopro HERO 11', rentalPeriod: '20/10 - 20/12/2024', rentalStatus: 'Pending Return', paymentStatus: 'Deposit Only' },
  { orderCode: 'GM-09014', userName: 'Ha Nho Linh', phoneNumber: '0392995454', product: 'iPhone 17 Pro - 256GB', rentalPeriod: '05/09 - 05/10/2024', rentalStatus: 'Returned', paymentStatus: 'Deposit Only' },
  { orderCode: 'GM-56039', userName: 'Nguyen Van Minh', phoneNumber: '0393084512', product: 'iPad Air (2025)', rentalPeriod: '21/07 - 21/10/2025', rentalStatus: 'In Rental', paymentStatus: 'Deposit Only' },
  { orderCode: 'GM-58299', userName: 'Bui Thai Bao', phoneNumber: '0325590357', product: 'Galaxy Tab S10 FE', rentalPeriod: '15/07 - 15/12/2025', rentalStatus: 'Cancelled', paymentStatus: 'Deposit Only' },
];

// Helper function để lấy class màu cho từng trạng thái
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
  // State để lưu trữ giá trị của các bộ lọc
  const [selectedRentalState, setSelectedRentalState] = useState('All');
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // State để lưu danh sách đơn hàng đã được lọc để hiển thị
  const [filteredOrders, setFilteredOrders] = useState(mockOrders);

  // Mảng các tùy chọn cho bộ lọc
  const rentalStateOptions = ['All', 'In Rental', 'Shipping', 'Delivered', 'Pending Return', 'Returned', 'Cancelled'];
  const paymentStatusOptions = ['All', 'Paid', 'Deposit Only'];

  // Sử dụng useEffect để lọc lại danh sách đơn hàng mỗi khi bộ lọc hoặc ô tìm kiếm thay đổi
  useEffect(() => {
    let result = mockOrders;

    // Lọc theo Rental State
    if (selectedRentalState !== 'All') {
      result = result.filter(order => order.rentalStatus === selectedRentalState);
    }

    // Lọc theo Payment Status
    if (selectedPaymentStatus !== 'All') {
      result = result.filter(order => order.paymentStatus === selectedPaymentStatus);
    }
    
    // Lọc theo từ khóa tìm kiếm (tên, sđt, mã đơn hàng)
    if (searchQuery) {
        result = result.filter(order =>
            order.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.phoneNumber.includes(searchQuery) ||
            order.orderCode.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    setFilteredOrders(result);
  }, [selectedRentalState, selectedPaymentStatus, searchQuery]); // Phụ thuộc vào các state này

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Header: Search và Filters */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="relative w-full sm:w-auto">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, phone, code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A8D8C]"
          />
        </div>
        <div className="flex items-center flex-wrap gap-4">
          <button className="flex items-center px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
            <FunnelIcon className="h-5 w-5 mr-2" />
            Filter
          </button>
          
          {/* ----- BỘ LỌC RENTAL STATE ----- */}
          <select
            value={selectedRentalState}
            onChange={(e) => setSelectedRentalState(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A8D8C]"
          >
            <option value="All" disabled>Rental State: All</option>
            {rentalStateOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          {/* ----- BỘ LỌC PAYMENT STATUS ----- */}
          <select
            value={selectedPaymentStatus}
            onChange={(e) => setSelectedPaymentStatus(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A8D8C]"
          >
             <option value="All" disabled>Payment status: All</option>
            {paymentStatusOptions.map(option => (
              <option key={option} value={option}>{option === 'Paid' ? 'Paid (All)' : option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Bảng dữ liệu Orders */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* ... thead giữ nguyên ... */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rental Period</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rental Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.orderCode} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.orderCode}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.userName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.phoneNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.rentalPeriod}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(order.rentalStatus)}`}>
                      {order.rentalStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.paymentStatus}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="flex items-center text-gray-600 hover:text-[#4A8D8C]">
                      <EyeIcon className="h-5 w-5 mr-1" />
                      View details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-10 text-gray-500">
                  No orders found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (giữ nguyên) */}
      <div className="flex items-center justify-end mt-6">
        {/* ... */}
      </div>
    </div>
  );
};

export default OrdersPage;