import Link from "next/link";
import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GrUserAdmin } from "react-icons/gr";
import { Tooltip } from "@nextui-org/react";
import { Badge, Avatar } from "@nextui-org/react";
import { BsCartCheck } from "react-icons/bs";
const StoreNav = () => {
  return (
    <div className=" py-5 fixed left-0  right-0 top-0 z-50 bg-white shadow-md">
      <div className="flex h-[60px]  items-center justify-between bg-transparent px-10 py-5 font-serif">
        <a href="./" className="text-3xl font-semibold">Fashion Store</a>
        <div className="flex items-center">
          <button className="block md:hidden"></button>
          <div className="flex items-center space-x-4 ">
            <Link href={"/"}>
              <div className=" hover:text-red-600 flex items-center text-2xl font-medium">
                <p>Home</p>
                <FaLongArrowAltDown />{" "}
              </div>
            </Link>
            <Link href={"/"}>
              <div className=" hover:text-red-600 flex items-center text-2xl font-medium">
                <p>Shop</p>
                <FaLongArrowAltDown />{" "}
              </div>
            </Link>
            <Link href={"/"}>
              <div className=" hover:text-red-600 flex items-center text-2xl font-medium">
                <p>Men</p>
                <FaLongArrowAltDown />{" "}
              </div>
            </Link>
            <Link href={"/"}>
              <div className=" hover:text-red-600 flex items-center text-2xl font-medium">
                <p>Women</p>
                <FaLongArrowAltDown />{" "}
              </div>
            </Link>
          </div>
        </div>
        <div className=" flex items-center space-x-5">
          <div className="relative flex w-[220px] items-center">
            <input
              className="h-[45px] w-full bg-[#f3f3f3] px-4 focus:outline-none "
              placeholder="Search for products"
            />
            <button className="absolute right-1 hover:text-red-500">
              <CiSearch className="text-2xl " />
            </button>
          </div>
          <Tooltip className="p-1 bg-red-500 text-white rounded-full px-2" content="Admin Test">
            <button className="hover:text-red-500">
              <Link href={"/admin/overview"}>
                <GrUserAdmin className="text-2xl" />
              </Link>
            </button>
          </Tooltip>
          <Badge content="5" size="sm" className=" bg-slate-500 border-none text-xs text-white p-[2px]">
            <button className="hover:text-red-500">
            <BsCartCheck className="text-2xl"/>
            </button>
                
          </Badge>
          <Badge content="4" size="sm" className=" bg-red-600 border-none text-xs text-white p-[2px]">
            <Avatar
              radius="sm"
              className="h-[25px] w-[25px] rounded-full"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
          
        </div>
      </div>
    </div>
  );
};

export default StoreNav;
