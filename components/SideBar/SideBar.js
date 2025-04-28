import React from "react";
import { FaCartShopping, FaMapLocation } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
const SideBar = () => {
  return (
    <div className="py-8 px-6 w-[14rem] h-screen bg-white flex  flex-col shadow-2xl">
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="w-[60px] h-[60px] rounded-full border-2 border-gray-200"></div>
        <div className="pb-4">
          <h1 className="text-xl font-bold text-black pt-2 text-center">
            Name
          </h1>
          <p className="text-[16px] text-[#919191] text-center">
            Member Type: General
          </p>
          <h3 className="text-[14px] font-medium text-center">
            Points:<span className="text-red-600 font-bold">0</span>{" "}
          </h3>
        </div>
      </div>

      <div className="flex  flex-col gap-4 pt-4 border-t-2 border-gray-200">
        <div className="flex items-center gap-3 py-3 px-4 text-[16px] hover:bg-[#f5f5f5] hover:cursor-pointer">
          <span>
            <FaCartShopping />
          </span>
          <span>My Orders</span>
        </div>
        <div className="flex items-center gap-3 py-3 px-2 text-[16px] hover:bg-[#f5f5f5] hover:cursor-pointer">
          <span>
            <FaLocationDot />
          </span>
          <span>Change Password</span>
        </div>
        <div className="flex items-center gap-3 py-3 px-4 text-[16px] hover:bg-[#f5f5f5] hover:cursor-pointer">
          <span>
            <RiLogoutCircleLine />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
