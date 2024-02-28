import { useRouter } from "next/router";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import BillboardTable from "~/pages/components/BillboardTable";
import Navbar from "~/pages/components/Navbar";

const Billboards = () => {
  const router = useRouter()
  return (
    <div>
         <Navbar/>
    <div className="p-4">

      <div className="flex border-b border-solid pb-4 mb-4 items-center justify-between">
        <div>
          <div className="text-4xl font-bold text-slate-950">Billboards</div>
          <div className="text-lg text-slate-600">
            Manage billboard for your stores
          </div>
        </div>
       
        <button  onClick={async(e) => await router.push(`${router.pathname}/create`)}  className="text-white p-2 bg-black rounded-lg">
          <div className="flex items-center space-x-2 px-2">
            <IoIosAdd className="h-5 w-5" />
            <p>Add new</p>
          </div>
        </button>
      </div>
      <BillboardTable/>
    </div>
    </div>
   
  );
};

export default Billboards;
