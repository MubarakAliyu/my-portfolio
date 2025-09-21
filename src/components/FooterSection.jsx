// src/components/FooterSection.jsx
import React from "react";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="px-6 md:px-20 py-12 bg-[#1E1E1E] text-[#E5E5E5]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
      >
        {/* Brand / Name */}
        <h3 className="font-bulkyTrial text-2xl md:text-3xl text-white">
          Aliyu Mubarak
        </h3>

        {/* Links */}
        <ul className="flex flex-wrap gap-6 text-lg">
          <li>
            <a
              href="https://dribbble.com/BarackAli"
              target="_blank"
              className="hover:text-[#CC4B2C] transition-colors duration-300"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://x.com/aliyumubarak_ui"
              target="_blank"
              className="hover:text-[#CC4B2C] transition-colors duration-300"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/aliyumubarak.ui/"
              target="_blank"
              className="hover:text-[#CC4B2C] transition-colors duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 border-t border-[#333] pt-6 text-center text-sm text-[#AAA]"
      >
       I love phone calls +2347067834186 © {new Date().getFullYear()} iam. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default FooterSection;
