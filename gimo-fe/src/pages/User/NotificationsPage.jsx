import React from 'react';
import Header from '../../components/layout/user/Header';
import Footer from '../../components/layout/user/Footer';

// Import icons
import { 
    IoCheckmarkCircle, 
    IoWalletOutline, 
    IoWarningOutline, 
    IoCubeOutline, 
    IoHourglassOutline 
} from 'react-icons/io5';
import { FaTruck, FaSackDollar } from 'react-icons/fa6';


// --- Reusable Notification Item Component ---
const NotificationItem = ({ icon: Icon, color, message, status }) => (
    <div className="flex justify-between items-start py-2">
        <div className="flex items-start gap-4">
            <Icon className={`w-6 h-6 mt-0.5 ${color}`} />
            <p className="text-gray-700">{message}</p>
        </div>
        {status && (
            <a href="#" className="text-sm font-semibold text-[#4C8787] whitespace-nowrap hover:underline">
                {status}
            </a>
        )}
    </div>
);


// --- Reusable Notification Card Component ---
const NotificationCard = ({ title, count, children }) => (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">{title} ({count})</h2>
        <div className="space-y-2 divide-y divide-gray-100">
            {children}
        </div>
    </div>
);


// --- Main Page Component ---
const NotificationsPage = () => {
    // Dữ liệu mẫu, bạn sẽ lấy dữ liệu này từ API
    const orderUpdates = [
        { 
            icon: IoCheckmarkCircle, 
            color: 'text-green-500', 
            message: 'Your Order GM-00124 Has Been Confirmed. Delivery Is Scheduled For March 3rd–4th.', 
            status: 'In Rental' 
        },
        { 
            icon: FaTruck, 
            color: 'text-orange-500', 
            message: 'Your iPhone Air – 256GB Has Been Shipped Via GHTK. Tracking ID: 125873491VN.', 
            status: 'Delivering' 
        },
        { 
            icon: IoCubeOutline, 
            color: 'text-yellow-700', 
            message: 'Your Device Was Successfully Delivered On March 3rd.', 
            status: 'Delivered' 
        },
        { 
            icon: IoHourglassOutline, 
            color: 'text-gray-600', 
            message: 'Your Rental Period Starts Today (March 3rd – April 3rd).', 
            status: 'Start Renting' 
        },
    ];

    const paymentUpdates = [
        {
            icon: IoWalletOutline,
            color: 'text-green-500',
            message: 'Deposit Payment (750,000 VND) Confirmed Via MoMo.',
            status: 'Payment Confirmation'
        },
        {
            icon: IoWarningOutline,
            color: 'text-yellow-500',
            message: 'Payment Failed – Please Try Again Or Use Another Method.',
            status: 'Payment Error'
        },
        {
            icon: FaSackDollar,
            color: 'text-green-600',
            message: 'Deposit Refund (700,000 VND) Initiated – Expect In 1–2 Business Days.',
            status: 'Deposit is Being Paid'
        }
    ];

    const rentalStatus = [
        {
            icon: IoHourglassOutline,
            color: 'text-gray-600',
            message: 'Your Rental Period Will End In 3 Days (April 1st, 2024).',
            status: null
        },
        {
            icon: IoWarningOutline,
            color: 'text-red-500',
            message: 'Your Rental Period Has Expired. Please Return The Device To Avoid Extra Charges.',
            status: null
        }
    ];

    return (
        <div className="bg-[#F0F4F8] min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* Order Updates Card */}
                    <NotificationCard title="Order Updates" count={1}>
                        {orderUpdates.map((item, index) => (
                           <NotificationItem key={index} {...item} />
                        ))}
                    </NotificationCard>

                    {/* Payment & Deposit Card */}
                    <NotificationCard title="Payment & Deposit" count={2}>
                         {paymentUpdates.map((item, index) => (
                           <NotificationItem key={index} {...item} />
                        ))}
                    </NotificationCard>

                    {/* Rental Status Card */}
                    <NotificationCard title="Rental Status" count={2}>
                         {rentalStatus.map((item, index) => (
                           <NotificationItem key={index} {...item} />
                        ))}
                    </NotificationCard>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotificationsPage;