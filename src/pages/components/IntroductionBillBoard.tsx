import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const IntroductionBillBoard = () => {
  return (
    <div>
      {" "}
      <div>
        <span className="mb-[10px] text-2xl text-[#CF0018]">New Arrival</span>
        <p className="text-8xl font-bold">WOMEN</p>
        <p className="mb-4 text-8xl font-bold">COLLECTION</p>
        <span className="mb-4 text-8xl font-bold italic text-[#CF0018]">
          -50%
        </span>
      </div>
      <button className="flex items-center justify-between hover:bg-red-500 space-x-2 mt-4 bg-black px-8 py-3 text-base font-semibold text-white ">
        <FaShoppingCart className="h-[20px] w-[20px] font-bold" />
        <p>SHOP NOW</p>
      </button>
    </div>
  );
};

export default IntroductionBillBoard;
