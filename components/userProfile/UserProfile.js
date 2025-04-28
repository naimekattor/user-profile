import React from "react";
import { Divider } from "@mui/material/Divider";
import UserForm from "../UserForm/UserForm";

const UserProfile = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-8  py-6">
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
