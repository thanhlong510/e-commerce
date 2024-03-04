import React from "react";
import TitleHeader from "../../components/TitileHeader";
import { Input } from "@nextui-org/react";
import Navbar from "~/pages/components/Navbar";
const CreateProduct = () => {
  return (<div>
    <Navbar/>
    <div className="p-4 ">
      
      <TitleHeader
        header="Create your Orders"
        subHeader="Add a new color"
      />
      <div className="flex items-center space-x-5 md:space-x-32">
        <div>
          <p className="text-xl mb-3 font-bold">Item</p>
          <Input
            key="outside-left"
            placeholder="Item"
            className=" min-w-[100px] max-w-[450px] rounded-lg border"
          />
        </div>
        <div>
          <p className="text-xl mb-3 font-bold">Method</p>
          <Input
            key="outside-left"
            placeholder="Method"
            className=" min-w-[100px] max-w-[450px] rounded-lg border"
          />
        </div>
        <div>
        </div>
      </div>
      <button className="px-2 py-1 mt-3 font-bold rounded-md text-slate-200 hover:text-slate-400 bg-black  ">
        Create
      </button>
    </div>
  </div>
    
  );
};

export default CreateProduct;
