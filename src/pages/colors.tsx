import React from "react";
import { IoIosAdd } from "react-icons/io";
const Colors = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-4xl font-bold text-slate-950">Colors</div>
          <div className="text-lg text-slate-600">
            Manage colors for your stores
          </div>
        </div>
        <button className="rounded-lg bg-black p-2 text-white">
          <div className="flex items-center space-x-3">
            <IoIosAdd className="h-5 w-5" />
            <p>Add new</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Colors;
