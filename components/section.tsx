"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Reveal from "./reveal";
import { motion, Variants } from "framer-motion";

interface SectionProps {
  number?: string;
  title: string;
  titleCls?: string;
  className?: string;
  children?: React.ReactNode;
}

const Section = ({
  number,
  title,
  titleCls,
  className,
  children,
}: SectionProps) => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={cn("", className)}>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground">{number}</p>
        <h2 className={cn("font-sans font-semibold text-2xl mb-2", titleCls)}>
          {title}
        </h2>
      </motion.div>

      <Reveal className="mb-4" amount={0.15}>
        {children}
      </Reveal>
    </section>
  );
};
export default Section;
