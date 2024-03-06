"use client";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import UploadFile from "./UploadFile";

const CreateProduct = () => {

  const [fileName, setFileName] = useState("a");
  const [input, setInput] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState("");
  const { data: presignedUrl, refetch } = api.file.getUrl.useQuery({
    fileName: fileName,
  });

  const creatProduct = api.product.create.useMutation()
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
      const imageName: string = presignedUrl && typeof presignedUrl[0] === 'string' ? presignedUrl[0] : '';
      // Clear form after successful submission
      creatProduct.mutate({
        description:itemDescription,
        name:itemName,
        price:itemPrice,
        fileName: itemName
      })
      setItemName('');
      setItemPrice("");
      setItemDescription("");
    } catch (error) {
      console.error("Error submitting post:", error);
    } finally {
      // await router.push("/");
    }
  };
  console.log(presignedUrl)
  return (
    <>
      <div>
        <UploadFile key={fileName} setFileName={setFileName} />
        {Array.isArray(presignedUrl) && presignedUrl.length > 0 ? (
          <img className="h-32 w-32" src={presignedUrl[0]} />
        ) : null}

        <div>
          <input
            value={itemName}
            onChange={handleNameChange}
            placeholder="Name of your Product"
          />
        </div>

        <div>
          <input
            type="number"
            value={itemPrice}
            onChange={handlePriceChange}
            placeholder="Price of your Product"
          />
        </div>
        <div>
          <input
            value={itemDescription}
            onChange={handleDescriptionChange}
            placeholder="Name of your Product"
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
          <button onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
