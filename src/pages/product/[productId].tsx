import { useRouter } from "next/router";
import React from "react";
import StoreNav from "../components/StoreNav";
import { Image } from "@nextui-org/react";
import { BsCart } from "react-icons/bs";
import Footer from "../components/Footer";
import DetailProduct from "../components/DetailProduct";
import { api } from "~/utils/api";
import { useCartContext } from "../components/CartContext";
const DetailProductPage = () => {
  const router = useRouter();
  const productId = router.query.productId as string;
  const {data, setData} = useCartContext()
  const { data: product } = api.product.getProductbyId.useQuery({
    id: productId,
  });
  const arra: string[] = [];

  const b = product?.attachment.map((url) => {
    arra.push(url.file.fileName ?? "");
  });
  const { data: presignedUrls } = api.file.getUrls.useQuery({
    fileName: arra,
  });

  const { data: cartDatas } = api.product.getProductbyIds.useQuery({
    ids: data,
  });

 
  return (
    <div>
      <StoreNav />
      <div className="flex items-center justify-center pt-[180px]">
        <div className="ml-[-750px] flex-grow border-t border-gray-300"></div>
        <div className="mx-4 text-4xl font-extrabold ">
          Best Selling Products
        </div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="mx-24 mt-10 flex items-center justify-between space-x-4">
        {presignedUrls && presignedUrls.length > 0 ? (
          <Image
            isZoomed
            src={`${presignedUrls[0]}`}
            width={"full"}
            className=" h-auto object-cover opacity-100"
          />
        ) : (
          ""
        )}

        <div className="w-2/3">
          <p className="mb-[17px] text-2xl font-bold">{product?.name}</p>
          <p className="mb-[15px] text-lg font-semibold text-slate-500">
            $ {product?.price?.toString()}
          </p>
          <p className="mb-4 text-[#666666]">{product?.description}</p>
          <p className="mb-2 text-base">SKU: WERTYQ</p>
          <p className="mb-2 text-base">
            Vendor: <span className="text-[#666666]">Lereve</span>{" "}
          </p>
          <p className="text-base">Avability: In stock</p>
          <div className="mt-4 flex space-x-4">
            <input
              type="number"
              className="h-[47px] w-[132px] border border-solid bg-white text-center text-base font-semibold text-black focus:outline-none"
            />
            <button className="flex h-[47px] items-center space-x-4 bg-black px-[30px] py-[11.5px] text-white hover:bg-red-500" onClick={() => setData(prevData => [...prevData, product?.id ?? ''])}>
              <BsCart />
              <p>Add the cart</p>
              
            </button>
          </div>
        </div>
      </div>
      <div className="mx-24 my-20">
        <DetailProduct descriptionText={product?.description ?? ''} />
      </div>
      <Footer />
    </div>
  );
};

export default DetailProductPage;
