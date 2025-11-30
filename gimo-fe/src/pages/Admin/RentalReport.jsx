// src/pages/Admin/RentalReport.js

import React, { useState } from 'react';
import {
  BanknotesIcon,
  ShoppingBagIcon,
  DocumentChartBarIcon,
  ExclamationCircleIcon,
  DocumentTextIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { FaFilePdf, FaFileExcel, FaPrint } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Legend as PieLegend } from 'recharts';

// --- Reusable Stat Card Component ---
const StatCard = ({ icon, title, value, change, changeType, hasChart }) => {
    const changeColor = changeType === 'increase' ? 'text-green-500' : 'text-red-500';
    const changeBgColor = changeType === 'increase' ? 'bg-green-100' : 'bg-red-100';
    
    return (
        <div className="bg-white p-5 rounded-lg shadow-md flex items-start justify-between">
            <div>
                <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                        {icon}
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">{title}</p>
                        <p className="text-2xl font-bold text-gray-800">{value}</p>
                    </div>
                </div>
            </div>
            {change && (
                <div className="flex flex-col items-end">
                    <span className={`text-sm font-semibold px-2 py-1 rounded-md ${changeBgColor} ${changeColor}`}>{change}</span>
                    {/* Placeholder for mini chart */}
                    {hasChart && <div className="mt-3 flex items-end h-8 space-x-px">
                        <div className="w-1.5 bg-gray-300 h-full rounded-sm"></div>
                        <div className="w-1.5 bg-gray-300 h-2/3 rounded-sm"></div>
                        <div className="w-1.5 bg-blue-400 h-5/6 rounded-sm"></div>
                        <div className="w-1.5 bg-gray-300 h-1/2 rounded-sm"></div>
                        <div className="w-1.5 bg-blue-400 h-full rounded-sm"></div>
                        <div className="w-1.5 bg-gray-300 h-1/3 rounded-sm"></div>
                        <div className="w-1.5 bg-blue-400 h-3/4 rounded-sm"></div>
                    </div>}
                </div>
            )}
        </div>
    );
};


