import React, { useState } from "react";
import { api } from "~/utils/api";
interface CreateFeatureProps {
  featureType: string;
  placeholderName: string;
  placeholderValue: string;
}
const CreateFeature: React.FC<CreateFeatureProps> = ({
  featureType,
  placeholderName,
  placeholderValue,
}) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const createFeature = api.feature.createFeature.useMutation();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const createFeatures = () => {
    try {
      createFeature.mutate({
        featureType: featureType,
        name: name,
        value: value,
      });
      setValue("");
      setName("");
    } catch (error) {
    } finally {
    }
  };
  return (
    <div className=" flex space-x-10">
      <input
        value={name}
        placeholder={placeholderName}
        onChange={handleNameChange}
        className="border px-3 py-4"
      />
      <input
      value={value}
        placeholder={placeholderValue}
        onChange={handleValueChange}
        className="border py-4 pl-3 pr-3"
      />
      <button onClick={createFeatures}>Create</button>
    </div>
  );
};

export default CreateFeature;
