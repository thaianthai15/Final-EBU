import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Squares2X2Icon, ChevronDownIcon } from '@heroicons/react/24/outline';


const categoryData = [
  { name: 'Phone', value: 83, type: 'Rental', percentage: 50 },
  { name: 'Audio & Music', value: 25, type: 'Sales', percentage: 24 },
  { name: 'Camera', value: 12, type: 'Sales', percentage: 16 },
  // Adding a dummy one to complete the circle visually
  { name: 'Other', value: 10, type: 'Sales', percentage: 10 },
];

const COLORS = ['#FBBF24', '#60A5FA', '#38A2AC', '#E2E8F0'];

const TopCategories = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <Squares2X2Icon className="h-6 w-6 text-gray-500 mr-2"/>
                    <h2 className="text-xl font-semibold text-gray-700">Top Categories</h2>
                </div>
                <button className="flex items-center text-sm border rounded-md px-3 py-1">
                    Weekly <ChevronDownIcon className="h-4 w-4 ml-1"/>
                </button>
            </div>
            
            <div className="flex justify-center items-center my-4 relative">
                 <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            cornerRadius={5}
                        >
                            {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                 {/* Manually positioning percentage labels */}
                 <span className="absolute text-xs font-semibold" style={{top: '15%', right: '20%'}}>16%</span>
                 <span className="absolute text-xs font-semibold" style={{top: '35%', right: '5%'}}>24%</span>
                 <span className="absolute text-xs font-semibold" style={{bottom: '10%', left: '30%'}}>50%</span>
            </div>

            <div>
                {categoryData.slice(0, 3).map((cat, index) => (
                     <div key={index} className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                             <span className="h-2 w-2 mr-2" style={{ backgroundColor: COLORS[index]}}></span>
                             <p className="text-gray-700">{cat.name}</p>
                        </div>
                        <p className="text-gray-500">
                           <span className="font-bold text-gray-800">{cat.value}</span> {cat.type}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;