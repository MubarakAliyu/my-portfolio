import React from "react";
import { motion } from "framer-motion";
import img from "../assets/images/img.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.png";
import img13 from "../assets/images/img13.png";
import img14 from "../assets/images/img14.png";

import ScrollToBottomButton from "./ScrollToBottomButton";

const cardHover = {
  scale: 1.03,
  y: -6,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex items-end gap-4 mb-12"
      >
        <h2 className="font-bulkyTrial text-[56px] md:text-[80px] leading-none text-[#54423D]">
          Selected
        </h2>
        <span className="font-brittany text-[56px] md:text-[80px] text-[#A59E99]">
          projects
        </span>
      </motion.div>

      {/* Project Block (outer wrapper) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="mb-20"
      >
        {/* Top Heading Block (number + project title) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="flex items-center gap-6 mb-10"
        >
          <div className="w-10 h-10 rounded-full bg-[#A6573B] text-white flex items-center justify-center font-medium">
            1
          </div>
          <h3 className="font-medianTrial text-[32px] md:text-[48px] text-[#54423D]">
            Hi B Greenbox
          </h3>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start"
        >
          {/* LEFT CONTENT */}
          <div>
            <p className="font-figtree text-[20px] text-[#57514F] leading-7 mb-6">
              Hafiz Integrated Farms Limited, also known as "Hi B Greenbox," aims to
              create a virtual platform for trading farms, farm produce, services,
              logistics, and training. "Hi B Greenbox" is an e-commerce web app that
              allows users to browse services and farm products offered by farmers,
              facilitating buying and selling activities. Additionally, it includes an
              administrative role for managing, adding, and deleting farm products.
            </p>

            <p className="font-figtree text-[20px] text-[#57514F] leading-7 mb-6">
              "Hi B Greenbox" serves as a farm management platform designed to help
              farmers optimize their operations and increase their yields. The platform
              addresses the challenge that many farmers face in effectively managing
              their farms due to difficulties in organizing essential information. This
              can result in inefficiencies, lower yields, and reduced profitability.
            </p>

            <p className="font-figtree text-lg text-[#9A958F] mb-2">My Roles</p>
            <p className="font-figtree text-[20px] text-[#3f3a39] leading-7">
              <span className="font-semibold">Product Design</span> | Brand Identity
              Design, Design Strategy, User Research, User Flows, Usability Testing, UI
              Design & Hi-Fidelity Mockups and Prototyping.
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="pt-2">
            <div className="text-[#A9A4A0] mb-3 font-figtree text-md">Team</div>
            <ul className="space-y-4 mb-8">
              <li className="font-figtree">
                <span className="font-semibold text-[#3f3a39] text-md">
                  Aliyu Mubarak (me)
                </span>{" "}
                <span className="text-[#CC4B2C] text-md">| Product Designer</span>
              </li>
              <li className="font-figtree">
                <span className="font-semibold text-[#3f3a39] text-md">
                  Hafiz Ibrahim Bello
                </span>{" "}
                <span className="text-[#CC4B2C] text-md">| Product Owner</span>
              </li>
              <li className="font-figtree">
                <span className="font-semibold text-[#3f3a39] text-md">
                  Abubakar Mukhtar
                </span>{" "}
                <span className="text-[#CC4B2C] text-md">| Backend Developer</span>
              </li>
              <li className="font-figtree">
                <span className="font-semibold text-[#3f3a39] text-md">
                  Muhammad Sani Haruna
                </span>{" "}
                <span className="text-[#CC4B2C] text-md">| Frontend Developer</span>
              </li>
            </ul>

            <div className="text-[#A9A4A0] mb-2 font-figtree text-md">Timeline</div>
            <div className="font-figtree">
              <span className="font-semibold text-[#3f3a39] text-md">Feb 2024</span>{" "}
              <span className="text-[#CC4B2C] text-md">| Ongoing</span>
            </div>
          </aside>
        </motion.div>
      </motion.div>

      {/* Project Image Panel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="w-full bg-[#F6F5F2] rounded-2xl p-6 md:p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top-left card */}
          <motion.div
            whileHover={cardHover}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-xl bg-white min-h-[220px] flex items-center justify-center p-6"
          >
            <img
              src={img1}
              alt="card-1"
              className="max-w-[80%] object-contain"
            />
          </motion.div>

          {/* Top-right card */}
          <motion.div
            whileHover={cardHover}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-xl overflow-hidden min-h-[220px] relative"
          >
            <img
              src={img2}
              alt="field hero"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>

          {/* Bottom-left card */}
          <motion.div
            whileHover={cardHover}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="rounded-xl bg-[#6b7a32] min-h-[180px] flex items-center justify-center p-6"
          >
            <img
              src={img3}
              alt="big-icon"
              className="max-w-[60%] object-contain"
            />
          </motion.div>

          {/* Bottom-right card */}
          <motion.div
            whileHover={cardHover}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl bg-white min-h-[180px] p-6 overflow-auto"
          >
            <img
              src={img4}
              alt="icons-grid"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

    {/* Extra row with 2 side-by-side cards */}
    <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: 0.24 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
    <motion.div
        whileHover={cardHover}
        className="rounded-xl bg-white min-h-[220px] flex items-center justify-center p-6"
    >
        <img src={img} alt="extra-card-1" className="max-w-full object-contain" />
    </motion.div>

    <motion.div
        whileHover={cardHover}
        className="rounded-xl bg-white min-h-[220px] flex items-center justify-center p-6"
    >
        <img src={img5} alt="extra-card-2" className="max-w-full object-contain" />
    </motion.div>
    </motion.div>

    {/* Extra 2 full-width cards (with zoom-in hover) */}
    <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: 0.28 }}
    className="space-y-6 mt-6"
    >
    <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="rounded-xl overflow-hidden min-h-[260px] relative"
    >
        <img
        src={img12}
        alt="extra-card-3"
        className="w-full h-full object-cover rounded-xl"
        />
    </motion.div>

    <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="rounded-xl overflow-hidden min-h-[260px] relative"
    >
        <img
        src={img7}
        alt="extra-card-4"
        className="w-full h-full object-cover rounded-xl"
        />
    </motion.div>
    </motion.div>

      {/* Fixed Scroll Button */}
      <ScrollToBottomButton />
    </section>
  );
};

export default ProjectsSection;
