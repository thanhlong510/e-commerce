import React, { useState } from "react";
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
    
    </>
  );
};

export default Test;
