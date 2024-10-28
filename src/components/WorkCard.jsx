import { Link } from "react-router-dom";
import AnimationContainer from "../utils/AnimationContainer";

export default function WorkCard({
  title,
  projectType,
  imgsrc,
  imgsrclg,
  children,
  workId,
  onView,
}) {
  return (
    <AnimationContainer>
      <div className="bg-blue100 rounded-[8px] p-5 mt-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-fraunces font-bold text-[22px]">{title}</h1>
          <p>{projectType}</p>
          <div className="flex items-center justify-between text-sm">
            {children}
            <Link
              to={`/works/${workId}`}
              className="underline"
              onClick={onView}
            >
              Open Project
            </Link>
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <picture>
            <source srcSet={imgsrclg} media="(min-width: 768px)" />
            <img
              src={imgsrc}
              alt={title}
              loading="lazy"
              className="object-cover w-[90%]"
            />
          </picture>
        </div>
      </div>
    </AnimationContainer>
  );
}
