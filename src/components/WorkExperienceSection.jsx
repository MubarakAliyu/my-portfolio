import React from "react";
import { motion } from "framer-motion";
import calendarIcon from "../assets/calendar.svg"; // calendar icon

// Experience data
const experiences = [
  {
    company: "Hi B Greenbox – Agri-tech Platform",
    role: "Product Designer – Freelance / Contract",
    duration: "Feb 2024 – Present",
  },
  {
    company: "Design Studio XYZ",
    role: "UI/UX Designer – Full-time",
    duration: "Jan 2022 – Dec 2023",
  },
  {
    company: "Tech Startup ABC",
    role: "Visual Designer – Internship",
    duration: "Jun 2021 – Dec 2021",
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="work" className="px-6 md:px-20 py-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex items-end gap-4 mb-12"
      >
        <h2 className="font-bulkyTrial text-[56px] md:text-[80px] leading-none text-[#54423D]">
          Work
        </h2>
        <span className="font-brittany text-[56px] md:text-[80px] text-[#A59E99]">
          experience
        </span>
      </motion.div>

      {/* Loop through experiences */}
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: idx * 0.15 }}
          className="mb-16"
        >
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
            {/* LEFT CONTENT */}
            <div>
              <h3 className="font-medianTrial text-[28px] md:text-[40px] text-[#54423D] mb-3">
                {exp.company}
              </h3>
              <p className="font-figtree text-[20px] text-[#3f3a39] leading-7">
                {exp.role}
              </p>
            </div>

            {/* RIGHT SIDEBAR */}
            {/* RIGHT SIDEBAR */}
            <aside className="flex justify-end items-center gap-3 pt-8">
            <span className="font-figtree text-lg text-[#3f3a39]">
                {exp.duration}
            </span>
            <img
                src={calendarIcon}
                alt="Calendar Icon"
                className="w-6 h-6 object-contain"
            />
            </aside>

            {/* <aside className="flex items-center gap-3 pt-2">
              <span className="font-figtree text-lg text-[#3f3a39]">
                {exp.duration}
              </span>
              <img
                src={calendarIcon}
                alt="Calendar Icon"
                className="w-6 h-6 object-contain"
              />
            </aside> */}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default WorkExperienceSection;
