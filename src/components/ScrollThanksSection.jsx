import React from "react";
import { motion } from "framer-motion";

const ScrollThanksSection = () => {
  const handleScroll = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="px-6 md:px-20 py-20 flex flex-col items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="font-bulkyTrial text-[36px] md:text-[48px] leading-tight text-[#54423D] max-w-3xl"
      >
        Woah! That’s a lot of scrolling. Thanks for coming this far{" "}
        <motion.span
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1.8,
          }}
          className="inline-block origin-[70%_70%]"
        >
          👋🏾
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mt-6 text-[20px] md:text-[24px] font-figtree text-[#3f3a39] max-w-2xl"
      >
        <button
          onClick={handleScroll}
          className="underline underline-offset-4 decoration-[#CC4B2C] hover:text-[#CC4B2C] transition-colors font-semibold font-mono cursor-pointer"
        >
          Reach out to me for the full case study
        </button>
      </motion.p>
    </section>
  );
};

export default ScrollThanksSection;
