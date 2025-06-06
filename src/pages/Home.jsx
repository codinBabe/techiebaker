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
  const [viewedProjects, setViewedProjects] = useState([]);

  useEffect(() => {
    const viewedCount = localStorage.getItem("projectsViewed") || "0";
    const viewedProjectsIds = localStorage.getItem("viewedProjects") || "[]";

    setProjectsViewed(parseInt(viewedCount, 10));
    setViewedProjects(JSON.parse(viewedProjectsIds));
  }, []);

  const handleProjectView = (workId) => {
    if (!viewedProjects.includes(workId)) {
      const updatedViewedProjects = [...viewedProjects, workId];
      const newCount = updatedViewedProjects.length;

      setProjectsViewed(newCount);
      setViewedProjects(updatedViewedProjects);

      localStorage.setItem("projectsViewed", newCount);
      localStorage.setItem(
        "viewedProjects",
        JSON.stringify(updatedViewedProjects)
      );
    }
  };

  const renderProjectMessage = () => {
    return projectsViewed < 2
      ? `View ${2 - projectsViewed} projects to win a free cupcake`
      : "Congratulations! You've won a free cupcake 🧁";
  };

  const renderDescription = () => (
    <>
      <p className="block md:hidden">
        Frontend developer with a keen ability to craft clean, readable, and
        scalable code for visually appealing designs and smooth functionality.
      </p>
      <p className="hidden md:block text-xl">
        Frontend developer with a keen ability to craft clean,
        <br />
        readable, and scalable code for visually appealing <br />
        designs and smooth functionality.
      </p>
      <p className="block md:hidden">
        Proficient in object-oriented and asynchronous programming, web
        development, REST APIs, data structures, and algorithms that contribute
        to the success of dynamic and innovative projects.
      </p>
      <p className="hidden md:block text-xl">
        Proficient in object-oriented and asynchronous <br />
        programming, web development, REST APIs, data <br />
        structures, and algorithms that contribute to the
        <br /> success of dynamic and innovative projects.
      </p>
    </>
  );

  return (
    <>
      <AnimationContainer>
        <h1 className="text-4xl flex flex-col gap-3 md:mt-40 md:text-[80px] md:leading-tight md:justify-center md:flex-row">
          <span className="font-fraunces font-bold">Oluwatoyin</span>
          <span>OREDEIN</span>
        </h1>
        <div className="flex items-center md:justify-center gap-1 md:gap-3 my-3 text-black100 whitespace-nowrap">
          <p className="md:text-xl">Software Developer</p>
          <div className="w-[56px] h-[40px] md:w-[136px] md:h-[96px] rounded-[80px] overflow-hidden">
            <img src={Oluwatoyin} alt="Oluwatoyin" className="w-full h-auto" />
          </div>
          <p className="md:text-xl">(Frontend Heavy)</p>
        </div>
        <div className="flex flex-col gap-3 md:gap-8 md:flex-row md:justify-center mt-8">
          {renderDescription()}
        </div>
      </AnimationContainer>

      <CustomSection number={"01"} title={"Works"}>
        <p>{renderProjectMessage()}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <p>{work.text}</p>
            </WorkCard>
          ))}
        </div>
        <div className="underline text-lg text-center font-helvetica-medium mt-5">
          <a href="/works">See all works</a>
        </div>
      </CustomSection>

      <CustomSection number={"02"} title={"About Oluwatoyin"}>
        <AnimationContainer>
          <div className="block md:flex gap-32">
            <p className="mb-1 whitespace-nowrap">WHO IS OLUWATOYIN?</p>
            <div>
              <p className="mb-2 md:text-xl">
                <span className="font-helvetica-medium">
                  Oluwatoyin OREDEIN
                </span>{" "}
                is the mother of a 3-year-old girl who against all odds started
                learning software engineering by herself using online resources
                and curriculums. A baker at night and a coder by day. She is a
                passionate continuous learner, proactive problem solver, and
                effective team player with strong collaborative communication
                skills.
              </p>
              <div className="underline text-lg font-helvetica-medium mt-5">
                <a href="/about">Know more</a>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </CustomSection>

      <CustomSection
        number={"03"}
        title={"Feedbacks"}
        className={"bg-blue100 pt-8 pb-4 px-5 rounded-2xl relative"}
      >
        <TestimonialCard />
      </CustomSection>

      <CustomSection number={"04"} title={"My Skills"}>
        <SkillSet className="flex flex-col gap-5" />
      </CustomSection>
    </>
  );
}
