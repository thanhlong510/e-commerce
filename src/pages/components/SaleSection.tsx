import { Image } from "@nextui-org/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const SaleSection = () => {
  return (
    <div className="flex items-center space-x-7 px-32 mt-20">
      <div className="relative">
        <Image isZoomed src="/sale1.jpg" className='opacity-100'/>
        <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <p className="text-xl font-bold text-white">SUMMER</p>
          <p className="font-black text-6xl text-white">SALE</p>
          <p className="font-black text-2xl text-white ">UPTO 50% OFF</p>
          <button className="flex items-center justify-between hover:bg-red-500 space-x-2 mt-4 bg-black px-3 py-2 text-base font-semibold text-white ">
        <FaShoppingCart  />
        <p>SHOP NOW</p>
      </button>
        </div>
      </div>
      <div className="relative">
        <Image isZoomed src="/sale2.jpg" className='opacity-100' />
        <div className="absolute z-20 left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 transform">
          <p className="text-xl font-bold text-white">SAVE UP</p>
          <p className="font-black text-6xl text-white">50%</p>
          <p className="font-black text-2xl text-white ">OFF</p>
          <button className="flex items-center justify-between hover:bg-red-500 space-x-2 mt-4 bg-black px-3 py-2 text-base font-semibold text-white ">
        <FaShoppingCart  />
        <p>SHOP NOW</p>
      </button>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
