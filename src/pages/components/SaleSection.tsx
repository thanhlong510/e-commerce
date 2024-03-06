import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const SaleSection = () => {
  return (
    <div className="mt-20 flex items-center space-x-7 px-32">
      <Link href={"./shop"}>
        <div className="relative">
          <Image isZoomed src="/sale1.jpg" className="opacity-100" />
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform">
            <p className="text-xl font-bold text-white">SUMMER</p>
            <p className="text-6xl font-black text-white">SALE</p>
            <p className="text-2xl font-black text-white ">UPTO 50% OFF</p>
            <button className="mt-4 flex items-center justify-between space-x-2 bg-black px-3 py-2 text-base font-semibold text-white hover:bg-red-500 ">
              <FaShoppingCart />
              <p>SHOP NOW</p>
            </button>
          </div>
        </div>
      </Link>

      <Link href={"./shop"}>
        <div className="relative">
          <Image isZoomed src="/sale2.jpg" className="opacity-100" />
          <div className="absolute left-1/2 top-1/2 z-20  -translate-x-1/2 -translate-y-1/2 transform">
            <p className="text-xl font-bold text-white">SAVE UP</p>
            <p className="text-6xl font-black text-white">50%</p>
            <p className="text-2xl font-black text-white ">OFF</p>
            <button className="mt-4 flex items-center justify-between space-x-2 bg-black px-3 py-2 text-base font-semibold text-white hover:bg-red-500 ">
              <FaShoppingCart />
              <p>SHOP NOW</p>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SaleSection;
