import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Input
} from "@nextui-org/react";
import { GoPencil } from "react-icons/go";

const AdminProduct = () => {
  return (
    <div>
      <div className="mb-8">
        <Input
          key="outside"
          labelPlacement="outside"
          placeholder="Search"
          className="max-w-60 rounded-lg border border-solid p-2"
        />
      </div>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className=" rounded-md border border-solid shadow-lg">
        <CardHeader className=" pb-0 ">
          <Image
            isZoomed
            alt="Card background"
            className=" object-cover opacity-100 border-b border-solid"
            src="/slider1.jpg"
            width={"100%"}
            height={"auto"}
          />
        </CardHeader>
        <CardBody className="overflow-visible p-2">
          <p className="text-base font-bold uppercase">
            Trendy woman black blazer
          </p>

          <p className="mb-2 text-sm font-semibold text-green-400">
            Available: 202
          </p>
          <p className="mb-2 text-sm font-semibold text-blue-400">
            Already Sold: 58741
          </p>
          <p className="mb-2 text-sm font-semibold text-slate-500">
            Regular price: $699
          </p>
          <p className="mb-4 text-sm font-semibold text-slate-500">
            Sale price: $599
          </p>
          <div className="flex mb-5 items-center justify-center space-x-3">
            <button className="flex items-center justify-center space-x-2 rounded-3xl border border-solid border-blue-600 px-8 py-2 text-sm font-semibold text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <GoPencil />
              <p>Edit</p>
            </button>
            <div className="rounded-3xl border border-solid border-red-600 px-8 py-2 text-sm font-semibold text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white">
              Delete
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className=" rounded-md border border-solid shadow-lg">
        <CardHeader className=" pb-0 ">
          <Image
            isZoomed
            alt="Card background"
            className=" object-cover opacity-100 border-b border-solid"
            src="/slider1.jpg"
            width={"100%"}
            height={"auto"}
          />
        </CardHeader>
        <CardBody className="overflow-visible p-2">
          <p className="text-base font-bold uppercase">
            Trendy woman black blazer
          </p>

          <p className="mb-2 text-sm font-semibold text-green-400">
            Available: 202
          </p>
          <p className="mb-2 text-sm font-semibold text-blue-400">
            Already Sold: 58741
          </p>
          <p className="mb-2 text-sm font-semibold text-slate-500">
            Regular price: $699
          </p>
          <p className="mb-4 text-sm font-semibold text-slate-500">
            Sale price: $599
          </p>
          <div className="flex mb-5 items-center justify-center space-x-3">
            <button className="flex items-center justify-center space-x-2 rounded-3xl border border-solid border-blue-600 px-8 py-2 text-sm font-semibold text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <GoPencil />
              <p>Edit</p>
            </button>
            <div className="rounded-3xl border border-solid border-red-600 px-8 py-2 text-sm font-semibold text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white">
              Delete
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className=" rounded-md border border-solid shadow-lg">
        <CardHeader className=" pb-0 ">
          <Image
            isZoomed
            alt="Card background"
            className=" object-cover opacity-100 border-b border-solid"
            src="/slider1.jpg"
            width={"100%"}
            height={"auto"}
          />
        </CardHeader>
        <CardBody className="overflow-visible p-2">
          <p className="text-base font-bold uppercase">
            Trendy woman black blazer
          </p>

          <p className="mb-2 text-sm font-semibold text-green-400">
            Available: 202
          </p>
          <p className="mb-2 text-sm font-semibold text-blue-400">
            Already Sold: 58741
          </p>
          <p className="mb-2 text-sm font-semibold text-slate-500">
            Regular price: $699
          </p>
          <p className="mb-4 text-sm font-semibold text-slate-500">
            Sale price: $599
          </p>
          <div className="flex mb-5 items-center justify-center space-x-3">
            <button className="flex items-center justify-center space-x-2 rounded-3xl border border-solid border-blue-600 px-8 py-2 text-sm font-semibold text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <GoPencil />
              <p>Edit</p>
            </button>
            <div className="rounded-3xl border border-solid border-red-600 px-8 py-2 text-sm font-semibold text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white">
              Delete
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className=" rounded-md border border-solid shadow-lg">
        <CardHeader className=" pb-0 ">
          <Image
            isZoomed
            alt="Card background"
            className=" object-cover opacity-100 border-b border-solid"
            src="/slider1.jpg"
            width={"100%"}
            height={"auto"}
          />
        </CardHeader>
        <CardBody className="overflow-visible p-2">
          <p className="text-base font-bold uppercase">
            Trendy woman black blazer
          </p>

          <p className="mb-2 text-sm font-semibold text-green-400">
            Available: 202
          </p>
          <p className="mb-2 text-sm font-semibold text-blue-400">
            Already Sold: 58741
          </p>
          <p className="mb-2 text-sm font-semibold text-slate-500">
            Regular price: $699
          </p>
          <p className="mb-4 text-sm font-semibold text-slate-500">
            Sale price: $599
          </p>
          <div className="flex mb-5 items-center justify-center space-x-3">
            <button className="flex items-center justify-center space-x-2 rounded-3xl border border-solid border-blue-600 px-8 py-2 text-sm font-semibold text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <GoPencil />
              <p>Edit</p>
            </button>
            <div className="rounded-3xl border border-solid border-red-600 px-8 py-2 text-sm font-semibold text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white">
              Delete
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className=" rounded-md border border-solid shadow-lg">
        <CardHeader className=" pb-0 ">
          <Image
            isZoomed
            alt="Card background"
            className=" object-cover opacity-100 border-b border-solid"
            src="/slider1.jpg"
            width={"100%"}
            height={"auto"}
          />
        </CardHeader>
        <CardBody className="overflow-visible p-2">
          <p className="text-base font-bold uppercase">
            Trendy woman black blazer
          </p>

          <p className="mb-2 text-sm font-semibold text-green-400">
            Available: 202
          </p>
          <p className="mb-2 text-sm font-semibold text-blue-400">
            Already Sold: 58741
          </p>
          <p className="mb-2 text-sm font-semibold text-slate-500">
            Regular price: $699
          </p>
          <p className="mb-4 text-sm font-semibold text-slate-500">
            Sale price: $599
          </p>
          <div className="flex mb-5 items-center justify-center space-x-3">
            <button className="flex items-center justify-center space-x-2 rounded-3xl border border-solid border-blue-600 px-8 py-2 text-sm font-semibold text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <GoPencil />
              <p>Edit</p>
            </button>
            <div className="rounded-3xl border border-solid border-red-600 px-8 py-2 text-sm font-semibold text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white">
              Delete
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className=" rounded-md border border-solid shadow-lg">
        <CardHeader className=" pb-0 ">
          <Image
            isZoomed
            alt="Card background"
            className=" object-cover opacity-100 border-b border-solid"
            src="/slider1.jpg"
            width={"100%"}
            height={"auto"}
          />
        </CardHeader>
        <CardBody className="overflow-visible p-2">
          <p className="text-base font-bold uppercase">
            Trendy woman black blazer
          </p>

          <p className="mb-2 text-sm font-semibold text-green-400">
            Available: 202
          </p>
          <p className="mb-2 text-sm font-semibold text-blue-400">
            Already Sold: 58741
          </p>
          <p className="mb-2 text-sm font-semibold text-slate-500">
            Regular price: $699
          </p>
          <p className="mb-4 text-sm font-semibold text-slate-500">
            Sale price: $599
          </p>
          <div className="flex mb-5 items-center justify-center space-x-3">
            <button className="flex items-center justify-center space-x-2 rounded-3xl border border-solid border-blue-600 px-8 py-2 text-sm font-semibold text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <GoPencil />
              <p>Edit</p>
            </button>
            <div className="rounded-3xl border border-solid border-red-600 px-8 py-2 text-sm font-semibold text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white">
              Delete
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className=" rounded-md border border-solid shadow-lg">
        <CardHeader className=" pb-0 ">
          <Image
            isZoomed
            alt="Card background"
            className=" object-cover opacity-100 border-b border-solid"
            src="/slider1.jpg"
            width={"100%"}
            height={"auto"}
          />
        </CardHeader>
        <CardBody className="overflow-visible p-2">
          <p className="text-base font-bold uppercase">
            Trendy woman black blazer
          </p>

          <p className="mb-2 text-sm font-semibold text-green-400">
            Available: 202
          </p>
          <p className="mb-2 text-sm font-semibold text-blue-400">
            Already Sold: 58741
          </p>
          <p className="mb-2 text-sm font-semibold text-slate-500">
            Regular price: $699
          </p>
          <p className="mb-4 text-sm font-semibold text-slate-500">
            Sale price: $599
          </p>
          <div className="flex mb-5 items-center justify-center space-x-3">
            <button className="flex items-center justify-center space-x-2 rounded-3xl border border-solid border-blue-600 px-8 py-2 text-sm font-semibold text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <GoPencil />
              <p>Edit</p>
            </button>
            <div className="rounded-3xl border border-solid border-red-600 px-8 py-2 text-sm font-semibold text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white">
              Delete
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
    </div>
   
  );
};

export default AdminProduct;
