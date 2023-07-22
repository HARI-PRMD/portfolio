import { projectsDataV2 } from "~/utils/data";
import ProjectCardV2 from "./ProjectCardV2";
import { useState } from "react";

const AllProjectsV2: React.FC = () => {
  const [snappedIndex, setSnappedIndex] = useState<number>(0);
  return (
    <div
      className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-8 overflow-x-auto px-16 pb-4 md:snap-none md:grid-flow-row md:grid-cols-3 md:px-0"
      onScroll={(e) => {
        const element = e.target as HTMLElement;
        const scrollLeft = element.scrollLeft;
        const cardWidth = element.scrollWidth / projectsDataV2.length;
        const snappedIndex = Math.round(scrollLeft / cardWidth);
        setSnappedIndex(snappedIndex);
      }}
    >
      {projectsDataV2?.map((p, i) => (
        <ProjectCardV2
          key={i}
          title={p.title}
          description={p.description}
          month={p.month}
          year={p.year}
          websiteLink={p.websiteLink}
          codeLink={p.codeLink}
          image={p.image}
          isInView={snappedIndex === i}
        />
      ))}
    </div>
  );
};
export default AllProjectsV2;
