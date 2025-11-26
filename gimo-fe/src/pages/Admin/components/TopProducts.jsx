import React from 'react';

const products = [
    { name: 'iPhone Air 256GB', price: '2,450,000 VND / month', rentals: 45, img: 'https://via.placeholder.com/40' },
    { name: 'MacBook Air M2', price: '3,950,000 VND / month', rentals: 33, img: 'https://via.placeholder.com/40' },
    { name: 'Apple AirPods Pro 3', price: '520,000 VND / month', rentals: 45, img: 'https://via.placeholder.com/40' },
    { name: 'iPad Air 5', price: '3,950,000 VND / month', rentals: 33, img: 'https://via.placeholder.com/40' },
];

const TopProducts = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Top rented products</h2>
                <a href="#" className="text-sm text-teal-600 font-medium hover:underline">View All</a>
            </div>
            <div className="space-y-4">
                {products.map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={product.img} alt={product.name} className="h-12 w-12 object-contain bg-gray-100 p-1 rounded-md mr-4"/>
                            <div>
                                <p className="font-semibold text-gray-800">{product.name}</p>
                                <p className="text-sm text-gray-500">{product.price}</p>
                            </div>
                        </div>
                        <p className="text-gray-600">{product.rentals} rentals</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopProducts;