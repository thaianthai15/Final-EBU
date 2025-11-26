import React from 'react';
import iphoneImage from '../../../assets/images/iphone_cart.png';
import visaLogo from '../../../assets/images/visa.png';
import mastercardLogo from '../../../assets/images/mastercard.png';
import momoLogo from '../../../assets/images/momo.png';
import vnpayLogo from '../../../assets/images/vnpay.png';
import paypalLogo from '../../../assets/images/paypal.png';
import { IoBusinessOutline } from 'react-icons/io5';

const OrderSummary = ({ onEdit }) => {
  const formatCurrency = (number) => new Intl.NumberFormat('vi-VN').format(number) + ' VND';

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm w-full lg:max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Order</h2>
        {onEdit && (
          <button onClick={onEdit} className="text-sm font-semibold text-yellow-600 hover:underline">
            Edit
          </button>
        )}
      </div>

      <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4">
        <img src={iphoneImage} alt="iPhone Air" className="w-16 h-auto object-contain" />
        <div>
          <h3 className="font-bold text-sm">Apple iPhone Air – 256GB, Cloud White</h3>
          <p className="text-sm text-gray-600 mt-1">{formatCurrency(2334000)}/Month</p>
        </div>
      </div>

      <div className="space-y-3 text-sm mt-6">
        <div className="flex justify-between text-gray-600">
          <span>Monthly Price:</span>
          <span className="font-semibold text-gray-800">{formatCurrency(2334000)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Deposit (30%):</span>
          <span className="font-semibold text-gray-800">{formatCurrency(700000)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping Fee:</span>
          <span className="font-semibold text-gray-800">{formatCurrency(50000)}</span>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between font-bold text-lg">
        <span>Total:</span>
        <span className="text-[#4C8787]">{formatCurrency(3084000)}</span>
      </div>

      <div className="border border-gray-200 rounded-lg p-4 mt-6">
        <div className="flex items-start gap-3">
          <IoBusinessOutline className="w-6 h-6 text-gray-500 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Deposit 30%. Small, secure payments</p>
            <div className="flex items-center flex-wrap gap-3 mt-3">
              <img src={mastercardLogo} alt="Mastercard" className="h-4" />
              <img src={visaLogo} alt="Visa" className="h-4" />
              <img src={momoLogo} alt="Momo" className="h-4" />
              <img src={vnpayLogo} alt="VNPAY" className="h-4" />
              <img src={paypalLogo} alt="PayPal" className="h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;