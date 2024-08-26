import { useEffect, useState } from "react";
import CustomSection from "../components/CustomSection";
import WorkCard from "../components/WorkCard";
import Works from "../utils/Works";
import Confetti from "react-confetti";
import { useWindowSize } from "../hooks/WindowSize";

export default function WorksPage() {
  const [projectsViewed, setProjectsViewed] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const [viewedProjects, setViewedProjects] = useState([]);

  useEffect(() => {
    const viewedCount = localStorage.getItem("projectsViewed");
    const viewedProjectsIds = localStorage.getItem("viewedProjects");

    if (viewedCount) {
      setProjectsViewed(parseInt(viewedCount));
    }

    if (viewedProjectsIds) {
      setViewedProjects(JSON.parse(viewedProjectsIds));
    }
  }, []);

  useEffect(() => {
    if (projectsViewed >= 2) {
      setShowConfetti(true);
      const confettiTimer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(confettiTimer);
    }
  }, [projectsViewed]);

  function handleProjectView(workId) {
    if (!viewedProjects.includes(workId)) {
      const newCount = projectsViewed + 1;
      const updatedViewedProjects = [...viewedProjects, workId];

      setProjectsViewed(newCount);
      setViewedProjects(updatedViewedProjects);

      localStorage.setItem("projectsViewed", newCount);
      localStorage.setItem(
        "viewedProjects",
        JSON.stringify(updatedViewedProjects)
      );
    }
  }

  return (
    <CustomSection title={"Works"} titleCls={"md:mt-40"}>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          gravity={0.5}
          recycle={false}
        />
      )}
      <p>
        {projectsViewed < 2
          ? `View ${2 - projectsViewed} projects to win a free cupcake`
          : "Congratulations! You've won a free cupcake 🧁"}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Works.map((work) => (
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
    </CustomSection>
  );
}
