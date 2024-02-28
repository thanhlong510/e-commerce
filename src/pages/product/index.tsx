import React from "react";
import StoreNav from "../components/StoreNav";
import { Image } from "@nextui-org/react";

import { BsCart } from "react-icons/bs";
import Tabs from "../components/Tabs";
const Product = () => {
  return (
    <div>
      <StoreNav />
      <div className="flex items-center justify-center pt-[180px]">
        <div className="ml-[-750px] flex-grow border-t border-gray-300"></div>
        <div className="mx-4 text-4xl font-extrabold ">
          Best Selling Products
        </div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="mx-24 mt-10 flex items-center justify-between space-x-4">
        <Image
          isZoomed
          src={"/slider1.jpg"}
          width={526}
          className=" h-[500px]"
        />
        <div className="w-2/3">
          <p className="mb-[17px] text-2xl font-bold">
            Straight-fit stretch golf pant
          </p>
          <p className="mb-[15px] text-lg font-medium">$ 150.66</p>
          <p className="mb-4 text-[#666666]">
            Santiago who travels from his homeland in Spain to the Egyptian
            desert in search of a treasure buried near the Pyramids. Lorem ipsum
            dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt
            ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing
            elitet.
          </p>
          <p className="mb-2 text-base">SKU: WERTYQ</p>
          <p className="mb-2 text-base">
            Vendor: <span className="text-[#666666]">Lereve</span>{" "}
          </p>
          <p className="text-base">Avability: In stock</p>
          <div className="mt-4 flex space-x-4">
            <input
              type="number"
              className="h-[47px] w-[132px] border border-solid bg-white text-center text-base font-semibold text-black focus:outline-none"
            />
            <button className="flex h-[47px] items-center space-x-4 bg-black px-[30px] py-[11.5px] text-white hover:bg-red-500">
              <BsCart />
              <p>Add the cart</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-24 my-20">
      <Tabs/>
      </div>
      
    </div>
  );
};

export default Product;
