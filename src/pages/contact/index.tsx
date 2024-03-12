import React from "react";
import StoreNav from "../components/StoreNav";
import Footer from "../components/Footer";
import { Input } from "@nextui-org/react";

const Contact = () => {
  return (
    <div>
      <StoreNav />
      <div className="relative mt-[100px] text-4xl">
        
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
          <p className=" font-semibold">Contact</p>
        </div>
        <img src="./banner.jpg" className="h-auto w-full " />
      </div>
      <div className="mx-[100px] grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 ">
        <div>
          <p className="text-2xl font-bold mb-8">Our Company</p>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quo
            quia cupiditate, dolore possimus quidem maxime, neque beatae. Fuga
            maxime quos recusandae ratione earum atque, quam sunt dolorem illum
            dolor.
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold mb-8">Send us your email</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4  ">
            <input
              key="outside"

              placeholder="Your Name"
              className="w-full   border-[#f9f9f9] bg-[#f9f9f9] p-2"
            />

            <input
              key="outside"
              placeholder="Your email"
              className="w-full  border border-solid border-[#f9f9f9] bg-[#f9f9f9] p-2"
            />

            <input
              key="outside"

              placeholder="Subject"
              className="w-full  border border-solid border-[#f9f9f9] bg-[#f9f9f9] p-2"
            />

            <input
              key="outside"

              placeholder="Phone"
              className="w-full  border border-solid border-[#f9f9f9] bg-[#f9f9f9] p-2"
            />
          </div>
          <textarea
              key="outside"
              placeholder="Message"
              className="w-full h-[200px] mt-4  border border-solid border-[#f9f9f9] bg-[#f9f9f9] p-2"
            />
            <button className="text-white bg-black px-4 py-3 text-xl mt-4 hover:bg-orange-600">
              Send Message
            </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
