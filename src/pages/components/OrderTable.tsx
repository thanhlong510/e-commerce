import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,

} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
const OrderTable = () => {
  return (
    <div>
      <div className="">
        <Input
          key="outside"
          labelPlacement="outside"
          placeholder="Search"
          className="max-w-40 rounded-lg border border-solid p-2"
        />
      </div>

      <Table isStriped aria-label=" static collection table">
        <TableHeader className="border">
          <TableColumn className="border-b-2 font-bold text-center   text-slate-600">
            #Order
          </TableColumn>
          <TableColumn className="border-b-2 font-bold text-center text-slate-600">
            Product
          </TableColumn>
          <TableColumn className="border-b-2 font-bold text-center text-slate-600">
            Payment
          </TableColumn>
          <TableColumn className="border-b-2 font-bold text-center text-slate-600">
            Order Status
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b ">
            <TableCell className="text-center font-bold text-slate-900">
              #12345
            </TableCell>
            <TableCell className="flex justify-center font-bold text-slate-900">
              <img src="/slider1.jpg" height={70} width={64} />
            </TableCell>
            <TableCell className="text-center font-bold text-slate-900">
              <p>$600</p>
              <p className="font-normal text-gray-400">Fully paid</p>
            </TableCell>
            <TableCell className=" text-center font-bold text-white">
              <button className=" rounded-full bg-blue-600 h-[40px] w-[134px]  hover:cursor-default">
                COMPLETE
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-b ">
            <TableCell className="text-center font-bold text-slate-900">
              #12345
            </TableCell>
            <TableCell className="flex justify-center font-bold text-slate-900">
              <img src="/slider2.jpg" height={70} width={64} />
            </TableCell>
            <TableCell className="text-center font-bold text-slate-900">
              <p>$180 / $500</p>
              <p className="font-normal text-gray-400">Partially paid</p>
            </TableCell>
            <TableCell className=" text-center font-bold  text-white">
              <button className=" rounded-full bg-green-600 h-[40px] w-[134px]  hover:cursor-default">
                CONFIRM
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-b ">
            <TableCell className="text-center font-bold text-slate-900">
              #12345
            </TableCell>
            <TableCell className="flex justify-center font-bold text-slate-900">
              <img src="/slider3.jpg" height={70} width={64} />
            </TableCell>
            <TableCell className="text-center font-bold text-slate-900">
              <p>$0 / $200</p>
              <p className="font-normal text-gray-400">Unpaid</p>
            </TableCell>
            <TableCell className=" text-center font-bold text-white">
              <button className=" h-[40px] w-[134px] rounded-full bg-red-600 hover:cursor-default">
                COMPLETE
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
