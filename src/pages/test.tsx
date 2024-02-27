import React, { useState } from "react";
import CreateBillboard from "./components/CreateBillboard";
import { api } from "~/utils/api";

const Test = () => {
  const {data:a}= api.billboard.getBillboardbyId.useQuery({
    id:"clt49wmiz0000m9zwc7b26hz6"
  })
  const {data:b}=api.file.getUrl.useQuery({
    fileName:a?.imageUrl ?? ''
  })
  return (
    <>
      <img
      className="h-32 w-32"
      />
      <CreateBillboard/>
    </>
  );
};

export default Test;
