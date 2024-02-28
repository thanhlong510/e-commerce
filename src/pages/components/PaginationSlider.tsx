import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { BsCartDashFill } from "react-icons/bs";
import Link from "next/link";
const PaginationSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideWidth = 300; // Chiều rộng của mỗi slide
  const totalSlides = 7; // Tổng số slide

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative overflow-hidden pl-32 ">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (slideWidth + 20)}px)`,
        }}
      >
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ marginRight: "20px" }}
          >
            <Card className="relative rounded-md border shadow-lg" isPressable>
              <CardBody className="overflow-visible p-0">
                <Link href={'/product'}>
                <Image
                  isZoomed
                  src={`/slider${index + 1}.jpg`}
                  alt={`Image ${index + 1}`}
                  className="h-[415px] w-[415px]"
                />
                <CardFooter className="text-small z-20 opacity-80 absolute bottom-0 left-0 right-0 bg-white">
                  <div className="p-2 w-full">
                    <div className="flex items-center justify-between w-full ">
         
                      <p className="text-xl font-semibold">
                      Trendy woman black blazer
                      </p>
                      <p className="text-default-500 font-mono text-x1 text-slate-500">
                        125$
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 hover:text-red-500">
                      <p> Add to cart </p>
                      <BsCartDashFill className="rounded-full bg-slate-300  p-[2px]" />
                    </div>
                  </div>
                </CardFooter>
                </Link>
               
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      {/* Prev and Next Buttons */}
      <div className="mt-4 flex items-center justify-center space-x-5 px-4">
        <button
          className={`rounded-full  bg-gray-800 hover:bg-red-500  p-1 text-white ${currentIndex === 0 ? "cursor-not-allowed hover:bg-gray-800 opacity-50" : ""}`}
          onClick={prevSlide}
        >
          <MdNavigateBefore />
        </button>
        <button
          className={`rounded-full bg-gray-800 p-1 hover:bg-red-500 text-white ${currentIndex === totalSlides - 1 ? "cursor-not-allowed hover:bg-gray-800 opacity-50" : ""}`}
          onClick={nextSlide}
          disabled={currentIndex === totalSlides - 1}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default PaginationSlider;
