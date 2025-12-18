import React, { useState, useEffect } from 'react';
import { 
  FaRegUser, 
  FaWallet, 
  FaLock, 
  FaUniversity, 
  FaQuestionCircle, 
  FaSignOutAlt, 
  FaArrowRight 
} from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/layout/user/Header';

const AccountPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    const userRole = localStorage.getItem('userRole');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setRole(userRole);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  // Logic xác định Email hiển thị
  const displayEmail = role === "ADMIN" ? "admin@gimo.com" : user?.email;
  const displayName = role === "ADMIN" ? "Admin Gimo" : `${user?.firstName} ${user?.lastName}`;

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      <div className="w-full">
        <Header />
      </div>

      {/* USER INFO BANNER */}
      <div className="text-center mt-8 mb-8 px-4">
        <h2 className="text-[24px] font-bold text-[#2e2e2e] mb-1">
          {displayName}
        </h2>
        <h4 className="text-[14px] font-normal text-[#666]">
          {displayEmail}
        </h4>
        {role === "ADMIN" && (
          <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
            Administrator Mode
          </span>
        )}
      </div>

      <main className="max-w-[1200px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Box 1: Personal Info */}
          <div className="border border-[#e0e0e0] rounded-xl bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
            <FaRegUser className="text-[24px] text-[#4C8787] mb-3" />
            <h3 className="text-[18px] font-semibold text-[#222] mb-2">Personal information</h3>
            <p className="text-[14px] text-[#555] mb-5 leading-relaxed flex-grow">
              Review and update personal info such as name, email, and phone number for a smooth experience.
            </p>
            <Link to="/profile" className="w-full">
              <button className="w-full py-3 px-4 bg-[#222] text-white rounded-full font-semibold hover:bg-black transition-colors cursor-pointer">
                Manage my info
              </button>
            </Link>
          </div>

          {/* Box 2: Payment Methods */}
          <div className="border border-[#e0e0e0] rounded-xl bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
            <FaWallet className="text-[24px] text-[#4C8787] mb-3" />
            <h3 className="text-[18px] font-semibold text-[#222] mb-2">Payment methods</h3>
            <p className="text-[14px] text-[#555] mb-5 leading-relaxed flex-grow">
              Review and update your personal payment information.
            </p>
            <Link to="#" className="w-full">
              <button className="w-full py-3 px-4 bg-[#222] text-white rounded-full font-semibold hover:bg-black transition-colors cursor-pointer">
                Manage payment methods
              </button>
            </Link>
          </div>

          {/* Box 3: Account Security */}
          <div className="border border-[#e0e0e0] rounded-xl bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
            <FaLock className="text-[24px] text-[#4C8787] mb-3" />
            <h3 className="text-[18px] font-semibold text-[#222] mb-2">Account security</h3>
            <p className="text-[14px] text-[#555] mb-5 leading-relaxed flex-grow">
              Change your password and update phone number.
            </p>
            <Link to="#" className="w-full">
              <button className="w-full py-3 px-4 bg-[#222] text-white rounded-full font-semibold hover:bg-black transition-colors cursor-pointer">
                Manage account security
              </button>
            </Link>
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="bg-white rounded-2xl shadow-[0_2px_6px_rgba(0,0,0,0.05)] p-8 flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-[#eee]">
          <Link to="#" className="flex-1 flex items-center justify-between px-0 md:px-5 py-4 md:py-0 first:pl-0 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FaUniversity className="text-[24px] text-black shrink-0" />
              <div>
                <h3 className="text-[16px] font-semibold text-[#111]">Go to Payments</h3>
                <p className="text-[14px] text-[#666] mt-1">Review your invoices</p>
              </div>
            </div>
            <FaArrowRight className="text-[14px] text-[#111]" />
          </Link>

          <Link to="#" className="flex-1 flex items-center justify-between px-0 md:px-5 py-4 md:py-0 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FaQuestionCircle className="text-[24px] text-black shrink-0" />
              <div>
                <h3 className="text-[16px] font-semibold text-[#111]">Support</h3>
                <p className="text-[14px] text-[#666] mt-1">Get help and contact us</p>
              </div>
            </div>
            <FaArrowRight className="text-[14px] text-[#111]" />
          </Link>

          <div onClick={handleLogout} className="flex-1 flex items-center justify-between px-0 md:px-5 py-4 md:py-0 last:pr-0 cursor-pointer hover:bg-red-50 transition-colors group">
            <div className="flex items-center gap-3">
              <FaSignOutAlt className="text-[24px] text-red-600 shrink-0" />
              <div>
                <h3 className="text-[16px] font-semibold text-red-600">Log out</h3>
                <p className="text-[14px] text-[#666] mt-1">Sign out of your account</p>
              </div>
            </div>
            <FaArrowRight className="text-[14px] text-red-600" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;