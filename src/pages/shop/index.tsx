import React from "react";
import StoreNav from "../components/StoreNav";
import { Card, CardHeader, CardBody, Image, Input } from "@nextui-org/react";
import Link from "next/link";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div>
      <StoreNav />
      <div className="relative mt-[100px] text-4xl ">
        <img src="./banner.jpg" className="h-auto w-full " />
        <div className="absolute inset-x-0 top-12 flex items-center justify-center">
          <p className=" font-semibold">Shop</p>
        </div>
      </div>
      <div className="mb-20 mt-12 mx-10">
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href={"./product"}>
            <Card className=" rounded-md border border-solid shadow-lg">
              <CardHeader className=" pb-0 ">
                <Image
                  isZoomed
                  alt="Card background"
                  className=" border-b border-solid object-cover opacity-100"
                  src="/slider1.jpg"
                  width={"100%"}
                  height={"auto"}
                />
              </CardHeader>
              <CardBody className="overflow-visible p-2 ">
                <p className="text-center text-lg font-bold uppercase text-black">
                  Trendy woman black blazer
                </p>

                <p className="mb-2 text-center text-lg  font-semibold text-green-400 text-slate-500">
                  $30.00
                </p>
              </CardBody>
            </Card>
          </Link>
          <Link href={"./product"}>
            <Card className=" rounded-md border border-solid shadow-lg">
              <CardHeader className=" pb-0 ">
                <Image
                  isZoomed
                  alt="Card background"
                  className=" border-b border-solid object-cover opacity-100"
                  src="/shirt-1.jpg"
                  width={"100%"}
                  height={"auto"}
                />
              </CardHeader>
              <CardBody className="overflow-visible p-2 ">
                <p className="text-center text-lg font-bold uppercase text-black">
                  Blue shirt
                </p>

                <p className="mb-2 text-center text-lg  font-semibold text-green-400 text-slate-500">
                  $30.00
                </p>
              </CardBody>
            </Card>
          </Link>
          <Link href={"./product"}>
            <Card className=" rounded-md border border-solid shadow-lg">
              <CardHeader className=" pb-0 ">
                <Image
                  isZoomed
                  alt="Card background"
                  className=" border-b border-solid object-cover opacity-100"
                  src="/shirt-2.jpg"
                  width={"100%"}
                  height={"auto"}
                />
              </CardHeader>
              <CardBody className="overflow-visible p-2 ">
                <p className="text-center text-lg font-bold uppercase text-black">
                  Classic watch
                </p>

                <p className="mb-2 text-center text-lg  font-semibold text-green-400 text-slate-500">
                  $88.00
                </p>
              </CardBody>
            </Card>
          </Link>
          <Link href={"./product"}>
            <Card className=" rounded-md border border-solid shadow-lg">
              <CardHeader className=" pb-0 ">
                <Image
                  isZoomed
                  alt="Card background"
                  className=" border-b border-solid object-cover opacity-100"
                  src="/shirt-3.jpg"
                  width={"100%"}
                  height={"auto"}
                />
              </CardHeader>
              <CardBody className="overflow-visible p-2 ">
                <p className="text-center text-lg font-bold uppercase text-black">
                  Female bag
                </p>

                <p className="mb-2 text-center text-lg  font-semibold text-green-400 text-slate-500">
                  $98.00
                </p>
              </CardBody>
            </Card>
          </Link>

          <Link href={"./product"}>
            <Card className=" rounded-md border border-solid shadow-lg">
              <CardHeader className=" pb-0 ">
                <Image
                  isZoomed
                  alt="Card background"
                  className=" border-b border-solid object-cover opacity-100"
                  src="/shirt-4.jpg"
                  width={"100%"}
                  height={"auto"}
                />
              </CardHeader>
              <CardBody className="overflow-visible p-2 ">
                <p className="text-center text-lg font-bold uppercase text-black">
                  Floral Kirby
                </p>

                <p className="mb-2 text-center text-lg  font-semibold text-green-400 text-slate-500">
                  $20.00
                </p>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
