// src/components/CallToActionSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // using react-icons for the arrow

const CallToActionSection = () => {
  return (
    <section id="contact" className="px-6 md:px-20 py-24 bg-[#CC4B2C] text-center">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bulkyTrial text-[42px] md:text-[64px] text-white mb-8"
        >
          Let’s Connect
        </motion.h2>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-lg md:text-2xl text-[#FCEFEA] leading-relaxed mb-14"
        >
          Open to discussing new job opportunities, collaborations, or just want
          to say hello? Feel free to reach out!
        </motion.p>

        {/* Email with Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {/* Email */}
          <motion.a
            href="mailto:aliyumubarak.ui@gmail.com"
            whileHover={{
              scale: 1.08,
              rotate: -2,
              textShadow: "0px 0px 12px rgba(255,255,255,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            className="text-white font-bulkyTrial text-[28px] md:text-[46px] lg:text-[56px] break-words cursor-pointer"
          >
            aliyumubarak.ui@gmail.com
          </motion.a>

          {/* Arrow Icon */}
          <motion.div
            initial={{ rotate: -20 }}
            animate={{ rotate: -20 }}
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-white text-[42px] md:text-[64px]"
          >
            <FaArrowRight />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
