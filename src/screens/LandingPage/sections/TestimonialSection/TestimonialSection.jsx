import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    category: "IDJourney",
    title: "IDJourney : First Edition 1IDJ23",
    quote:
      "The lessons on business etiquette, negotiation phrases, and industry-specific vocabulary have given me the confidence to communicate effectively in professional settings.",
    image: "/image-wrapper-2.svg",
    theme: {
      background: "bg-white",
      border: "border-2 border-[#0066b2]/30",
      category: "text-[#0066b2]",
      title: "text-[#25282b]",
      quote: "text-[#25282b]",
      quoteAccent: "bg-[#0066b2]",
    },
  },
  {
    category: "IDChannel",
    title: "IDevelop Club Channel",
    quote:
      "ProLingo is key to achieving fluency. Advanced grammar and pronunciation drills have taken my skills to new heights. It's a must-have for anyone serious about mastering Japanese.",
    image: "/image-wrapper-1.svg",
    theme: {
      background: "bg-[#0066b2]",
      border: "border-2 border-[#0066b2]",
      category: "text-white/90",
      title: "text-white",
      quote: "text-white/90",
      quoteAccent: "bg-[#f28c28]",
    },
  },
  {
    category: "Cultural Explorer",
    title: "Agreement 2 : Agricultural Subsection of Kenadsa, Bechar",
    quote:
      "ProLingo's courses have been a gateway to Japan's rich culture. I've loved delving into the language through anime and festivals. It's made learning Japanese not just educational, but an exciting adventure.",
    image: "/image-wrapper-3.svg",
    theme: {
      background: "bg-white",
      border: "border-2 border-[#f28c28]/30",
      category: "text-[#f28c28]",
      title: "text-[#25282b]",
      quote: "text-[#25282b]",
      quoteAccent: "bg-[#f28c28]",
    },
  },
  {
    category: "IDMagazine",
    title: "Cyber Security Basics (Coming Soon)",
    quote:
      "ProLingo has transformed my understanding of Japanese. The immersive cultural content, like the tea ceremony and traditional art lessons, has given me a deeper appreciation for the language and its roots.",
    image: "/image-wrapper.svg",
    theme: {
      background: "bg-white",
      border: "border-2 border-[#0066b2]/20",
      category: "text-[#0066b2]",
      title: "text-[#25282b]",
      quote: "text-[#25282b]",
      quoteAccent: "bg-[#0066b2]",
    },
  },
];

export const TestimonialSection = () => {
  const headingWords = useMemo(
    () => ({
      topRow: ["Events", "That", "Inspire", "Growth"],
      bottomRow: ["and", "Connection"],
    }),
    []
  );

  const wordVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-[1152px]">
        <div className="w-full flex justify-center mb-16">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="flex flex-wrap justify-center gap-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica]"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.6, once: true }}
            >
              {headingWords.topRow.map((word, index) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  custom={index}
                  className="tracking-[-0.96px]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center gap-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica]"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.6, once: true }}
            >
              {headingWords.bottomRow.map((word, index) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  custom={index + headingWords.topRow.length}
                  className="tracking-[-0.96px]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="relative" style={{ zIndex: 1 }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="sticky mb-12 last:mb-0"
              style={{
                top: "20vh",
                zIndex: index + 1,
              }}
            >
              <Card
                className={`rounded-3xl border-0 shadow-lg overflow-hidden ${testimonial.theme.background} ${testimonial.theme.border}`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col-reverse md:flex-row">
                    <div className="flex-1 p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center gap-6">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex h-9 w-9 rounded-full items-center justify-center ${testimonial.theme.quoteAccent}`}
                        >
                          <span className="text-2xl leading-none text-white">
                            &quot;
                          </span>
                        </span>
                        <span
                          className={`uppercase tracking-[0.2em] text-xs font-semibold [font-family:'Noto_Sans_JP',Helvetica] ${testimonial.theme.category}`}
                        >
                          {testimonial.category}
                        </span>
                      </div>

                      <h3
                        className={`text-2xl sm:text-3xl font-bold [font-family:'IBM_Plex_Sans',Helvetica] ${testimonial.theme.title}`}
                      >
                        {testimonial.title}
                      </h3>

                      <p
                        className={`text-base sm:text-lg leading-relaxed [font-family:'Noto_Sans_JP',Helvetica] font-light ${testimonial.theme.quote}`}
                      >
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex-1 min-h-[260px]">
                      <img
                        className="h-full w-full object-cover md:object-contain"
                        alt={`${testimonial.category} testimonial`}
                        src={testimonial.image}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
