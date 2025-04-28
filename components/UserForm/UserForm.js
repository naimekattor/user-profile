"use client";
import React, { useRef } from "react";
const UserForm = () => {
  const fileInputRef = useRef();
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <form className=" flex flex-col md:flex-row gap-8 items-center px-8 py-6 relative">
      <div className="lg:w-[30%] w-full">
        <div className="flex justify-center flex-col items-center">
          <div className="min-h-[10rem] min-w-[10rem] rounded-full border-4 border-gray-200 flex justify-center items-center overflow-hidden"></div>
          <input type="file" ref={fileInputRef} style={{ display: "none" }} />
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
            onClick={handleButtonClick}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934L22.0007 13.3417C21.3749 13.1204 20.7015 13 20 13V5H4L4.001 19L13.2929 9.70715C13.6528 9.34604 14.22 9.31823 14.6123 9.62322L14.7065 9.70772L18.2521 13.2586C15.791 14.0069 14 16.2943 14 19C14 19.7015 14.1204 20.3749 14.3417 21.0007L2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:w-[70%] w-full lg:px-10 px-4 flex flex-col gap-6">
        <div className="flex w-full gap-4">
          <label
            htmlFor="name"
            className="w-[30%] text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            className="w-[70%] py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="name"
            value=""
          />
        </div>
        <div className="flex w-full gap-4">
          <label
            htmlFor="email"
            className="w-[30%] text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            className="w-[70%] py-2 px-4 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
            disabled=""
            value=""
          />
        </div>
        <div className="flex w-full gap-4">
          <label
            htmlFor="address"
            className="w-[30%] text-lg font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            className="w-[70%] py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="address"
            value=""
          />
        </div>
        <div className="flex w-full gap-4">
          <label
            htmlFor="phone"
            className="w-[30%] text-lg font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            className="w-[70%] py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="phone"
            value=""
          />
        </div>
        <div className="flex w-full gap-4">
          <label
            htmlFor="role"
            className="w-[30%] text-lg font-medium text-gray-700"
          >
            Role
          </label>
          <input
            type="text"
            className="w-[70%] py-2 px-4 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
            disabled=""
            value=""
          />
        </div>
        <div className="flex w-full gap-4">
          <label
            htmlFor="joined"
            className="w-[30%] text-lg font-medium text-gray-700"
          >
            Joined
          </label>
          <input
            type="text"
            className="w-[70%] py-2 px-4 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
            disabled=""
            value=""
          />
        </div>
      </div>
    </form>
  );
};

export default UserForm;
