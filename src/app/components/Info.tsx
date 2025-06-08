import Image from "next/image";
import React from "react";
import BlogSvg_1 from "../../../public/svgs/blogsvgs/blogsvg(1).svg";
import BlogSvg_2 from "../../../public/svgs/blogsvgs/blogsvg(2).svg";
import BlogSvg_3 from "../../../public/svgs/blogsvgs/blogsvg(3).svg";
import BlogSvg_4 from "../../../public/svgs/blogsvgs/blogsvg(4).svg";
import BlogSvg_5 from "../../../public/svgs/blogsvgs/blogsvg(5).svg";
import { Plus } from "lucide-react";
const Info = () => {
  return (
    <section className="min-h-screen flex justify-center items-center max-sm:px-4 px-10 relative z-5 bg-black py-20 font-clashgrotesk">
      <div className="max-w-7xl w-full">
        <div className="w-full grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 gap-8">
          <div id="blog">
            <h1 className="text-white mb-12 max-md:mb-8 normal-case">Blog</h1>
            <div className="flex flex-col gap-4">
              <div className="flex text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
                <Image src={BlogSvg_1} alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                    Why your brand needs creative direction
                  </h1>
                  <p className="max-sm:text-xs">
                    In the sea of brands, yours must show a distinctive and
                    recongnizable identity to stand out. This is where
                    creative...
                  </p>
                </div>
              </div>
              <div className="flex text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
                <Image src={BlogSvg_2} alt="" className="py-4"/>
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                    Why your brand needs creative direction
                  </h1>
                  <p className="max-sm:text-xs">
                    In the sea of brands, yours must show a distinctive and
                    recongnizable identity to stand out. This is where
                    creative...
                  </p>
                </div>
              </div>
              <div className="flex text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
                <Image src={BlogSvg_3} alt="" className="py-4"/>
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                    Why your brand needs creative direction
                  </h1>
                  <p className="max-sm:text-xs">
                    In the sea of brands, yours must show a distinctive and
                    recongnizable identity to stand out. This is where
                    creative...
                  </p>
                </div>
              </div>
              <div className="flex text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
                <Image src={BlogSvg_4} alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                    Why your brand needs creative direction
                  </h1>
                  <p className="max-sm:text-xs">
                    In the sea of brands, yours must show a distinctive and
                    recongnizable identity to stand out. This is where
                    creative...
                  </p>
                </div>
              </div>
              <div className="flex text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
             
                <Image src={BlogSvg_5} alt="" className="py-4"/>
       
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                    Why your brand needs creative direction
                  </h1>
                  <p className="max-sm:text-xs">
                    In the sea of brands, yours must show a distinctive and
                    recongnizable identity to stand out. This is where
                    creative...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="faq">
            <h1 className="text-white mb-12 max-md:mb-8 normal-case">FAQs</h1>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
                <div className="flex flex-col gap-2 items-center">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                    What is custom web design, and why does it matter for your brand?
                  </h1>
                </div>
                    <Plus/>
              </div>
              <div className="flex justify-between text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                  How can a strong content strategy improve my brand’s presence?
                  </h1>
                </div>
                  <Plus/>
              </div>
              <div className="flex justify-between text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
                <div className="flex flex-col gap-2 items-center">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                    Why your brand needs creative direction
                  </h1>
                </div>
                  <Plus/>
              </div>
              <div className="flex justify-between text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                    Why your brand needs creative direction
                  </h1>
                </div>
                <Plus/>
              </div>
              <div className="flex justify-between text-white normal-case gap-4 border border-[#808080] p-4 md:p-6 rounded-2xl">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold max-sm:text-base text-[18px]">
                    Why your brand needs creative direction
                  </h1>
                </div>
                <Plus/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
