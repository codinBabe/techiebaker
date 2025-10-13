"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  title: string;
  projectType: string;
  imgsrc: string;
  imgsrclg?: string;
  children?: React.ReactNode;
  workId: number;
  onView?: () => void;
  className?: string;
}

const WorkCard = ({
  title,
  projectType,
  imgsrc,
  imgsrclg,
  children,
  workId,
  onView,
  className,
}: WorkCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card
        className={cn(
          "overflow-hidden bg-accent-foreground border-none rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300",
          className
        )}
      >
        <CardHeader className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-sans font-semibold">{title}</h3>
            <p className="font-medium leading-snug">{projectType}</p>
            {children}
          </div>
          <Button
            variant="link"
            asChild
            size={"lg"}
            className="font-medium text-sm"
            onClick={onView}
          >
            <a href={`/work/${workId}`}>Open Project</a>
          </Button>
        </CardHeader>

        <CardFooter className="flex flex-col md:flex-row justify-between items-center gap-4">
          <picture>
            <source srcSet={imgsrclg} media="(min-width: 768px)" />
            <Image
              src={imgsrc}
              alt={title}
              width={400}
              height={240}
              className="rounded-lg object-cover"
            />
          </picture>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default WorkCard;
