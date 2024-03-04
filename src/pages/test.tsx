"use client";
import React from "react";
import SideNavbar from "~/components/SideBar";
import Footer from "./components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const Test = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Description</TabsTrigger>
          <TabsTrigger value="password">Additional Information</TabsTrigger>
          <TabsTrigger value="review">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">
        <p>
        Change your password here.
        </p>
        <img
        src="./logo.png"
        />
        </TabsContent>
        <TabsContent value="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsum dolor modi fuga, porro cupiditate, quisquam magni excepturi quaerat eaque dolorem magnam odio ipsa deleniti, tempore nam at repellat totam.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Test;
