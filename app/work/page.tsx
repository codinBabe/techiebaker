"use client";

import CongratMessage from "@/components/congrat-message";
import Section from "@/components/section";
import WorkCard from "@/components/work-card";
import { Works } from "@/data/work";
import { useViewedProjects } from "@/hooks/use-view-project";

export default function Page() {
  const { projectsViewed, handleProjectView } = useViewedProjects();
  return (
    <Section title="Works" className="md:mt-10 relative overflow-hidden">
      <>
        {projectsViewed < 2 ? (
          <p className="my-2">
            🎯 View <b>{2 - projectsViewed}</b> more project
            {projectsViewed === 1 ? "" : "s"} to win a free cupcake!
          </p>
        ) : (
          <CongratMessage />
        )}
      </>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {Works.map((work) => (
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
    </Section>
  );
}
