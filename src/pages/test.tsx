"use client";

import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";

const Test = () => {


  const { ref: week2Ref, inView: week2InView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const { ref: week3Ref, inView: week3InView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const { ref: week4Ref, inView: week4InView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const weeksRef = useRef<HTMLDivElement>(null);
  const firstIconRef = useRef<HTMLDivElement>(null);
  const secondIconRef = useRef<HTMLDivElement>(null);
  const thirdIconRef = useRef<HTMLImageElement>(null);
  const fourthIconRef = useRef<HTMLDivElement>(null);
  if (
    weeksRef.current &&
    firstIconRef.current &&
    secondIconRef.current &&
    thirdIconRef.current &&
    fourthIconRef.current
  ) {
      console.log(weeksRef.current.clientHeight)
  console.log(secondIconRef.current.getBoundingClientRect().top)
  }
 
  if (
    weeksRef.current &&
    firstIconRef.current &&
    secondIconRef.current &&
    thirdIconRef.current &&
    fourthIconRef.current
  ) {
    const secondIconHeight =
      secondIconRef.current.getBoundingClientRect().top -
      weeksRef.current.getBoundingClientRect().top;
    const thirdIconHeight =
      thirdIconRef.current.getBoundingClientRect().top -
      weeksRef.current.getBoundingClientRect().top;
    const fourthIconHeight =
      fourthIconRef.current.getBoundingClientRect().top -
      weeksRef.current.getBoundingClientRect().top;

    document.body.style.setProperty(
      "--grey-bar-height",
      `${fourthIconHeight}px`,
    );

    if (week2InView) {
      document.body.style.setProperty(
        "--purple-bar-height",
        `${secondIconHeight}px`,
      );
    }
    if (week3InView) {
      document.body.style.setProperty(
        "--purple-bar-height",
        `${thirdIconHeight}px`,
      );
    }
    if (week4InView) {
      document.body.style.setProperty(
        "--purple-bar-height",
        `${fourthIconHeight}px`,
      );
    }
  }
  return (
    <div>
      <Navbar />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis exercitationem eveniet culpa doloribus. Eligendi ducimus tempore nostrum aliquam ab id repudiandae dicta, repellat asperiores obcaecati tempora tenetur pariatur. Corporis, accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis temporibus voluptas tenetur id repellat hic, sed quia eveniet velit laboriosam unde incidunt quaerat pariatur itaque? Accusamus quaerat quo ex!

      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis exercitationem eveniet culpa doloribus. Eligendi ducimus tempore nostrum aliquam ab id repudiandae dicta, repellat asperiores obcaecati tempora tenetur pariatur. Corporis, accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis temporibus voluptas tenetur id repellat hic, sed quia eveniet velit laboriosam unde incidunt quaerat pariatur itaque? Accusamus quaerat quo ex!

      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis exercitationem eveniet culpa doloribus. Eligendi ducimus tempore nostrum aliquam ab id repudiandae dicta, repellat asperiores obcaecati tempora tenetur pariatur. Corporis, accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis temporibus voluptas tenetur id repellat hic, sed quia eveniet velit laboriosam unde incidunt quaerat pariatur itaque? Accusamus quaerat quo ex!

      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis exercitationem eveniet culpa doloribus. Eligendi ducimus tempore nostrum aliquam ab id repudiandae dicta, repellat asperiores obcaecati tempora tenetur pariatur. Corporis, accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis temporibus voluptas tenetur id repellat hic, sed quia eveniet velit laboriosam unde incidunt quaerat pariatur itaque? Accusamus quaerat quo ex!

      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis exercitationem eveniet culpa doloribus. Eligendi ducimus tempore nostrum aliquam ab id repudiandae dicta, repellat asperiores obcaecati tempora tenetur pariatur. Corporis, accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis temporibus voluptas tenetur id repellat hic, sed quia eveniet velit laboriosam unde incidunt quaerat pariatur itaque? Accusamus quaerat quo ex!

      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis exercitationem eveniet culpa doloribus. Eligendi ducimus tempore nostrum aliquam ab id repudiandae dicta, repellat asperiores obcaecati tempora tenetur pariatur. Corporis, accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis temporibus voluptas tenetur id repellat hic, sed quia eveniet velit laboriosam unde incidunt quaerat pariatur itaque? Accusamus quaerat quo ex!

      </p>

      <div
        className="relative mt-[49.5px] flex flex-col gap-[44px] lg:mt-[73px] lg:gap-[47px]"
        ref={weeksRef}
      >
        <div className="greyBar absolute left-[23px] top-[4px] w-[4px] rounded-[5px] bg-[#E5E6E7]">
          <div className="purpleBar bg-purple-500 w-full duration-700 ease-linear" />
        </div>

        <div className="relative z-10 flex items-start gap-[40px]">
          <div
            className="flex h-[48px] w-[48px] shrink-0 grow-0 items-center justify-center rounded-[11px] bg-[linear-gradient(130deg,#B3A6FF_60%,#E7E0ED_110%)] shadow-[0px_4px_6px_-2px_rgba(26,15,48,0.03),0px_12px_16px_-4px_rgba(23,15,48,0.08)]"
            ref={firstIconRef}
          >
            <span  className="text-[1rem] font-bold leading-[1.875rem] text-white">
              1
            </span>
          </div>

          <div className="flex flex-col items-start gap-[8px] lg:max-w-[40rem]">
            <div className="flex flex-col items-start gap-[3px]">
              <span className="text-light-black text-[.875rem] font-medium leading-[1.875rem]">
                Week 1
              </span>
              <h3 className="text-light-black text-[1.125rem] font-medium leading-[1.875rem]">
                Week
              </h3>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-start gap-[40px]">
          <div
            className="flex h-[48px] w-[48px] shrink-0 grow-0 items-center justify-center rounded-[11px] bg-[linear-gradient(130deg,#B3A6FF_60%,#E7E0ED_110%)] shadow-[0px_4px_6px_-2px_rgba(26,15,48,0.03),0px_12px_16px_-4px_rgba(23,15,48,0.08)]"
            ref={secondIconRef}
          >
            <span className="text-[1rem] font-bold leading-[1.875rem] text-white">
              1
            </span>
          </div>

          <div className="flex flex-col items-start gap-[8px] lg:max-w-[40rem]">
            <div className="flex flex-col items-start gap-[3px]">
              <span ref={week2Ref} className="text-light-black text-[.875rem] font-medium leading-[1.875rem]">
                Week 2
              </span>
              <h3 className="text-light-black text-[1.125rem] font-medium leading-[1.875rem]">
                Week
              </h3>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-start gap-[40px]">
          <div
            className="flex h-[48px] w-[48px] shrink-0 grow-0 items-center justify-center rounded-[11px] bg-[linear-gradient(130deg,#B3A6FF_60%,#E7E0ED_110%)] shadow-[0px_4px_6px_-2px_rgba(26,15,48,0.03),0px_12px_16px_-4px_rgba(23,15,48,0.08)]"
            ref={thirdIconRef}
          >
            <span className="text-[1rem] font-bold leading-[1.875rem] text-white">
              1
            </span>
          </div>

          <div className="flex flex-col items-start gap-[8px] lg:max-w-[40rem]">
            <div className="flex flex-col items-start gap-[3px]">
              <span ref={week3Ref} className="text-light-black text-[.875rem] font-medium leading-[1.875rem]">
                Week 3
              </span>
              <h3 className="text-light-black text-[1.125rem] font-medium leading-[1.875rem]">
                Week
              </h3>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-start gap-[40px]">
          <div
            className="flex h-[48px] w-[48px] shrink-0 grow-0 items-center justify-center rounded-[11px] bg-[linear-gradient(130deg,#B3A6FF_60%,#E7E0ED_110%)] shadow-[0px_4px_6px_-2px_rgba(26,15,48,0.03),0px_12px_16px_-4px_rgba(23,15,48,0.08)]"
            ref={fourthIconRef}
          >
            <span className="text-[1rem] font-bold leading-[1.875rem] text-white">
              4
            </span>
          </div>

          <div className="flex flex-col items-start gap-[8px] lg:max-w-[40rem]">
            <div className="flex flex-col items-start gap-[3px]">
              <span ref={week4Ref} className="text-light-black text-[.875rem] font-medium leading-[1.875rem]">
                Week 4
              </span>
              <h3 className="text-light-black text-[1.125rem] font-medium leading-[1.875rem]">
                Week
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
