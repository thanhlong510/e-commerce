import React, { useEffect, useState } from "react";
import { InputFile } from "~/components/InputFile";
import { Label } from "~/components/ui/label";

interface UploadFileProps {
  fileName?: string;
  userId?: string;
  setFileName: (a: string) => void;
  refetch?: void;
}

export function useFileUpload() {
  return async (filename: string, file: File) => {
    const result = await fetch(`/api/upload-url?file=${filename}`);
    const { url, fields } = await result.json();
    const formData = new FormData();
    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });
    const upload = await fetch(url, {
      method: "POST",
      body: formData,
    });
    return upload.ok;
  };
}
// Lấy thời gian tạo + user Id + coverphoto
const UploadFile: React.FC<UploadFileProps> = ({
  fileName,
  userId,
  setFileName,
  refetch,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const uploadFile = useFileUpload();
  // const a =  api.profile.addAvatarImage.useMutation()
  useEffect(() => {
    const uploadSelectedFile = async () => {
      try {
        if (!selectedFile) {
          // Handle case when no file is selected
          return;
        }
        const uploadOk = await uploadFile(
          fileName ?? selectedFile.name,
          selectedFile,
        );
        if (uploadOk) {
          setFileName(selectedFile.name ?? "");
          console.log("Upload successful");
        } else {
          // show error
          console.error("Upload failed");
        }
      } catch (error) {
        // Handle other errors that might occur during file upload
        console.error("Error during file upload:", error);
      }
    };

    uploadSelectedFile().catch((error) => {
      // Handle any unhandled errors during uploadSelectedFile
      console.error("Error during uploadSelectedFile:", error);
    });
  }, [selectedFile, uploadFile]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  return (
    <div>
      <label className="relative flex cursor-pointer items-center">
        <button className="relative z-10 rounded  p-4  focus:outline-none focus:ring">
          Add Image
        </button>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <input
            type="file"
            className="absolute left-0 top-0 z-10 flex h-9 w-full cursor-pointer rounded-md border border-input bg-transparent px-3 py-1 text-sm opacity-0 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleFileSelect}
          />
        </div>
      </label>
    </div>
  );
};
export default UploadFile;
