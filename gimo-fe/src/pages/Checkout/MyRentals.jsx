// src/components/MyRentals.jsx

// SỬA 1: THÊM CÁC IMPORT CÒN THIẾU
import React, { useState } from "react";
import RentalDetailsModal from "./components/RentalDetailsModal"; 
import Footer from "../../components/layout/user/Footer";
import Header from "../../components/layout/user/Header";

// Dữ liệu mock (giữ nguyên)
const activeRentalsData = [
  {
    orderNo: "GM-00124", product: "iPhone Air 256GB", startDate: "01/03/2025", endDate: "31/03/2025", deposit: "750,000 VNĐ", status: "In Rental", rentalPeriod: "March 1 - March 31, 2025", daysRemaining: 22, rentalFee: "2,334,000đ", amountPaid: "750,000đ", balanceDue: "2,334,000đ", deliveredOn: "March 3, 2025", shippingProvider: "GHTK, Nguyen An Thai", trackingId: "GM-00124",
  },
];
const completedRentalsData = [
  {
    orderNo: "GM-03530", product: "Apple Airpods Pro 3", date: "25/01/2025", returnDate: "28/02/2025", refund: "250,000 VNĐ", status: "Completed", rentalPeriod: "January 25 - February 28, 2025", daysRemaining: 0, deposit: "250,000đ", rentalFee: "500,000đ", amountPaid: "750,000đ", balanceDue: "0đ", deliveredOn: "January 25, 2025", shippingProvider: "GHN", trackingId: "GM-03530",
  },
  {
    orderNo: "GM-21304", product: "DJI Osmo Pocket 3", date: "03/10/2024", returnDate: "03/12/2024", refund: "800,000 VNĐ", status: "Completed", rentalPeriod: "October 3 - December 3, 2024", daysRemaining: 0, deposit: "800,000đ", rentalFee: "1,200,000đ", amountPaid: "2,000,000đ", balanceDue: "0đ", deliveredOn: "October 3, 2024", shippingProvider: "GHTK", trackingId: "GM-21304",
  },
];
const cancelledRentalsData = [
  {
    orderNo: "GM-00102", product: "Samsung Galaxy S25 Ultra", startDate: "01/03/2025", endDate: "31/03/2025", deposit: "750,000 VNĐ", status: "Cancelled", rentalPeriod: "N/A", daysRemaining: 0, rentalFee: "N/A", amountPaid: "0đ", balanceDue: "0đ", deliveredOn: "N/A", shippingProvider: "N/A", trackingId: "N/A",
  },
];

const StatusBadge = ({ status }) => {
  const statusStyles = {
    "In Rental": "bg-yellow-400 text-gray-900", // Sửa lại màu chữ cho dễ đọc
    "Completed": "bg-green-500 text-white",
    "Cancelled": "bg-red-500 text-white",
  };
  const badgeClasses = statusStyles[status] || "bg-gray-200 text-gray-800";
  return (
    <span className={`px-4 py-1.5 rounded-full text-xs font-semibold inline-block text-center w-[100px] ${badgeClasses}`}>
      {status}
    </span>
  );
};

const MyRentals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRental, setSelectedRental] = useState(null);

  const handleOpenModal = (rental) => {
    setSelectedRental(rental);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRental(null);
  };

  return (
    <>
      <main className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My rentals</h1>

          {/* Active Rentals Section */}
          <div className="bg-[#F5F7FF] border border-gray-200 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Active Rentals</h2>
            <div>
              {/* SỬA 2: THÊM CÁC TIÊU ĐỀ CỘT CÒN THIẾU */}
              <div className="hidden lg:grid grid-cols-7 gap-6 text-md font-bold pb-4 px-4">
                <div className="col-span-1">Order No.</div>
                <div className="col-span-1">Product</div> {/* Tăng span để rộng hơn */}
                <div className="col-span-1">Start Date</div>
                <div className="col-span-1">End Date</div>
                <div className="col-span-1">Deposit</div>
                <div className="col-span-1">Status</div>
              </div>
              {activeRentalsData.map((rental) => (
                <div key={rental.orderNo} className="grid grid-cols-1 lg:grid-cols-7 gap-y-4 gap-x-6 items-center py-4 px-4">
                  <div className="lg:col-span-1 text-sm text-gray-800 font-medium">{rental.orderNo}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.product}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.startDate}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.endDate}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.deposit}</div>
                  <div className="lg:col-span-1"><StatusBadge status={rental.status} /></div>
                  <div>
                    <button onClick={() => handleOpenModal(rental)} className="text-sm font-medium underline text-gray-700 hover:text-black">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Rentals Section */}
          <div className="bg-[#F5F7FF] border border-gray-200 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Completed Rentals</h2>
            <div>
              {/* SỬA 2: THÊM CÁC TIÊU ĐỀ CỘT CÒN THIẾU */}
              <div className="hidden lg:grid grid-cols-7 gap-6 text-md font-bold pb-4 px-4">
                <div className="col-span-1">Order No.</div>
                <div className="col-span-1">Product</div> {/* Tăng span */}
                <div className="col-span-1">Date</div>
                <div className="col-span-1">Return Date</div>
                <div className="col-span-1">Refund</div>
                <div className="col-span-1">Status</div>
              </div>
              {completedRentalsData.map((rental, index) => (
                // SỬA 4: THÊM LẠI ĐƯỜNG KẺ PHÂN CÁCH
                <div key={rental.orderNo} className={`grid grid-cols-1 lg:grid-cols-7 gap-y-4 gap-x-6 items-center py-4 px-4 ${index > 0 ? "" : ""}`}>
                  <div className="lg:col-span-1 text-sm text-gray-800 font-medium">{rental.orderNo}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.product}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.date}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.returnDate}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.refund}</div>
                  <div className="lg:col-span-1"><StatusBadge status={rental.status} /></div>
                  <div>
                    <button onClick={() => handleOpenModal(rental)} className="text-sm font-medium underline text-gray-700 hover:text-black">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cancelled Section */}
          <div className="bg-[#F5F7FF] border border-gray-200 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Active Rentals</h2>
            <div>
              {/* SỬA 2: THÊM CÁC TIÊU ĐỀ CỘT CÒN THIẾU */}
              <div className="hidden lg:grid grid-cols-7 gap-6 text-md font-bold pb-4 px-4">
                <div className="col-span-1">Order No.</div>
                <div className="col-span-1">Product</div> {/* Tăng span */}
                <div className="col-span-1">Start Date</div>
                <div className="col-span-1">End Date</div>
                <div className="col-span-1">Deposit</div>
                <div className="col-span-1">Status</div>
              </div>
              {cancelledRentalsData.map((rental) => (
                <div key={rental.orderNo} className="grid grid-cols-1 lg:grid-cols-7 gap-y-4 gap-x-6 items-center py-4 px-4">
                  <div className="lg:col-span-1 text-sm text-gray-800 font-medium">{rental.orderNo}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.product}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.startDate}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.endDate}</div>
                  <div className="lg:col-span-1 text-sm text-gray-800">{rental.deposit}</div>
                  <div className="lg:col-span-1"><StatusBadge status={rental.status} /></div>
                  <div>
                    {/* SỬA 3: SỬA THẺ 'a' THÀNH 'button' */}
                    <button onClick={() => handleOpenModal(rental)} className="text-sm font-medium underline text-gray-700 hover:text-black">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {isModalOpen && <RentalDetailsModal rental={selectedRental} onClose={handleCloseModal} />}
    </>
  );
};

export default MyRentals;