import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { gsap } from "gsap";
import { Button } from "../../components/ui/button";
import { AboutSection } from "./sections/AboutSection";
import { BlogSection } from "./sections/BlogSection";
import { CurriculumSection } from "./sections/CurriculumSection";
import { FaqsSection } from "./sections/FaqsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MethodologySection } from "./sections/MethodologySection";
import { OperationsSection } from "./sections/OperationsSection";
import { PathSection } from "./sections/PathSection";
import { TestimonialSection } from "./sections/TestimonialSection";

const navigationItems = [
  { label: "About", width: "w-[46.2px]" },
  { label: "ID Magazine", width: "w-[91.73px]" },
  { label: "ID Channels", width: "w-[90.73px]" },
  { label: "More", width: "w-[58.19px]" },
];

const MotionButton = motion(Button);

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (value) => `${wrap(-100, 0, value)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap text-4xl sm:text-5xl font-light uppercase tracking-[0.4em] text-[#0f172a]"
        style={{ x }}
      >
        <span className="px-8">{children} </span>
        <span className="px-8">{children} </span>
        <span className="px-8">{children} </span>
        <span className="px-8">{children} </span>
      </motion.div>
    </div>
  );
};

const ScrollVelocitySection = () => (
  <section className="py-16 sm:py-24 font-mono">
    <div className="flex flex-col gap-8">
      <ParallaxText baseVelocity={-5}>
        ID Club • Web Development • Product Design • Community Builders
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        Learning • Mentorship • Innovation • Fullstack Craft
      </ParallaxText>
    </div>
  </section>
);

export const LandingPage = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleJoinClick = () => {
    navigate("/join");
    setMenuOpen(false);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-white w-full flex flex-col relative">
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-[2] bg-white/80 backdrop-blur-lg"
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20 relative">
          <div className="h-20 flex items-center justify-between gap-6 relative">
            <div className="flex items-center gap-3">
              <div className="w-16 h-12 bg-[url(/top---link---logo-dark---figure---logo---8xyzif2chwnbq4vsqbiofwg.png)] bg-cover bg-center" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center h-10 px-6 bg-[#ffffffcc] rounded-[80px] backdrop-brightness-[100%] backdrop-blur-[4.5px] [-webkit-backdrop-filter:blur(4.5px)_brightness(100%)] border border-solid border-[#fde7d7]">
              <div className="flex items-center gap-6">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={index}
                    className="flex items-center justify-center h-6 [font-family:'Noto_Sans_JP',Helvetica] font-light text-[#25282b] text-base tracking-[0.16px] leading-6 whitespace-nowrap hover:text-[#0066b2] transition-colors cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Desktop Join Button */}
            <div className="hidden md:flex items-center gap-3">
              <div className="w-9 h-9 bg-[#f28c28] rounded-full" />
              <MotionButton
                onClick={handleJoinClick}
                className="h-9 px-6 bg-[#0066b2] rounded-[80px] hover:bg-[#0052a3] transition-colors cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-[#f8f9fb] text-base tracking-[0.16px] leading-6 whitespace-nowrap">
                  Join Us
                </span>
              </MotionButton>
            </div>

            {/* Mobile Hamburger Menu */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden flex-col gap-1.5 cursor-pointer z-50 p-2"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-6 h-0.5 bg-[#25282b]"
                animate={menuOpen ? { rotate: 45, y: 16 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-[#25282b]"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-[#25282b]"
                animate={menuOpen ? { rotate: -45, y: -16 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={menuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="block md:hidden overflow-visible w-full -mx-6 sm:-mx-10 lg:-mx-20"
            style={{ pointerEvents: menuOpen ? "auto" : "none" }}
          >
            <div className="flex flex-col gap-4 pb-6 pt-4 border-t border-[#0066b2]/20 bg-white/95 backdrop-blur-lg px-6 sm:px-10 lg:px-20">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={handleNavClick}
                  className="text-left px-4 py-2 [font-family:'Noto_Sans_JP',Helvetica] font-light text-[#25282b] text-base tracking-[0.16px] hover:text-[#0066b2] hover:bg-[#0066b2]/5 rounded-lg transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={handleJoinClick}
                className="mx-4 px-6 py-3 bg-[#0066b2] rounded-full text-white [font-family:'Noto_Sans_JP',Helvetica] font-light text-base tracking-[0.16px] hover:bg-[#0052a3] transition-colors w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </header>

      <img
        className="fixed left-0 top-[calc(100vh_-_78px)] w-full max-w-[1920px] h-[78px] z-[3] pointer-events-none"
        alt="Container"
        src="/container.svg"
      />

      <main className="w-full flex flex-col relative pt-24 sm:pt-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col px-6 sm:px-10 lg:px-20">
          <HeroSection />
          <AboutSection />
          <PathSection />
          <TestimonialSection />
          <OperationsSection />
          <CurriculumSection />
          <ScrollVelocitySection />   
          {/* <MethodologySection /> */}
          <BlogSection />
          <FaqsSection />
          <FooterSection />
        </div>
      </main>
    </div>
  );
};
