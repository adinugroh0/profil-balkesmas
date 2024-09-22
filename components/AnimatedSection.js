// components/AnimatedSection.js
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% dari elemen terlihat
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Mulai dari tidak terlihat
      animate={inView ? { opacity: 1, y: 0 } : {}} // Muncul saat terlihat
      transition={{ duration: 1, ease: [0.5, 0.05, 0.1, 0.3] }} // Easing untuk transisi lebih halus
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
