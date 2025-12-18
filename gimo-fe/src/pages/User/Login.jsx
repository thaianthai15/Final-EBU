import React, { useState } from 'react';
import { FaHeadset, FaGoogle, FaFacebookF, FaUserCircle, FaPiggyBank } from 'react-icons/fa';
import Header from '../../components/layout/user/Header';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // --- LOGIC ĐĂNG NHẬP MỚI ---
  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Kiểm tra Admin (Hardcode để demo trang Admin)
    if (email === 'admin@gimo.com' && password === 'admin123') {
      localStorage.setItem('userRole', 'ADMIN');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify({ firstName: 'Admin', lastName: 'Gimo' }));
      navigate('/admin');
      return;
    }

    // 2. Kiểm tra User thông thường từ LocalStorage (Dữ liệu từ trang SignUp)
    // Lấy danh sách users, nếu không có thì trả về mảng rỗng
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Tìm user có email và password khớp
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      // Đăng nhập thành công
      localStorage.setItem('userRole', 'USER');
      localStorage.setItem('isLoggedIn', 'true');

      // Lưu thông tin người đang đăng nhập để hiển thị lên Header (Xin chào, ...)
      localStorage.setItem('currentUser', JSON.stringify(validUser));

      alert(`Welcome back, ${validUser.firstName}!`);
      navigate('/'); // Chuyển về trang chủ
    } else {
      // Đăng nhập thất bại
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-start font-sans text-[#333]">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-[950px] max-w-[95%] mx-auto my-[30px] p-10 flex flex-col md:flex-row justify-between items-start gap-16">

        {/* LOGIN SECTION */}
        <div className="flex-1 w-full bg-[#F5F7FF] p-10 shadow-[0_2px_6px_rgba(0,0,0,0.05)] rounded-lg border-r border-[#eee] md:border-r md:border-b-0 border-b md:border-b-0">
          <h2 className="text-[1.8rem] font-bold mb-4 md:mr-[60%] leading-tight text-black">Login</h2>

          <h3 className="text-[1.2rem] font-semibold mt-[15px] mb-[10px] text-black">Registered Customers</h3>
          <p className="text-[0.95rem] mb-5 text-[#333]">
            If you have an account, sign in with your email address.
          </p>

          {/* Error Message Box */}
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm border border-red-200">
              {errorMessage}
            </div>
          )}

          <form className="flex flex-col" onSubmit={handleLogin}>
            <div className="relative mb-[15px]">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email <span className="text-[#ff0000] ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-[#ccc] rounded-md text-[1rem] focus:outline-none focus:border-[#4C8787] transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative mb-[15px]">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password <span className="text-[#ff0000] ml-1">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-[#ccc] rounded-md text-[1rem] focus:outline-none focus:border-[#4C8787] transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-[40%] bg-[#4C8787] text-white p-3 text-[1rem] font-semibold rounded-[25px] border-none cursor-pointer hover:bg-[#467979] transition-all duration-200 mb-2"
            >
              Login
            </button>

            <div className="py-[30px]">
              <a href="#" className="underline text-[0.9rem] text-[#F9B50B] cursor-pointer hover:text-[#e0a800]">
                Forgot Your Password?
              </a>
            </div>
          </form>

          <h3 className="text-[1.2rem] font-semibold mt-[15px] mb-[10px] text-black">Or login with</h3>
          <div className="flex justify-between gap-[10px] mt-[10px]">
            <button className="flex-1 flex items-center justify-center gap-2 text-black bg-transparent border border-white p-[10px] text-[1rem] font-semibold cursor-pointer hover:bg-[#e9e9e9] transition-colors rounded-none">
              <FaGoogle /> Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 text-black bg-transparent border border-white p-[10px] text-[1rem] font-semibold cursor-pointer hover:bg-[#e9e9e9] transition-colors rounded-none">
              <FaFacebookF /> Facebook
            </button>
          </div>
        </div>

        {/* NEW CUSTOMER SECTION */}
        <div className="shrink-0 w-full md:w-auto bg-[#F5F7FF] rounded-lg p-[40px_50px] shadow-[0_2px_6px_rgba(0,0,0,0.05)] flex flex-col items-start justify-start h-auto">
          <h3 className="text-[1.3rem] font-semibold mb-[10px] text-black">New Customer</h3>
          <p className="mb-[10px] text-[0.95rem] text-[#333]">
            Creating an account has many benefits:
          </p>
          <ul className="list-disc ml-[18px] mb-[20px] text-[0.95rem] text-[#333]">
            <li className="mb-[6px]">Check out faster</li>
            <li className="mb-[6px]">Keep more than one address</li>
            <li className="mb-[6px]">Track orders and more</li>
          </ul>

          {/* Cập nhật nút này để chuyển hướng sang trang SignUp */}
          <button
            onClick={() => navigate('/sign-up')}
            className="bg-[#4C8787] text-white px-8 py-3 text-[1rem] font-semibold rounded-[25px] border-none cursor-pointer hover:bg-[#467979] transition-all duration-200 w-fit whitespace-nowrap md:self-center"
          >
            Create an Account
          </button>
        </div>

      </div>

      <footer className="w-full bg-[#F5F7FF] py-10 mt-auto">
        <div className="max-w-[950px] mx-auto flex flex-col md:flex-row justify-around text-center gap-10 px-5">
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="mb-5"><FaHeadset className="text-[#3d6d6d] text-[30px]" /></div>
            <h3 className="text-[1.1rem] font-semibold mb-[10px] text-black">Product Support</h3>
            <p className="text-[0.95rem] text-[#333] leading-relaxed max-w-[250px]">Up to 3 years on-site warranty available for your peace of mind.</p>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="mb-5"><FaUserCircle className="text-[#3d6d6d] text-[30px]" /></div>
            <h3 className="text-[1.1rem] font-semibold mb-[10px] text-black">Personal Account</h3>
            <p className="text-[0.95rem] text-[#333] leading-relaxed max-w-[250px]">With big discounts, free delivery and a dedicated support specialist.</p>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="mb-5"><FaPiggyBank className="text-[#3d6d6d] text-[30px]" /></div>
            <h3 className="text-[1.1rem] font-semibold mb-[10px] text-black">Amazing Savings</h3>
            <p className="text-[0.95rem] text-[#333] leading-relaxed max-w-[250px]">Up to 70% off new Products, you can be sure of the best price.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;