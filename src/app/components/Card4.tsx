"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card4 = () => {
  const cardFourRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a pseudo-element for the radial effect
    const card = cardFourRef.current;
    if (!card) return;
    
    // Create a div for the radial background
    const radialBg = document.createElement('div');
    radialBg.style.position = 'absolute';
    radialBg.style.top = '0';
    radialBg.style.left = '0';
    radialBg.style.width = '100%';
    radialBg.style.height = '100%';
    radialBg.style.background = 'radial-gradient(circle at center, #FE299A 0%, transparent 0%)';
    radialBg.style.borderRadius = 'inherit';
    radialBg.style.zIndex = '0';
    card.appendChild(radialBg);
    
    // Make sure content stays above the background
    const content = card.querySelector('div');
    if (content) {
      content.style.position = 'relative';
      content.style.zIndex = '1';
    }

    gsap.from(cardFourRef.current, {
      scale: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });


    gsap.to(radialBg, {
      background: 'radial-gradient(circle at center, #FE299A 100%, transparent 100%)',
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "70% bottom",
        end: "center center",
        scrub: true,
        markers: false
      },
    });

    // Cleanup
    return () => {
      if (card.contains(radialBg)) {
        card.removeChild(radialBg);
      }
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="min-h-screen flex justify-center items-center max-sm:px-4 px-10 bg-[#ddfa00] relative z-5 font-clashgrotesk"
    >
      <div
        ref={cardFourRef}
        style={{ willChange: "transform", position: "relative" }}
        className="h-[98vh] max-md:h-[90vh] w-full max-w-7xl bg-black rounded-4xl overflow-hidden"
      >
        <div className="p-10 max-sm:p-6 flex flex-col justify-between h-full">
          <div className="">
            <div className="flex text-white items-center">
              <h1 className="text-white tracking-tight text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl font-semibold">
                we are here to make design matter
              </h1>
            </div>
          </div>
          <div className="w-full flex max-lg:flex-col max-lg:gap-4 justify-end">
            <p className="text-white max-w-md max-sm:text-sm max-md:text-lg lg:text-base flex items-end">
              Let&apos;s not create just for the sake of it. Let&apos;s craft something
              that&apos;s as meaningful as it is memorable. At Studio by Miyagami, we
              don&apos;t just design; we build legacies—bold and unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;