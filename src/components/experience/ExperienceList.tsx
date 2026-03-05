import ExperienceCard from "./ExperienceCard";
import { experienceData } from "~/utils/data";
import { useScrollSnap } from "~/hooks/useScrollSnap";

const ExperienceList = () => {
  const { snappedIndex, handleScroll } = useScrollSnap(experienceData.length);

  return (
    <div
      className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto overflow-y-hidden px-16 pb-4 md:grid-flow-row md:grid-cols-2 md:gap-12 md:px-0"
      onScroll={handleScroll}
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
