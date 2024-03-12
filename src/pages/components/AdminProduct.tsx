import React from "react";
import { Card, CardHeader, CardBody, Image, Input } from "@nextui-org/react";
import { GoPencil } from "react-icons/go";
import { api } from "~/utils/api";
import { Decimal } from "@prisma/client/runtime/library";

const AdminProduct = () => {
  const { data: products, refetch } = api.product.getAllProduct.useQuery();
  const deleteProduct = api.product.delete.useMutation();
  const arra: string[] = [];
  const b = products?.map((a) => {
    a.attachment.map((c) => {
      arra.push(c.file.fileName ?? "");
    });
  });

  const { data: presignedUrls } = api.file.getUrls.useQuery({
    fileName: arra,
  });
  const salePrice = (a: Decimal | null) => {
    if (a !== null) {
      return a ? 0.2 * parseFloat(a.toString()) : 0;
    }
    return 0;
  };

  const  handleDeleteProduct = async(a:string)=>{
    deleteProduct.mutate({
      productId:a
    })
   await refetch()
  }
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
        {products?.map((product, index) => {
          return (
            <Card
              key={product.id}
              className=" rounded-md border border-solid shadow-lg"
            >
              <CardHeader className=" pb-0 ">
                {presignedUrls && presignedUrls.length > 0 ? (
                  <Image
                    isZoomed
                    alt="Card background"
                    className=" border-b border-solid object-cover opacity-100"
                    src={`${presignedUrls[index]}`}
                    width={"100%"}
                    height={"auto"}
                  />
                ) : (
                  ""
                )}
              </CardHeader>
              <CardBody className="overflow-visible p-2">
                <p className="text-base font-bold uppercase">{product.name}</p>

                <p className="mb-2 text-sm font-semibold text-green-400">
                  Available: 202
                </p>
                <p className="mb-2 text-sm font-semibold text-blue-400">
                  Already Sold: 58741
                </p>
                <p className="mb-2 text-sm font-semibold text-slate-500">
                  Regular price: ${product.price?.toString()}
                </p>
                <p className="mb-4 text-sm font-semibold text-slate-500">
                  Sale price: ${salePrice(product.price)}
                </p>
                <div className="mb-5 flex items-center justify-center space-x-3">
                  <button className="flex items-center justify-center space-x-2 rounded-3xl border border-solid border-blue-600 px-8 py-2 text-sm font-semibold text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                    <GoPencil />
                    <p>Edit</p>
                  </button>
                  <div onClick={() => handleDeleteProduct(product.id)} className="rounded-3xl border border-solid border-red-600 px-8 py-2 text-sm font-semibold text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white">
                    Delete
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdminProduct;
