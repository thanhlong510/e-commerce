import React, { useEffect, useRef } from "react";

const BgImageSize = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const { top } = headerRef.current.getBoundingClientRect();
        if (top <= 0) {
          const newSize = 160 - window.scrollY/12 + '%';
          const newOpacity = 1 - window.scrollY/700 +'';
          headerRef.current.style.backgroundSize = newSize;
          headerRef.current.style.opacity = newOpacity;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="w-full h-[400px] size-full bg-center bg-fixed bg-no-repeat"
        id="header"
        ref={headerRef}
        style={{ backgroundImage: `url(feedback-bg.jpg)` }}
      ></div>
      <p className="text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam deleniti nulla numquam consequuntur atque, facilis quae minima, a harum, obcaecati alias fugiat eos. Quas omnis illo ad assumenda harum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam deleniti nulla numquam consequuntur atque, facilis quae minima, a harum, obcaecati alias fugiat eos. Quas omnis illo ad assumenda harum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam deleniti nulla numquam consequuntur atque, facilis quae minima, a harum, obcaecati alias fugiat eos. Quas omnis illo ad assumenda harum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam deleniti nulla numquam consequuntur atque, facilis quae minima, a harum, obcaecati alias fugiat eos. Quas omnis illo ad assumenda harum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam deleniti nulla numquam consequuntur atque, facilis quae minima, a harum, obcaecati alias fugiat eos. Quas omnis illo ad assumenda harum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam deleniti nulla numquam consequuntur atque, facilis quae minima, a harum, obcaecati alias fugiat eos. Quas omnis illo ad assumenda harum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam deleniti nulla numquam consequuntur atque, facilis quae minima, a harum, obcaecati alias fugiat eos. Quas omnis illo ad assumenda harum!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam deleniti nulla numquam consequuntur atque, facilis quae minima, a harum, obcaecati alias fugiat eos. Quas omnis illo ad assumenda harum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam deleniti nulla numquam consequuntur atque, facilis quae minima, a harum, obcaecati alias fugiat eos. Quas omnis illo ad assumenda harum!
      </p>
    </div>
  );
};

export default BgImageSize;
