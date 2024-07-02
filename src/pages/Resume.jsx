import Download from "../assets/download.svg";
import Oluwatoyin from "../assets/Oluwatoyin.jpeg";
import AboutCard from "../components/AboutCard";
import B from "../assets/bforbaker.svg";
import SkillSet from "../components/SkillSet";
import Education from "../components/Education";
import OluwatoyinResume from "../assets/Oluwatoyin_Oredein_Fullstack.CV.pdf";
import AnimationContainer from "../utils/AnimationContainer";

export default function Resume() {
  return (
    <>
      <AnimationContainer>
        <section>
          <a
            className="flex items-center gap-2"
            href={OluwatoyinResume}
            download="Oluwatoyin_Oredein_CV.pdf"
          >
            <span>
              <img src={Download} alt="icon" />
            </span>
            <span className="underline">Download PDF Resume</span>
          </a>
          <div className="md:flex items-center justify-between">
            <div>
              <h1 className="text-[22px] md:text-[48px] mt-3 md:mb-3">
                <span className="font-fraunces font-bold">Oluwatoyin</span>{" "}
                <span>OREDEIN</span>
              </h1>

              <p className=" text-black100 md:text-lg">
                Software Engineer • Full stack developer
              </p>
            </div>

            <div className="w-[56px] md:w-[136px] h-[40px] md:h-[96px] rounded-[80px] overflow-hidden my-3">
              <img
                src={Oluwatoyin}
                alt="Oluwatoyin"
                className="w-full h-auto transform"
              />
            </div>
          </div>
        </section>
        <section className="border-black100 border-y border-opacity-[0.15]">
          <div className="flex flex-col md:flex-row gap-3 my-5">
            <div className="flex items-center gap-8">
              <h2>Email:</h2>
              <a
                href="mailto:oluwatoyinoredein@gmail.com"
                className="font-helvetica-medium underline"
              >
                oluwatoyinoredein@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <h2>LinkedIn:</h2>
              <a
                href="https://www.linkedin.com/in/oluwatoyin-oredein"
                className="font-helvetica-medium underline"
              >
                https://www.linkedin.com/in/
                <br />
                oluwatoyin-oredein
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <h2>LinkedIn:</h2>
              <a
                href="https://www.linkedin.com/in/oluwatoyin-oredein"
                className="font-helvetica-medium underline"
              >
                https://www.linkedin.com/in/ oluwatoyin-oredein
              </a>
            </div>
            <div className="flex items-center gap-5">
              <h2>GitHub:</h2>
              <a
                href="https://github.com/codinBabe"
                className="font-helvetica-medium underline"
              >
                https://github.com/codinBabe
              </a>
            </div>
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
              <div className="flex items-center gap-3 mb-2">
                <img src={B} alt="icon" />
                <p>
                  Comprehensive understanding of public parastatals' roles and
                  responsibilities.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img src={B} alt="icon" />
                <p>
                  Exposure to various techniques and the practical use of
                  accessory devices in administrative functions.
                </p>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </AboutCard>
      <AboutCard number={"04"} text={"PROJECTS"}>
        <AnimationContainer>
          <div className="text-lg mt-5">
            <div className="flex items-start gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Recreated a Figma static dashboard with meticulous attention to
                detail, achieving 90% precision in design execution.
              </p>
            </div>
            <div className="flex items-start gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Designed and developed a user-friendly dictionary app integrated
                with a REST API for seamless functionality.
              </p>
            </div>
            <div className="flex items-start gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Created a comprehensive Period web app with ReactJS,
                incorporating hooks for authentication, menstrual prediction,
                and additional functionalities.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={B} alt="icon" />
              <p>
                Developed a full-stack pizza delivery web app using Next JS,
                featuring user and admin sign-in, profile functionalities, CRUD
                operations, order tracking, and PayPal integration for seamless
                transactions.
              </p>
            </div>
          </div>
        </AnimationContainer>
      </AboutCard>
    </>
  );
}
