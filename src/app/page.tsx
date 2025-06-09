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
import Card4 from "./components/Card4";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import Info from "./components/Info";
import SwiperGallery from "./components/SwiperGallery";
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
        end: "bottom center",
        scrub: true,
        markers: false
      },
    });

  }, []);

  return (
    <>
      <div ref={mainRef} className="bg-black relative z-5">
        <HeroMob/>
        <div className="max-md:hidden">
          <Hero />
        </div>
        <Card1 />
      </div>
      <Card2 />
      <Card3/>
      <Card4/>
      <CardSection/>
      <SwiperGallery/>
      <Info/>
      <Footer/>
      <div className="min-h-screen"/>
    </>
  );
}
