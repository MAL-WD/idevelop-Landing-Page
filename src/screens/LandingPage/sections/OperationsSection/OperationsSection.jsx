import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topRowItems = [
  {
    id: "ID ST",
    label: "STARTUPS",
    leftPosition: "left-0",
  },
  {
    id: "ID RD",
    label: "Research & Development",
    leftPosition: "left-[388px]",
  },
  {
    id: "ID BR",
    label: "Patents",
    leftPosition: "left-[775px]",
  },
];

const bottomRowItems = [
  {
    id: "ID HC",
    label: "Healthcare",
    leftPosition: "left-0",
  },
  {
    id: "ID ES",
    label: "Embedded Systems",
    leftPosition: "left-[146px]",
  },
  {
    id: "ID CS",
    label: "Cyber Security",
    leftPosition: "left-[291px]",
  },
  {
    id: "ID SR",
    label: "Scientific Research",
    leftPosition: "left-[437px]",
  },
  {
    id: "ID AI",
    label: "Artificial Inteligence",
    leftPosition: "left-[583px]",
  },
  {
    id: "ID SF",
    label: "Smart Framing",
    leftPosition: "left-[729px]",
  },
  {
    id: "ID SC",
    label: "Smart Cities",
    leftPosition: "left-[874px]",
  },
];

export const OperationsSection = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const topItems = containerRef.current.querySelectorAll('[data-row="top"]');
      const bottomItems = containerRef.current.querySelectorAll('[data-row="bottom"]');

      gsap.from(topItems, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      gsap.from(bottomItems, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      gsap.from(logoRef.current, {
        opacity: 0,
        scale: 0,
        rotation: 360,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full flex items-center py-20 bg-white px-4 sm:px-6 md:px-10">
      <div className="container mx-auto w-full">
        <div className="w-full mx-auto" ref={containerRef}>
          {/* Top Row */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {topRowItems.map((item, index) => (
              <div
                key={`top-${index}`}
                data-row="top"
                className="flex-1 min-w-[140px] max-w-xs h-[65px] bg-[#0066b2] rounded-full flex items-center justify-center px-4 hover:bg-[#0052a3] transition-colors"
              >
                <div className="text-center">
                  <div className="font-semibold text-white text-xs sm:text-sm">
                    {item.id}
                  </div>
                  <div className="text-white/80 text-xs leading-tight line-clamp-2">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center mb-8">
            <div
              ref={logoRef}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f28c28] flex items-center justify-center"
            >
              <span className="text-white font-bold text-xs sm:text-sm text-center px-2">
                IDEVELOP
              </span>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap gap-3 justify-center">
            {bottomRowItems.map((item, index) => (
              <div
                key={`bottom-${index}`}
                data-row="bottom"
                className="flex-1 min-w-[110px] max-w-xs h-[60px] bg-[#0066b2] rounded-full flex items-center justify-center px-3 hover:bg-[#0052a3] transition-colors"
              >
                <div className="text-center">
                  <div className="font-semibold text-white text-xs">
                    {item.id}
                  </div>
                  <div className="text-white/80 text-xs leading-tight line-clamp-2">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
