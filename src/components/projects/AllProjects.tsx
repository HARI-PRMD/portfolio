import { projectsDataV2 } from "~/utils/data";
import { useState } from "react";
import FadeIn from "../animation/FadeIn";
import ProjectCard from "./ProjectCard";

const AllProjects: React.FC = () => {
  const [cardInViewIndex, setCardInViewIndex] = useState<number>(0);

  return (
    <div
      className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto overflow-y-hidden px-24 pb-4 md:snap-none md:grid-flow-row md:grid-cols-3 md:gap-12 md:px-0"
      onScroll={(e) => {
        if (window.innerWidth < 768) {
          const element = e.target as HTMLElement;
          const scrollLeft = element.scrollLeft;
          const cardWidth = element.scrollWidth / projectsDataV2.length;
          const snappedIndex = Math.round(scrollLeft / cardWidth);
          setCardInViewIndex(snappedIndex);
        }
      }}
    >
      {projectsDataV2?.map((p, i) => (
        <FadeIn key={i}>
          <ProjectCard
            title={p.title}
            description={p.description}
            month={p.month}
            year={p.year}
            websiteLink={p.websiteLink}
            codeLink={p.codeLink}
            image={p.image}
            isInView={cardInViewIndex === i}
          />
        </FadeIn>
      ))}
    </div>
  );
};
export default AllProjects;
