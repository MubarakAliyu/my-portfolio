import React from "react";
import { motion } from "framer-motion";
import ScrollToBottomButton from "./ScrollToBottomButton";
import ProjectImages from "./ProjectImages";

// Hover animation variant
// const cardHover = {
//   scale: 1.03,
//   y: -6,
//   transition: { type: "spring", stiffness: 300, damping: 20 },
// };

// Project data
const projects = [
  {
    number: 1,
    title: "Hi B Greenbox",
    roles: "Product Design | Brand Identity Design, Design Strategy, User Research, User Flows, Usability Testing, UI Design & Hi-Fidelity Mockups and Prototyping.",
    description: [
      `Hafiz Integrated Farms Limited, also known as "Hi B Greenbox," aims to
      create a virtual platform for trading farms, farm produce, services,
      logistics, and training. "Hi B Greenbox" is an e-commerce web app that
      allows users to browse services and farm products offered by farmers,
      facilitating buying and selling activities. Additionally, it includes an
      administrative role for managing, adding and deleting farm products.`,
      `"Hi B Greenbox" serves as a farm management platform designed to help
      farmers optimize their operations and increase their yields. The platform
      addresses the challenge that many farmers face in effectively managing
      their farms due to difficulties in organizing essential information.
      This can result in inefficiencies, lower yields, and reduced profitability.`,
    ],
    team: [
      { name: "Aliyu Mubarak (me)", role: "Product Designer" },
      { name: "Hafiz Ibrahim Bello", role: "Product Owner" },
      { name: "Abubakar Mukhtar", role: "Backend Developer" },
      { name: "Muhammad Sani Haruna", role: "Frontend Developer" },
    ],
    timeline: "Feb 2024 | Ongoing",
    website: "https://hibgreenbox.com", // 🔹 added
    images: [
      "/images/img1.png",
      "/images/img2.png",
      "/images/img3.png",
      "/images/img4.png",
      "/images/img.png",
      "/images/img5.png",
      "/images/img12.png",
      "/images/img7.png",
    ],
  },
  {
    number: 2,
    title: "Second Project",
    roles: "UI/UX Design | Prototyping, Wireframes, User Research",
    description: [
      `This is the description for the second project. It follows the same
      structure and animation style as the first one.`,
      `More detailed explanation of the project goes here, including its goals,
      challenges and design process.`,
    ],
    team: [
      { name: "Aliyu Mubarak", role: "Product Designer" },
      { name: "Jane Doe", role: "Frontend Developer" },
      { name: "John Smith", role: "Backend Developer" },
    ],
    timeline: "Mar 2024 | Completed",
    website: "https://example.com/project2", // 🔹 added
    images: ["/images/proj2a.png", "/images/proj2b.png", "/images/proj2c.png", "/images/proj2d.png", "/images/proj2e.png"],
  },
  {
    number: 3,
    title: "Third Project",
    roles: "Product Design | Brand Strategy, Interaction Design",
    description: [
      `Description for the third project.`,
      `Extra details for the third project go here.`,
    ],
    team: [{ name: "Aliyu Mubarak", role: "Product Designer" }],
    timeline: "Apr 2024 | Completed",
    website: "https://example.com/project2", // 🔹 added
    images: ["/images/proj3a.png", "/images/proj3b.png", "/images/proj3c.png"],
  },
  {
    number: 4,
    title: "Fourth Project",
    roles: "Design Lead | UI Systems, Accessibility",
    description: [
      `Fourth project description goes here.`,
      `Additional explanation here.`,
    ],
    team: [{ name: "Aliyu Mubarak", role: "Product Designer" }],
    timeline: "Jun 2024 | Ongoing",
    website: "https://example.com/project2", // 🔹 added
    images: ["/images/proj4a.png", "/images/proj4b.png"],
  },
  {
    number: 5,
    title: "Fifth Project",
    roles: "Design & Research | Branding, Visual Identity",
    description: [
      `Fifth project description goes here.`,
      `Add any further notes about this project.`,
    ],
    team: [{ name: "Aliyu Mubarak", role: "Product Designer" }],
    timeline: "Aug 2024 | Completed",
    website: "https://example.com/project2", // 🔹 added
    images: ["/images/proj5a.png", "/images/proj5b.png", "/images/proj5c.png"],
  },
];

const ProjectsSectionNew = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
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

      {/* Loop through projects */}
      {projects.map((proj, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mb-20"
        >
          {/* Top Heading Block */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="flex items-center gap-6 mb-10"
          >
            <div className="w-10 h-10 rounded-full bg-[#A6573B] text-white flex items-center justify-center font-medium">
              {proj.number}
            </div>
            <h3 className="font-medianTrial text-[32px] md:text-[48px] text-[#54423D]">
              {proj.title}
            </h3>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            // className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start"
            className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20 items-start"
          >
            {/* LEFT CONTENT */}
            <div>
              {proj.description.map((para, i) => (
                <p
                  key={i}
                  className="font-figtree text-[20px] text-[#57514F] leading-7 mb-6"
                >
                  {para}
                </p>
              ))}
              <p className="font-figtree text-lg text-[#9A958F] mb-2">My Roles</p>
              <p className="font-figtree text-[20px] text-[#3f3a39] leading-7">
                <span className="font-semibold">{proj.roles}</span>
              </p>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="">
              <div className="text-[#A9A4A0] mb-3 font-figtree text-lg">Team</div>
              <ul className="space-y-4 mb-8">
                {proj.team.map((member, i) => (
                  <li key={i} className="font-figtree">
                    <span className="font-semibold text-[#3f3a39] text-[20px]">
                      {member.name}
                    </span>{" "}
                    <span className="text-[#CC4B2C] text-[20px]">| {member.role}</span>
                  </li>
                ))}
              </ul>

              <div className="text-[#A9A4A0] mb-2 font-figtree text-lg">
                Timeline
              </div>
              <div className="font-figtree mb-6">
                <span className="font-semibold text-[#3f3a39] text-[20px]">
                  {proj.timeline}
                </span>
              </div>

                {/* Website link */}
                {proj.website && (
                <div className="font-figtree mt-6">
                    <div className="text-[#A9A4A0] mb-2 text-lg">Website</div>
                    <a
                    href={proj.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3f3a39] text-[20px] underline hover:text-[#A6573B] transition-colors break-all"
                    >
                    {proj.website}
                    </a>
                </div>
                )}

            </aside>
          </motion.div>

        {/* Images Grid */}
        <ProjectImages images={proj.images} number={proj.number} />


        </motion.div>
      ))}

      <ScrollToBottomButton />
    </section>
  );
};

export default ProjectsSectionNew;
