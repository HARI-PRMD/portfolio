import { volunteeringData } from "~/utils/data";
import VolunteerCard from "./VolunteerCard";
import { type volunteeringDataType } from "~/types/types";
import { useState } from "react";

const AllVolunteering = () => {
  const [snappedIndex, setSnappedIndex] = useState<number>(0);
  // to display in two separate columns
  const data1: volunteeringDataType[] = [];
  const data2: volunteeringDataType[] = [];

  volunteeringData.slice(0, volunteeringData.length).forEach((vol, index) => {
    if (index !== volunteeringData.length - 1) {
      index % 2 === 0 ? data1.push(vol) : data2.push(vol);
    } else {
      data2.push(vol);
    }
  });

  return (
    <div className="scroller h-full w-full flex-none flex-row overflow-x-auto overflow-y-hidden md:flex md:space-x-12">
      <div className="hidden w-1/2 flex-col space-y-12 md:flex">
        {data1.map((v, i) => (
          <VolunteerCard
            key={i}
            title={v.title}
            startTime={v.startTime}
            endTime={v.endTime}
            description={v.description}
            image={v.image}
            society={v.society}
          />
        ))}
      </div>
      <div className="hidden w-1/2 flex-col space-y-12 md:flex">
        {data2.map((v, i) => (
          <VolunteerCard
            key={i}
            title={v.title}
            startTime={v.startTime}
            endTime={v.endTime}
            description={v.description}
            image={v.image}
            society={v.society}
          />
        ))}
      </div>
      <div
        className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto px-16 pb-4 md:hidden"
        onScroll={(e) => {
          const element = e.target as HTMLElement;
          const scrollLeft = element.scrollLeft;
          const cardWidth = element.scrollWidth / volunteeringData.length;
          const snappedIndex = Math.round(scrollLeft / cardWidth);
          setSnappedIndex(snappedIndex);
        }}
      >
        {volunteeringData.map((v, i) => (
          <VolunteerCard
            key={i}
            title={v.title}
            startTime={v.startTime}
            endTime={v.endTime}
            description={v.description}
            image={v.image}
            society={v.society}
            isInView={snappedIndex === i}
          />
        ))}
      </div>
    </div>
  );
};
export default AllVolunteering;
