import { CompetitionCardData } from "~/utils/data";
import CompetitionCard from "./CompetitionCard";
import { useScrollSnap } from "~/hooks/useScrollSnap";

const AllCompetitions = () => {
  const { snappedIndex, handleScroll } = useScrollSnap(
    CompetitionCardData.length,
  );

  return (
    <div
      className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto overflow-y-hidden px-16 pb-4 md:grid-flow-row md:grid-cols-2 md:gap-12 md:px-0"
      onScroll={handleScroll}
    >
      {CompetitionCardData.map((data, index) => (
        <CompetitionCard
          key={data.title}
          data={data}
          isInView={snappedIndex === index}
        />
      ))}
    </div>
  );
};

export default AllCompetitions;
