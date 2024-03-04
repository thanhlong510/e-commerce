import React from "react";
import SideNavbar from "~/components/SideBar";
import SettingTable from "../components/SettingTable";


const Settings = () => {
  return (
    <div>
      <div className="flex min-h-screen w-full bg-white text-black">
        <SideNavbar />
        <div className="w-2/3 px-8 pt-2">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between border-b border-solid pb-4">
              <div>
                <div className="flex items-center space-x-2 text-4xl font-bold text-slate-950 ">
                  <div className="">Settings
                  </div>
                </div>

                <div className="text-lg text-slate-600">
                  Manage your Setting
                </div>
              </div>
            </div>
          </div>
          <SettingTable />
        </div>
      </div>
    </div>
  );
};

export default Settings;
