"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
interface DetailProductProps {
  descriptionText?: string;
  additionalInfor?: string;
  reviews?: string;
}

const DetailProduct: React.FC<DetailProductProps> = ({
  descriptionText,
  additionalInfor,
  reviews,
}) => {
  return (
    <div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger className="text-2xl font-semibold" value="description">
            Description
          </TabsTrigger>
          <TabsTrigger
            className="text-2xl font-semibold"
            value="additional infor"
          >
            Additional Information
          </TabsTrigger>
          <TabsTrigger className="text-2xl font-semibold" value="review">
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description">{
          descriptionText
        }
        </TabsContent>
        <TabsContent value="additional infor">
          <div className="grid w-[400] grid-cols-2 gap-4 text-lg ">
            <p className="font-bold ">Weigh:</p>
            <p className=" ">300 G</p>
            <p className="font-bold ">Dimensions:</p>
            <p className=" ">10 x 10 x 15 cm</p>
            <p className="font-bold ">Materials:</p>
            <p className=" ">60% cotton, 40% polyester</p>
            <p className="font-bold ">Color:</p>
            <p className=" ">Black, Blue</p>
            <p className="font-bold ">Size:</p>
            <p className=" ">S, M, XL, XXL</p>
          </div>
        </TabsContent>
        <TabsContent value="review">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsum
          dolor modi fuga, porro cupiditate, quisquam magni excepturi quaerat
          eaque dolorem magnam odio ipsa deleniti, tempore nam at repellat
          totam.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DetailProduct;
