
import React, { useState } from "react";


import { InputFile } from "~/components/InputFile";
import UploadFile from "./components/UploadFile";
import { FaLeftRight } from "react-icons/fa6";
import Slider from "./components/Slider";
import CreateProduct from "./components/CreateProduct";
import CreateFeature from "./components/CreateFeature";
import MultiSelectCategory from "./components/MultiSelectCategory";


const Test = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const handleInterestToggle = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      // If the interest is already selected, remove it
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest),
      );
    } else {
      // If the interest is not selected, add it
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  return (
    <div >
     <CreateProduct/>
    <MultiSelectCategory handleInterestToggle={handleInterestToggle} selectedInterests={selectedInterests}/>
    </div>
  );
};

export default Test;
