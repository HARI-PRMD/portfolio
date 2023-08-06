import { CompetitionCardData } from "~/utils/data";
import CompetitionCard from "./CompetitionCard";
import { useState } from "react";

const AllCompetitions = () => {
  const [snappedIndex, setSnappedIndex] = useState<number>(0);
  return (
    <div
      className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto overflow-y-hidden px-16 pb-4 md:grid-flow-row md:grid-cols-2 md:gap-8 md:px-0"
      onScroll={(e) => {
        const element = e.target as HTMLElement;
        const scrollLeft = element.scrollLeft;
        const cardWidth = element.scrollWidth / CompetitionCardData.length;
        const snappedIndex = Math.round(scrollLeft / cardWidth);
        setSnappedIndex(snappedIndex);
      }}
    >
      {CompetitionCardData.map((data, index) => (
        <CompetitionCard
          key={index}
          data={data}
          isInView={snappedIndex === index}
        />
      ))}
    </div>
  );
};

export default AllCompetitions;
