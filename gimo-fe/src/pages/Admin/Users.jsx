import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaFilter, 
  FaReceipt, 
  FaMoneyCheckAlt, 
  FaLock, 
  FaUnlock, 
  FaAngleLeft, 
  FaAngleRight,
  FaTrashAlt,
  FaTimes, // Thêm icon đóng modal
  FaCheckCircle
} from 'react-icons/fa';

// --- DATA DEMO CHO MODAL ---
const demoRentals = {
  'G1524': [
    { id: 'R-9901', product: 'iPhone 16 Pro Max', date: 'Oct 12, 2024', status: 'Active' },
    { id: 'R-8821', product: 'MacBook M3 Air', date: 'Jun 05, 2024', status: 'Completed' }
  ],
  'default': [
    { id: 'R-0000', product: 'Standard Rental Item', date: 'Jan 01, 2024', status: 'Completed' }
  ]
};

const demoPayments = {
  'G1524': [
    { id: 'TX-552', amount: '1,134,000 VND', date: 'Oct 12, 2024', method: 'Credit Card', status: 'Successful' },
    { id: 'TX-441', amount: '500,000 VND', date: 'Jun 05, 2024', method: 'Momo', status: 'Successful' }
  ],
  'default': [
    { id: 'TX-000', amount: '0 VND', date: 'N/A', method: 'N/A', status: 'Pending' }
  ]
};

const initialMockData = [
  { id: 'G1524', firstName: 'Van Thang', lastName: 'Nguyen', email: 'Thangbo2103@gmail.com', phone: '0376533690', status: 'Active', isLocked: false },
  { id: 'G3524', firstName: 'Van Nam', lastName: 'Hoang', email: 'Namhoang23@gmail.com', phone: '0376533690', status: 'Active', isLocked: false },
  { id: 'G2103', firstName: 'Hoai Nhi', lastName: 'Vu', email: 'Nhihoai5@gmail.com', phone: '0376533690', status: 'Active', isLocked: false },
  { id: 'G0506', firstName: 'Thi Kim Oanh', lastName: 'Tran', email: 'Kimoanhtran@gmail.com', phone: '0376533690', status: 'Overdue', isLocked: true },
  { id: 'G4521', firstName: 'An Thai', lastName: 'Nguyen', email: 'thaiannguyen@gmail.com', phone: '0376533690', status: 'Completed', isLocked: false },
];

