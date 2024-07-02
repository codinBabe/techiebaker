import { useParams } from "react-router-dom";
import Works from "../utils/Works";
import ArrowLeft from "../assets/arrow-left.svg";
import ExternalLink from "../assets/fi_external-link.svg";
import WorkCard from "../components/WorkCard";
import { useEffect, useState } from "react";
export default function WorkIdPage() {
  const { workId } = useParams();
  const [projectsViewed, setProjectsViewed] = useState(0);
  const work = Works.find((work) => work.id === parseInt(workId));

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
      <a className="flex items-center gap-2 text-black100" href="/works">
        <span>
          <img src={ArrowLeft} alt="icon" />
        </span>
        <span>Go back</span>
      </a>
      <section>
        {work && (
          <>
            <div className="my-5">
              <h1 className="font-fraunces font-bold text-2xl">{work.title}</h1>
              <p>{work.projectType}</p>
              <p className="text-sm mt-2 text-black100">{work.text}</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={work.githubUrl}
                className="underline font-helvetica-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Github repo
              </a>
              <a
                href={work.liveProjectUrl}
                className="underline font-helvetica-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                See live project
              </a>
              <a>
                <img src={ExternalLink} alt="icon" />
              </a>
            </div>
            <div className="bg-blue100 w-full h-[390px] rounded-[20px] my-10">
              <iframe
                title="Embedded Website"
                src={work.liveProjectUrl}
                width="100%"
                height="100%"
              />
            </div>
          </>
        )}
      </section>
      <section>
        <h2 className="font-fraunces text-2xl font-semibold">Related works</h2>
        {Works.slice(2, 4).map((work) => (
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
      </section>
    </>
  );
}
