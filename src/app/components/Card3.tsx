"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Group1 from "../../../public/svgs/circlestack/Group 1 (1).svg";
import Group2 from "../../../public/svgs/circlestack/Group 4 (1).svg";
import Group3 from "../../../public/svgs/circlestack/Group 7 (1).svg";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Card3 = () => {
  const cardOneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const smiley = useRef(null);
  const cross = useRef(null);
  const concentric = useRef(null);
  useEffect(() => {
    gsap.from(cardOneRef.current, {
      scale: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    
    gsap.from(smiley.current, {
      x: -600,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center bottom",
        end: "center center",
        scrub: true,
      },
    });
    gsap.from(cross.current, {
      x: -600,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "70% bottom",
        end: "70% center",
        scrub: true,
      },
    });
    gsap.from(concentric.current, {
      x: -600,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "90% bottom",
        end: "90% center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className="min-h-screen flex justify-center items-center max-sm:px-4 px-10 bg-[#ddfa00] relative z-5 font-clashgrotesk"
    >
      <div
        ref={cardOneRef}
        style={{ willChange: "tranform" }}
        className="h-[98vh] max-md:h-[90vh] w-full max-w-7xl bg-black rounded-4xl overflow-hidden"
      >
        <div className="p-10 max-sm:p-6 flex flex-col justify-between h-full">
          <div className="">
            <div className="flex text-white items-center">
              <h1 className="text-white tracking-tight text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl font-semibold">
                cookie-cutters are for baking, not brands
              </h1>
            </div>
          </div>
          <div className="w-full flex max-lg:flex-col max-lg:gap-4 justify-between">
            <div
              ref={svgContainerRef}
              className="flex xl:w-[180px] w-[100px] max-md:w-[100px] max-sm:w-[80px]"
            >
              <Image
                ref={smiley}
                src={Group1}
                alt=""
                className="Smiley"
              />
              <Image
                ref={cross}
                src={Group2}
                alt=""
                className=""
              />
              <Image
                ref={concentric}
                src={Group3}
                alt=""
                className=""
              />
            </div>

            <p className="text-white max-w-md max-sm:text-sm max-md:text-lg lg:text-base flex items-end">
              We don’t put lipstick on brands. At Studio by Miyagami, we dive
              deep into the heart, psychology, and story that make your brand
              meaningful. Because a logo is the beginning, not the whole story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
