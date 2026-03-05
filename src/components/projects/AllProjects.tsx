import { projectsDataV2 } from "~/utils/data";
import FadeIn from "../animation/FadeIn";
import ProjectCard from "./ProjectCard";
import { useScrollSnap } from "~/hooks/useScrollSnap";

const AllProjects: React.FC = () => {
  const { snappedIndex, handleScroll } = useScrollSnap(projectsDataV2.length);

  return (
    <div
      className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto overflow-y-hidden px-24 pb-4 md:snap-none md:grid-flow-row md:grid-cols-3 md:gap-12 md:px-0"
      onScroll={handleScroll}
    >
      {projectsDataV2.map((p, i) => (
        <FadeIn key={`${p.title}-${i}`}>
          <ProjectCard {...p} isInView={snappedIndex === i} />
        </FadeIn>
      ))}
    </div>
  );
};
export default AllProjects;
