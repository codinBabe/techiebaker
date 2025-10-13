"use client";

import AboutCard from "@/components/about-card";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { B } from "@/hooks/use-icon";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const contactLinks = [
    {
      label: "Email:",
      href: "mailto:oluwatoyinoredein@gmail.com",
      text: "oluwatoyinoredein@gmail.com",
    },
    {
      label: "LinkedIn:",
      href: "https://www.linkedin.com/in/oluwatoyin-oredein",
      text: "https://www.linkedin.com/in/oluwatoyin-oredein",
    },
    {
      label: "GitHub:",
      href: "https://github.com/codinBabe",
      text: "https://github.com/codinBabe",
    },
  ];
  return (
    <div className="md:mt-10 space-y-10">
      <div>
        <Reveal>
          <Button
            variant={"link"}
            className="p-0 text-base font-medium"
            size={"lg"}
          >
            <Download />
            <a href="/Oluwatoyin_Oredein_Frontend_Developer.pdf" download>
              Download PDF Resume
            </a>
          </Button>
        </Reveal>
        <div className="space-y-4">
          <Reveal>
            <div className="md:flex items-center justify-between">
              <div>
                <h1 className="text-xl md:text-5xl">
                  <span className="font-sans font-bold">Oluwatoyin</span>{" "}
                  <span>OREDEIN</span>
                </h1>
                <p className="text-foreground-secondary md:text-lg">
                  Software Developer • (Frontend Heavy)
                </p>
              </div>
              <div className="w-14 h-10 md:w-32 md:h-24 rounded-full overflow-hidden">
                <Image
                  src={"/images/Oluwatoyin.jpeg"}
                  alt="Oluwatoyin"
                  width={200}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="flex flex-col md:flex-row gap-4 flex-wrap border-y border-tertiary p-2">
            {contactLinks.map(({ label, href, text }, index) => (
              <Button
                variant={"link"}
                className="p-0 w-auto text-base"
                key={index}
              >
                {label}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  className="text-ellipsis font-semibold underline"
                >
                  {text}
                </a>
              </Button>
            ))}
          </Reveal>
        </div>
      </div>

      <AboutCard number="01" text="SUMMARY">
        <p className="text-lg">
          Frontend developer with a keen ability to craft clean, readable, and
          scalable code for visually appealing designs and smooth functionality.
          Passionate continuous learner, proactive problem solver, effective
          team player with strong collaborative communication skills, proficient
          in object-oriented and asynchronous programming, web development, REST
          APIs, data structures, and algorithms that contribute to the success
          of dynamic and innovative projects.
        </p>
      </AboutCard>

      <AboutCard number="02" text="OLUWATOYIN'S SKILLS">
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
              className="grid grid-cols-1 md:grid-cols-[1fr_3fr] md:items-start overflow-hidden gap-2"
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
      </AboutCard>

      <AboutCard number="04" text="EDUCATION">
        <div className="text-lg space-y-3">
          {[
            {
              title: "Software Engineering — ALX Africa",
              period: "Nov 2023 — Present",
              items: [
                "Acquired fundamental and advanced knowledge of C programming.",
                "Currently exploring system administration and DevOps.",
                "Gained proficiency in object-oriented programming using Python.",
                "Learned to choose and identify the optimal data structure and tools for each web application.",
                "Developed teamwork abilities through comprehensive learning and practical tools.",
              ],
            },
            {
              title: "Women Techsters Fellowship — Tech4Dev Ltd",
              period: "Oct 2023 — Apr 2024",
              items: [
                "Understood the semantics of web page structuring, accessibility, and search engine optimization.",
                "Mastered the art of styling web pages for visual appeal and creating smooth animations.",
                "Grasped how to add functionality to web pages and make API calls and requests.",
                "Familiarized with frontend libraries for building fast, responsive web applications.",
              ],
            },
          ].map((edu) => (
            <div key={edu.title} className="mb-4">
              <div className="mb-4">
                <h2 className="font-semibold">{edu.title}</h2>
                <p className="text-foreground-secondary text-sm">
                  {edu.period}
                </p>
              </div>

              {edu.items.map((item, i) => (
                <div className="flex items-center gap-3 my-1.5" key={i}>
                  <B />
                  <p className="">{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </AboutCard>

      <AboutCard number="05" text="PROJECTS" clsname="mb-10">
        <div className="text-lg space-y-1.5">
          {[
            "Recreated a Figma static dashboard with meticulous attention to detail, achieving 90% precision in design execution.",
            "Designed and developed a user-friendly dictionary app integrated with a REST API for seamless functionality.",
            "Created a comprehensive Period web app with ReactJS, incorporating hooks for authentication, menstrual prediction, and additional functionalities.",
            "Developed a full-stack pizza delivery web app using Next JS, featuring user and admin sign-in, profile functionalities, CRUD operations, order tracking, and PayPal integration for seamless transactions.",
          ].map((project, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <B />
              </div>
              <p>{project}</p>
            </div>
          ))}
        </div>
      </AboutCard>
    </div>
  );
}
