import { useRouter } from "next/router";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import CategoriesTable from "~/pages/components/CategoriesTable";



const Colors = () => {
    const router = useRouter()

  return (
    <div className="p-4">
      <div className="flex border-b border-solid pb-4 mb-4 items-center justify-between">
        <div>
          <div className="text-4xl font-bold text-slate-950">Colors</div>
          <div className="text-lg text-slate-600">
          Manage colors for your store
          </div>
        </div>
       
        <button  onClick={async() => await router.push(`${router.pathname}/create`)}  className="text-white p-2 bg-black rounded-lg">
          <div className="flex items-center space-x-2 px-2">
            <IoIosAdd className="h-5 w-5" />
            <p>Add new</p>
          </div>
        </button>
      </div>
  
      <CategoriesTable/>
    </div>
  );
};

export default Colors;
