"use client";

import { Works } from "@/data/work";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WorkCard from "@/components/work-card";
import { LinkExport } from "@/hooks/use-icon";
import CongratMessage from "@/components/congrat-message";
import { useViewedProjects } from "@/hooks/use-view-project";

export default function Page() {
  const { id } = useParams();

  const { projectsViewed, handleProjectView } = useViewedProjects();

  const workId = parseInt(Array.isArray(id) ? id[0] : id ?? "0", 10);
  const work = Works.find((w) => w.id === workId);

  if (!work) return <p>Project not found</p>;

  const renderExternalLink = (url: string, text: string) => (
    <a
      href={url}
      className="underline font-semibold flex items-center gap-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <LinkExport />
    </a>
  );

  return (
    <>
      <Link
        href="/work"
        className="flex items-center gap-2 text-foreground-secondary"
      >
        <ArrowLeft />
        <span>Go back</span>
      </Link>

      <section className="space-y-4">
        <div>
          <h1 className="font-sans font-bold text-2xl">{work.title}</h1>
          <p>{work.projectType}</p>
          <p className="text-sm mt-2 text-foreground-secondary">{work.text}</p>
        </div>

        <div className="flex items-center gap-4">
          {renderExternalLink(work.githubUrl, "See Github repo")}
          {renderExternalLink(work.liveProjectUrl, "See live project")}
        </div>
      </section>
      <section className="bg-accent-foreground w-full h-[400px] rounded-[20px] my-10">
        <iframe
          title="Embedded Website"
          src={work.liveProjectUrl}
          width="100%"
          height="100%"
          className="rounded-[20px]"
        />
      </section>

      {projectsViewed >= 2 && <CongratMessage />}

      <section className="mb-10">
        <h2 className="font-sans text-2xl font-semibold mb-4">Related works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Works.slice(2, 4).map((relatedWork) => (
            <WorkCard
              key={relatedWork.id}
              title={relatedWork.title}
              projectType={relatedWork.projectType}
              imgsrc={relatedWork.imgsrc}
              imgsrclg={relatedWork.imgsrclg}
              workId={relatedWork.id}
              onView={() => handleProjectView(relatedWork.id)}
            >
              <p>{relatedWork.text}</p>
            </WorkCard>
          ))}
        </div>

        <div className="underline text-lg text-center font-semibold mt-5">
          <Link href="/work">See all works</Link>
        </div>
      </section>
    </>
  );
}
