import React from 'react';
import Header from '../../components/layout/user/Header';
import Footer from '../../components/layout/user/Footer';
import TimelineStep from './components/TimelineStep';

// Icons
import { LuTruck } from 'react-icons/lu';
import { FiEye } from 'react-icons/fi';

// Image (sử dụng lại ảnh từ các yêu cầu trước)
import iphoneImage from '../../assets/images/iphone_cart.png';

const OrderTrackingPage = () => {
    // Dữ liệu mẫu, sau này bạn sẽ lấy từ API
    const orderDetails = {
        orderNo: 'GM-00124',
        orderDate: '01/03/2025',
        product: {
            name: 'iPhone Air 256GB, Cloud White',
            image: iphoneImage,
        },
        rentalPeriod: '01/03 – 31/03/2025',
        totalAmount: 2334000,
        deposit: 750000,
        estimatedDelivery: '03-04/2025'
    };

    const timelineSteps = [
        { id: 1, title: 'Order successful', description: '01/03/2025', status: 'completed' },
        { id: 2, title: 'Processing', description: 'You will receive the goods soon', status: 'completed' },
        { id: 3, title: 'Shipping', description: 'Being delivered by the carrier', status: 'completed' },
        { id: 4, title: 'Delivered', description: '03/03/2025 and The remaining amount has been paid.', status: 'completed' },
        { id: 5, title: 'Start calculating rental time', description: 'From March 3 to April 4, 2025', status: 'completed' },
        { id: 6, title: 'Refunding Deposit', description: 'The refund will be processed within 7 days after the item is returned', status: 'pending' },
        { id: 7, title: 'Refunded', description: 'Refunded your deposit of 750,000 VND', status: 'pending' },
        { id: 8, title: 'Due date', description: 'Your lease will rent on April 3, 2025', status: 'pending' },
    ];
    
    // Hàm định dạng tiền tệ
    const formatCurrency = (number) => new Intl.NumberFormat('vi-VN').format(number) + ' VND';

    return (
        <div className="bg-[#F0F4F8] min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                    {/* Order Summary */}
                    <div className="mb-6">
                        <div className="grid grid-cols-5 gap-4 text-xs text-gray-500 uppercase pb-2 border-b">
                            <div>Order No</div>
                            <div>Order Date</div>
                            <div className="col-span-1">Product</div>
                            <div>Rental Period</div>
                            <div>Total Amount:</div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 items-center pt-4 text-sm font-medium">
                            <div>{orderDetails.orderNo}</div>
                            <div>{orderDetails.orderDate}</div>
                            <div className="col-span-1 flex items-center gap-3">
                                <img src={orderDetails.product.image} alt={orderDetails.product.name} className="w-10 h-10 object-contain" />
                                <span>{orderDetails.product.name}</span>
                            </div>
                            <div>{orderDetails.rentalPeriod}</div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold">{formatCurrency(orderDetails.totalAmount)}</p>
                                    <p className="text-xs text-gray-500">(Deposit Only: {formatCurrency(orderDetails.deposit)})</p>
                                </div>
                                <a href="#" className="flex items-center gap-1 text-teal-600 hover:underline text-xs font-semibold">
                                    <FiEye /> View details
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-end mb-8">
                        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-300">
                            Cancel Order
                        </button>
                    </div>

                    {/* Order Status & Progress Bar */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                            <LuTruck className="w-6 h-6 text-gray-600" />
                            <h2 className="text-lg font-bold">
                                Order status: <span className="text-gray-600 font-medium">Estimated Delivery Date: {orderDetails.estimatedDelivery}</span>
                            </h2>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="pl-4">
                        {timelineSteps.map((step, index) => (
                            <TimelineStep
                                key={step.id}
                                title={step.title}
                                description={step.description}
                                status={step.status}
                                isLast={index === timelineSteps.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default OrderTrackingPage;