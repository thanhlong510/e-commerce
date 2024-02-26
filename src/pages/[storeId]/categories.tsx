import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

const Categories = () => {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-4xl font-bold text-slate-950">Categories</div>
          <div className="text-lg text-slate-600">
            Manage categories for your stores
          </div>
        </div>
        <button className="rounded-lg bg-black p-2 text-white">
          <div className="flex items-center space-x-3">
            <IoIosAdd className="h-5 w-5" />
            <p>Add new</p>
          </div>
        </button>
      </div>
      <input
        type="text"
        id="title"
        className="mt-1 h-auto min-h-[20px] w-full rounded py-2 text-2xl font-extrabold focus:outline-none "
        placeholder="Add the category"
        onChange={handleTitleChange}
      />

      <button className="text-lg font-bold">Submit</button>
    </div>
  );
};

export default Categories;
