import React from "react";
import DashBoardPage from "../components/DashBoardPage";
import { FaArrowsRotate } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import SideNavbar from "~/components/SideBar";
import ButtonTime from "../components/ButtonTime";
const Overview = () => {
  return (
    <div>
      <div className="flex min-h-screen w-full bg-white text-black">
        <SideNavbar />
        <div className="w-full px-8 pt-2">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between border-b border-solid pb-4">
              <div className="w-full">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center space-x-2 text-4xl font-bold text-slate-950">
                    <div className="">Dashboard</div>
                    <MdDashboard />
                  </div>

                  <div className="flex items-center space-x-5">
                    <div className="flex items-center space-x-3">
                      <p className="text-xl font-semibold">Data Refresh</p>
                      <button className="transform text-blue-500 transition duration-300 ease-in-out hover:rotate-90">
                        <FaArrowsRotate />
                      </button>
                    </div>
                    <ButtonTime />
                  </div>
                </div>

                <div className="text-lg text-slate-600">
                  Overview of your stores
                </div>
              </div>
            </div>
            <DashBoardPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
