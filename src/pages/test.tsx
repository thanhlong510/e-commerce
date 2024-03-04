import React from "react";
import SideNavbar from "~/components/ui/SideBar";
import { IoIosAdd } from "react-icons/io";
import { useRouter } from "next/router";
import AdminProduct from "./components/AdminProduct";
const Test = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen w-full bg-white text-black">
      <SideNavbar />
      <div className="w-full px-8 pt-2">
      
      </div>
      
    </div>
  );
};

export default Test;
