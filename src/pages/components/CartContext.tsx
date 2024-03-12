"use client"
import React, { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";

interface ContextProps {
  data: string[];
  setData: Dispatch<SetStateAction<string[]>>;
}

const CartContext = createContext<ContextProps>({
  data: [],
  setData: () => [],
});

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
  
      const storedData = localStorage.getItem("cartData");
      if(storedData !== null) setData(  JSON.parse(storedData)); // Kiểm tra storedData trước khi parse
 
  }, []); // Chỉ chạy một lần khi component được render

  useEffect(() => {
      localStorage.setItem("cartData", JSON.stringify(data));
  }, [data]); // Ghi lại dữ liệu vào localStorage khi data thay đổi

 console.log(data.length) 
  return (
    <CartContext.Provider value={{ data, setData }}>
      {children}
    </CartContext.Provider>
  ); 
};

export const useCartContext = () => useContext(CartContext);