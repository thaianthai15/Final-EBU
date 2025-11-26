import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkCircle, IoAlertCircle } from 'react-icons/io5';
import iphoneImage from '../../assets/images/iphone_cart.png';
import momoLogo from '../../assets/images/momo.png';

const OrderReviewPage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">Review Your Order</h1>
                <p className="text-green-600 font-semibold mt-2">Payment Successful, We Have Sent Invoice To Your Email, Please Check Details Again</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left - Image */}
                    <div className="flex flex-col items-center">
                        <img src={iphoneImage} alt="iPhone Air" className="w-48 h-auto object-contain mb-4"/>
                        <div className="text-center">
                            <h2 className="font-bold">Apple iPhone Air - 256GB - Cloud White</h2>
                            <p className="text-sm text-gray-500">8.5" LTPO OLED | Apple A19 Pro | 5G</p>
                            <p className="text-sm text-gray-500 mt-2">Delivered in: March 3rd – March 5th</p>
                        </div>
                    </div>
                    
                    {/* Right - Details */}
                    <div className="md:col-span-2 space-y-3 text-sm">
                        <p><strong>Rental Period:</strong> 1 Month &nbsp;&nbsp;&nbsp; {new Intl.NumberFormat('vi-VN').format(2334000)} VND/Month</p>
                        <p><strong>01/03/2025 – 31/03/2025</strong></p>
                        <hr className="my-3"/>
                        <p><strong>Name:</strong> Nguyễn Văn Thắng</p>
                        <p><strong>Phone:</strong> 0376533690</p>
                        <p><strong>Email:</strong> Thangbo203@Gmail.Com</p>
                        <p><strong>Delivery Address:</strong> 26A 137, Phùng Khoang Street, Trung Văn, Nam Từ Liêm, Hà Nội</p>
                        <p><strong>ID Verification:</strong> Verified ✅ (CCCD Uploaded)</p>
                        <hr className="my-3"/>
                        <p className="flex items-center gap-2">
                           <strong>Payment Method:</strong> <img src={momoLogo} alt="Momo" className="h-5"/> 
                           <span className="ml-auto text-green-600 font-semibold flex items-center gap-1">Payment successful deposit - 750,000 VND <IoCheckmarkCircle /></span>
                        </p>
                        <p><strong>Amount Due Upon Delivery:</strong> 2,334,000 VND</p>
                        <div className="text-xs text-gray-500 space-y-1 mt-4">
                            <p>ⓘ Deposit will be fully refunded after you return the device in good condition.</p>
                            <p>ⓘ Remaining balance will be collected by the courier upon delivery.</p>
                            <p>ⓘ Your identity verification has been successfully completed.</p>
                        </div>
                         <hr className="my-3"/>
                         <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" defaultChecked className="rounded text-teal-600"/> I Confirm That All Information Is Correct.
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" defaultChecked className="rounded text-teal-600"/> I Agree To The Rental Terms, Refund Policy, And Privacy Policy.
                            </label>
                         </div>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
                <button onClick={() => navigate(-1)} className="px-8 py-3 border border-gray-300 font-semibold rounded-full hover:bg-gray-100">Back</button>
                <button onClick={() => navigate('/checkout/my-rentals')} className="px-8 py-3 border border-gray-300 font-semibold rounded-full hover:bg-gray-100">My Rentals</button>
                <button onClick={() => navigate('/')} className="px-8 py-3 bg-[#4C8787] text-white font-semibold rounded-full hover:bg-teal-700">Home</button>
            </div>
        </div>
    );
};

export default OrderReviewPage;