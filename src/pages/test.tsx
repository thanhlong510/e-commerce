import React, { useState } from "react";




const Test = () => {
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
    <>
      <div>
      
      </div>
    </>
  );
};

export default Test;
