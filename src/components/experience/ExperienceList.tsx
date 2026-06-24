import ExperienceCard from "./ExperienceCard";
import { experienceData } from "~/utils/data";

const ExperienceList = () => {
  return (
    <div className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overflow-y-hidden px-4 pb-4 md:grid-flow-row md:grid-cols-2 md:gap-12 md:px-0">
      {experienceData.map((item, index) => (
        <ExperienceCard key={`${item.company}-${index}`} {...item} />
      ))}
    </div>
  );
};

export default ExperienceList;
