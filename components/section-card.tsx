"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Reveal from "./reveal";

interface SectionCardProps {
  number?: string;
  title: string;
  children: React.ReactNode;
  titleCls?: boolean;
  className?: string;
  layout?: "inline" | "stack";
  badge?: boolean;
}

export default function SectionCard({
  number,
  title,
  children,
  titleCls = false,
  className,
  layout = "stack",
  badge = false,
}: SectionCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const headerVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className={cn(
        layout === "inline"
          ? "grid grid-cols-1 md:grid-cols-[1fr_2fr] md:items-start overflow-hidden"
          : "flex flex-col",
        className
      )}
    >
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={cn(
          layout === "inline" ? "flex items-center gap-3 mb-4" : "mb-2"
        )}
      >
        {number && (
          <div
            className={cn(
              "text-sm font-medium",
              badge
                ? "bg-primary text-white rounded-r-2xl py-1 px-2 text-center w-[48px]"
                : "text-muted-foreground"
            )}
          >
            {number}
          </div>
        )}
        <h2
          className={cn(
            titleCls
              ? "font-sans font-semibold text-2xl"
              : "md:whitespace-nowrap"
          )}
        >
          {title}
        </h2>
      </motion.div>

      <Reveal amount={0.15} y={layout === "inline" ? 30 : 15}>
        {children}
      </Reveal>
    </section>
  );
}
