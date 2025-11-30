// src/components/RentalDetailsModal.jsx
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaTruck } from 'react-icons/fa';

const RentalDetailsModal = ({ rental, onClose }) => {
  if (!rental) return null;

  return (
    // Backdrop
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Close modal when clicking on the backdrop
    >
      {/* Modal Content */}
      <div 
        className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full relative text-gray-800"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-xl font-bold text-teal-600 mb-6">Rental Details</h2>

        <ul className="space-y-3 text-sm">
          <li><strong>Product:</strong> {rental.product}</li>
          <li><strong>Rental Period:</strong> {rental.rentalPeriod}</li>
          <li><strong>Days Remaining:</strong> <span className="text-yellow-500 font-bold">{rental.daysRemaining} days</span></li>
          <li><strong>Deposit:</strong> {rental.deposit} (refundable)</li>
          <li><strong>Rental Fee:</strong> {rental.rentalFee} / month</li>
          <li><strong>Amount Paid:</strong> {rental.amountPaid} (deposit + shipping)</li>
          <li><strong>Balance Due:</strong> {rental.balanceDue} (collected on delivery)</li>
        </ul>

        <div className="mt-6 pt-4 border-t border-gray-200">
           <h3 className="text-md font-bold text-teal-600 mb-3 flex items-center gap-2">
            <FaTruck />
            Delivery Info
           </h3>
           <ul className="space-y-2 text-sm list-disc list-inside ml-2">
             <li><strong>Delivered on:</strong> {rental.deliveredOn}</li>
             <li><strong>Shipping Provider:</strong> {rental.shippingProvider}</li>
             <li><strong>Tracking ID:</strong> {rental.trackingId}</li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default RentalDetailsModal;