import React from "react";
import TitleHeader from "../components/TitileHeader";
import { Input } from "@nextui-org/react";
const CreateCate = () => {
  return (
    <div className="p-4 ">
      <TitleHeader
        header="Create your Categories"
        subHeader="Add a new creator"
      />
      <div className="flex space-x-40">
        <div>
          <p className="text-xl font-bold">Name</p>
          <Input
            key="outside-left"
            placeholder="Category name"
            className="ml-3 max-w-[350px] rounded-lg border"
          />
        </div>
        <div>
          <p className="text-xl font-bold">Billboard</p>
          <Input
            key="outside-left"
            placeholder="Category name"
            className="ml-3 max-w-[350px] rounded-lg border"
          />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default CreateCate;
