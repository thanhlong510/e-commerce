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
import { Input } from "@nextui-org/react";
const CategoriesTable = () => {
  return (
    <div>
      <Input
        key="outside"
        labelPlacement="outside"
        placeholder="Search"
        className="max-w-40 rounded-lg border border-solid p-2"
      />
      <Table isStriped aria-label="Example static collection table">
        <TableHeader >
          <TableColumn className="font-bold text-slate-600">Name</TableColumn>
          <TableColumn className="font-bold text-slate-600">
            Billboard
          </TableColumn>
          <TableColumn className="font-bold text-slate-600">Date</TableColumn>
          <TableColumn className="font-bold text-slate-600">
            Actions
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell className="font-bold text-slate-900">Women</TableCell>
            <TableCell className="font-bold text-slate-900">
              Explore The Sport Collection
            </TableCell>
            <TableCell className="font-bold text-slate-900">
              June 25th 2024
            </TableCell>
            <TableCell className="font-bold text-slate-900">
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
          <TableRow key="2">
            <TableCell className="font-bold text-slate-900">Women</TableCell>
            <TableCell className="font-bold text-slate-900">
              Explore The Sport Collection
            </TableCell>
            <TableCell className="font-bold text-slate-900">
              June 25th 2024
            </TableCell>
            <TableCell className="font-bold text-slate-900">
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
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesTable;
