import Download from "../assets/download.svg";
import Oluwatoyin from "../assets/Oluwatoyin.jpeg";
import AboutCard from "../components/AboutCard";
import B from "../assets/bforbaker.svg";
import SkillSet from "../components/SkillSet";
import Education from "../components/Education";
import OluwatoyinResume from "../assets/Oluwatoyin_Oredein_FullStack.pdf";
import AnimationContainer from "../utils/AnimationContainer";

export default function Resume() {
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

  const projectDetails = [
    "Recreated a Figma static dashboard with meticulous attention to detail, achieving 90% precision in design execution.",
    "Designed and developed a user-friendly dictionary app integrated with a REST API for seamless functionality.",
    "Created a comprehensive Period web app with ReactJS, incorporating hooks for authentication, menstrual prediction, and additional functionalities.",
    "Developed a full-stack pizza delivery web app using Next JS, featuring user and admin sign-in, profile functionalities, CRUD operations, order tracking, and PayPal integration for seamless transactions.",
  ];

  return (
    <>
      <AnimationContainer>
        <section className="md:mt-40">
          <a
            className="flex items-center gap-2"
            href={OluwatoyinResume}
            download="Oluwatoyin_Oredein_CV.pdf"
          >
            <img src={Download} alt="Download icon" />
            <span className="underline">Download PDF Resume</span>
          </a>
          <div className="md:flex items-center justify-between">
            <div>
              <h1 className="text-[22px] md:text-[48px] mt-3 md:mb-3">
                <span className="font-fraunces font-bold">Oluwatoyin</span>{" "}
                <span>OREDEIN</span>
              </h1>
              <p className="text-black100 md:text-lg">
                Software Engineer • Full stack developer
              </p>
            </div>
            <div className="w-[56px] md:w-[136px] h-[40px] md:h-[96px] rounded-[80px] overflow-hidden my-3">
              <img
                src={Oluwatoyin}
                alt="Oluwatoyin"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        <section className="border-black100 border-y border-opacity-[0.15]">
          <div className="flex flex-col md:flex-row gap-3 my-5">
            {contactLinks.map(({ label, href, text }, index) => (
              <div className="flex items-center gap-2" key={index}>
                <h2>{label}</h2>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  className="font-helvetica-medium underline"
                >
                  {text}
                </a>
              </div>
            ))}
          </div>
        </section>
      </AnimationContainer>

      <AboutCard number={"01"} text={"SUMMARY"}>
        <AnimationContainer>
          <p className="text-lg mt-5">
            Full stack developer with a keen ability to craft clean, readable,
            and scalable code for visually appealing designs and smooth
            functionality. Passionate continuous learner, proactive problem
            solver, effective team player with strong collaborative
            communication skills, proficient in object-oriented and asynchronous
            programming, web development, REST APIs, data structures, and
            algorithms that contribute to the success of dynamic and innovative
            projects.
          </p>
        </AnimationContainer>
      </AboutCard>

      <AboutCard number={"02"} text={"OLUWATOYIN'S SKILLS"}>
        <SkillSet className="flex flex-col gap-5 md:mt-6 md:ml-[-90px]" />
      </AboutCard>

      <AboutCard number={"03"} text={"EDUCATION"}>
        <Education />
        <AnimationContainer>
          <div className="text-lg my-5">
            <h2 className="font-helvetica-medium text-2xl">
              Bachelor of Science, Administration
            </h2>
            <p>Obafemi Awolowo University</p>
            <p className="text-black100 mb-1 text-base">May 2016 - Dec 2020</p>
            <div>
              {[
                "Comprehensive understanding of public parastatals' roles and responsibilities.",
                "Exposure to various techniques and the practical use of accessory devices in administrative functions.",
              ].map((item, index) => (
                <div className="flex items-center gap-3 mb-2" key={index}>
                  <img src={B} alt="icon" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimationContainer>
      </AboutCard>

      <AboutCard number={"04"} text={"PROJECTS"}>
        <AnimationContainer>
          <div className="text-lg mt-5">
            {projectDetails.map((project, index) => (
              <div className="flex items-start gap-3 mb-2" key={index}>
                <img src={B} alt="icon" />
                <p>{project}</p>
              </div>
            ))}
          </div>
        </AnimationContainer>
      </AboutCard>
    </>
  );
}
