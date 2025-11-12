"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  amount?: number;
  once?: boolean;
  y?: number;
  x?: number;
  duration?: number;
}

const Reveal = ({
  children,
  className,
  amount = 0.2,
  once = true,
  y = 0,
  x = 0,
  duration = 0.6,
}: RevealProps) => {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: "easeOut" as const }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
