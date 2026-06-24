import { CompetitionCardData } from "~/utils/data";
import CompetitionCard from "./CompetitionCard";

const AllCompetitions = () => {
  return (
    <div className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overflow-y-hidden px-4 pb-4 md:grid-flow-row md:grid-cols-2 md:gap-12 md:px-0">
      {CompetitionCardData.map((data, index) => (
        <CompetitionCard key={`${data.title}-${index}`} data={data} />
      ))}
    </div>
  );
};

export default AllCompetitions;
