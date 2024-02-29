import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import {Input} from "@nextui-org/react";
const BillboardTable = () => {
  return (
    <div>
      <div className="m">
      <Input
              key="outside"
              labelPlacement="outside"
              placeholder="Search"
              className="max-w-40 border-solid border rounded-lg p-2"
            />
      </div>  
     

      <Table isStriped aria-label=" static collection table">
        <TableHeader className="border">
          <TableColumn className="font-bold border-b-2   text-slate-600">Label</TableColumn>
          <TableColumn className="font-bold border-b-2  text-slate-600">Date</TableColumn>
          <TableColumn className="font-bold border-b-2  text-slate-600">
            Actions
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b " key="1">
            <TableCell className="font-bold text-center text-slate-900">
              Explore the sport collection
            </TableCell>
            <TableCell className="font-bold text-center text-slate-900">
              June 25th 2024
            </TableCell>
            <TableCell className="font-bold flex justify-center text-center text-slate-900">
              <div className=" flex items-center space-x-2 ">
                <Tooltip
                  content="Edit user"
                  className="rounded-3xl bg-black p-1 px-2 text-white"
                >
                  <span className="text-default-400 cursor-pointer text-lg active:opacity-50">
                    <FaRegEdit />
                  </span>
                </Tooltip>
                <Tooltip
                  content="Delete user"
                  className="rounded-3xl bg-red-500 p-1 px-2 text-white"
                >
                  <span className="text-danger cursor-pointer text-lg active:opacity-50">
                    <RiDeleteBinLine className="text-red-500" />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="border-b" key="2">
            <TableCell className="font-bold text-center text-slate-900">
              Explore the sport collection
            </TableCell>
            <TableCell className="font-bold text-center text-slate-900">
              June 25th 2024
            </TableCell>
            <TableCell className="font-bold flex justify-center text-slate-900">
              <div className=" flex items-center text-center space-x-2 ">
                <Tooltip
                  content="Edit user"
                  className="rounded-3xl  bg-black p-1 px-2 text-white"
                >
                  <span className="text-default-400 text-center cursor-pointer text-lg active:opacity-50">
                    <FaRegEdit />
                  </span>
                </Tooltip>
                <Tooltip
                  content="Delete user"
                  className="rounded-3xl  bg-red-500 p-1 px-2 text-white"
                >
                  <span className="text-danger cursor-pointer text-lg active:opacity-50">
                    <RiDeleteBinLine className="text-red-500" />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BillboardTable;
