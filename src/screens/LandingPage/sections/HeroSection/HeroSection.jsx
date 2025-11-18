import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-6 md:px-12 lg:px-20">
        <motion.header
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-tight font-bold tracking-[-1.1px] text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica]">
            Empowering students to innovate and build the future
          </h1>
          <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica]">
            Join a vibrant community of makers, designers, and problem solvers
            unlocking real-world skills through events, mentorship, and
            hands-on learning.
          </p>
        </motion.header>

        <motion.div
          className="w-full overflow-hidden rounded-3xl shadow-lg"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            className="w-full h-full object-cover"
            alt="IDevelop members collaborating"
            src="/figure---image---8unumxfpawoqt6pcqcxfj8cr7y-jpg.png"
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <Card className="rounded-3xl border-2 border-[#0066b2]/20 bg-white shadow-md">
            <CardContent className="flex flex-col gap-6 p-8 md:p-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica]">
                  Discover our next experience
                </h2>
                <p className="text-base leading-relaxed text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica]">
                  Explore workshops, hackathons, and learning journeys designed
                  to accelerate your growth across design, business, and
                  technology.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full bg-[#0066b2] px-6 py-3 text-base font-medium text-white hover:bg-[#0052a3]">
                  Join IDEVELOP
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-[#0066b2] px-6 py-3 text-base font-medium text-[#0066b2] hover:bg-[#0066b2]/10"
                >
                  Explore programs
                </Button>
              </div>
            </CardContent>
          </Card>

          <motion.div
            className="flex h-full flex-col justify-between rounded-3xl bg-[#0066b2] p-8 shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/80 [font-family:'Noto_Sans_JP',Helvetica]">
                Community impact
              </p>
              <h3 className="mt-6 text-5xl font-bold text-white [font-family:'IBM_Plex_Sans',Helvetica]">
                89%
              </h3>
              <p className="mt-2 text-base leading-relaxed text-white/90 [font-family:'Noto_Sans_JP',Helvetica]">
                Of members achieve N1 proficiency or land breakthrough projects
                within their first year.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[#f28c28]"></div>
              <div>
                <p className="text-sm font-medium text-white [font-family:'IBM_Plex_Sans',Helvetica]">
                  5K+ community hours
                </p>
                <p className="text-xs text-white/80 [font-family:'Noto_Sans_JP',Helvetica]">
                  Driven by mentors, alumni, and partners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code snippet aesthetic */}
        <motion.div
          className="mt-8 rounded-2xl bg-[#0066b2]/5 border border-[#0066b2]/20 p-6 font-mono text-sm overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#f28c28]"></div>
            <div className="w-3 h-3 rounded-full bg-[#0066b2]"></div>
            <div className="w-3 h-3 rounded-full bg-[#0066b2]/50"></div>
            <span className="ml-2 text-xs text-[#25282b]/60">terminal</span>
          </div>
          <pre className="text-[#25282b]">
            <code>
              <span className="text-[#0066b2]">$</span> idevelop --join --community
              {"\n"}
              <span className="text-[#0066b2]">→</span> Connecting to iDevelop
              network...
              {"\n"}
              <span className="text-[#f28c28]">✓</span> Authenticated as member
              {"\n"}
              <span className="text-[#0066b2]">→</span> Welcome to the future of
              innovation
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};
