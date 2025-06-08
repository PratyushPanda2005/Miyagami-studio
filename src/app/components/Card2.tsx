import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card2 = () => {
  const cardOneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
  }, []);
  return (
    <div
      ref={containerRef}
      className="min-h-screen flex justify-center items-center max-sm:px-4 bg-[#ddfa00]"
    >
      <div
        ref={cardOneRef}
        style={{ willChange: "tranform" }}
        className="h-[98vh] max-md:h-[90vh] w-full max-w-7xl bg-black rounded-4xl "
      >
        <div className="p-10 max-sm:p-6 flex flex-col justify-between h-full">
          <div className="">
            <div className="flex text-white text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl font-semibold items-center">
              <h1 className="text-white tracking-tight">
                design without meaning is just another image in the noise
              </h1>
            </div>
          </div>
          <div className="w-full  flex justify-end ">
            <p className="text-white max-w-md max-sm:text-sm">
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

export default Card2;
