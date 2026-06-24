import { projectsData } from "~/utils/data";
import FadeIn from "../animation/FadeIn";
import ProjectCard from "./ProjectCard";

const AllProjects: React.FC = () => {
  return (
    <div className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overflow-y-hidden px-4 pb-4 md:snap-none md:grid-flow-row md:grid-cols-3 md:gap-12 md:px-0">
      {projectsData.map((p, i) => (
        <FadeIn key={`${p.title}-${i}`} staticOnMobile>
          <ProjectCard {...p} />
        </FadeIn>
      ))}
    </div>
  );
};
export default AllProjects;
