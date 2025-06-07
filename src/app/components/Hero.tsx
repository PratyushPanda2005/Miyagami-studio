"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Position {
  x: number;
  y: number;
}

interface ImageElement extends HTMLDivElement {
  rect?: DOMRect;
}

const Hero = () => {
  // Refs
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<ImageElement[]>([]);
  const mainRef = useRef<HTMLDivElement>(null);

  // Mouse positions
  const mousePos = useRef<Position>({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const lastMousePos = useRef<Position>({ ...mousePos.current });
  const cacheMousePos = useRef<Position>({ ...mousePos.current });

  // Animation state
  const imgPosition = useRef(0);
  const zIndexVal = useRef(1);
  const animationFrameId = useRef<number | null>(null);
  const threshold = 80;

  // Sample images - replace with your actual image paths
  const imageUrls = [
    "/svgs/mattersvg(1).svg",
    "/svgs/mattersvg(2).svg",
    "/svgs/mattersvg(3).svg",
    "/svgs/mattersvg(4).svg",
    "/svgs/mattersvg(5).svg",
    "/svgs/mattersvg(6).svg",
    "/svgs/mattersvg(7).svg",
    "/svgs/mattersvg(8).svg",
    "/svgs/mattersvg(9).svg",
    "/svgs/mattersvg(10).svg",
    "/svgs/mattersvg(11).svg",
  ];

  // Get pointer position (mouse/touch)
  const getPointerPos = (ev: MouseEvent | TouchEvent): Position => {
    let posx = 0;
    let posy = 0;
    const e = ev || (window.event as MouseEvent | TouchEvent);

    if ("touches" in e && e.touches) {
      if (e.touches.length > 0) {
        posx = e.touches[0].clientX;
        posy = e.touches[0].clientY;
      }
    } else if ("clientX" in e) {
      posx = e.clientX;
      posy = e.clientY;
    }

    return { x: posx, y: posy };
  };

  // Handle pointer movement
  const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
    const pos = getPointerPos(ev);
    mousePos.current = { x: pos.x, y: pos.y };
  };

  // Linear interpolation
  const lerp = (a: number, b: number, n: number): number => {
    return (1 - n) * a + n * b;
  };

  // Euclidean distance
  const getMouseDistance = (pos1: Position, pos2: Position): number => {
    return Math.sqrt(
      Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2)
    );
  };

  // Show next image in trail
  const showNextImage = () => {
    zIndexVal.current++;

    imgPosition.current = (imgPosition.current + 1) % imagesRef.current.length;
    const img = imagesRef.current[imgPosition.current];
    if (!img?.rect) return;

    gsap.killTweensOf(img);

    // Set initial position (offscreen)
    gsap.set(img, {
      opacity: 1,
      scale: 1,
      zIndex: zIndexVal.current,
      x: cacheMousePos.current.x - img.rect.width / 2,
      y: cacheMousePos.current.y - img.rect.height / 2,
      display: "block",
    });

    // Animate to current mouse position
    gsap.to(img, {
      x: mousePos.current.x - img.rect.width / 2,
      y: mousePos.current.y - img.rect.height / 2,
      duration: 0.6,
      ease: "power2.out",
    });

    // Fade out animation
    gsap.to(img, {
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(img, { display: "none" });
      },
    });
  };

  // Main render loop
  const render = () => {
    // Smooth follow position
    cacheMousePos.current = {
      x: lerp(cacheMousePos.current.x, mousePos.current.x, 0.2),
      y: lerp(cacheMousePos.current.y, mousePos.current.y, 0.2),
    };

    // Trigger new image if mouse moved enough
    if (getMouseDistance(mousePos.current, lastMousePos.current) > threshold) {
      showNextImage();
      lastMousePos.current = { ...mousePos.current };
    }

    animationFrameId.current = requestAnimationFrame(render);
  };

  // Initialize
  useEffect(() => {
    // Preload images
    imageUrls.forEach((url) => {
      new Image().src = url;
    });

    // Initialize images
    if (contentRef.current) {
      imagesRef.current = Array.from(
        contentRef.current.querySelectorAll(".content__img")
      ) as ImageElement[];

      // Set initial properties for each image
      imagesRef.current.forEach((img) => {
        img.rect = img.getBoundingClientRect();
        gsap.set(img, {
          position: "absolute",
          opacity: 0,
          scale: 1,
          x: 0,
          y: 0,
          display: "none",
        });
      });
    }

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(render);

    // Set up scroll-triggered background color change
    if (!mainRef.current) return;


    // Background color change
    // gsap.to(mainRef.current, {
    //   backgroundColor: "#ddfa00",
    //   scrollTrigger: {
    //     trigger: mainRef.current,
    //     start: "center center",
    //     end: "bottom center",
    //     scrub: true,
    //     markers: true
    //   }
    // });

    // Event listeners
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main
      ref={mainRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
       
      }} 
    >
      
      <div
        className="content"
        ref={contentRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="content__img"
            style={{
              position: "absolute",
              width: "200px",
              height: "300px",
              opacity: 0,
              display: "none",
              pointerEvents: "none",
              willChange: "transform, opacity",
            }}
          >
            <div className="content__img-inner">
              <img
                src={url}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-white flex justify-center items-center w-full h-full absolute">
        <img src="/svgs/miyagami_logo.svg" alt="Error"/>
      </div>
    </main>
  );
};

export default Hero;