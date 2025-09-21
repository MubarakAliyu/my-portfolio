import React from "react";
import { motion } from "framer-motion";

// Hover animation variant
const cardHover = {
  scale: 1.03,
  y: -6,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const ProjectImages = ({ images, number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-[#F6F5F2] rounded-2xl p-6 md:p-8 mt-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, i) => {
          const isLastTwo = i >= images.length - 2;
          const isWideCard = i % 4 === 1 || isLastTwo;

          return (
            <motion.div
              key={i}
              whileHover={isLastTwo ? { scale: 1.05 } : cardHover}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`rounded-xl ${
                isWideCard
                  ? "overflow-hidden min-h-[260px] relative"
                  : "bg-white min-h-[220px] flex items-center justify-center p-6"
              }`}
            >
              <img
                src={img}
                alt={`proj-${number}-img-${i}`}
                className={`w-full h-full ${
                  isWideCard ? "object-cover" : "object-contain"
                } rounded-xl`}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectImages;
