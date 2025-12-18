import React, { useState, useEffect } from 'react';
import { 
  FaArrowLeft, 
  FaInfoCircle, 
  FaRegEnvelope, 
  FaMobileAlt, 
  FaRegUser 
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/user/Header';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  // Lấy thông tin user và role từ localStorage khi trang được load
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    const userRole = localStorage.getItem('userRole');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setRole(userRole);
    } else {
      // Nếu chưa đăng nhập thì chuyển về trang login
      navigate('/login');
    }
  }, [navigate]);

  // Logic xác định Email hiển thị
  // Nếu role là ADMIN thì fix cứng admin@gimo.com, ngược lại lấy từ data user
  const displayEmail = role === "ADMIN" ? "admin@gimo.com" : user?.email;

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#333]">
      
      {/* 1. HEADER */}
      <div className="w-full">
        <Header />
      </div>

      {/* 2. PROFILE CONTAINER */}
      <div className="w-full max-w-[720px] mx-auto px-5 py-10">
        
        {/* Navigation / Back Button */}
        <div 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-3 mb-5 cursor-pointer hover:opacity-70 transition-opacity w-fit"
        >
          <FaArrowLeft className="text-[20px] text-[#111]" />
          <h3 className="text-[1.1rem] font-semibold text-[#111]">Account</h3>
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-[1.6rem] font-semibold text-[#111]">
            Personal information
          </h2>
          {role === "ADMIN" && (
            <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold rounded uppercase">
              Admin Profile
            </span>
          )}
        </div>
        <p className="text-[0.95rem] text-[#333] mb-5">
          We use your personal information to keep you, your devices and us safe.
        </p>

        {/* Privacy Info Box */}
        <div className="flex items-start gap-3 bg-[#f6f6f6] rounded-lg p-[12px_14px] my-5 border border-transparent">
          <FaInfoCircle className="text-[20px] text-[#333] shrink-0 mt-[2px]" />
          <p className="text-[0.93rem] text-[#333] leading-relaxed">
            In accordance with our privacy policy, your information is safe with us and will never be sold to third parties.{' '}
            <a href="#" className="text-black font-medium underline hover:opacity-80">
              Learn more
            </a>
          </p>
        </div>

        {/* Profile Details List */}
        <div className="flex flex-col gap-[26px] mt-[15px]">

          {/* Box 1: Email Address */}
          <div className="border border-[#eee] rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <FaRegEnvelope className="text-[24px] text-[#111] mb-[10px]" />
            <h3 className="text-[1.1rem] font-semibold mb-[6px] text-[#111]">Email address</h3>
            <p className="text-[1rem] font-medium text-[#4C8787] mb-2">
              {displayEmail || "Loading..."}
            </p>
            <p className="text-[0.93rem] text-[#333] mb-4 opacity-80">
              To update your email address, please set a phone number first.
            </p>
            <button 
              disabled 
              className="bg-[#111] text-white rounded-[20px] px-4 py-2 text-[0.9rem] font-medium transition-colors disabled:bg-[#eee] disabled:text-[#999] disabled:cursor-not-allowed hover:bg-[#333]"
            >
              Update email address
            </button>
          </div>

          {/* Box 2: Phone Number */}
          <div className="border border-[#eee] rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <FaMobileAlt className="text-[24px] text-[#111] mb-[10px]" />
            <h3 className="text-[1.1rem] font-semibold mb-[6px] text-[#111]">Phone number</h3>
            <p className="text-[1rem] font-medium text-[#4C8787] mb-2">
              {user?.phone || "Missing"}
            </p>
            <p className="text-[0.93rem] text-[#333] mb-4 opacity-80">
              To place an order, you’re going to have to verify your mobile phone number.
            </p>
            <button className="bg-[#111] text-white rounded-[20px] px-4 py-2 text-[0.9rem] font-medium transition-colors hover:bg-[#333]">
              Update phone number
            </button>
          </div>

          {/* Box 3: Full Name */}
          <div className="border border-[#eee] rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <FaRegUser className="text-[24px] text-[#111] mb-[10px]" />
            <h3 className="text-[1.1rem] font-semibold mb-[6px] text-[#111]">Full Name</h3>
            <p className="text-[1rem] font-medium text-[#4C8787] mb-2">
              {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
            </p>
            <p className="text-[0.93rem] text-[#333] mb-4 opacity-80">
              If your name changed, for example after marriage, please let us know. For smooth rentals, make sure any middle names are also present.
            </p>
            <button className="bg-[#111] text-white rounded-[20px] px-4 py-2 text-[0.9rem] font-medium transition-colors hover:bg-[#333]">
              Send a message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;