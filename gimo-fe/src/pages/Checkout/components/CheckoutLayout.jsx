import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../../components/layout/user/Header';
import Footer from '../../../components/layout/user/Footer';
import CheckoutStepper from './CheckoutStepper';

const CheckoutLayout = () => {
  const location = useLocation();

  // Map path to step number
  const stepMapping = {
    '/checkout/phone-number': 2,
    '/checkout/verify-phone': 2,
    '/checkout/identity-verification': 2,
    '/checkout/shipping-address': 3,
    '/checkout/payment': 4,
    '/checkout/review': 5,
  };
  
  // Bước đầu tiên (Info) được coi là hoàn thành khi vào checkout
  const getStepNumber = (path) => {
    if (stepMapping[path]) return stepMapping[path];
    if (path.startsWith('/checkout/review')) return 5;
    return 1; // Default
  };

  const currentStep = getStepNumber(location.pathname);
  const showStepper = currentStep > 1; // Chỉ hiện stepper từ bước 2 trở đi

  return (
    <div className="bg-[#F0F4F8] min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showStepper && <CheckoutStepper currentStep={currentStep} />}
        <Outlet /> {/* Đây là nơi các trang con sẽ được render */}
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutLayout;