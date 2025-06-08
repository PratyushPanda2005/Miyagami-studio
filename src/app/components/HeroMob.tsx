import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import BouncingLogo_1 from "../../../public/svgs/bouncingsvg/bouncingsvg(1).png";
import BouncingLogo_2 from "../../../public/svgs/bouncingsvg/bouncingsvg(2).png";
import BouncingLogo_3 from "../../../public/svgs/bouncingsvg/bouncingsvg(3).png";
import BouncingLogo_4 from "../../../public/svgs/bouncingsvg/bouncingsvg(4).png";
import BouncingLogo_5 from "../../../public/svgs/bouncingsvg/bouncingsvg(5).png";

const HeroMob = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowHeight === 0) return;

    const ctx = gsap.context(() => {
      // Create a master timeline
      const master = gsap.timeline({ repeat: -1 });

      // Helper function to add bounce animation for each logo
      const addBounce = (selector: string, delay: number = 0) => {
        master.to(selector, {
          y: -windowHeight / 2,
          duration: 0.5,
          ease: "power2.out"
        }, delay);
        master.to(selector, {
          y: 0,
          duration: 0.5,
          ease: "power2.in"
        }, delay + 0.5);
      };

      // Add bounces in sequence with delays
      addBounce(".bounce-1", 0);
      addBounce(".bounce-2", 1); // starts 1 second after previous ends
      addBounce(".bounce-3", 2);
      addBounce(".bounce-4", 3);
      addBounce(".bounce-5", 4);

    }, heroRef);
    
    return () => ctx.revert();
  }, [windowHeight]);

  return (
    <div
      ref={heroRef}
      className="relative z-5 md:hidden overflow-hidden flex justify-center items-center h-svh font-clashgrotesk"
    >
      {/* Main Logo (centered) */}
      <div className="text-white flex justify-center items-center w-[60%] z-10">
        <img src="/svgs/miyagami_logo.svg" alt="Miyagami Logo" />
      </div>

      {/* Bouncing Logos */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BouncingLogo_1}
          alt="Bouncing Logo 1"
          className="absolute bounce-1"
          style={{ 
            bottom: `-${windowHeight * 0.25}px`,
            left: "10%",
            width: "160px",
            height: "80px",
          }}
        />
        <Image
          src={BouncingLogo_2}
          alt="Bouncing Logo 2"
          className="absolute bounce-2"
          style={{ 
            bottom: `-${windowHeight * 0.25}px`,
            left: "30%",
            width: "160px",
            height: "80px",
          }}
        />
        <Image
          src={BouncingLogo_3}
          alt="Bouncing Logo 3"
          className="absolute bounce-3"
          style={{ 
            bottom: `-${windowHeight * 0.25}px`,
            right: "20%",
            width: "160px",
            height: "80px",
          }}
        />
        <Image
          src={BouncingLogo_4}
          alt="Bouncing Logo 4"
          className="absolute bounce-4"
          style={{ 
            bottom: `-${windowHeight * 0.25}px`,
            right: "10%",
            width: "120px",
            height: "80px",
          }}
        />
        <Image
          src={BouncingLogo_5}
          alt="Bouncing Logo 5"
          className="absolute bounce-5"
          style={{ 
            bottom: `-${windowHeight * 0.25}px`,
            left: "50%",
            transform: "translateX(-50%)",
            width: "160px",
            height: "80px",
          }}
        />
      </div>
    </div>
  );
};

export default HeroMob;