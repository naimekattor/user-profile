import React from "react";
import UserForm from "../UserForm/UserForm";
import SideBar from "../SideBar/SideBar";

const UserProfile = ({ open }) => {
  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 h-full z-10 bg-gray-100 transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <SideBar />
      </div>

      <div className="flex items-center justify-between px-8 py-6">
        <h1>Personal Info</h1>
        <button className="bg-[#8d88fc] px-4 py-2 rounded-2xl text-white font-medium">
          Edit Info
        </button>
      </div>
      <div>
        <UserForm />
      </div>
    </div>
  );
};

export default UserProfile;