const RentalStatusBadge = ({ status }) => {
  const styles = {
    'Active': 'bg-green-100 text-green-700 border-green-200',
    'Overdue': 'bg-red-100 text-red-700 border-red-200',
    'Completed': 'bg-blue-100 text-blue-700 border-blue-200',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [lockFilter, setLockFilter] = useState('All');
  const [rentalFilter, setRentalFilter] = useState('All');

  // --- STATE CHO MODAL DEMO ---
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'rentals' hoặc 'payments'
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    const adminUserData = localStorage.getItem('admin_users_management');
    if (adminUserData) {
      setUsers(JSON.parse(adminUserData));
    } else {
      setUsers(initialMockData);
      localStorage.setItem('admin_users_management', JSON.stringify(initialMockData));
    }
  }, []);

  const saveToLocal = (data) => {
    localStorage.setItem('admin_users_management', JSON.stringify(data));
    setUsers(data);
  };

  const toggleLock = (userId) => {
    const updated = users.map(u => u.id === userId ? { ...u, isLocked: !u.isLocked } : u);
    saveToLocal(updated);
  };

  const deleteUser = (userId) => {
    if (window.confirm("Permanent delete this user?")) {
      const updated = users.filter(u => u.id !== userId);
      saveToLocal(updated);
    }
  };

  // Hàm mở Modal Demo
  const handleOpenDemo = (user, type) => {
    setActiveUser(user);
    setModalType(type);
    setModalOpen(true);
  };

  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const matchesSearch = fullName.includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLock = lockFilter === 'All' || (lockFilter === 'Locked' && user.isLocked) || (lockFilter === 'Unlocked' && !user.isLocked);
    const matchesRental = rentalFilter === 'All' || user.status === rentalFilter;
    return matchesSearch && matchesLock && matchesRental;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 min-h-screen font-sans relative">
      
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <span className="bg-[#4A8D8C]/10 text-[#4A8D8C] px-4 py-1 rounded-full text-sm font-bold">
          {filteredUsers.length} Users Found
        </span>
      </div>

      {/* --- CONTROLS BAR --- */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
        <div className="relative w-full lg:w-1/3">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search users..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4A8D8C] outline-none text-sm"
          />
        </div>
        <div className="flex gap-3">
            <select onChange={(e) => setLockFilter(e.target.value)} className="p-2 border rounded text-sm outline-none">
                <option value="All">All Status</option>
                <option value="Locked">Locked</option>
                <option value="Unlocked">Unlocked</option>
            </select>
            <select onChange={(e) => setRentalFilter(e.target.value)} className="p-2 border rounded text-sm outline-none">
                <option value="All">All Rentals</option>
                <option value="Active">Active</option>
                <option value="Overdue">Overdue</option>
            </select>
        </div>
      </div>

      {/* --- TABLE --- */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-gray-100 text-gray-600 uppercase text-[11px] font-bold tracking-wider">
            <tr>
              <th className="p-4">User Details</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Rental State</th>
              <th className="p-4">Lock Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {filteredUsers.map((user) => (
              <tr key={user.id} className={`hover:bg-gray-50 transition-colors ${user.isLocked ? 'bg-red-50/30' : ''}`}>
                <td className="p-4">
                  <div className="font-bold text-gray-900">{user.firstName} {user.lastName}</div>
                  <div className="text-[10px] text-gray-400 font-mono uppercase">ID: {user.id}</div>
                </td>
                <td className="p-4">
                  <div className="text-gray-700 font-medium">{user.email}</div>
                  <div className="text-xs text-gray-400">{user.phone}</div>
                </td>
                <td className="p-4">
                  <RentalStatusBadge status={user.status} />
                </td>
                <td className="p-4">
                  {user.isLocked ? 
                    <span className="text-red-600 flex items-center gap-1 font-bold text-[10px]"><FaLock/> LOCKED</span> : 
                    <span className="text-green-600 flex items-center gap-1 font-bold text-[10px]"><FaUnlock/> ACTIVE</span>
                  }
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-center gap-4">
                    {/* Demo Rental History */}
                    <button 
                      onClick={() => handleOpenDemo(user, 'rentals')}
                      className="text-gray-400 hover:text-[#4A8D8C] transition-transform hover:scale-125" title="Rental History"
                    >
                      <FaReceipt size={18} />
                    </button>
                    {/* Demo Payments */}
                    <button 
                      onClick={() => handleOpenDemo(user, 'payments')}
                      className="text-gray-400 hover:text-[#4A8D8C] transition-transform hover:scale-125" title="Payments"
                    >
                      <FaMoneyCheckAlt size={18} />
                    </button>
                    
                    <div className="w-[1px] h-4 bg-gray-200 mx-1"></div>

                    <button onClick={() => toggleLock(user.id)} className={`${user.isLocked ? 'text-green-500' : 'text-red-400'} hover:scale-110`}>
                      {user.isLocked ? <FaUnlock size={16}/> : <FaLock size={16}/>}
                    </button>
                    <button onClick={() => deleteUser(user.id)} className="text-gray-300 hover:text-red-600">
                      <FaTrashAlt size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MODAL DEMO SECTION --- */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999] p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            {/* Header Modal */}
            <div className="p-5 border-b flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {modalType === 'rentals' ? 'Rental History' : 'Payment Records'}
                </h2>
                <p className="text-xs text-[#4A8D8C] font-semibold uppercase tracking-wider">
                  User: {activeUser?.firstName} {activeUser?.lastName}
                </p>
              </div>
              <button 
                onClick={() => setModalOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <FaTimes size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Nội dung Modal */}
            <div className="p-6 max-h-[400px] overflow-y-auto">
              {modalType === 'rentals' ? (
                <div className="space-y-3">
                  {(demoRentals[activeUser?.id] || demoRentals.default).map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                      <div>
                        <h4 className="font-bold text-gray-800">{item.product}</h4>
                        <p className="text-xs text-gray-500">Rental ID: {item.id} • {item.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${item.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {(demoPayments[activeUser?.id] || demoPayments.default).map((pay) => (
                    <div key={pay.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                          <FaCheckCircle size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{pay.amount}</h4>
                          <p className="text-xs text-gray-500">{pay.date} • {pay.method}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-gray-400 block mb-1">TXN: {pay.id}</span>
                        <span className="text-xs font-bold text-green-600 uppercase">{pay.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Modal */}
            <div className="p-4 bg-gray-50 border-t text-right">
              <button 
                onClick={() => setModalOpen(false)}
                className="px-6 py-2 bg-[#4A8D8C] text-white rounded-lg font-bold hover:bg-[#3a7574] transition-all shadow-md"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;