import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderSummary from './components/OrderSummary';
import { IoInformationCircle } from 'react-icons/io5';

const PhoneVerificationPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleContinue = () => {
    // TODO: Add actual code verification logic here
    navigate('/checkout/identity-verification');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-center">
      <div className="lg:col-span-2 flex justify-center">
        <div className="bg-white rounded-xl p-8 shadow-sm w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-2">Enter code to confirm your new phone number</h1>
          <p className="text-gray-500 mb-6">
            For added security, we just sent you a verification code, please enter it here.
          </p>

          <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-lg p-3 mb-6 flex items-start gap-3">
            <IoInformationCircle className="w-5 h-5 mt-0.5 text-blue-500" />
            <span>Code sent via SMS to your number +84376533690.</span>
          </div>
          
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="· · · · · ·"
            maxLength={6}
            className="w-full p-3 border border-gray-300 rounded-lg text-center tracking-[1em] text-2xl font-mono focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <p className="text-sm text-center text-gray-500 mt-4">
            Didn't get the code? <a href="#" className="font-semibold text-[#4C8787] hover:underline">Resend</a>
          </p>

          <button 
            onClick={handleContinue}
            disabled={code.length < 6} // Enable button when code is 6 digits
            className="w-full bg-[#4C8787] text-white font-semibold py-3 rounded-full mt-6 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-teal-700"
          >
            Continue
          </button>
        </div>
      </div>
       <div className="flex justify-center lg:justify-start">
        <OrderSummary onEdit={() => navigate('/')} />
      </div>
    </div>
  );
};

export default PhoneVerificationPage;