import { useState } from "react";
import { type volunteeringDataType } from "~/types/types";
import { volunteeringData } from "~/utils/data";
import VolunteerCard from "./VolunteerCard";

const splitVolunteeringData = (
  items: volunteeringDataType[],
): [volunteeringDataType[], volunteeringDataType[]] => {
  const columns: [volunteeringDataType[], volunteeringDataType[]] = [
    [],
    [],
  ];

  items.forEach((item, index) => {
    const columnIndex = index === items.length - 1 ? 1 : index % 2;
    columns[columnIndex]?.push(item);
  });

  return columns;
};

const desktopColumns = splitVolunteeringData(volunteeringData);

const AllVolunteering = () => {
  const [snappedIndex, setSnappedIndex] = useState<number>(0);
  const [leftColumn, rightColumn] = desktopColumns;

  return (
    <div className="scroller h-full w-full flex-none flex-row overflow-x-auto overflow-y-hidden md:flex md:space-x-12">
      <div className="hidden w-1/2 flex-col space-y-12 md:flex">
        {leftColumn.map((volunteer, index) => (
          <VolunteerCard key={index} {...volunteer} />
        ))}
      </div>
      <div className="hidden w-1/2 flex-col space-y-12 md:flex">
        {rightColumn.map((volunteer, index) => (
          <VolunteerCard key={index} {...volunteer} />
        ))}
      </div>
      <div
        className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto px-16 pb-4 md:hidden"
        onScroll={(event) => {
          const element = event.target as HTMLElement;
          const scrollLeft = element.scrollLeft;
          const cardWidth = element.scrollWidth / volunteeringData.length;
          const index = Math.round(scrollLeft / cardWidth);
          setSnappedIndex(index);
        }}
      >
        {volunteeringData.map((volunteer, index) => (
          <VolunteerCard
            key={index}
            {...volunteer}
            isInView={snappedIndex === index}
          />
        ))}
      </div>
    </div>
  );
};
export default AllVolunteering;
