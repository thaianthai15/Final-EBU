import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iphoneImage from '../../assets/images/iphone_cart.png';
import visaLogo from '../../assets/images/visa.png';
import mastercardLogo from '../../assets/images/mastercard.png';
import momoLogo from '../../assets/images/momo.png';
import vnpayLogo from '../../assets/images/vnpay.png';
import paypalLogo from '../../assets/images/paypal.png';

const PaymentMethodPage = () => {
    const navigate = useNavigate();
    const [paymentOption, setPaymentOption] = useState('deposit'); // 'deposit' or 'total'

    const handleContinue = () => {
        // TODO: Handle payment processing logic
        navigate('/checkout/review');
    };

    const formatCurrency = (number) => new Intl.NumberFormat('vi-VN').format(number) + ' VND';

    return (
        <div className="bg-white rounded-xl p-8 shadow-sm max-w-3xl mx-auto">
            {/* Delivery Address */}
            <div className="border-b pb-4 mb-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Delivery address</h2>
                    <button onClick={() => navigate('/checkout/shipping-address')} className="text-sm font-semibold text-yellow-600 hover:underline">Change</button>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                    <p>Nguyễn Văn Thắng (+84) 37 653 3690</p>
                    <p>26A 137, Phùng Khoang Street, Trung Văn, Nam Từ Liêm, Hà Nội</p>
                </div>
            </div>

            {/* Your Order */}
            <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 mb-6">
                <img src={iphoneImage} alt="iPhone Air" className="w-16 h-auto object-contain" />
                <div>
                    <h3 className="font-bold">Apple iPhone Air – 256GB, Cloud White</h3>
                    <p className="text-sm text-gray-500">6.5" LTPO Super Retina XDR OLED, Rear Camera, 8GB RAM...</p>
                    <p className="text-sm font-semibold text-gray-700 mt-1">{formatCurrency(2334000)}/Month</p>
                </div>
            </div>
            
            {/* Voucher */}
            <div className="mb-6">
                 <label className="block text-sm font-medium text-gray-700 mb-1">Voucher</label>
                 <div className="flex gap-2">
                     <input type="text" placeholder="Voucher Code" className="flex-grow p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                     <button className="bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-300">Apply</button>
                 </div>
            </div>

            {/* Price Summary */}
            <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between text-gray-600"><span>Monthly Price:</span><span>{formatCurrency(2334000)}</span></div>
                <div className="flex justify-between text-gray-600"><span>Deposit (30%):</span><span>{formatCurrency(700000)}</span></div>
                <div className="flex justify-between text-gray-600"><span>Shipping Fee:</span><span>{formatCurrency(50000)}</span></div>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg my-4">
                <span>Total Payment:</span><span>{formatCurrency(750000)}</span>
            </div>
             <div className="text-lg font-bold text-[#4C8787] mb-6">
                Amount Due Upon Delivery: {formatCurrency(2334000)} <span className="font-normal text-sm text-gray-600">(1-month Rental Fee)</span>
             </div>

            {/* Payment Options */}
            <div className="flex gap-4 mb-6">
                <button 
                    onClick={() => setPaymentOption('deposit')}
                    className={`flex-1 font-semibold py-3 rounded-full border-2 ${paymentOption === 'deposit' ? 'border-teal-600 bg-teal-50 text-teal-700' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                >
                    Pay Deposit Only – {formatCurrency(750000)}
                </button>
                 <button 
                    onClick={() => setPaymentOption('total')}
                    className={`flex-1 font-semibold py-3 rounded-full border-2 ${paymentOption === 'total' ? 'border-teal-600 bg-teal-50 text-teal-700' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                >
                    Pay Total
                </button>
            </div>
            <p className="text-xs text-center text-gray-500 mb-6">
                ⓘ Remaining Balance (2,334,000 VND) Will Be Collected Upon Delivery. <br/>
                ⓘ Deposit is 100% Refundable After The Rental Period.
            </p>

            {/* Select Payment Method */}
             <div className="mb-6">
                <h3 className="font-bold mb-3">Select Payment Method</h3>
                <div className="flex items-center justify-center flex-wrap gap-4 p-4 border rounded-lg">
                    <img src={mastercardLogo} alt="Mastercard" className="h-6 cursor-pointer"/>
                    <img src={visaLogo} alt="Visa" className="h-6 cursor-pointer"/>
                    <img src={momoLogo} alt="Momo" className="h-6 cursor-pointer"/>
                    <img src={vnpayLogo} alt="VNPAY" className="h-6 cursor-pointer"/>
                    <img src={paypalLogo} alt="PayPal" className="h-6 cursor-pointer"/>
                </div>
             </div>

            <button 
                onClick={handleContinue}
                className="w-full bg-[#4C8787] text-white font-semibold py-3 rounded-full hover:bg-teal-700 transition-colors"
            >
                Continue
            </button>
        </div>
    );
};

export default PaymentMethodPage;