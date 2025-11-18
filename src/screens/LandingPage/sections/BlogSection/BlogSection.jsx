import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const blogCards = [
  {
    image: "/figure---image---z5uyy8hnmjuj0x72ei5bwcsoky-png.png",
    category: "Fluency Seekers",
    title: "Speak Like a Native: Mastering Pronunciation and Intonation",
    excerpt:
      "Fine-tune your accent, intonation, and rhythm through practical drills you can apply right away.",
  },
  {
    image: "/figure---image---65e1t78gksikhhn2s2xbvvlicc-jpg.png",
    category: "Career Builders",
    title: "Ace Your Japanese Job Interview: From '自己紹介' to Salary Talks",
    excerpt:
      "Step into your next interview feeling prepared with scripts, etiquette tips, and negotiation vocab.",
  },
  {
    image: "/figure---image---fcib19nc3rytewql6zyboinv1s-jpg.png",
    category: "Cultural Explorers",
    title: "Learn Japanese Through Anime: From Studio Ghibli to Daily Life",
    excerpt:
      "Decode iconic scenes and turn your favorite anime quotes into memorable language lessons.",
  },
];

export const BlogSection = () => {
  const headingRows = useMemo(
    () => ({
      top: ["Learning", "resources", "that", "bring"],
      bottom: ["language", "to", "life"],
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
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
      <div className="w-full max-w-[1152px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica]"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.6, once: true }}
            >
              {headingRows.top.map((word, index) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  custom={index}
                  className="tracking-[-0.72px]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica]"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.6, once: true }}
            >
              {headingRows.bottom.map((word, index) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  custom={index + headingRows.top.length}
                  className="tracking-[-0.72px]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            className="self-start md:self-auto rounded-[80px] px-6 py-2 text-base font-medium text-[#0066b2] border-2 border-[#0066b2] hover:bg-[#0066b2]/10"
          >
            View all articles
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full rounded-3xl border-2 border-[#0066b2]/20 shadow-sm overflow-hidden bg-white">
                <CardContent className="p-0 h-full flex flex-col">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-56 w-full rounded-t-3xl object-cover"
                  />

                  <div className="flex flex-col gap-4 p-6 md:p-8">
                    <Badge
                      variant="outline"
                      className="w-fit rounded-full border-[#0066b2]/40 px-4 py-1.5 bg-[#0066b2]/5"
                    >
                      <span className="text-sm tracking-[0.14px] leading-6 text-[#0066b2] [font-family:'Noto_Sans_JP',Helvetica]">
                        {card.category}
                      </span>
                    </Badge>

                    <h3 className="text-2xl font-semibold leading-snug text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica]">
                      {card.title}
                    </h3>

                    <p className="text-base leading-relaxed text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica]">
                      {card.excerpt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
