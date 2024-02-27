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
const CategoriesTable = () => {
  return (
    <div>
      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="font-bold text-slate-600">Name</TableColumn>
          <TableColumn className="font-bold text-slate-600">Billboard</TableColumn>
          <TableColumn className="font-bold text-slate-600">
            Date
          </TableColumn>
          <TableColumn className="font-bold text-slate-600">
            Actions
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell className="font-bold text-slate-900">
              Women
            </TableCell>
            <TableCell className="font-bold text-slate-900">
              Explore The Sport Collection
            </TableCell>
            <TableCell className="font-bold text-slate-900">
              June 25th 2024
            </TableCell>
            <TableCell className="font-bold text-slate-900">
              <div className=" flex items-center space-x-2 ">
                <Tooltip content="Edit user" className="p-1 bg-black text-white rounded-3xl px-2">
                  <span className="text-default-400 cursor-pointer text-lg active:opacity-50">
                    <FaRegEdit />
                  </span>
                </Tooltip>
                <Tooltip content="Delete user" className="p-1 px-2 bg-red-500 text-white rounded-3xl">
                  <span className="text-danger cursor-pointer text-lg active:opacity-50">
                    <RiDeleteBinLine className="text-red-500" />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell className="font-bold text-slate-900">
              Women
            </TableCell>
            <TableCell className="font-bold text-slate-900">
              Explore The Sport Collection
            </TableCell>
            <TableCell className="font-bold text-slate-900">
              June 25th 2024
            </TableCell>
            <TableCell className="font-bold text-slate-900">
              <div className=" flex items-center space-x-2 ">
                <Tooltip content="Edit user" className="p-1 bg-black text-white rounded-3xl px-2">
                  <span className="text-default-400 cursor-pointer text-lg active:opacity-50">
                    <FaRegEdit />
                  </span>
                </Tooltip>
                <Tooltip content="Delete user" className="p-1 px-2 bg-red-500 text-white rounded-3xl">
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
