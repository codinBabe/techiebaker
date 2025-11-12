"use client";

import { Works } from "@/data/work";
import WorkCard from "@/components/work-card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useViewedProjects } from "@/hooks/use-view-project";
import SectionCard from "./section-card";

type Props = {
  limit?: number;
  showButton?: boolean;
  title: string;
  titleCls?: boolean;
  number?: string;
  layout?: "stack" | "inline";
  className?: string;
};

const ProjectViewer = ({
  limit,
  showButton = false,
  title,
  titleCls,
  number,
  layout,
  className,
}: Props) => {
  const { projectsViewed, handleProjectView } = useViewedProjects();

  const message =
    projectsViewed < 2 ? (
      <span>
        <span aria-label="target">🎯</span> View ${2 - projectsViewed} more
        project${projectsViewed === 1 ? "" : "s"} to win a free cupcake!
      </span>
    ) : (
      <motion.div
        className="md:text-lg font-semibold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span aria-label="celebration">🎉</span> Congratulations! You&apos;ve
        unlocked your cupcake{" "}
        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
          aria-label="cupcake"
        >
          🧁
        </motion.span>
      </motion.div>
    );

  const displayedWorks = limit ? Works.slice(0, limit) : Works;

  return (
    <SectionCard
      title={title}
      titleCls={titleCls}
      layout={layout}
      number={number}
      className={className}
    >
      <div role="status" aria-live="polite" className="my-2">
        {message}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedWorks.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            projectType={work.projectType}
            imgsrc={work.imgsrc}
            imgsrclg={work.imgsrclg}
            workId={work.id}
            onView={() => handleProjectView(work.id)}
          >
            <p className="text-sm">{work.text}</p>
          </WorkCard>
        ))}
      </div>

      {showButton && (
        <div className="text-center mt-4">
          <Button
            variant="link"
            size="lg"
            asChild
            className="p-0 font-semibold text-lg"
          >
            <Link href="/work">See all works</Link>
          </Button>
        </div>
      )}
    </SectionCard>
  );
};

export default ProjectViewer;
