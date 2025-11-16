import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "~/utils/data";

const ExperienceList = () => {
  const [snappedIndex, setSnappedIndex] = useState<number>(0);

  return (
    <div
      className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto overflow-y-hidden px-16 pb-4 md:grid-flow-row md:grid-cols-2 md:gap-12 md:px-0"
      onScroll={(event) => {
        const element = event.target as HTMLElement;
        const scrollLeft = element.scrollLeft;
        const cardWidth = element.scrollWidth / experienceData.length;
        const index = Math.round(scrollLeft / cardWidth);
        setSnappedIndex(index);
      }}
    >
      {experienceData.map((item, index) => (
        <ExperienceCard
          key={`${item.company}-${index}`}
          {...item}
          isInView={snappedIndex === index}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
