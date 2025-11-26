import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { CalendarIcon } from '@heroicons/react/24/outline';

const revenueData = [
  { name: 'Jan', revenue: 25 },
  { name: 'Feb', revenue: 30 },
  { name: 'Mar', revenue: 20 },
  { name: 'Apr', revenue: 23 },
  { name: 'May', revenue: 22 },
  { name: 'Jun', revenue: 32 },
  { name: 'Jul', revenue: 24 },
  { name: 'Aug', revenue: 22 },
  { name: 'Sep', revenue: 25 },
];

const rentalStatusData = [
  { name: 'In Rental', value: 132 },
  { name: 'Completed', value: 82 },
  { name: 'Overdue', value: 6 },
];

const COLORS = ['#38A2AC', '#E2E8F0', '#FBBF24'];

const RevenueChart = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Revenue Chart (This Year)</h2>
                <div className="flex items-center bg-gray-100 px-3 py-1 rounded-md border text-sm">
                    <CalendarIcon className="h-4 w-4 text-gray-500 mr-2"/>
                    <span>2025</span>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <p className="text-sm text-gray-500">VND</p>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#38A2AC" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="#38A2AC" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis 
                                tickFormatter={(value) => `${value}M`} 
                                domain={[0, 60]} 
                                ticks={[10, 20, 30, 40, 50, 60]}
                                axisLine={false} 
                                tickLine={false}
                            />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stroke="#38A2AC" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col items-center justify-center">
                     <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={rentalStatusData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                cornerRadius={5}
                            >
                                {rentalStatusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 w-full">
                        {rentalStatusData.map((item, index) => (
                             <div key={item.name} className="flex justify-between items-center text-sm mb-2">
                                <div className="flex items-center">
                                    <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></span>
                                    <span className="text-gray-600">{item.name}</span>
                                </div>
                                <span className="font-semibold text-gray-800">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevenueChart;