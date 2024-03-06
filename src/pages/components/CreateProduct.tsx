"use client";
import { api } from "~/utils/api";
import React, { useState } from "react";
import UploadFile from "./UploadFile";
import { Input } from "@nextui-org/react";
const CreateProduct = () => {
  const [fileName, setFileName] = useState("a");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const { data: presignedUrl } = api.file.getUrl.useQuery({
    fileName: fileName,
  });

  const creatProduct = api.product.create.useMutation();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemPrice(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemDescription(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const imageName: string =
        presignedUrl && typeof presignedUrl[0] === "string"
          ? presignedUrl[0]
          : "";
      // Clear form after successful submission
      creatProduct.mutate({
        description: itemDescription,
        name: itemName,
        price: itemPrice,
        fileName: fileName,
      });
      setItemName("");
      setItemPrice("");
      setItemDescription("");
    } catch (error) {
      console.error("Error submitting post:", error);
    } finally {
      // await router.push("/");
    }
  };

  return (
    <>
      <div>
        <UploadFile key={fileName} setFileName={setFileName} />

        {presignedUrl === "undefined" ? (
          ""
        ) : (
          <img className="h-32 w-32" src={presignedUrl} />
        )}

        <div>
        <p className="text-xl mb-3 font-bold">Name</p>
          <Input
            value={itemName}
            onChange={handleNameChange}
            placeholder="Name of your Product"
            className="min-w-[100px] max-w-[450px] rounded-lg border"
          />
        </div>

        <div>
        <p className="text-xl mb-3 font-bold">Price</p>
          <Input
            type="number"
         
            value={itemPrice}
            onChange={handlePriceChange}
            placeholder="Price of your Product"
            className=" min-w-[100px] max-w-[450px] rounded-lg border"
          />
        </div>
        <div>
        <p className="text-xl mb-3 font-bold">Description</p>
          <Input
          
            value={itemDescription}
            onChange={handleDescriptionChange}
            placeholder="Description"
            className="min-w-[100px] max-w-[450px] rounded-lg border"
          />
        </div>
        {/* <div>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="The sale price"
          />
        </div>
        <div>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </div> */}
        <div>
          <button className="px-2 py-1 mt-5 font-bold rounded-md text-slate-200 hover:text-slate-400 bg-black  " onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
