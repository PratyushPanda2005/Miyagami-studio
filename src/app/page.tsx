"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Card1 from "./components/Card1";
import Lenis from "lenis";
import Card2 from "./components/Card2";
import HeroMob from "./components/HeroMob";
import Card3 from "./components/Card3";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });
    // Background color change
    gsap.to(mainRef.current, {
      backgroundColor: "#ddfa00",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "25% center",
        end: "center center",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div ref={mainRef} className="bg-black">
        <HeroMob/>
        <div className="max-md:hidden">
          <Hero />
        </div>
        <Card1 />
      </div>
      <Card2 />
      <Card3/>
      <div className="min-h-screen"></div>
    </>
  );
}
