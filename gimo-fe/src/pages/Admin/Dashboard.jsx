import React from 'react';
import { InformationCircleIcon, CalendarIcon, ArrowUpIcon, CubeIcon, TruckIcon, ExclamationTriangleIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import StatCard from '../Admin/components/StatCard'
import RevenueChart from '../Admin/components/RevenueChart'
import TopProducts from '../Admin/components/TopProducts'
import TopCategories from '../Admin/components/TopCategories'
import revenueIcon from '../../assets/images/revenue-icon.png'; 

const Dashboard = () => {
  return (
    <div>
      {/* Welcome Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Admin</h1>
          <p className="text-gray-500">You have <span className="text-orange-500 font-semibold">100+</span> Orders, Today</p>
        </div>
        <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm border">
          <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
          <span>01 Nov 2025</span>
        </div>
      </div>

      {/* Overall Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center mb-4">
            <InformationCircleIcon className="h-6 w-6 text-gray-400 mr-2"/>
            <h2 className="text-xl font-semibold text-gray-700">Overall Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<CubeIcon className="h-8 w-8 text-orange-400"/>} title="Active Rentals" value="132" />
          <StatCard icon={<TruckIcon className="h-8 w-8 text-blue-400"/>} title="Pending Delivery" value="20" />
          <StatCard icon={<ExclamationTriangleIcon className="h-8 w-8 text-yellow-500"/>} title="Overdue Rentals" value="6" />
          <StatCard icon={<BanknotesIcon className="h-8 w-8 text-green-500"/>} title="Refund Queue" value="4" />
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg flex items-center justify-between">
            <div>
                <h3 className="text-gray-600 font-medium">📈 Revenue (This month):</h3>
                <p className="text-3xl font-bold text-gray-800 mt-1">186,250,000 VND</p>
                <div className="flex items-center mt-2 text-green-600">
                    <ArrowUpIcon className="h-5 w-5 mr-1" />
                    <span className="font-semibold">25%</span>
                    <span className="text-gray-500 ml-1">increase compare to last month</span>
                </div>
            </div>
            <img src={revenueIcon} alt="Revenue Growth" className="h-24 w-24"/>
        </div>
      </div>
      
      {/* Revenue Chart */}
      <RevenueChart />

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
            <TopProducts />
        </div>
        <div>
            <TopCategories />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;