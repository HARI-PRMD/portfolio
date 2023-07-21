import { volunteeringData } from "~/utils/data";
import VolunteerCard from "./VolunteerCard";
import { type volunteeringDataType } from "~/types/types";

const AllVolunteering = () => {
  const data1: volunteeringDataType[] = [];
  const data2: volunteeringDataType[] = [];

  volunteeringData.forEach((vol, index) => {
    index % 2 === 0 ? data1.push(vol) : data2.push(vol);
  });

  return (
    <div className="md:fr scroller h-full w-full flex-none overflow-x-auto  md:space-x-8">
      <div className="fc hidden w-1/2 space-y-8 md:flex">
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
      <div className="fc hidden w-1/2 space-y-8 md:flex">
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
      <div className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-8 overflow-x-auto px-16 pb-4 md:hidden">
        {volunteeringData.map((v, i) => (
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
    </div>
  );
};
export default AllVolunteering;
