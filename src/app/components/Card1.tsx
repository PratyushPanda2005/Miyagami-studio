"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

const Card1 = () => {
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
      className="min-h-screen flex justify-center items-center max-sm:px-4 px-10"
    >
      <div
        ref={cardOneRef}
        style={{ willChange: "tranform" }}
        className="h-[98vh] max-md:h-[90vh] w-full max-w-7xl bg-black rounded-4xl "
      >
        <div className="p-10 max-sm:p-6 flex flex-col justify-between h-full">
          <div className="">
            <div className="flex text-white text-8xl max-sm:text-4xl font-semibold items-center">
              <h1 className="text-white tracking-tight text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl font-semibold">The W</h1>
              <span
                className="inline-block relative align-middle "
                style={{
                  height: "1em",
                  width: "1em",
                  marginLeft: "-0.2em",
                  marginRight: "-0.2em",
                }}
              >
                <DotLottieReact
                  src="https://lottie.host/f14216b8-16bf-4639-aecb-2f31e0d3e3b8/f3Id2liSWI.lottie"
                  loop
                  autoplay
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </span>
              <span className="tracking-tight text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-semibold">rld</span>
            </div>
            <div className="text-white text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl font-semibold">
              <h1 className="tracking-tight">
                d
                <span
                  className="inline-block relative align-middle"
                  style={{
                    height: "1em",
                    width: "1em",
                  }}
                >
                  {" "}
                  <DotLottieReact
                    src="https://lottie.host/beca5865-363c-4433-bdf1-ddb5824f8f78/j0Jl3duHmb.lottie"
                    loop
                    autoplay
                  />
                </span>
                es&apos;nt need
              </h1>
              <h1 className="tracking-tight">
                another pr
                <span
                  className="inline-block relative align-middle"
                  style={{
                    height: "1em",
                    width: "1em",
                    marginLeft: "-0.2em",
                    marginRight: "-0.2em",
                  }}
                >
                  {" "}
                  <DotLottieReact
                    src="https://lottie.host/5b09912e-83d4-4dcd-a4e1-8ae2b5c61f61/gL7FY0b38O.lottie"
                    loop
                    autoplay
                  />
                </span>
                tty
              </h1>
              <h1>
                so
                <span
                  className="inline-block relative align-middle"
                  style={{
                    height: "1em",
                    width: "1em",
                    marginLeft: "-0.2em",
                    marginRight: "-0.2em",
                  }}
                >
                  <DotLottieReact
                    src="https://lottie.host/7998d8a9-2529-425b-97d7-d8ef69ca54ea/noUN1Lv97N.lottie"
                    loop
                    autoplay
                  />
                </span>
                lless brand
              </h1>
            </div>
          </div>
          <div className="w-full  flex justify-end ">
            <p className="text-white max-w-md max-sm:text-sm">
              many brands look good but don’t feel right. At Studio by Miyagami,
              we go deeper—revealing the soul beneath the surface. Through web
              design, brand identity, and content creation, we craft work that’s
              as honest as it is compelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
