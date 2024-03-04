import { useRouter } from "next/router";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import SideNavbar from "~/components/SideBar";
import AdminProduct from "~/pages/components/AdminProduct";

const Products = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex min-h-screen w-full bg-white text-black">
      <SideNavbar />
      <div className="w-full px-8 pt-2">
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between border-b border-solid pb-4">
          <div>
            <div className="text-4xl font-bold text-slate-950">Products</div>
            <div className="text-lg text-slate-600">
              Manage products for your store
            </div>
          </div>

          <button
            onClick={async () => await router.push(`${router.pathname}/create`)}
            className="rounded-lg bg-black p-2 text-white"
          >
            <div className="flex items-center space-x-2 px-2">
              <IoIosAdd className="h-5 w-5" />
              <p>Add new</p>
            </div>
          </button>
        </div>
      </div>
      <div className="px-4">
            <AdminProduct/>
          
      </div>
      </div>
      
    </div>
    </div>
  );
};

export default Products;
