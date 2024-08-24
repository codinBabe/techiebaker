import { useEffect, useState } from "react";
import CustomSection from "../components/CustomSection";
import WorkCard from "../components/WorkCard";
import Works from "../utils/Works";

export default function WorksPage() {
  const [projectsViewed, setProjectsViewed] = useState(0);

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
    <CustomSection title={"Works"}>
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
            onView={handleProjectView}
          >
            <p>{work.text}</p>
          </WorkCard>
        ))}
      </div>
    </CustomSection>
  );
}
