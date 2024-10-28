import { useParams, Link } from "react-router-dom";
import Works from "../utils/Works";
import ArrowLeft from "../assets/arrow-left.svg";
import ExternalLink from "../assets/fi_external-link.svg";
import WorkCard from "../components/WorkCard";
import { useEffect, useState } from "react";

export default function WorkIdPage() {
  const { id } = useParams();
  const [projectsViewed, setProjectsViewed] = useState(0);
  const [viewedProjects, setViewedProjects] = useState([]);
  const work = Works.find((w) => w.id === parseInt(id, 10));

  // Load viewed projects data from localStorage
  useEffect(() => {
    const viewedCount =
      parseInt(localStorage.getItem("projectsViewed"), 10) || 0;
    const viewedProjectsIds =
      JSON.parse(localStorage.getItem("viewedProjects")) || [];

    setProjectsViewed(viewedCount);
    setViewedProjects(viewedProjectsIds);
  }, []);

  // Handle project view tracking
  const handleProjectView = (workId) => {
    if (!viewedProjects.includes(workId)) {
      const updatedViewedProjects = [...viewedProjects, workId];

      setProjectsViewed(projectsViewed + 1);
      setViewedProjects(updatedViewedProjects);

      localStorage.setItem("projectsViewed", projectsViewed + 1);
      localStorage.setItem(
        "viewedProjects",
        JSON.stringify(updatedViewedProjects)
      );
    }
  };

  // Render external links with icon
  const renderExternalLink = (url, text) => (
    <a
      href={url}
      className="underline font-helvetica-medium flex items-center gap-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <img src={ExternalLink} alt="external link" />
    </a>
  );

  return (
    <>
      <Link
        to="/works"
        className="flex items-center gap-2 text-black100 md:mt-40"
      >
        <img src={ArrowLeft} alt="Go back" />
        <span>Go back</span>
      </Link>

      <section>
        {work && (
          <>
            <div className="my-5">
              <h1 className="font-fraunces font-bold text-2xl">{work.title}</h1>
              <p>{work.projectType}</p>
              <p className="text-sm mt-2 text-black100">{work.text}</p>
            </div>
            <div className="flex items-center gap-4">
              {renderExternalLink(work.githubUrl, "See Github repo")}
              {renderExternalLink(work.liveProjectUrl, "See live project")}
            </div>
            <div className="bg-blue100 w-full h-[390px] rounded-[20px] my-10">
              <iframe
                title="Embedded Website"
                src={work.liveProjectUrl}
                width="100%"
                height="100%"
                className="w-full h-full rounded-[20px]"
              />
            </div>
          </>
        )}
      </section>

      <section>
        <h2 className="font-fraunces text-2xl font-semibold">Related works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Works.slice(2, 4).map((relatedWork) => (
            <WorkCard
              key={relatedWork.id}
              title={relatedWork.title}
              projectType={relatedWork.projectType}
              imgsrc={relatedWork.imgsrc}
              imgsrclg={relatedWork.imgsrclg}
              workId={relatedWork.id}
              onView={() => handleProjectView(relatedWork.id)}
            >
              <p>{relatedWork.text}</p>
            </WorkCard>
          ))}
        </div>
        <div className="underline text-lg text-center font-helvetica-medium mt-5">
          <Link to="/works">See all works</Link>
        </div>
      </section>
    </>
  );
}
