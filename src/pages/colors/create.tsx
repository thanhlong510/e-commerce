import React from "react";
import TitleHeader from "../components/TitileHeader";
import { Input } from "@nextui-org/react";
const CreateColor = () => {
  return (
    <div className="p-4 ">
      <TitleHeader
        header="Create your Colors"
        subHeader="Add a new color"
      />
      <div className="flex items-center justify-between space-x-10 md:space-x-30">
        <div>
          <p className="text-xl mb-3 font-bold">Name</p>
          <Input
            key="outside-left"
            placeholder="Category name"
            className=" min-w-[100px] max-w-[450px] rounded-lg border"
          />
        </div>
        <div>
          <p className="text-xl mb-3 font-bold">Color</p>
          <Input
            key="outside-left"
            placeholder="Category name"
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
  );
};

export default CreateColor;
