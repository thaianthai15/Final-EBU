import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloudUploadOutline, IoCameraOutline, IoAlertCircle, IoCheckmarkCircle } from 'react-icons/io5';
import selfieImage from '../../assets/images/avatar.png'; // Bạn cần có ảnh mẫu

const IdentityVerificationPage = () => {
  const navigate = useNavigate();
  const [frontIdUploaded, setFrontIdUploaded] = useState(true); // Giả lập đã upload
  const [backIdUploaded, setBackIdUploaded] = useState(true); // Giả lập đã upload
  const [selfieTaken, setSelfieTaken] = useState(true); // Giả lập đã chụp

  const allVerified = frontIdUploaded && backIdUploaded && selfieTaken;

  const handleContinue = () => {
    if(allVerified) {
      navigate('/checkout/shipping-address');
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-center">Identity Verification</h1>
      <p className="text-gray-500 mb-8 text-center">
        To protect your account and ensure secure rentals, please upload the front and back of your ID card (CCCD) and a selfie for identity verification.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
        {/* ID Upload Section */}
        <div className="space-y-6">
          {/* Front Side */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <h3 className="font-semibold mb-4">Upload Front Side of your ID</h3>
             <div className="flex justify-center gap-4">
               <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100">
                 <IoCloudUploadOutline/> Upload photo
               </button>
               <span className="self-center">or</span>
               <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100">
                 <IoCameraOutline/> Take Photo
               </button>
             </div>
          </div>
           {/* Back Side */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <h3 className="font-semibold mb-4">Upload Back Side of your ID</h3>
             <div className="flex justify-center gap-4">
               <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100">
                 <IoCloudUploadOutline/> Upload photo
               </button>
               <span className="self-center">or</span>
               <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100">
                 <IoCameraOutline/> Take Photo
               </button>
             </div>
          </div>
          <div className="text-sm text-gray-500 space-y-2">
              <p>ⓘ Must be clear and readable</p>
              <p>ⓘ No blur, no reflection</p>
              <p>ⓘ Full image – all corners visible</p>
          </div>
        </div>
        
        {/* Selfie Section */}
        <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4">Selfie – Face Verification</h3>
            <img src={selfieImage} alt="Selfie placeholder" className="w-48 h-48 rounded-lg object-cover border"/>
        </div>
      </div>
      
       {/* Verification Status */}
      <div className="bg-gray-50 rounded-lg p-4 space-y-2 mb-8">
        <p className={`flex items-center gap-2 ${frontIdUploaded ? 'text-green-600' : 'text-gray-500'}`}>
          <IoCheckmarkCircle /> Clear and readable CCCD
        </p>
         <p className={`flex items-center gap-2 ${backIdUploaded ? 'text-green-600' : 'text-gray-500'}`}>
          <IoCheckmarkCircle /> Back side uploaded
        </p>
         <p className={`flex items-center gap-2 ${selfieTaken ? 'text-green-600' : 'text-gray-500'}`}>
          <IoCheckmarkCircle /> Selfie successfully captured
        </p>
        <p className="flex items-center gap-2 text-yellow-600 pt-2">
            <IoAlertCircle /> Your data is encrypted and securely stored.
        </p>
      </div>

      <button
        onClick={handleContinue}
        disabled={!allVerified}
        className="w-full max-w-xs mx-auto flex justify-center bg-[#4C8787] text-white font-semibold py-3 rounded-full transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-teal-700"
      >
        Continue
      </button>
    </div>
  );
};

export default IdentityVerificationPage;