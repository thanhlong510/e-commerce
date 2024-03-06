import React from "react";
import { api } from "~/utils/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

/// Show product
const NewTest = () => {
  const { data: products } = api.product.getAllProduct.useQuery();

  const arra: string[] = [];
  const b = products?.map((a) => {
    a.attachment.map((c) => {
      arra.push(c.file.fileName ?? "");
    });
  });

  const { data: presignedUrls } = api.file.getUrls.useQuery({
    fileName: arra,
  });

  console.log(presignedUrls);

  return (
    <div className="grid grid-cols-4">
      {products?.map((product, index) => {
        return (
          <div key={product.id}>
            <Card>
              <CardHeader>
                {presignedUrls && presignedUrls.length > 0 ? (
                  <img
                    className="object-cover "
                    height={"auto"}
                    width={"full"}
                    src={`${presignedUrls[index]}`}
                  />
                ) : (
                  ""
                )}
              </CardHeader>
              <CardContent>
                <CardTitle>
                  <p>
                  {product.description} $
                  </p>
                  </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        );
      })}
     
    </div>
  );
};

export default NewTest;
