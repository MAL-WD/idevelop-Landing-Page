import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MethodologySection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-20 flex items-center justify-center bg-white">
      <div className="container max-w-7xl px-4 flex flex-col gap-20">
        <header className="flex flex-col items-center justify-center text-center" ref={titleRef}>
          <h2 className="[font-family:'IBM_Plex_Sans',Helvetica] font-bold text-[#25282b] text-5xl tracking-[-0.96px] leading-[57.6px] max-w-4xl">
            <span className="block">Accelerate your Japanese</span>
            <span className="block">learning curve and boosts</span>
            <span className="block">long-term retention</span>
          </h2>
        </header>

        <motion.div
          className="w-full min-h-[380px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
        </motion.div>
      </div>
    </section>
  );
};
