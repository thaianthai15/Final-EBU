// src/components/DatePickerModal.jsx
import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { vi } from "date-fns/locale";
import {
  IoChevronUpOutline,
  IoChevronDownOutline,
  IoArrowBack,
  IoArrowForward,
} from "react-icons/io5";

// Custom CSS cho lịch, sẽ được thêm ở Bước 4
import "../../../DatePicker.css";

const DatePickerModal = ({ isOpen, onClose, onSave, initialDates }) => {
  const [startDate, setStartDate] = useState(initialDates.start);
  const [endDate, setEndDate] = useState(initialDates.end);
  const [activePicker, setActivePicker] = useState("start"); // 'start' or 'end'

  // Cập nhật lại ngày khi modal được mở lại với giá trị mới
  useEffect(() => {
    if (isOpen) {
      setStartDate(initialDates.start);
      setEndDate(initialDates.end);
      setActivePicker("start");
    }
  }, [isOpen, initialDates]);

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    onSave({ start: startDate, end: endDate });
  };

  const selectedDate = activePicker === "start" ? startDate : endDate;
  const setSelectedDate = activePicker === "start" ? setStartDate : setEndDate;

  // Định dạng ngày tháng để hiển thị
  const formatDate = (date) => {
    if (!date) return "Choose Your Day";
    return new Intl.DateTimeFormat("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    // Lớp nền mờ (Overlay)
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Nội dung Modal */}
      <div
        className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-3xl flex gap-6"
        onClick={(e) => e.stopPropagation()} // Ngăn việc click vào modal làm đóng modal
      >
        {/* Cột Lịch */}
        <div className="flex-1">
          <DayPicker
            mode="single"
            required
            selected={selectedDate}
            onSelect={(date) => {
              if (date) setSelectedDate(date);
            }}
            locale={vi}
            showOutsideDays
            components={{
              IconLeft: () => <IoArrowBack />,
              IconRight: () => <IoArrowForward />,
            }}
            // Tắt các ngày trước ngày bắt đầu khi chọn ngày kết thúc
            disabled={
              activePicker === "end" ? { before: startDate } : undefined
            }
          />
        </div>

        {/* Cột chọn ngày */}
        <div className="w-64 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Start Day Picker */}
            <div
              onClick={() => setActivePicker("start")}
              className={`w-full border rounded-full px-5 py-3 cursor-pointer ${
                activePicker === "start" ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Start Day
                  </p>
                  <p className="text-gray-500">{formatDate(startDate)}</p>
                </div>
                {activePicker === "start" ? (
                  <IoChevronUpOutline />
                ) : (
                  <IoChevronDownOutline />
                )}
              </div>
            </div>

            {/* End Day Picker */}
            <div
              onClick={() => setActivePicker("end")}
              className={`w-full border rounded-full px-5 py-3 cursor-pointer ${
                activePicker === "end" ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-gray-700">End Day</p>
                  <p className="text-gray-500">{formatDate(endDate)}</p>
                </div>
                {activePicker === "end" ? (
                  <IoChevronUpOutline />
                ) : (
                  <IoChevronDownOutline />
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-[#4C8787] text-white font-semibold py-3 rounded-full hover:bg-teal-700 transition-colors"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePickerModal;
