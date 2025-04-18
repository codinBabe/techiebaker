import AboutCard from "../components/AboutCard";
import B from "../assets/bforbaker.svg";
import Education from "../components/Education";
import AnimationContainer from "../utils/AnimationContainer";

export default function AboutPage() {
  return (
    <>
      <h1 className="font-fraunces font-semibold text-[22px] mb-1 md:mt-40">
        About Oluwatoyin OREDEIN
      </h1>
      <p>Let’s rock and roll</p>
      <AboutCard
        number={"01"}
        text={"WHO IS OLUWATOYIN?"}
        clsname={"md:mt-5 md:ml-[-65px]"}
      >
        <AnimationContainer>
          <p className="text-lg">
            <span className="font-helvetica-bold">Oluwatoyin OREDEIN</span> is a
            mother of a 3-year old girl, who against all odds started learning
            software engineering by herself using online resources and
            curriculums. A baker at night and coder at day. She is passionate
            continuous learner, proactive problem solver, effective team player
            with strong collaborative communication skills.
          </p>
        </AnimationContainer>
      </AboutCard>
      <AboutCard
        number={"02"}
        text={"TOYIN'S JOURNEY"}
        clsname={"md:mt-5 md:ml-[-30px]"}
      >
        <AnimationContainer>
          <div className="text-lg">
            <h2 className="text-[22px]">Self learning</h2>
            <p className="text-black100 my-1 text-base">
              April 2022 - till date
            </p>
            <p>
              My journey into tech started when a contact introduced me to the
              field. After a clarity session, I decided to venture into software
              engineering. I began by reading numerous articles on Medium and
              Substack and watching videos about the roles, tools, processes,
              industries, and future relevance of software engineering.
            </p>
          </div>
        </AnimationContainer>
        <Education />
      </AboutCard>
      <AboutCard
        number={"03"}
        text={"WHAT I CAN DO FOR YOU"}
        clsname={"md:mt-5 md:ml-[-85px]"}
      >
        <AnimationContainer>
          <div className="text-lg">
            <div className="mb-6">
              <h3 className="font-helvetica-medium text-2xl">
                Front end development
              </h3>
              <p>
                Using tools like HTML, CSS, ReactJS, NextJs, I can assist in
                bringing your designs to life.
              </p>
            </div>
            <div>
              <h3 className="font-helvetica-medium text-2xl">
                Back end development
              </h3>
              <p>
                With tools like Nodejs-Express, Python-Flask, I can help in
                implementing functionality of your designs.
              </p>
            </div>
          </div>
        </AnimationContainer>
      </AboutCard>
      <AboutCard
        number={"04"}
        text={"WHERE I CAN WORK"}
        clsname={"md:mt-5 md:ml-[-40px]"}
      >
        <AnimationContainer>
          <div className="text-lg">
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>Startups</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>Digital agencies</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>Product teams</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>Small organisations</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={B} alt="icon" />
              <p>Large organisations</p>
            </div>
          </div>
        </AnimationContainer>
      </AboutCard>
      <AboutCard
        number={"05"}
        text={"WHAT I STAND FOR"}
        clsname={"md:mt-5 md:ml-[-30px]"}
      >
        <AnimationContainer>
          <div className="text-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-helvetica-medium">Resilence</h2>
              <p>
                As a mother of a child who is not up to 4 years, I was able to
                beat all odds to start self-learning, applied for and got into
                Women Techsters Fellowship program and graduated top 10% of the
                class.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-helvetica-medium">Adaptability</h2>
              <p>
                I have developed a tough skin over the years and I am able to
                adapt quickly to new environments, challenges, and technologies.
                Whether it's learning a new programming language, adjusting to
                different work cultures, or balancing my personal and
                professional life, I embrace change and thrive in dynamic
                situations.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-helvetica-medium">Communication</h2>
              <p>
                Contrary to the stereotype that software engineers lack
                communication skills, I am an effective communicator and I
                practice active listening.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-helvetica-medium">
                Continuous Learing
              </h2>
              <p>
                Learning is a continuous process and I am always open to
                learning new skills and technologies to improve my craft and
                stay relevant in the Industry.
              </p>
            </div>
          </div>
        </AnimationContainer>
      </AboutCard>
      <AboutCard
        number={"06"}
        text={"MY MANTRA"}
        clsname={"md:mt-5 md:ml-[22px]"}
      >
        <AnimationContainer>
          <div className="text-lg">
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>Create your own reality</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Do the best you can until you know better. Then when you know
                better, do better.
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Even if you're on the right track, you will get run over if you
                just sit there.
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>It is possible to do great things from a small place</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={B} alt="icon" />
              <p>Simplicity is the soul of efficiency.</p>
            </div>
          </div>
        </AnimationContainer>
      </AboutCard>
      <AboutCard
        number={"07"}
        text={"OLUWATOYIN'S SKILLS"}
        clsname={"md:mt-5 md:ml-[-60px]"}
      >
        <AnimationContainer>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-sm mb-2">LANGUAGES</h3>
              <div className="flex items-center gap-4 flex-wrap">
                <p className="bg-blue200 py-1 px-3 rounded-lg font-helvetica-medium">
                  C
                </p>
                <p className="bg-blue100 py-1 px-3 rounded-lg font-helvetica-medium">
                  Python
                </p>
                <p className="bg-blue200 py-1 px-3 rounded-lg font-helvetica-medium">
                  Javascript
                </p>
                <p className="bg-blue100 py-1 px-3 rounded-lg font-helvetica-medium">
                  Typescript
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-2">DATABASE</h3>
              <div className="flex items-center gap-4">
                <p className="bg-blue200 py-1 px-3 rounded-lg font-helvetica-medium">
                  MongoDB
                </p>
                <p className="bg-blue100 py-1 px-3 rounded-lg font-helvetica-medium">
                  SQL
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-2">FRAMEWORKS</h3>
              <div className="flex items-center flex-wrap gap-4">
                <p className="bg-blue100 py-1 px-3 rounded-lg font-helvetica-medium">
                  ReactJs
                </p>
                <p className="bg-blue200 py-1 px-3 rounded-lg font-helvetica-medium">
                  NextJs
                </p>
                <p className="bg-blue100 py-1 px-3 rounded-lg font-helvetica-medium">
                  Flask
                </p>
                <p className="bg-blue200 py-1 px-3 rounded-lg font-helvetica-medium">
                  Express
                </p>
                <p className="bg-blue100 py-1 px-3 rounded-lg font-helvetica-medium">
                  FastAPI
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-2">VERSION CONTROL</h3>
              <div className="flex items-center gap-4">
                <p className="bg-blue200 py-1 px-3 rounded-lg font-helvetica-medium">
                  GIT
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-2">TOOLS</h3>
              <div className="flex items-center gap-4">
                <p className="bg-blue100 py-1 px-3 rounded-lg font-helvetica-medium">
                  Postman
                </p>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </AboutCard>
      <AboutCard
        number={"08"}
        text={"MY SUPER POWERS"}
        clsname={"md:mt-5 md:ml-[-35px]"}
      >
        <AnimationContainer>
          <div className="text-lg">
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                I sometimes surprise myself by building something that works the
                first time.
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>One of my mutant abilities is reading intentions from code</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>I have a sixth sense for missing semicolons.</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>I can find the perfect meme to explain any bug.</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={B} alt="icon" />
              <p>I am an excellent listener and always ready to learn.</p>
            </div>
          </div>
        </AnimationContainer>
      </AboutCard>
    </>
  );
}
