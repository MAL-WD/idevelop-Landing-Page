import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const curriculumItems = [
  {
    id: "item-1",
    number: "01",
    title: "Foundations",
    description:
      "Master hiragana and katakana, basic greetings, and essential survival phrases.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    number: "02",
    title: "Daily Conversations",
    description: "",
    defaultOpen: false,
  },
  {
    id: "item-3",
    number: "03",
    title: "Expanding Horizons",
    description: "",
    defaultOpen: false,
  },
  {
    id: "item-4",
    number: "04",
    title: "Practical Mastery",
    description: "",
    defaultOpen: false,
  },
  {
    id: "item-5",
    number: "05",
    title: "Advanced Communication",
    description: "",
    defaultOpen: false,
  },
  {
    id: "item-6",
    number: "06",
    title: "Native-Like Fluency",
    description: "",
    defaultOpen: false,
  },
];

export const CurriculumSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelector('h2'), {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: 5,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-white" ref={sectionRef}>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <h2 className="[font-family:'IBM_Plex_Sans',Helvetica] font-bold text-[#25282b] text-3xl sm:text-4xl md:text-5xl tracking-[-0.96px] leading-tight">
            Roadmap to Japanese mastery
          </h2>
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#25282b] text-sm sm:text-base tracking-[0.16px] leading-6">
            Take the first step towards mastering Japanese. Discover our
            structured courses designed
            <br />
            to elevate your skills.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 bg-white">
          <div className="flex-1 w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              {curriculumItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={item.id}
                    className="border-b border-[#0066b2]/20 first:border-t first:border-t-[#0066b2]"
                  >
                    <AccordionTrigger className="py-6 hover:no-underline [&[data-state=open]]:border-t-[#0066b2] [&[data-state=open]]:border-t-2 [&[data-state=open]]:mt-[-2px]">
                      <span className="[font-family:'IBM_Plex_Sans',Helvetica] font-bold text-[#25282b] text-2xl tracking-[0] leading-[31.2px]">
                        {item.number}: {item.title}
                      </span>
                    </AccordionTrigger>
                    {item.description && (
                      <AccordionContent className="pb-6">
                        <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#25282b] text-base tracking-[0.16px] leading-6">
                          {item.description}
                        </p>
                      </AccordionContent>
                    )}
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          <motion.div
            ref={imageRef}
            className="w-full sm:w-[300px] md:w-[380px] lg:w-[422px] h-[300px] sm:h-[320px] md:h-[380px] lg:h-[422px] rounded-3xl bg-[url(/figure---image---kyrfrpna2qod9chw6hgmaczowhy-jpg.png)] bg-cover bg-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};
