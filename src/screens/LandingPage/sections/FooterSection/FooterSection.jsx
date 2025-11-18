import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const socialMediaLinks = [
  {
    name: "TikTok",
    color: "bg-[#f28c28]",
  },
  {
    name: "Instagram",
    color: "bg-[#8bc7ad]",
  },
  {
    name: "Youtube",
    color: "bg-[#ffd370]",
  },
  {
    name: "X [Twitter]",
    color: "bg-[#0066b2]",
  },
];

export const FooterSection = () => {
  return (
    <footer className="bg-[#0066b2] py-16 text-white">
      <div className="mx-auto flex w-full max-w-[1152px] flex-col gap-12 px-6 md:px-10">
        <motion.div
          className="flex flex-col gap-4 text-left md:text-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#f28c28] [font-family:'Noto_Sans_JP',Helvetica]">
            Newsletter
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-0.8px] [font-family:'IBM_Plex_Sans',Helvetica]">
            Begin your development journey today
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#e9f1f7] [font-family:'Noto_Sans_JP',Helvetica] md:mx-auto">
            Whether you&apos;re just getting started or ready to level up, get
            weekly tips, resources, and event invites right in your inbox.
          </p>
        </motion.div>

        <div className="grid gap-12 md:gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <motion.form
            className="flex flex-col gap-6 rounded-3xl bg-white/10 p-6 md:p-8 backdrop-blur"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <label
              htmlFor="newsletter-email"
              className="text-base font-medium tracking-[0.14px] [font-family:'IBM_Plex_Sans',Helvetica]"
            >
              Subscribe for updates
            </label>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                id="newsletter-email"
                type="email"
                placeholder="name@email.com"
                className="h-12 flex-1 rounded-full border-0 bg-white px-5 text-base text-[#25282b] shadow-sm focus-visible:ring-2 focus-visible:ring-offset-0"
              />
              <Button className="h-12 rounded-full bg-[#f28c28] px-6 text-base font-medium text-[#25282b] hover:bg-[#f4bb45]">
                Subscribe
              </Button>
            </div>
            <p className="text-sm leading-relaxed text-[#cfe1f3] [font-family:'Noto_Sans_JP',Helvetica]">
              We respect your time—one email per week, no spam.
            </p>
          </motion.form>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold [font-family:'IBM_Plex_Sans',Helvetica]">
              Follow us
            </h3>
            <div className="grid gap-4">
              {socialMediaLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="flex items-center gap-3 rounded-full bg-white/10 p-3 pr-5 transition hover:bg-white/20"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${social.color}`}
                  />
                  <span className="text-sm font-medium [font-family:'Noto_Sans_JP',Helvetica]">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-sm text-[#cfe1f3] [font-family:'Noto_Sans_JP',Helvetica] md:flex-row md:items-center md:justify-between">
          <span>Built in Framer by LAZREG MOHAMED</span>
          <span>© 2025 All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
