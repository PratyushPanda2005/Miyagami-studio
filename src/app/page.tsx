"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Card1 from "./components/Card1"
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
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
      }
    });
  },[])
  return (
    <>
    <div ref={mainRef} className="bg-black">
    <Hero/>
    <Card1/>
    </div>
    </>
  );
}
