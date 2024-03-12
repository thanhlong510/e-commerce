import React from "react";
import StoreNav from "../components/StoreNav";
import Footer from "../components/Footer";
import { Image } from "@nextui-org/react";

const About = () => {
  return (
    <div>
      <StoreNav />
      <div className="relative w-full mt-[100px] text-4xl">
        
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
          <p className=" font-semibold">About</p>
        </div>
        <img src="./banner.jpg" className="h-auto w-full " />
      </div>
      <div className="mx-[100px] grid grid-cols-3 "></div>
      <div className="mx-24 mb-28 mt-14 grid grid-cols-3 gap-8">
        <div>
          <img src="./about-1.jpg" height={230} width={"full"} alt="" />
          <p className="py-5 text-xl font-semibold">Our mission</p>
          <p className="text-base text-slate-400">
            Praesent blandit dolorhon quam. In vemi sit amet augue congue
            elementum. Morbi in ipsum sit amet pede facilisis laoreet.
          </p>
        </div>
        <div>
          <img src="./about-2.jpg" height={230} width={"full"} alt="" />
          <p className="py-5 text-xl font-semibold">Our Vission</p>
          <p className="text-base text-slate-400">
            Praesent blandit dolorhon quam. In vemi sit amet augue congue
            elementum. Morbi in ipsum sit amet pede facilisis laoreet.
          </p>
        </div>
        <div>
          <img src="./about-3.jpg" height={230} width={"full"} alt="" />
          <p className="py-5 text-xl font-semibold">Statement</p>
          <p className="text-base text-slate-400">
            Praesent blandit dolorhon quam. In vemi sit amet augue congue
            elementum. Morbi in ipsum sit amet pede facilisis laoreet.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-5xl font-bold">Team Member</p>
        <div className="mx-24 mb-28 mt-14 grid grid-cols-4 gap-8">
          <div>
            <img src="./avatarAbout.jpg" height={300} width={256} alt="" />
            <p className="py-5 text-xl font-semibold">Jonathon Andrew</p>
            <p className="text-base text-slate-400">
            FOUNDER
            </p>
          </div>
          <div>
            <img src="./avatarAbout2.jpg" height={300} width={256} alt="" />
            <p className="py-5 text-xl font-semibold">Adipisci Velit</p>
            <p className="text-base text-slate-400">
            PHOTOGRAPHER
            </p>
          </div>
          <div>
            <img src="./avatarAbout3.jpg" height={300} width={256} alt="" />
            <p className="py-5 text-xl font-semibold">John Fexit</p>
            <p className="text-base text-slate-400">
            MARKETING MANAGER
            </p>
          </div>
          <div>
            <img src="./avatarAbout4.jpg" height={300} width={256} alt="" />
            <p className="py-5 text-xl font-semibold">Mark Dinn</p>
            <p className="text-base text-slate-400">
            CREATIVE DIRECTOR
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
