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
      <div className="grid grid-cols-2 space-x-16">
        <div className="">
          <div >
            <p className="mb-1 text-xl font-bold">Name</p>
            <Input
              value={itemName}
              onChange={handleNameChange}
              placeholder="Name of your Product"
              className="min-w-[100px] max-w-[450px] rounded-lg border"
            />
          </div >

          <div className="mt-4">
            <p className="mb-1 text-xl font-bold">Price</p>
            <Input
              type="number"
              value={itemPrice}
              onChange={handlePriceChange}
              placeholder="Price of your Product"
              className=" min-w-[100px] max-w-[450px] rounded-lg border"
            />
          </div>
          <div className="mt-4">
            <p className="mb-1 text-xl font-bold">Description</p>
            <Input
              value={itemDescription}
              onChange={handleDescriptionChange}
              placeholder="Description"
              className="min-w-[100px] max-w-[450px] rounded-lg border"
            />
          </div>
          <div>
            <button
              className="mt-5 rounded-md bg-black px-2 py-1 font-bold text-slate-200 hover:text-slate-400  "
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>

        <div>
          <UploadFile key={fileName} setFileName={setFileName} />

          {presignedUrl === "undefined" ? (
            ""
          ) : (
            <img className="max-w-72 min-w-40  max-h-52 min-h-40 object-cover" src={presignedUrl} />
          )}
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
