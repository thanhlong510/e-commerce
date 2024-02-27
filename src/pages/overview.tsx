import React from "react";
import { IoIosAdd } from "react-icons/io";
import DashBoardPage from "./components/DashBoardPage";


const Overview = () => {
  
  return (
    <div className="p-4">
      <div className="flex items-center justify-between border-b pb-4 border-solid mb-4">
        <div>
          <div className="text-4xl font-bold text-slate-950">Dashboard</div>
          <div className="text-lg text-slate-600">
            Overview of your stores
          </div>
        </div>
      </div>

      <DashBoardPage />
    </div>
  );
};

export default Overview;
