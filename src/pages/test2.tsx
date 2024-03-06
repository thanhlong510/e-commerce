import React from "react";
import { api } from "~/utils/api";


/// Show product
const NewTest = () => {
  const { data: product } = api.product.getAllProduct.useQuery();
  console.log(
    product?.map((a) => {
      return a.attachment.map((b) => {
        return b.file.url;
      });
    }),
  );
  return (
    <div>
      {product?.map((a) => {
        return a.attachment.map((b) => {
          return (
            <div key={a.id}>
              <p className="text-2xl">{a.name}</p>
              <p className="text-2xl">{a.description}</p>
              <p className="text-2x1">{b.file.url}</p>
              <img
              src={`${b.file.url}`
            }
            height={100}
             width={100}
              />
            </div>
          );
        });
      })}
    </div>
  );
};

export default NewTest;
