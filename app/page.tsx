"use client";

import Image from "next/image";

import WorkCard from "@/components/work-card";
import CustomSection from "@/components/section";
import TestimonialCard from "@/components/testimonial-card";

import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Works } from "@/data/work";
import CongratMessage from "@/components/congrat-message";
import { useViewedProjects } from "@/hooks/use-view-project";

export default function Home() {
  const { projectsViewed, handleProjectView } = useViewedProjects();

  const message =
    projectsViewed < 2 ? (
      `🎯 View ${2 - projectsViewed} more project${
        projectsViewed === 1 ? "" : "s"
      } to win a free cupcake!`
    ) : (
      <CongratMessage />
    );

  return (
    <div className="space-y-20">
      {/* ===== Hero Section ===== */}
      <Reveal amount={0.15} y={20}>
        <section className="text-center md:mt-20 space-y-4">
          <h1 className="text-5xl md:text-7xl font-medium flex flex-col md:flex-row justify-center gap-3">
            <span className="font-sans font-bold">Oluwatoyin</span>
            <span>OREDEIN</span>
          </h1>

          <div className="flex justify-center items-center gap-3 text-foreground-secondary md:text-xl">
            <p>Software Developer</p>
            <div className="w-14 h-10 md:w-32 md:h-24 rounded-full overflow-hidden">
              <Image
                src={"/images/Oluwatoyin.jpeg"}
                alt="Oluwatoyin Oredein"
                width={200}
                height={100}
                className="object-cover"
              />
            </div>
            <p>(Frontend Heavy)</p>
          </div>
          <div className="md:text-left font-medium md:text-xl md:max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center">
            <p>
              Frontend developer with a keen ability to craft clean, readable,
              and scalable code for visually appealing designs and smooth
              functionality.
            </p>
            <p>
              Proficient in object-oriented and asynchronous programming, REST
              APIs, and data structures that drive dynamic and innovative
              projects.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ===== Works Section ===== */}
      <CustomSection number="01" title="Works">
        {message}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Works.slice(0, 4).map((work) => (
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

        <div className="text-center mt-4">
          <Button
            variant="link"
            size={"lg"}
            asChild
            className="p-0 font-semibold text-lg"
          >
            <a href="/work">See all works</a>
          </Button>
        </div>
      </CustomSection>

      {/* ===== About Section ===== */}
      <CustomSection number="02" title="About Oluwatoyin">
        <Reveal amount={0.15} y={16}>
          <div className="md:flex md:gap-24 items-start space-y-4 md:space-y-0">
            <p className="text-sm uppercase whitespace-nowrap">
              Who is Oluwatoyin?
            </p>
            <div className="space-y-2">
              <p className="md:text-xl font-medium">
                <span className="font-semibold">Oluwatoyin OREDEIN</span> is the
                mother of a 3-year-old girl who against all odds started
                learning software engineering by herself using online resources
                and curriculums. A baker at night and a coder by day. She is a
                passionate continuous learner, proactive problem solver, and
                effective team player with strong collaborative communication
                skills.
              </p>

              <Button
                variant="link"
                size={"lg"}
                className="p-0 font-semibold"
                asChild
              >
                <a href="/about">Know more</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </CustomSection>

      {/* ===== Testimonials Section ===== */}
      <CustomSection number="03" title="Feedbacks" className="relative">
        <Reveal>
          <TestimonialCard />
        </Reveal>
      </CustomSection>

      {/* ===== Skills Section ===== */}
      <CustomSection number="04" title="My Skills" className="mb-10">
        <div className="flex flex-col gap-5 mt-4">
          {[
            {
              label: "LANGUAGES",
              items: ["C", "Python", "Javascript", "Typescript"],
            },
            {
              label: "DATABASE",
              items: ["MongoDB", "SQL"],
            },
            {
              label: "FRAMEWORKS",
              items: ["ReactJs", "NextJs", "Flask", "Express", "FastAPI"],
            },
            {
              label: "VERSION CONTROL",
              items: ["GIT"],
            },
            {
              label: "TOOLS",
              items: ["Postman"],
            },
          ].map((section) => (
            <div
              key={section.label}
              className="grid grid-cols-1 md:grid-cols-[1fr_5fr] md:items-start overflow-hidden gap-2"
            >
              <h3>{section.label}</h3>
              <div className="flex items-center gap-4 flex-wrap">
                {section.items.map((item, i) => (
                  <p
                    key={item}
                    className={`py-1 px-3 rounded-lg font-medium ${
                      i % 2 === 0 ? "bg-accent" : "bg-accent-foreground"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CustomSection>
    </div>
  );
}
