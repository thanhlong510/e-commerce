import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
const DashBoardPage = () => {
  return (
    <div>
      <div>
        <div className="grid  grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-2xl border border-solid py-4">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Total Revenue</p>
              <LuDollarSign className="h-4 w-4" />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="text-2xl font-bold">$100.00</div>
            </CardBody>
          </Card>
          <Card className="rounded-2xl border border-solid py-4">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Sales</p>
              <CiWallet className="h-4 w-4" />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="text-2xl font-bold">+1</div>
            </CardBody>
          </Card>
          <Card className="rounded-2xl border border-solid py-4">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Total Revenue</p>
              <IoStorefrontOutline className="h-4 w-4" />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="text-2xl font-bold">7</div>
            </CardBody>
          </Card>
        </div>
        <div>
        <Card className="rounded-2xl mt-2 h-full border border-solid py-4">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Total Revenue</p>
              <LuDollarSign className="h-4 w-4" />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="text-2xl font-bold">$100.00</div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
