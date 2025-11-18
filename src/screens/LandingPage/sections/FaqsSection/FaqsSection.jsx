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

const faqItems = [
  {
    id: "item-1",
    question: "Do I need prior coding experience to join the ProLingo Coding Club?",
    answer:
      "Not at all. Our workshops are designed to empower learners at every level. We offer hands-on sessions led by experts, paired mentoring, and beginner-friendly pathways. Whether you're starting from scratch or advancing your skills, we have a path for you.",
  },
  {
    id: "item-2",
    question: "What kinds of activities and events does the club host?",
    answer:
      "We host three core offerings: empowering workshops that teach you hands-on skills, inspiring tech talks and innovation challenges that connect you with creative minds, and exciting coding competitions and hackathons where you can bring bold ideas to life and collaborate in teams.",
  },
  {
    id: "item-3",
    question: "How often do we meet and what's the typical structure?",
    answer:
      "We gather weekly for workshops, tech meetups, and collaborative sessions. Our events mix expert-led training with hands-on work time, code reviews, and networking. You'll have chances to attend talks, participate in challenges, and prepare for upcoming hackathons.",
  },
  {
    id: "item-4",
    question: "Can I participate in hackathons and competitions through the club?",
    answer:
      "Absolutely. Hackathons and coding competitions are at the heart of what we do. Members form teams, collaborate on bold ideas, and compete in our innovation challenges. It's a fun, supportive environment where you can build your portfolio, learn new skills, and connect with teammates.",
  },
  {
    id: "item-5",
    question: "What if I need help or have questions during events?",
    answer:
      "We've got you covered. Expert mentors, experienced members, and organizers are always available during workshops and events. You can ask questions in real-time, get code reviews, join office hours, or reach out via our community chat anytime you need support.",
  },
];

export const FaqsSection = () => {
  const titleRef = useRef(null);
  const accordionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      gsap.from(accordionRef.current.children, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: accordionRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full flex items-center py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-[83.5px]">
        <div className="flex items-center justify-center px-4">
          <h2
            ref={titleRef}
            className="[font-family:'IBM_Plex_Sans',Helvetica] font-bold text-[#25282b] text-3xl sm:text-4xl md:text-5xl text-center tracking-[-0.96px] leading-tight"
          >
            Discover more in our FAQs
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[880px]">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
            ref={accordionRef}
          >
            {faqItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <AccordionItem value={item.id} className="border-none">
                  <AccordionTrigger className="py-6 hover:no-underline [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg]:text-[#0066b2]">
                    <span className="[font-family:'IBM_Plex_Sans',Helvetica] font-bold text-[#25282b] text-2xl tracking-[0] leading-[31.2px] text-left">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  {item.answer && (
                    <AccordionContent className="pb-6">
                      <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#25282b] text-base tracking-[0.16px] leading-6 whitespace-pre-line">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  )}
                </AccordionItem>
                {index < faqItems.length - 1 && (
                  <div className="h-px bg-[#0066b2]/20" />
                )}
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
