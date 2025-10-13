"use client";

import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonial";

const TestimonialCard = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const variants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir < 0 ? 40 : -40,
      scale: 0.98,
      transition: { duration: 0.4, ease: "easeInOut" },
    }),
  };

  const testimonial = testimonials[index];

  return (
    <Card
      className={cn(
        "relative overflow-hidden bg-accent-foreground border-none rounded-2xl shadow-sm p-6 md:p-8",
        className
      )}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={testimonial.author}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <CardHeader>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              {testimonial.org}
            </h3>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              “{testimonial.content}”
            </p>
          </CardHeader>

          <CardFooter className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.src}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="hover:bg-muted"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="hover:bg-muted"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardFooter>
        </motion.div>
      </AnimatePresence>
    </Card>
  );
};

export default TestimonialCard;
