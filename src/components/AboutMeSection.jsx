import React from "react";
import { motion } from "framer-motion";

// About me data
const aboutMe = {
  heading: "Aliyu Mubarak",
  tagline: "Product Designer & Creative Thinker",
  description: [
    `I’m a multidisciplinary designer with a passion for building meaningful
    digital experiences. My work combines design strategy, user-centered
    thinking, and creativity to craft solutions that are both functional and
    visually engaging.`,
    `Over the years, I’ve worked on projects across product design,
    branding, and user experience. I’m driven by curiosity, collaboration,
    and a desire to make technology feel simple and human.`,
  ],
  details: [
    { label: "Email", value: "aliyu@example.com" },
    { label: "Location", value: "Abuja, Nigeria" },
    { label: "Interests", value: "Design, Technology, Startups" },
    { label: "Skills", value: "UI/UX Design, Prototyping, Branding" },
  ],
};

const AboutMeSection = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-16">
      {/* Top Heading Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex items-end gap-4 mb-12"
      >
        <h2 className="font-bulkyTrial text-[56px] md:text-[80px] leading-none text-[#54423D]">
          About
        </h2>
        <span className="font-brittany text-[56px] md:text-[80px] text-[#A59E99]">
          me
        </span>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.18 }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start"
      >
        {/* LEFT CONTENT */}
        <div>
          <h3 className="font-medianTrial text-[28px] md:text-[36px] text-[#54423D] mb-4">
            {aboutMe.heading}
          </h3>
          <p className="font-figtree text-xl text-[#A6573B] mb-6">
            {aboutMe.tagline}
          </p>
          {aboutMe.description.map((para, i) => (
            <p
              key={i}
              className="font-figtree text-[20px] text-[#57514F] leading-7 mb-6"
            >
              {para}
            </p>
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="pt-2 lg:ml-auto">
          <ul className="space-y-6">
            {aboutMe.details.map((item, i) => (
              <li key={i}>
                <div className="text-[#A9A4A0] font-figtree text-lg mb-1">
                  {item.label}
                </div>
                <div className="font-figtree text-lg text-[#3f3a39]">
                  {item.value}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;
