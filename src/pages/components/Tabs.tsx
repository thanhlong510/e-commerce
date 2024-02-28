import React, { useState } from 'react'

const Tabs = () => {
    const [bold, setBold] = useState("1");
    const [data, setData] = useState("This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit.");
    const handleBold = (data: string) => {
      setBold(data);
      if (data == "1") {
        setData("This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit.");
      } else if (data == "2") {
        setData("Cheeky woman leather jacket");
      }
     else if (data == "3") {
      setData("The very well-built theme, couldn't be happier with it. Can't wait for future updates to see what else they add-in.");
    }
  
    };
  return (
    <div>
        <div className=" mx-auto w-full">
          <div className="flex h-10 items-center justify-between border-b border-gray-400 ">
            <button
              onClick={() => {
                handleBold("1");
              }}
              className={`flex h-full shrink grow basis-[1px] items-center justify-center px-3 font-semibold text-gray-400 hover:bg-gray-100 hover:text-slate-800  ${
                bold == "1" ? "border-b-[3px] border-red-500" : ""
              } `}
            >
              <div>Description</div>
            </button>
            <button
              onClick={() => {
                handleBold("2");
              }}
              className={`flex h-full shrink grow basis-[1px] items-center justify-center px-3 font-semibold text-gray-400 hover:bg-gray-100 hover:text-slate-800  ${
                bold == "2" ? "border-b-[3px] border-red-500" : ""
              } `}
            >
              <div>Additional Information</div>
            </button>
            <button
              onClick={() => {
                handleBold("3");
              }}
              className={`flex h-full shrink grow basis-[1px] items-center justify-center px-3 font-semibold text-gray-400 hover:bg-gray-100 hover:text-slate-800  ${
                bold == "3" ? "border-b-[3px] border-red-500" : ""
              } `}
            >
              <div>Reviews</div>
            </button>
          </div>
          <div className="flex justify-between ">
            <div className="shrink grow">
              {data}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tabs