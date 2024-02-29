import React from "react";
import { Card, CardHeader, CardBody  } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import BarChart from "./BarChart";
import SalesCard from "./SalesCard";
import { TbWaveSine } from "react-icons/tb";
const uesrSalesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

const DashBoardPage = () => {
  return (
    <div>
      <div>
        <div className="grid  grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Card className="rounded-2xl border border-solid py-4 shadow-md">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Total Revenue</p>
              <LuDollarSign className="h-4 w-4" />
            </CardHeader>
            <CardBody className="overflow-visible px-4 py-2">
              <div className="text-2xl font-bold">$ 6000.00</div>
            </CardBody>
          </Card>
          <Card className="rounded-2xl border border-solid py-4 shadow-md">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Sales</p>
              <CiWallet className="h-4 w-4" />
            </CardHeader>
            <CardBody className="overflow-visible px-4 py-2">
              <div className="text-2xl font-bold">+1</div>
            </CardBody>
          </Card>
          <Card className="rounded-2xl border border-solid py-4 shadow-md">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Total Revenue</p>
              <IoStorefrontOutline className="h-4 w-4" />
            </CardHeader>
            <CardBody className="overflow-visible px-4 py-2">
              <div className="text-2xl font-bold">7</div>
            </CardBody>
          </Card>
          <Card className="rounded-2xl border border-solid py-4 shadow-md">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Active now</p>
              <TbWaveSine className="h-4 w-4 font-bold" />
            </CardHeader>
            <CardBody className="overflow-visible px-4 py-2">
              <div className="text-2xl font-bold">7</div>
            </CardBody>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4  transition-all lg:grid-cols-2">
          <Card className="mt-2 h-full rounded-2xl border border-solid shadow-md">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Total Revenue</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <BarChart />
            </CardBody>
          </Card>
          <Card className="mt-2 h-full rounded-2xl border border-solid py-4 shadow-md">
            <CardHeader className="flex items-center justify-between px-4 pb-0 pt-2">
              <p className="text-sm font-bold uppercase">Total Revenue</p>
            </CardHeader>
            <CardBody className="overflow-visible px-4 py-4 ">
              {uesrSalesData.map((d, i) => (
                <SalesCard
                  key={i}
                  email={d.email}
                  name={d.name}
                  saleAmount={d.saleAmount}
                />
              ))}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
