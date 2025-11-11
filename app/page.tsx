"use client";

import Image from "next/image";

import WorkCard from "@/components/work-card";
import TestimonialCard from "@/components/testimonial-card";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Works } from "@/data/work";
import CongratMessage from "@/components/congrat-message";
import { useViewedProjects } from "@/hooks/use-view-project";
import Link from "next/link";
import SectionCard from "@/components/section-card";

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
          <div className="md:text-left font-medium md:text-xl md:max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
            <p>
              Frontend developer who builds clean, performant, and user-friendly
              interfaces. I translate designs into fast, accessible, and
              visually refined experiences using modern web technologies.
            </p>
            <p>
              Skilled in writing scalable code with strong REST API
              integrations. I enjoy solving real problems, optimizing
              performance, and bringing digital products to life with clarity
              and precision.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ===== Works Section ===== */}
      <SectionCard number="01" title="Works" layout="stack" titleCls>
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
            <Link href="/work">See all works</Link>
          </Button>
        </div>
      </SectionCard>

      {/* ===== About Section ===== */}
      <SectionCard number="02" title="About Oluwatoyin" layout="stack" titleCls>
        <Reveal amount={0.15} y={16}>
          <div className="md:flex md:gap-24 items-start space-y-4 md:space-y-0">
            <p className="text-sm uppercase whitespace-nowrap">
              Who is Oluwatoyin?
            </p>
            <div className="space-y-2">
              <p className="md:text-xl font-medium">
                <span className="font-semibold">Oluwatoyin OREDEIN</span> is a
                mother, a builder, and a resilient self-taught software
                developer who transitioned into tech through determination.
                Starting from online resources and late-night study sessions,
                I&apos;ve grown into a developer known for persistence,
                adaptability, and strong communication. I bring curiosity,
                discipline, and a “figure-it-out” mindset to every team I work
                with.
              </p>

              <Button
                variant="link"
                size={"lg"}
                className="p-0 font-semibold"
                asChild
              >
                <Link href="/about">Know more</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </SectionCard>

      {/* ===== Testimonials Section ===== */}
      <SectionCard
        number="03"
        title="Feedbacks"
        className="relative"
        layout="stack"
        titleCls
      >
        <Reveal>
          <TestimonialCard />
        </Reveal>
      </SectionCard>

      {/* ===== Skills Section ===== */}
      <SectionCard
        number="04"
        title="My Skills"
        className="mb-10"
        layout="stack"
        titleCls
      >
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
      </SectionCard>
    </div>
  );
}
