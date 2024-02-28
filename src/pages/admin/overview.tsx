import React from "react";
import { IoIosAdd } from "react-icons/io";
import DashBoardPage from "../components/DashBoardPage";
import Navbar from "../components/Navbar";

const Overview = () => {
  return (
    <div>
      <Navbar/>
      <div className="p-4">
          <div className="mb-4 flex items-center justify-between border-b border-solid pb-4">
        <div>
          <div className="text-4xl font-bold text-slate-950">Dashboard</div>
          <div className="text-lg text-slate-600">Overview of your stores</div>
        </div>
      </div>
      <DashBoardPage />
    </div>
    </div>
   
  );
};

export default Overview;
