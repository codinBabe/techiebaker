import { useEffect, useState, useCallback } from "react";
import CustomSection from "../components/CustomSection";
import WorkCard from "../components/WorkCard";
import Works from "../utils/Works";
import Confetti from "react-confetti";
import { useWindowSize } from "../hooks/WindowSize";

export default function WorksPage() {
  const [projectsViewed, setProjectsViewed] = useState(() => {
    const storedCount = localStorage.getItem("projectsViewed");
    return storedCount ? parseInt(storedCount) : 0;
  });

  const [viewedProjects, setViewedProjects] = useState(() => {
    const storedProjects = localStorage.getItem("viewedProjects");
    return storedProjects ? JSON.parse(storedProjects) : [];
  });

  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const hasShownConfetti = localStorage.getItem("hasShownConfetti");

    if (projectsViewed >= 2 && !hasShownConfetti) {
      setShowConfetti(true);
      localStorage.setItem("hasShownConfetti", "true");

      const confettiTimer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(confettiTimer);
    }
  }, [projectsViewed]);

  const handleProjectView = useCallback(
    (workId) => {
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
    },
    [projectsViewed, viewedProjects]
  );

  return (
    <CustomSection title="Works" titleCls="md:mt-40">
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
