import React, { useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <span>
          {isOpen ? <IoRemove className="w-6 h-6" /> : <IoAdd className="w-6 h-6" />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;