import React from 'react';
import { 
  FaSearch, 
  FaFilter, 
  FaReceipt, 
  FaMoneyCheckAlt, 
  FaLock, 
  FaUnlock, 
  FaAngleLeft, 
  FaAngleRight 
} from 'react-icons/fa';

// Mock Data
const userData = [
  { id: 'G1524', name: 'Nguyen Van Thang', email: 'Thangbo2103@gmail.com', phone: '0376533690', status: 'Active', isLocked: false },
  { id: 'G3524', name: 'Hoang Van Nam', email: 'Namhoang23@gmail.com', phone: '0376533690', status: 'Active', isLocked: false },
  { id: 'G2103', name: 'Vu Hoai Nhi', email: 'Nhihoai5@gmail.com', phone: '0376533690', status: 'Active', isLocked: false },
  { id: 'G0506', name: 'Tran Thi Kim Oanh', email: 'Kimoanhtran@gmail.com', phone: '0376533690', status: 'Overdue', isLocked: true }, // User này bị lock
  { id: 'G4521', name: 'Nguyen An Thai', email: 'thaiannguyen@gmail.com', phone: '0376533690', status: 'Completed', isLocked: false },
  { id: 'G3142', name: 'Nguyen Hoang An', email: 'hoangan36@gmail.com', phone: '0376533690', status: 'Completed', isLocked: false },
];

// Helper Component: Rental Status Badge
const RentalStatusBadge = ({ status }) => {
  const styles = {
    'Active': 'bg-green-100 text-green-700 border-green-200',
    'Overdue': 'bg-red-100 text-red-700 border-red-200',
    'Completed': 'bg-blue-100 text-blue-700 border-blue-200',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
};

const Users = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 min-h-screen font-sans">
      
      {/* --- PAGE TITLE --- */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
      </div>

      {/* --- CONTROLS BAR --- */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
        
        {/* Search */}
        <div className="relative w-full lg:w-1/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search User..." 
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] bg-white"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 shadow-sm transition-colors">
            <FaFilter /> Filter
          </button>
          
          <select className="px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] cursor-pointer shadow-sm">
            <option>Account Status: All</option>
            <option>Lock</option>
            <option>Unlock</option>
          </select>

          <select className="px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A8D8C] cursor-pointer shadow-sm">
            <option>Rental State: All</option>
            <option>Completed</option>
            <option>Overdue</option>
            <option>Active</option>
          </select>
        </div>
      </div>

      {/* --- TABLE --- */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-bold tracking-wider">
            <tr>
              <th className="p-4 w-10">
                <input type="checkbox" className="w-4 h-4 text-[#4A8D8C] rounded focus:ring-[#4A8D8C] cursor-pointer" />
              </th>
              <th className="p-4">User ID</th>
              <th className="p-4">User Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone Number</th>
              <th className="p-4">Rentals</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {userData.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <input type="checkbox" className="w-4 h-4 text-[#4A8D8C] rounded focus:ring-[#4A8D8C] cursor-pointer" />
                </td>
                <td className="p-4 font-medium text-gray-900">{user.id}</td>
                <td className="p-4 font-semibold">{user.name}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4 text-gray-600">{user.phone}</td>
                <td className="p-4">
                  <RentalStatusBadge status={user.status} />
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-2 items-start">
                    
                    <button className="flex items-center gap-2 text-gray-600 hover:text-[#4A8D8C] transition-colors text-xs font-medium">
                      <FaReceipt /> View rental history
                    </button>
                    
                    <button className="flex items-center gap-2 text-gray-600 hover:text-[#4A8D8C] transition-colors text-xs font-medium">
                      <FaMoneyCheckAlt /> View payments
                    </button>

                    {user.isLocked ? (
                      <button className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors text-xs font-bold">
                        <FaUnlock /> Unlock user
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors text-xs font-bold">
                        <FaLock /> Lock user
                      </button>
                    )}

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- PAGINATION --- */}
      <div className="flex justify-end items-center mt-6 gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          <FaAngleLeft />
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#4A8D8C] text-white font-medium shadow-md">
          4
        </button>
        <span className="w-8 h-8 flex items-center justify-center text-gray-500">...</span>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          15
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          <FaAngleRight />
        </button>
      </div>

    </div>
  );
};

export default Users;