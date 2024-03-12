import React from "react";
import StoreNav from "../components/StoreNav";
import Footer from "../components/Footer";
import { api } from "~/utils/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";

const Shop = () => {
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

  return (
    <div>
      <StoreNav />
      <div className="relative mt-[100px] w-full text-4xl ">
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <p className=" font-semibold">Shop</p>
        </div>
        <img src="./banner.jpg" className="h-auto w-full " />
      </div>
      <div className="mx-10 mb-20 mt-12">
        <div className="grid grid-cols-4 gap-8">
          {products?.map((product, index) => {
            return (
              <div key={product.id}>
                <Link href={`./product/${product.id}`}>
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
                        <p className="text-center text-xs  md:text-xl ">{product.name}</p>
                      </CardTitle>
                      <CardDescription className="text-center text-xs md:text-lg font-semibold">
                        ${" "}
                        {product.price !== null
                          ? product.price.toString()
                          : "N/A"}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
