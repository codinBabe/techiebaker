import AnimationContainer from "../utils/AnimationContainer";

export default function SkillSet({ className }) {
  return (
    <AnimationContainer>
      <div className={className}>
        <div className="md:flex items-center gap-[120px]">
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
        <div className="md:flex md:items-center md:gap-[135px]">
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
        <div className="md:flex md:items-center md:gap-[105px]">
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
        <div className="md:flex md:items-center md:gap-[75px]">
          <h3 className="text-sm mb-2">VERSION CONTROL</h3>
          <div className="flex items-center gap-4">
            <p className="bg-blue200 py-1 px-3 rounded-lg font-helvetica-medium">
              GIT
            </p>
          </div>
        </div>
        <div className="md:flex items-center gap-40">
          <h3 className="text-sm mb-2">TOOLS</h3>
          <div className="flex items-center gap-4">
            <p className="bg-blue100 py-1 px-3 rounded-lg font-helvetica-medium">
              Postman
            </p>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
}
