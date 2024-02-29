import React from "react";
import DashBoardPage from "../components/DashBoardPage";
import Navbar from "../components/Navbar";
import { FaArrowsRotate } from "react-icons/fa6";
import dayjs from 'dayjs'
const Overview = () => {
  const currentDate = new Date();
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between border-b border-solid pb-4">
          <div className="w-full">
            <div className="justify-between w-full flex items-center">
              <div className="text-4xl font-bold text-slate-950">Dashboard</div>
              <div className="flex items-center space-x-5">
               
                <div className="flex items-center space-x-3">
                  <p className="text-xl font-semibold">Data Refresh</p>
                  <button className="transform hover:rotate-90 text-blue-500 transition duration-300 ease-in-out">
                  <FaArrowsRotate />
                  </button>
                  
                </div>
                <button className=" bg-slate-200 font-medium px-2 py-3 rounded-lg">
                {`${dayjs(currentDate).format("MMM D, YYYY H:m A")}`}

                </button>
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
  );
};

export default Overview;
