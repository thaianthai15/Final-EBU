import React, { useState } from 'react';
import { FaHeadset, FaUserCircle, FaPiggyBank, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/user/Header'; // Đảm bảo đường dẫn này đúng với dự án của bạn

const SignUp = () => {
  const navigate = useNavigate();

  // 1. Khởi tạo State để lưu dữ liệu Form
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    marketing: false
  });

  // 2. Hàm xử lý khi người dùng nhập liệu
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // 3. Hàm xử lý Đăng Ký (Mock Database)
  const handleSignUp = (e) => {
    e.preventDefault(); // Ngăn load lại trang

    // --- Validation cơ bản ---
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (!formData.agreeTerms) {
      alert("You must agree to the Terms of Service.");
      return;
    }

    // --- Xử lý LocalStorage (Giả lập DB) ---
    // B1: Lấy danh sách user cũ từ localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // B2: Kiểm tra trùng Email
    const isEmailTaken = existingUsers.some(user => user.email === formData.email);
    if (isEmailTaken) {
      alert("Email is already registered!");
      return;
    }

    // B3: Tạo user mới (Loại bỏ confirmPassword vì không cần lưu)
    const newUser = {
      id: Date.now(), // ID ngẫu nhiên theo thời gian
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password, // Lưu ý: Thực tế cần mã hóa password
      marketing: formData.marketing
    };

    // B4: Lưu vào localStorage
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // --- Thành công ---
    alert("Account created successfully!");
    console.log("Current Database:", updatedUsers); // Log để bạn kiểm tra
    
    // Chuyển hướng sang trang Login (Giả sử đường dẫn là /login)
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-start font-sans text-[#333]">
      
      {/* 1. HEADER */}
      <div className="w-full">
        <Header />
      </div>

      {/* PAGE TITLE */}
      <h2 className="text-[1.8rem] font-bold mt-10 mb-8 text-center text-black">
        Create your account
      </h2>

      {/* SIGNUP CONTAINER */}
      <div className="w-full max-w-[500px] bg-[#F5F7FF] p-10 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-10 mx-4">
        <h3 className="text-[1.2rem] font-semibold mt-[15px] mb-[20px] text-black">
          Account information
        </h3>

        <form className="flex flex-col" onSubmit={handleSignUp}>
          {/* Phone */}
          <div className="mb-[15px]">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone number</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 border border-[#ccc] rounded-md text-[1rem] focus:outline-none focus:border-[#4C8787] transition-colors"
              required
            />
          </div>

          {/* First Name */}
          <div className="mb-[15px]">
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">First name</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full p-3 border border-[#ccc] rounded-md text-[1rem] focus:outline-none focus:border-[#4C8787] transition-colors"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-[15px]">
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last name</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full p-3 border border-[#ccc] rounded-md text-[1rem] focus:outline-none focus:border-[#4C8787] transition-colors"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-[15px]">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border border-[#ccc] rounded-md text-[1rem] focus:outline-none focus:border-[#4C8787] transition-colors"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-[5px]">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 border border-[#ccc] rounded-md text-[1rem] focus:outline-none focus:border-[#4C8787] transition-colors"
              required
            />
          </div>

          {/* Password Rules */}
          <ul className="text-sm text-[#333] mb-[15px] pl-5 list-disc">
            <p className="font-medium -ml-5 mb-1">Your password needs</p>
            <li>1+ special characters (?,@,#,...)</li>
            <li>1+ digits (1,2,3,..)</li>
            <li>8+ characters in total</li>
          </ul>

          {/* Confirm Password */}
          <div className="mb-[20px]">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full p-3 border border-[#ccc] rounded-md text-[1rem] focus:outline-none focus:border-[#4C8787] transition-colors"
              required
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 shrink-0 cursor-pointer"
              required
            />
            <label htmlFor="agreeTerms" className="ml-3 text-sm text-[#666] leading-snug">
              I agree to the{' '}
              <a href="#" className="text-[#F9B50B] font-semibold hover:underline decoration-[#F9B50B]">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#F9B50B] font-semibold hover:underline decoration-[#F9B50B]">
                Privacy Policy.
              </a>
            </label>
          </div>

          {/* Marketing Checkbox */}
          <div className="flex items-start mb-8">
            <input
              type="checkbox"
              id="marketing"
              checked={formData.marketing}
              onChange={handleChange}
              className="mt-1 w-4 h-4 shrink-0 cursor-pointer"
            />
            <label htmlFor="marketing" className="ml-3 text-sm text-[#666] leading-snug">
              Send me emails with discounts, special offers, and new product arrivals.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[70%] mx-auto bg-[#4C8787] text-white py-3 px-6 rounded-[25px] text-[1rem] font-semibold hover:bg-[#467979] transition-all duration-200 block"
          >
            Create an account
          </button>
        </form>

        {/* Social Login Buttons */}
        <div className="flex justify-between gap-[10px] mt-[20px]">
          <button className="flex-1 flex items-center justify-center gap-2 text-black bg-white border border-[#ccc] p-[10px] text-[1rem] font-semibold cursor-pointer hover:bg-[#e9e9e9] transition-colors">
            <FaGoogle /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 text-black bg-white border border-[#ccc] p-[10px] text-[1rem] font-semibold cursor-pointer hover:bg-[#e9e9e9] transition-colors">
            <FaFacebookF /> Facebook
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#F5F7FF] py-10 mt-auto">
        <div className="max-w-[950px] mx-auto flex flex-col md:flex-row justify-around text-center gap-10 px-5">
          
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="mb-5">
              <FaHeadset className="text-[#3d6d6d] text-[30px]" />
            </div>
            <h3 className="text-[1.1rem] font-semibold mb-[10px] text-black">Product Support</h3>
            <p className="text-[0.95rem] text-[#333] leading-relaxed max-w-[250px]">
              Up to 3 years on-site warranty available for your peace of mind.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center flex-1">
            <div className="mb-5">
              <FaUserCircle className="text-[#3d6d6d] text-[30px]" />
            </div>
            <h3 className="text-[1.1rem] font-semibold mb-[10px] text-black">Personal Account</h3>
            <p className="text-[0.95rem] text-[#333] leading-relaxed max-w-[250px]">
              With big discounts, free delivery and a dedicated support specialist.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center flex-1">
            <div className="mb-5">
              <FaPiggyBank className="text-[#3d6d6d] text-[30px]" />
            </div>
            <h3 className="text-[1.1rem] font-semibold mb-[10px] text-black">Amazing Savings</h3>
            <p className="text-[0.95rem] text-[#333] leading-relaxed max-w-[250px]">
              Up to 70% off new Products, you can be sure of the best price.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default SignUp;