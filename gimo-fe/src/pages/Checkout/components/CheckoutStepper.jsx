import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

const CheckoutStepper = ({ currentStep }) => {
  const steps = [
    { number: 1, title: 'Info' },
    { number: 2, title: 'Account details' },
    { number: 3, title: 'Shipping Address' },
    { number: 4, title: 'Payment method' },
    { number: 5, title: 'Review' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2
                  ${currentStep > step.number ? 'bg-[#4C8787] border-[#4C8787] text-white' : ''}
                  ${currentStep === step.number ? 'bg-[#4C8787] border-[#4C8787] text-white' : 'border-gray-300 bg-white text-gray-500'}
                  ${currentStep < step.number ? 'border-gray-300 bg-white text-gray-500' : ''}
                `}
              >
                {currentStep > step.number ? <IoCheckmark size={24} /> : step.number}
              </div>
              <p className={`mt-2 text-sm font-medium ${currentStep >= step.number ? 'text-gray-800' : 'text-gray-400'}`}>
                {step.title}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 ${currentStep > step.number ? 'bg-[#4C8787]' : 'bg-gray-300'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutStepper;