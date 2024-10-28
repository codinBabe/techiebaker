import B from "../assets/bforbaker.svg";
import AnimationContainer from "../utils/AnimationContainer";

const EducationItem = ({ children }) => (
  <div className="flex items-center gap-3 mb-2">
    <img src={B} alt="icon" />
    <p>{children}</p>
  </div>
);

export default function Education() {
  return (
    <>
      <AnimationContainer>
        <div className="text-lg my-5">
          <h2 className="text-[22px] font-helvetica-medium">
            Software Engineering - ALX Africa
          </h2>
          <p className="text-black100 my-1 text-base">Nov 2023 - till date</p>
          <div>
            <EducationItem>
              Acquired fundamental and advanced knowledge of C programming.
            </EducationItem>
            <EducationItem>
              Currently exploring system administration and DevOps.
            </EducationItem>
            <EducationItem>
              Gained proficiency in object-oriented programming using Python.
            </EducationItem>
            <EducationItem>
              Learned to choose and identify the optimal data structure and
              tools for each web application.
            </EducationItem>
            <EducationItem>
              Developed teamwork abilities through comprehensive learning and
              practical tools.
            </EducationItem>
          </div>
        </div>
      </AnimationContainer>

      <AnimationContainer>
        <div className="text-lg my-5">
          <h2 className="text-[22px] font-helvetica-medium">
            Women Techsters Fellowship - Tech4dev Ltd
          </h2>
          <p className="text-black100 my-1 text-base">Oct 2023 - April 2024</p>
          <div>
            <EducationItem>
              Understood the semantics of web page structuring, accessibility,
              and search engine optimization.
            </EducationItem>
            <EducationItem>
              Mastered the art of styling web pages for visual appeal and
              creating smooth animations.
            </EducationItem>
            <EducationItem>
              Grasped how to add functionality to web pages and make API calls
              and requests.
            </EducationItem>
            <EducationItem>
              Familiarized with this frontend library for creating fast and
              responsive cross-platform applications.
            </EducationItem>
          </div>
        </div>
      </AnimationContainer>
    </>
  );
}
