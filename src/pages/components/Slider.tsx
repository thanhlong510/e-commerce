import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";
const Slider = () => {
  const slides = [
    {
      url: "slider1.jpg",
    },
    {
      url: "slider2.jpg",
    },
    {
      url: "slider3.jpg",
    },
    {
      url: "slider4.jpg",
    },
    {
      url: "slider5.jpg",
    },
    {
      url: "slider6.jpg",
    },
    {
      url: "slider7.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const gotoSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex == slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className=" group relative m-auto h-[800px] max-w-[800px] px-4 py-16">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]?.url})` }}
        className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
      ></div>
      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block ">
        <FaChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute right-5  top-[50%] hidden -translate-x-[0] translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block ">
        <FaChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="cursor-pointer text-2xl"
            onClick={() => gotoSlide(slideIndex)}
            key={slideIndex}
          >
            {currentIndex===slideIndex ? <VscCircleFilled className="text-slate-500" /> : <VscCircleFilled /> }
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
