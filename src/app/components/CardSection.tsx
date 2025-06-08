import React from "react";
import CardContent_1 from "../../../public/svgs/cardcontent/cardcontent(1).svg";
import CardContent_2 from "../../../public/svgs/cardcontent/cardcontent(2).svg";
import CardContent_3 from "../../../public/svgs/cardcontent/cardcontent(3).svg";
import CardContent_4 from "../../../public/svgs/cardcontent/cardcontent(4).svg";
import Image from "next/image";
const CardSection = () => {
  return (
    <section className="min-h-screen flex justify-center items-center max-sm:px-4 px-10 bg-white py-20 overflow-hidden relative z-5 font-clashgrotesk">
      <div className="w-full max-w-7xl h-full">
        <h1 className="text-4xl max-md:text-3xl max-sm:text-2xl font-bold">
          YOUR VISION, OUR MISSION;
        </h1>
        <h1 className="text-4xl max-md:text-3xl max-sm:text-2xl font-bold">
          YOUR IDEAS, OUR PRECISION
        </h1>
        <div className="mt-10">
          <div className="flex max-md:flex-col gap-4 md:gap-0">
            <div className="bg-[#FE299A] p-6 rounded-3xl flex flex-col justify-between -rotate-6 shadow-lg shadow-neutral-500">
              <h1 className="text-2xl text-white">Content Creation</h1>
              <Image src={CardContent_1} alt="" className="mt-20"/>
            </div>
            <div className="bg-black p-6 rounded-3xl flex flex-col justify-between rotate-6 shadow-lg shadow-neutral-500">
                <h1 className="text-white text-2xl">Web Design and Development</h1>
              <Image src={CardContent_2} alt="" className="mt-20"/>
            </div>
            <div className="bg-[#5B59FD] p-10 rounded-3xl shadow-lg shadow-neutral-500">
              <Image src={CardContent_3} alt="" />
            </div>
            <div className="bg-[#1F1DFC] p-6 rounded-3xl flex flex-col justify-between shadow-lg shadow-neutral-500 -rotate-6">
                <h1 className="text-2xl text-white">Brand Identity and Strategy</h1>
              <Image src={CardContent_4} alt="" className="mt-20"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
