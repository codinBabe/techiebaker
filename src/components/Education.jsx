import B from "../assets/bforbaker.svg";
import AnimationContainer from "../utils/AnimationContainer";
export default function Education() {
  return (
    <>
      <AnimationContainer>
        <div className="text-lg my-5">
          <h2 className="text-[22px]">
            <span className="font-helvetica-medium">Software Engineering</span>{" "}
            - ALX Africa
          </h2>
          <p className="text-black100 my-1 text-base"> Nov 2023 - till date</p>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Acquired fundamental and advanced knowledge of C programming.
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>Currently exploring system administration and DevOps.</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Gained proficiency in object-oriented programming using Python.
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Learned to choose and identify the optimal data structure and
                tools for each web application.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={B} alt="icon" />
              <p>
                Developed teamwork abilities through comprehensive learning and
                practical tools.
              </p>
            </div>
          </div>
        </div>
      </AnimationContainer>
      <AnimationContainer>
        <div className="text-lg my-5">
          <h2 className="text-[22px]">
            <span className="font-helvetica-medium">
              Women Techsters Fellowship
            </span>
            - Tech4dev Ltd
          </h2>
          <p className="text-black100 my-1 text-base">Oct 2023 - April 2024</p>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Understood the semantics of web page structuring, accessibility,
                and search engine optimization.
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Mastered the art of styling web pages for visual appeal and
                creating smooth animations.
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src={B} alt="icon" />
              <p>
                Grasped how to add functionality to web pages and make API calls
                and requests.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={B} alt="icon" />
              <p>
                Familiarized with this frontend library for creating fast and
                responsive cross-platform applications.
              </p>
            </div>
          </div>
        </div>
      </AnimationContainer>
    </>
  );
}
