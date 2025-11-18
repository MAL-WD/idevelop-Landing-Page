import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

const pathCards = [
  {
    title: "Workshops that Empower",
    description: [
      "Learn from experts and enhance your",
      "skills through hands-on sessions",
      "designed to turn knowledge into",
      "action.",
    ],
    image: "/mask---person-holding-orange-flower-petals.png",
    bgColor: "bg-[#0066b2]/50",
    rotation: "-rotate-8",
  },
  {
    title: "Inspiring Events",
    description: [
      "Join innovation challenges, talks, and",
      "tech meetups that connect you with",
      "creative minds and future",
      "collaborators.",
    ],
    image: "/mask---l8a6rtesgsyo9aemcznu7lcbe-jpg.png",
    bgColor: "bg-white/90",
    rotation: "",
  },
  {
    title: "Competitions & Hackathons",
    description: [
      "Challenge yourself, collaborate in",
      "teams, and bring bold ideas to life",
      "through exciting coding competitions",
      "and innovation hackathons.",
    ],
    image: "/mask---uwkp94jvdnnde4rqah9ni03u7qy-jpg.png",
    bgColor: "bg-[#f28c28]/60",
    rotation: "rotate-3",
    titleLines: ["Competitions &", "Hackathons"],
  },
];

export const PathSection = () => {
  return (
    <section className="w-full py-20 flex flex-col gap-20 bg-white">
      <motion.div
        className="mx-auto max-w-[537px] flex flex-col gap-0 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="[font-family:'IBM_Plex_Sans',Helvetica] font-bold text-[#25282b] text-3xl sm:text-4xl md:text-5xl text-center tracking-[-0.96px] leading-tight">
          Find the path that aligns
        </h2>
        <h2 className="[font-family:'IBM_Plex_Sans',Helvetica] font-bold text-[#25282b] text-3xl sm:text-4xl md:text-5xl text-center tracking-[-0.96px] leading-tight">
          with your aspirations.
        </h2>
      </motion.div>

      <div className="mx-auto w-full max-w-[1152px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathCards.map((card, index) => {
            // Center card (index 1) has no animation
            const isCenterCard = index === 1;

            return (
              <motion.div
                key={index}
                initial={
                  index === 0
                    ? { opacity: 0, scale: 1, x: 360, y: -8 }
                    : index === 2
                    ? { opacity: 0, scale: 1, x: -360, y: -8 }
                    : undefined
                }
                whileInView={
                  !isCenterCard
                    ? { opacity: 1, scale: 1, x: 0, y: 0 }
                    : undefined
                }
                viewport={!isCenterCard ? { once: true } : undefined}
                transition={
                  !isCenterCard
                    ? {
                        type: "spring",
                        stiffness: 400,
                        damping: 80,
                        mass: 1,
                        delay: 0.3,
                      }
                    : undefined
                }
                whileHover={{ y: -10, rotate: 0 }}
                className={`${card.rotation}`}
              >
                <Card
                  className="rounded-3xl overflow-hidden border-0 shadow-none bg-transparent min-h-[300px] sm:min-h-[380px] md:h-[453px] flex items-end relative"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                >
                  <CardContent
                    className={`${card.bgColor} rounded-2xl m-2 p-6 backdrop-blur-[1.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.5px)_brightness(100%)] w-[calc(100%_-_16px)]`}
                  >
                    <div className="flex flex-col gap-4">
                      {card.titleLines ? (
                        <div className="flex flex-col">
                          {card.titleLines.map((line, idx) => (
                            <h3
                              key={idx}
                              className="[font-family:'IBM_Plex_Sans',Helvetica] font-bold text-[#25282b] text-2xl tracking-[0] leading-[31.2px]"
                            >
                              {line}
                            </h3>
                          ))}
                        </div>
                      ) : (
                        <h3 className="[font-family:'IBM_Plex_Sans',Helvetica] font-bold text-[#25282b] text-2xl tracking-[0] leading-[31.2px]">
                          {card.title}
                        </h3>
                      )}
                      <div className="flex flex-col">
                        {card.description.map((line, idx) => (
                          <p
                            key={idx}
                            className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#25282b] text-sm sm:text-base tracking-[0.16px] leading-[24.0px]"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
