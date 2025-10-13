"use client";

import AboutCard from "@/components/about-card";
import { B } from "@/hooks/use-icon";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="md:mt-10 space-y-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-sans font-semibold text-xl mb-1">
          About Oluwatoyin OREDEIN
        </h1>
        <p className="font-medium">Let’s rock and roll</p>
      </motion.div>
      <AboutCard number="01" text="WHO IS OLUWATOYIN?">
        <p className="text-lg leading-relaxed">
          <span className="font-bold">Oluwatoyin OREDEIN</span> is a mother of a
          3-year-old girl who, against all odds, started learning software
          engineering by herself using online resources and curriculums. A baker
          at night and coder by day, she is a passionate continuous learner,
          proactive problem solver, and an effective team player with strong
          collaborative communication skills.
        </p>
      </AboutCard>

      <AboutCard number="02" text="TOYIN'S JOURNEY">
        <div className="text-lg space-y-4">
          <div>
            <h2 className="font-medium">Self Learning</h2>
            <p className="text-foreground-secondary text-sm">
              April 2022 – till date
            </p>
          </div>
          <p>
            My journey into tech started when a contact introduced me to the
            field. After a clarity session, I decided to venture into software
            engineering. I began by reading numerous articles on Medium and
            Substack and watching videos about the roles, tools, processes,
            industries, and future relevance of software engineering.
          </p>

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

      <AboutCard number="03" text="WHAT I CAN DO FOR YOU">
        <div className="text-lg space-y-6">
          <div>
            <h3 className="font-bold">Frontend Development</h3>
            <p>
              Using tools like HTML, CSS, React, and Next.js, I can assist in
              bringing your designs to life.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Backend Development</h3>
            <p>
              With tools like Node.js (Express) and Python (Flask), I can help
              implement the functionality behind your designs.
            </p>
          </div>
        </div>
      </AboutCard>

      <AboutCard number="04" text="WHERE I CAN WORK">
        <div className="text-lg space-y-3">
          {[
            "Startups",
            "Digital agencies",
            "Product teams",
            "Small organisations",
            "Large organisations",
          ].map((place) => (
            <div key={place} className="flex items-center gap-3">
              <B />
              <p>{place}</p>
            </div>
          ))}
        </div>
      </AboutCard>

      <AboutCard number="05" text="WHAT I STAND FOR">
        <div className="text-lg space-y-6">
          {[
            {
              title: "Resilience",
              desc: "As a mother of a child who is not up to 4 years, I was able to beat all odds to start self-learning, apply for and graduate top 10% in the Women Techsters Fellowship program.",
            },
            {
              title: "Adaptability",
              desc: "I adapt quickly to new environments, challenges, and technologies. Whether it's learning a new language or adjusting to different work cultures, I thrive in dynamic situations.",
            },
            {
              title: "Communication",
              desc: "Contrary to the stereotype that software engineers lack communication skills, I am an effective communicator and an active listener.",
            },
            {
              title: "Continuous Learning",
              desc: "Learning is a continuous process, and I am always open to improving my craft and staying relevant in the industry.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </AboutCard>

      <AboutCard number="06" text="MY MANTRA">
        <div className="text-lg space-y-3">
          {[
            "Create your own reality",
            "Do the best you can until you know better. Then when you know better, do better.",
            "Even if you're on the right track, you'll get run over if you just sit there.",
            "It is possible to do great things from a small place.",
            "Simplicity is the soul of efficiency.",
          ].map((motto) => (
            <div key={motto} className="flex items-center gap-3">
              <B />
              <p>{motto}</p>
            </div>
          ))}
        </div>
      </AboutCard>

      <AboutCard number="07" text="OLUWATOYIN'S SKILLS">
        <div className="flex flex-col gap-5">
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
            <div key={section.label}>
              <h3 className="mb-4">{section.label}</h3>
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

      <AboutCard number="08" text="MY SUPER POWERS" clsname="mb-10">
        <div className="text-lg space-y-3">
          {[
            "I sometimes surprise myself by building something that works the first time.",
            "One of my mutant abilities is reading intentions from code.",
            "I have a sixth sense for missing semicolons.",
            "I can find the perfect meme to explain any bug.",
            "I am an excellent listener and always ready to learn.",
          ].map((power) => (
            <div key={power} className="flex items-center gap-3">
              <B />
              <p>{power}</p>
            </div>
          ))}
        </div>
      </AboutCard>
    </div>
  );
}
