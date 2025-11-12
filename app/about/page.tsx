import Reveal from "@/components/reveal";
import SectionCard from "@/components/section-card";
import { B } from "@/hooks/use-icon";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <Reveal x={-20} duration={0.6}>
        <h1 className="font-sans font-semibold text-xl mb-1">
          About Oluwatoyin OREDEIN
        </h1>
        <p className="font-medium">Let’s rock and roll</p>
      </Reveal>
      <SectionCard number="01" title="WHO IS OLUWATOYIN?" layout="inline" badge>
        <p className="text-lg leading-relaxed">
          <span className="font-bold">Oluwatoyin OREDEIN</span> is a mother, a
          builder, and a resilient self-taught software developer who
          transitioned into tech through determination. Starting from online
          resources and late-night study sessions, I&apos;ve grown into a
          developer known for persistence, adaptability, and strong
          communication. I bring curiosity, discipline, and a “figure-it-out”
          mindset to every team I work with.
        </p>
      </SectionCard>

      <SectionCard number="02" title="TOYIN'S JOURNEY" layout="inline" badge>
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
              period: "Oct 2023 — Nov 2024",
              items: [
                "Acquired fundamental and advanced knowledge of C programming.",
                "Learned system administration and DevOps.",
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
                  <div className="flex-shrink-0">
                    <B />
                  </div>
                  <p className="">{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        number="03"
        title="WHAT I CAN DO FOR YOU"
        layout="inline"
        badge
      >
        <div className="text-lg space-y-6">
          <div>
            <h3 className="font-bold">Frontend Development</h3>

            <p>
              I specialize in turning ideas and designs into real, fast,
              responsive interfaces using: HTML, CSS, JavaScript, TypeScript,
              React, Next.js
            </p>
          </div>
          <div>
            <h3 className="font-bold">Backend Development</h3>
            <p>
              I can also contribute to backend implementation using: Node.js
              (Express), Python (Flask, FastAPI)
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard number="04" title="WHERE I CAN WORK" layout="inline" badge>
        <div className="text-lg space-y-3">
          {[
            "Startups",
            "Digital agencies",
            "Product teams",
            "Small organisations",
            "Large organisations",
          ].map((place) => (
            <div key={place} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <B />
              </div>
              <p>{place}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard number="05" title="WHAT I STAND FOR" layout="inline" badge>
        <div className="text-lg space-y-6">
          {[
            {
              title: "Resilience",
              desc: "I learned to code while raising a toddler and still graduated in the top 10% of my cohort.",
            },
            {
              title: "Adaptability",
              desc: "Whether it’s a new language, tool, or workflow, I adjust quickly and stay productive.",
            },
            {
              title: "Communication",
              desc: "I believe a great developer not only writes good code but also communicates clearly.",
            },
            {
              title: "Continuous Learning",
              desc: "I stay committed to improving my craft and keeping up with industry best practices.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard number="06" title="MY MANTRA" layout="inline" badge>
        <div className="text-lg space-y-3">
          {[
            "Create your own reality",
            "Do the best you can until you know better. Then when you know better, do better.",
            "Even if you're on the right track, you'll get run over if you just sit there.",
            "It is possible to do great things from a small place.",
            "Simplicity is the soul of efficiency.",
          ].map((motto) => (
            <div key={motto} className="flex items-center gap-3">
              <div className="shrink-0">
                <B />
              </div>
              <p>{motto}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        number="07"
        title="OLUWATOYIN'S SKILLS"
        layout="inline"
        badge
      >
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
      </SectionCard>

      <SectionCard number="08" title="MY SUPER POWERS" layout="inline" badge>
        <div className="text-lg space-y-3">
          {[
            "I sometimes surprise myself by building something that works the first time.",
            "One of my mutant abilities is reading intentions from code.",
            "I have a sixth sense for missing semicolons.",
            "I listen deeply and stay open to feedback",
          ].map((power) => (
            <div key={power} className="flex items-center gap-3">
              <div className="shrink-0">
                <B />
              </div>
              <p>{power}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
