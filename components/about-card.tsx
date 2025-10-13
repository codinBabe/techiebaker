"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AboutCardProps {
  number: string;
  text: string;
  children: React.ReactNode;
  clsname?: string;
}

export default function AboutCard({
  number,
  text,
  children,
  clsname,
}: AboutCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const headerVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bodyVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="about-card grid grid-cols-1 md:grid-cols-[1fr_2fr] md:items-start overflow-hidden"
    >
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex items-center gap-3 mt-2 mb-4"
      >
        <div className="bg-primary w-[48px] py-1 px-2 text-white rounded-r-2xl font-medium text-center">
          {number}
        </div>
        <h2 className="md:whitespace-nowrap">{text}</h2>
      </motion.div>

      <motion.div
        variants={bodyVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={clsname}
      >
        {children}
      </motion.div>
    </div>
  );
}
