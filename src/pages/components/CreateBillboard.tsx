"use client";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import UploadFile from "./UploadFile";

const CreateBillboard = () => {
  const router = useRouter();
  const [fileName, setFileName] = useState("a");
  const [input, setInput] = useState("");
  const { data: url, refetch } = api.file.getUrl.useQuery({
    fileName: fileName,
  });
  const submit = api.billboard.create.useMutation();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      submit.mutate({
        name: input,
        imageUrl: fileName,
      });
      // Clear form after successful submission
      setInput("");
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
        {Array.isArray(url) && url.length > 0 ? (
          <img className="h-32 w-32" src={url[0]} />
        ) : null}
        <div>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Name of your Product"
          />
        </div>

        <div>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Price of your Product"
          />
        </div>
        <div>
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
        </div>
        <div>
          <button onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </>
  );
};

export default CreateBillboard;
