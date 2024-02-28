import React from 'react'
import { Image } from "@nextui-org/react";
const ItemCategory = () => {
  return (
    <div><div className="z-0 my-20  flex items-center justify-between space-x-3 px-32">
    <div className="relative inline-block">
      <Image
        isZoomed
        alt="NextUI hero Image with delay"
        src="/collection1.jpg"
      />
      <div className="absolute left-0 top-3/4 z-10 -translate-x-0 -translate-y-3/4 transform">
        <button>
          <p className="min-w-[300px] bg-white   px-6 py-3 text-2xl font-bold">
            Clothing
            <span className="pl-7 text-xs font-bold text-slate-600">
              34 Items
            </span>
          </p>
        </button>
      </div>
    </div>
    <div className="relative inline-block">
      <Image
        isZoomed
        alt="NextUI hero Image with delay"
        src="/collection2.jpg"
      />
      <div className=" group absolute left-0 top-3/4 z-10 -translate-x-0 -translate-y-3/4 transform">
        <button>
          <p className="min-w-[300px] bg-white  px-6 py-3 text-2xl font-bold">
            Accessories
            <span className="pl-7 text-xs font-bold text-slate-600">
              23 Items
            </span>
          </p>
        </button>
      </div>
    </div>
    <div className="relative inline-block">
      <Image
        isZoomed
        alt="NextUI hero Image with delay"
        src="/collection3.jpg"
      />
      <div className="absolute left-0 top-3/4 z-10 -translate-x-0 -translate-y-3/4 transform">
        <button>
          <p className="min-w-[300px] bg-white   px-6 py-3 text-2xl font-bold">
            Bag
            <span className="pl-7 text-xs font-bold text-slate-600">
              15 Items
            </span>
          </p>
        </button>
      </div>
    </div>
  </div></div>
  )
}

export default ItemCategory