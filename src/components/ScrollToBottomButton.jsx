import React from "react";
import { motion } from "framer-motion";
import mouseIcon from "../assets/mouse-icon.svg";

const ScrollToBottomButton = () => {
  const handleClick = () => {
    // target the contact/call-to-action section
    const targetSection = document.getElementById("contact");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed right-6 bottom-6 md:right-10 md:bottom-10 z-50"
      aria-hidden={false}
    >
      <button
        onClick={handleClick}
        aria-label="Scroll to bottom"
        className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#F9F9F9] shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-200"
      >
        <motion.img
          src={mouseIcon}
          alt="mouse icon"
          className="w-6 h-6"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        />
        <span className="font-slimMono text-sm text-[#333]">
          Scroll to Bottom
        </span>
      </button>
    </div>
  );
};

export default ScrollToBottomButton;
