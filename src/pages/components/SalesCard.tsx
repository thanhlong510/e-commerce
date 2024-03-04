import React from "react";

interface SalesProp {
  name?: string;
  email?: string;
  saleAmount?: string;
}

const SalesCard: React.FC<SalesProp> = ({ name, email, saleAmount }) => {
  return (
    <div className="flex flex-wrap justify-between gap-3 my-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{name}</p>
          <div className="w-[10px] overflow-hidden text-ellipsis whitespace-nowrap text-gray-400 sm:w-auto">
            {email}
          </div>
        </div>
       
      </section>
      <p>
            {saleAmount}
        </p>
    </div>
  );
};

export default SalesCard;
