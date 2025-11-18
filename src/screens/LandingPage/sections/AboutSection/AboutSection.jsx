import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  const headingWords = ["Where", "Ideas", "Meet", "Innovation."];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headingRef.current.children, {
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });

      if (leftTextRef.current && rightTextRef.current) {
        gsap.to(leftTextRef.current, {
          y: 140,
          ease: "none",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });

        gsap.to(rightTextRef.current, {
          y: -140,
          ease: "none",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full flex flex-col gap-24 py-16 bg-white">
      <div
        className="mx-auto max-w-[1152px] px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center"
        ref={headingRef}
      >
        {headingWords.map((word, index) => (
          <div
            key={index}
            className="[font-family:'IBM_Plex_Sans',Helvetica] text-[#25282b] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.96px] leading-tight opacity-0"
          >
            {word}
          </div>
        ))}
      </div>

      <div
        className="mx-auto mt-20 max-w-[1152px] px-4 w-full min-h-auto relative"
        ref={contentRef}
      >
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8 lg:gap-10">
          <div
            ref={leftTextRef}
            className="w-full md:flex-1 md:max-w-[368px] [font-family:'Noto_Sans_JP',Helvetica] font-light text-[#25282b] text-sm sm:text-base tracking-[0.16px] leading-6"
          >
            IDevelop is a scientific and technological club <br />
            which was created on April 04, 2021 within the <br />
            faculty of Exact Sciences of the Tahri Mohamed <br />
            University of Bechar in Algeria ,iDevelop Club <br />
            UTMB is a student-driven community that <br />
            inspires collaboration, creativity, and technical <br />
            growth. We host workshops, hackathons, and <br />
            innovation programs to help students turn ideas <br />
            into impact.
          </div>

          <motion.div
            className="relative w-full sm:w-[280px] md:w-[336px] h-[280px] sm:h-[310px] md:h-[336px] flex-shrink-0 mx-auto"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute w-full top-0 left-0 h-full rounded-3xl bg-[url(/figure---image---hlwgxxz3tc0cuzekaexgbpzmogm-jpg.png)] bg-cover bg-[50%_50%]" />

            <div className="absolute w-[44.35%] left-[27.82%] bottom-0 h-[42px] bg-[#f8f9fb]">
              <div className="-left-11 bottom-0 -rotate-90 absolute w-11 h-11 bg-[#ffffff01] rounded-[50px] shadow-[-24px_24px_0px_#ffffff]" />

              <div className="absolute -right-11 bottom-0 w-11 h-11 bg-[#ffffff01] rounded-[50px] shadow-[-24px_24px_0px_#ffffff]" />

              <motion.a
                href="mailto:amaya@prolingo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="left-1.5 absolute top-1.5 flex h-9 w-[137px] items-center rounded-[80px] bg-[#0066b2] pr-4 pl-3 text-white shadow-[0px_8px_20px_rgba(0,102,178,0.35)] transition-colors hover:bg-[#0052a3]"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f28c28] text-[#25282b]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z" />
                  </svg>
                </div>
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-base tracking-[0.16px] leading-6 whitespace-nowrap">
                  dr.ghazli
                </span>
              </motion.a>
            </div>
          </motion.div>

          <div
            ref={rightTextRef}
            className="w-full md:flex-1 md:max-w-[368px] [font-family:'Noto_Sans_JP',Helvetica] font-light text-[#25282b] text-sm sm:text-base tracking-[0.16px] leading-6"
          >
            Our mission is to bridge the gap between theory <br />
            and practice by creating a space where students <br />
            can explore emerging technologies, share <br />
            knowledge, and collaborate on real-world <br />
            projects. Through workshops, hackathons, and <br />
            mentorship programs, iDevelop empowers <br />
            members to grow their technical and creative <br />
            skills, preparing them to become tomorrow&apos;s <br />
            innovators and leaders
          </div>
        </div>
      </div>
    </section>
  );
};
