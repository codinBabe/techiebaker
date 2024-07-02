import WorkCard from "../components/WorkCard";
import CustomSection from "../components/CustomSection";
import TestimonialCard from "../components/TestimonialCard";
import Works from "../utils/Works";
import Oluwatoyin from "../assets/Oluwatoyin.jpeg";
import { useEffect, useState } from "react";
import SkillSet from "../components/SkillSet";
import AnimationContainer from "../utils/AnimationContainer";

export default function HomePage() {
  const [projectsViewed, setProjectsViewed] = useState(0);

  useEffect(() => {
    const viewedCount = localStorage.getItem("projectsViewed");
    if (viewedCount) {
      setProjectsViewed(parseInt(viewedCount));
    }
  }, []);

  function handleProjectView() {
    const newCount = projectsViewed + 1;
    setProjectsViewed(newCount);
    localStorage.setItem("projectsViewed", newCount);
  }
  return (
    <>
      <AnimationContainer>
        <h1 className="text-4xl flex flex-col gap-3">
          <span className="font-fraunces font-bold">Oluwatoyin</span>
          <span>OREDEIN</span>
        </h1>
        <div className="flex items-center gap-1 my-3 text-black100 whitespace-nowrap">
          <p>Software Engineer</p>
          <div className="w-[56px] h-[40px] rounded-[80px] overflow-hidden">
            <img
              src={Oluwatoyin}
              alt="Oluwatoyin"
              className="w-full h-auto transform"
            />
          </div>
          <p>Full stack developer</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>
            Full stack developer with a keen ability to craft clean, readable,
            and scalable code for visually appealing designs and smooth
            functionality.
          </p>
          <p>
            Proficient in object-oriented and asynchronous programming, web
            development, REST APIs, data structures, and algorithms that
            contribute to the success of dynamic and innovative projects.
          </p>
        </div>
      </AnimationContainer>
      <CustomSection number={"01"} title={"Works"}>
        <p>
          {projectsViewed < 2
            ? `View ${2 - projectsViewed} projects to win a free cupcake`
            : "Congratulations! You've won a free cupcake 🧁"}
        </p>
        {Works.slice(0, 3).map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            projectType={work.projectType}
            imgsrc={work.imgsrc}
            workId={work.id}
            onView={handleProjectView}
          >
            <p>{work.text}</p>
          </WorkCard>
        ))}
        <div className="underline text-lg text-center font-helvetica-medium mt-5">
          <a href="/works">See all works</a>
        </div>
      </CustomSection>
      <CustomSection number={"02"} title={"About Oluwatoyin"}>
        <AnimationContainer>
          <p className="mb-1">WHO IS OLUWATOYIN?</p>
          <p className="mb-2">
            <span className="font-helvetica-medium">Oluwatoyin OREDEIN</span> is
            the mother of a 2-year-old girl who against all odds started
            learning software engineering by herself using online resources and
            curriculums. A baker at night and a coder at day. She is a
            passionate continuous learner, proactive problem solver, and
            effective team player with strong collaborative communication
            skills. She is currently in the UTIVA software engineering 6-month
            apprenticeship program.
          </p>
          <div className="underline text-lg font-helvetica-medium mt-5">
            <a href="/about">Know more</a>
          </div>
        </AnimationContainer>
      </CustomSection>
      <CustomSection
        number={"03"}
        title={"Feedbacks"}
        className={"bg-blue100 pt-8 pb-4 px-5 rounded-2xl"}
      >
        <TestimonialCard />
      </CustomSection>
      <CustomSection number={"04"} title={"My Skills"}>
        <SkillSet className="flex flex-col gap-5" />
      </CustomSection>
    </>
  );
}
