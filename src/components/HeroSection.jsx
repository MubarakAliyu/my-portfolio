import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";
import heroImage from "../assets/mubarak-hero.png";
// optional: if you create a dark-mode version of the hero image, add:
// import heroImageDark from "../assets/mubarak-hero-dark.png";

const HeroSection = () => {
  const { isDark } = useTheme();

  // If you add a dark-mode image, uncomment the import above and use this:
  // const imgSrc = isDark && typeof heroImageDark !== "undefined" ? heroImageDark : heroImage;
  // For now we'll fallback to the same image and rely on CSS classes for color changes:
  // const imgSrc = heroImage;

  return (
    <section 
      id="home" 
      className="flex flex-col items-center justify-center text-center mt-10 px-4 md:px-0">
      {/* Hero Image */}
        <motion.img
        data-aos="fade-up"
        src={heroImage}
        alt="Mubarak"
        className="w-40"
        />

      {/* Text */}
    <h2 
      className="text-[#54423D] text-xl mt-6 font-medianMono font-semibold" 
      data-aos="fade-up" 
      data-aos-delay="200">
    Hi there! I’m <span className="font-bold">Mubarak.</span>
    </h2>

    <p className="text-[#54423D] font-slim mt-2 text-lg" data-aos="fade-up" data-aos-delay="400">
    I design and build interactive <span className="text-[#CC4B2C]">digital products</span>.
    </p>

      {/* Scroll Arrow */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
        className="mt-8"
        onClick={() => {
          const projects = document.getElementById("projects");
          if (projects) {
            projects.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="text-2xl text-[#54423D] cursor-pointer">
          ↓
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
