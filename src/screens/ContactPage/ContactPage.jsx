import React, { useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    skills: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        skills: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-32 bg-gradient-to-br from-white to-[#f8f9fb]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center text-center gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica] tracking-[-0.96px] leading-tight"
          >
            Join the IDevelop Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl text-lg text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica] leading-relaxed"
          >
            Tell us about yourself and let's start your journey with us. We're excited to learn about your coding interests, experience level, and goals.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 md:py-24 flex-grow">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="rounded-3xl border-2 border-[#0066b2]/20 bg-white shadow-lg">
                <CardContent className="p-10 md:p-12">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                      {/* Name Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                          <label
                            htmlFor="firstName"
                            className="[font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#25282b] text-base tracking-[0]"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="px-5 py-3 rounded-xl border-2 border-[#0066b2]/20 focus:border-[#0066b2] bg-white text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none transition-colors"
                            placeholder="John"
                          />
                        </div>

                        <div className="flex flex-col gap-3">
                          <label
                            htmlFor="lastName"
                            className="[font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#25282b] text-base tracking-[0]"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="px-5 py-3 rounded-xl border-2 border-[#0066b2]/20 focus:border-[#0066b2] bg-white text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none transition-colors"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-3">
                        <label
                          htmlFor="email"
                          className="[font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#25282b] text-base tracking-[0]"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="px-5 py-3 rounded-xl border-2 border-[#0066b2]/20 focus:border-[#0066b2] bg-white text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-3">
                        <label
                          htmlFor="phone"
                          className="[font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#25282b] text-base tracking-[0]"
                        >
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="px-5 py-3 rounded-xl border-2 border-[#0066b2]/20 focus:border-[#0066b2] bg-white text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none transition-colors"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>

                      {/* Skills */}
                      <div className="flex flex-col gap-3">
                        <label
                          htmlFor="skills"
                          className="[font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#25282b] text-base tracking-[0]"
                        >
                          Your Skills/Experience Level
                        </label>
                        <select
                          id="skills"
                          name="skills"
                          value={formData.skills}
                          onChange={handleChange}
                          required
                          className="px-5 py-3 rounded-xl border-2 border-[#0066b2]/20 focus:border-[#0066b2] bg-white text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select your level...</option>
                          <option value="beginner">Beginner - Just starting out</option>
                          <option value="intermediate">Intermediate - Some experience</option>
                          <option value="advanced">Advanced - Coding regularly</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-3">
                        <label
                          htmlFor="message"
                          className="[font-family:'IBM_Plex_Sans',Helvetica] font-semibold text-[#25282b] text-base tracking-[0]"
                        >
                          Tell us about your goals and interests
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="px-5 py-3 rounded-xl border-2 border-[#0066b2]/20 focus:border-[#0066b2] bg-white text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none transition-colors resize-none"
                          placeholder="What interests you about the ProLingo Coding Club? What are your coding goals?"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button className="h-12 w-full bg-[#0066b2] rounded-xl hover:bg-[#0052a3] text-white font-semibold text-base transition-all">
                        Join Our Community
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center gap-6 py-12 text-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica]">
                        Welcome to ProLingo!
                      </h3>
                      <p className="text-base text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica]">
                        Thank you for joining us. We'll be in touch soon with more information and upcoming events!
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar with Info Cards */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* What We Offer Card */}
              <Card className="rounded-3xl border-2 border-[#0066b2]/10 bg-[#0066b2]/5 shadow-md">
                <CardContent className="p-8 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#0066b2] [font-family:'IBM_Plex_Sans',Helvetica]">
                    What's Included
                  </h3>
                  <div className="flex flex-col gap-3">
                    {[
                      "Weekly workshops & hands-on training",
                      "Expert mentorship & guidance",
                      "Coding competitions & hackathons",
                      "Collaborative team projects",
                      "Portfolio building opportunities",
                      "Community support & networking",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0066b2] flex-shrink-0 mt-1" />
                        <p className="text-sm text-[#25282b] [font-family:'Noto_Sans_JP',Helvetica]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack Card */}
              <Card className="rounded-3xl border-2 border-[#f28c28]/10 bg-[#f28c28]/5 shadow-md">
                <CardContent className="p-8 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#f28c28] [font-family:'IBM_Plex_Sans',Helvetica]">
                    We Focus On
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "React", "TypeScript", "Python", "Web Dev", "Git", "Testing", "DevOps"].map(
                      (tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white border border-[#f28c28]/30 rounded-full text-sm font-medium text-[#f28c28] [font-family:'Noto_Sans_JP',Helvetica]"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info Card */}
              <Card className="rounded-3xl border-2 border-[#25282b]/10 bg-[#25282b]/5 shadow-md">
                <CardContent className="p-8 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#25282b] [font-family:'IBM_Plex_Sans',Helvetica]">
                    Get in Touch
                  </h3>
                  <div className="flex flex-col gap-4 text-sm [font-family:'Noto_Sans_JP',Helvetica]">
                    <div>
                      <p className="text-[#25282b]/60 mb-1">Email</p>
                      <p className="text-[#0066b2] font-medium">hello@prolingoclub.com</p>
                    </div>
                    <div>
                      <p className="text-[#25282b]/60 mb-1">Discord</p>
                      <p className="text-[#25282b]">Join our community server</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