// --- Donut Chart for Category Performance ---
const RentalCategoryPerformance = () => {
    const data = [
        { name: 'Phones & Tables', value: 50 },
        { name: 'Cameras', value: 10 },
        { name: 'Audio & Music', value: 11 },
        { name: 'Laptops', value: 8 },
        { name: 'Gaming & VR', value: 7 },
    ];
    const COLORS = ['#4C8787', '#FFC107', '#F44336', '#3F51B5', '#00BCD4'];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Rental Category Performance (This month)</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                         <PieLegend
                            iconType="circle"
                            layout="horizontal"
                            verticalAlign="bottom"
                            align="center"
                            wrapperStyle={{paddingTop: '20px'}}
                            formatter={(value, entry) => <span className="text-gray-600 text-xs ml-2">{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

// --- Bar Chart for Revenue & Cost ---
const RevenueCostOverview = () => {
    const data = [
        { name: 'Jan', revenue: 15, expenses: -18 }, { name: 'Feb', revenue: 45, expenses: -25 },
        { name: 'Mar', revenue: 40, expenses: -20 }, { name: 'Apr', revenue: 30, expenses: -28 },
        { name: 'May', revenue: 30, expenses: -22 }, { name: 'Jun', revenue: 20, expenses: -15 },
        { name: 'Jul', revenue: 40, expenses: -25 }, { name: 'Aug', revenue: 25, expenses: -29 },
        { name: 'Sep', revenue: 40, expenses: -18 }, { name: 'Oct', revenue: 20, expenses: -22 },
        { name: 'Nov', revenue: 10, expenses: -25 }, { name: 'Dec', revenue: 30, expenses: -28 },
    ];
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-3">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Revenue & Cost Overview</h3>
                <button className="flex items-center text-sm border px-3 py-1.5 rounded-md text-gray-600 hover:bg-gray-50">
                    2025 <ChevronDownIcon className="h-4 w-4 ml-2" />
                </button>
            </div>
             <div className="flex space-x-4 mb-4">
                <div>
                    <p className="text-gray-500 text-sm">Revenue (VND)</p>
                    <p className="text-xl font-bold text-[#4C8787]">330,300,000 <span className="text-sm font-semibold text-green-500 bg-green-100 px-2 py-0.5 rounded-md">+25%</span></p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Total Expenses</p>
                    <p className="text-xl font-bold text-red-500">191,200,000</p>
                </div>
            </div>
            <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                    <BarChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                        <YAxis tickFormatter={(value) => `${value}M`} axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                        <Tooltip cursor={{fill: 'rgba(243, 244, 246, 0.5)'}} />
                        <Bar dataKey="revenue" fill="#2E8B57" name="Revenue" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expenses" fill="#F44336" name="Expenses" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


// --- Rental Performance Summary Table ---
const RentalPerformanceSummary = () => {
    const products = [
        { name: 'iPhone 16 Pro Max - 256GB', category: 'Phone', rentals: 132, duration: 29, overdue: 6, damage: 1, returnRate: '95.4%', revenue: '298,000,000' },
        { name: 'GoPro Hero 11', category: 'Cameras', rentals: 41, duration: 17, overdue: 2, damage: 0, returnRate: '92.1%', revenue: '73,000,000' },
        { name: 'PS5', category: 'Gaming', rentals: 33, duration: 14, overdue: 3, damage: 0, returnRate: '95.6%', revenue: '58,000,000' },
        { name: 'AirPods Pro 3', category: 'Audio', rentals: 56, duration: 10, overdue: 1, damage: 0, returnRate: '98.2%', revenue: '30,100,000' },
        { name: 'iPad Air 5', category: 'Tables', rentals: 44, duration: 22, overdue: 2, damage: 1, returnRate: '94.5%', revenue: '62,000,000' },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Rental Performance Summary</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Rentals</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Duration (days)</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overdue</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Damage Cases</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On-time Return Rate</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue (VND)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.name} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.rentals}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.duration}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.overdue}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.damage}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.returnRate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// --- Main Rental Report Page Component ---
const RentalReport = () => {
    const [timeRange, setTimeRange] = useState('This Month');

    return (
        <div>
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Rental Report</h1>
                    <div className="flex items-center mt-2">
                        <span className="text-sm font-medium text-gray-500 mr-4">TIME RANGE:</span>
                        <div className="flex items-center space-x-2">
                            {['Today', 'This Week', 'This Month'].map((range) => (
                                <button
                                    key={range}
                                    onClick={() => setTimeRange(range)}
                                    className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                                        timeRange === range ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
                                    }`}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="p-2 border rounded-md hover:bg-gray-100"><FaFilePdf className="text-red-500 h-5 w-5"/></button>
                    <button className="p-2 border rounded-md hover:bg-gray-100"><FaFileExcel className="text-green-500 h-5 w-5"/></button>
                    <button className="p-2 border rounded-md hover:bg-gray-100"><FaPrint className="text-gray-600 h-5 w-5"/></button>
                </div>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard icon={<DocumentChartBarIcon className="h-7 w-7 text-[#4C8787]"/>} title="Total Revenue" value="186,250,000 VND" />
                <StatCard icon={<ShoppingBagIcon className="h-7 w-7 text-blue-500"/>} title="Total Orders" value="1,204 orders" />
                <StatCard icon={<BanknotesIcon className="h-7 w-7 text-orange-500"/>} title="Total Refunds" value="32,000,000 VND" />
                <StatCard icon={<ExclamationCircleIcon className="h-7 w-7 text-red-500"/>} title="Overdue" value="58" />
            </div>

             {/* Second Row Stat Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <StatCard 
                    icon={<DocumentTextIcon className="h-7 w-7 text-yellow-500"/>} 
                    title="Total Users" 
                    value="6,892 Verified" 
                    change="+19.01%" 
                    changeType="increase" 
                    hasChart={true}
                />
                <StatCard 
                    icon={<BanknotesIcon className="h-7 w-7 text-yellow-500"/>} 
                    title="Total Earnings" 
                    value="85,550,000 VNĐ" 
                    change="-16%" 
                    changeType="decrease"
                    hasChart={true}
                />
            </div>
            
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
               <RentalCategoryPerformance />
               <RevenueCostOverview />
            </div>

            {/* Table Section */}
            <RentalPerformanceSummary />

        </div>
    );
};

export default RentalReport;