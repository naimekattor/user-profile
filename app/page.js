"use client";
import { useState } from "react";
import UserProfile from "./../components/userProfile/UserProfile";
import Header from "@/components/Header/Header";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header setOpen={setOpen} open={open} />
      <UserProfile open={open} />
    </div>
  );
}
