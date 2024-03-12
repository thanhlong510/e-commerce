
import React, { useState } from "react";


import { InputFile } from "~/components/InputFile";
import UploadFile from "./components/UploadFile";
import { FaLeftRight } from "react-icons/fa6";
import Slider from "./components/Slider";
import CreateProduct from "./components/CreateProduct";
import CreateFeature from "./components/CreateFeature";
import SelectInput from "~/components/SelectInput";




const Test = () => {
  
 const [value,setSelectValue] = useState('')
 console.log(value)
  return (
    <div >
      <CreateProduct/>
      <CreateFeature featureType="color" placeholderName="Color" placeholderValue="Color value"/>
     <SelectInput setSelectValue={setSelectValue}/>
    {/* <MultiSelectCategory handleInterestToggle={handleInterestToggle} selectedInterests={selectedInterests}/> */}
    </div>
  );
};

export default Test;
