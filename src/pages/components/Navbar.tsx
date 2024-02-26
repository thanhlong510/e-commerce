import React from "react";
import MainNav from "./main-nav";
import { IoStorefrontOutline } from "react-icons/io5";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div className="border-b px-4">
      <div className="flex h-16  items-center space-x-2 ">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center rounded-3xl border border-solid px-2 py-1 space-x-3 ">
            <div className="flex  items-center justify-between space-x-1">
              <IoStorefrontOutline />
              <div className="">Store <p className="hidden md:inline">
              switcher
              </p>
                 </div>
            </div>
            <HiOutlineChevronUpDown />
          </div>

          <MainNav />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
