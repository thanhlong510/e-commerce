import React from "react";
import { useCartContext } from "../components/CartContext";
import StoreNav from "../components/StoreNav";
import { api } from "~/utils/api";

const Cart = () => {
  const { data, setData } = useCartContext();

  const { data: cartDatas } = api.product.getProductbyIds.useQuery({
    ids: data,
  });
 console.log(cartDatas)
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3x1 font-bold ">Shopping Cart</h1>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          {data.length === 0 ? (
            <p className="text-neutral-500">No items added to cart</p>
          ) : (
            <div className="flex">


            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
