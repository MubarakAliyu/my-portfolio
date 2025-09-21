import React from "react";
import { motion } from "framer-motion";

// Example images (replace with your own)
// Place images in /public/images folder for easy use
const images = [
  "/float1.jpg",
  "/float2.jpg",
  "/float3.jpg",
  "/float4.jpg",
  "/float5.jpg",
  "/float6.jpg",
    "/float7.jpg",
    "/float8.jpg",
    "/float9.jpg",
    "/float10.jpg",
    "/float11.jpg",
    "/float12.jpg",
    "/float13.jpg",
    "/float14.jpg",
    "/float15.jpg",
    "/float16.jpg",
    "/float17.jpg",
    "/float18.jpg",
    "/float19.jpg",
    "/float20.jpg",
];

const FloatingImagesSection = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-[#F9F9F9] overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex items-end gap-4 mb-12"
      >
        <h2 className="font-bulkyTrial text-[56px] md:text-[80px] leading-none text-[#54423D]">
          Life
        </h2>
        <span className="font-brittany text-[56px] md:text-[80px] text-[#A59E99]">
          lately
        </span>
      </motion.div>

      {/* Floating Images Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full"
      >
        <div className="flex gap-6 animate-marquee">
          {/* Duplicate set for seamless loop */}
          {[...images, ...images].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-shrink-0 w-[280px] h-[420px] rounded-xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={src}
                alt={`floating-${i}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tailwind keyframes for infinite marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FloatingImagesSection;
