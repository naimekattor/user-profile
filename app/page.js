import Image from "next/image";
import UserProfile from "./../components/userProfile/UserProfile";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <UserProfile />
    </div>
  );
}
