import React from "react";
import TitleHeader from "../../components/TitileHeader";
import Navbar from "~/pages/components/Navbar";
import CreateProduct from "~/pages/components/CreateProduct";
const CreateProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 ">
        <TitleHeader
          header="Create your Products"
          subHeader="Add a new product"
        />
      </div>
      <CreateProduct/>
    </div>
  );
};

export default CreateProductPage;
