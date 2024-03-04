
"use client";
import React from "react";
import { DataTable } from "~/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Input } from "@nextui-org/react";
interface Setting {
    category: string;
    value: string | number | boolean;
  }
  
  const columns: ColumnDef<Setting>[] = [
    {
      accessorKey: "category",
      header: "Category"
    },
    {
      accessorKey: "value",
      header: "Value"
    }
  ];
  const data: Setting[] = [
    {
      category: "Account",
      value: true
    },
    {
      category: "Notifications",
      value: false
    },
    {
      category: "Language",
      value: "English"
    },
    {
      category: "Theme",
      value: "Dark"
    }
  ];
  const SettingTable = () => {
    return (
      <div className="px-4">
        <div className="mb-8  ">
          <Input
            key="outside"
            labelPlacement="outside"
            placeholder="Search"
            className="max-w-60 rounded-lg border border-solid p-2"
          />
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    );
  };
  
  export default SettingTable;