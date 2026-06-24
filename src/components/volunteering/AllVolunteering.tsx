import { type VolunteeringDataType } from "~/types/types";
import { volunteeringData } from "~/utils/data";
import VolunteerCard from "./VolunteerCard";

const splitVolunteeringData = (
  items: VolunteeringDataType[]
): [VolunteeringDataType[], VolunteeringDataType[]] => {
  const columns: [VolunteeringDataType[], VolunteeringDataType[]] = [[], []];

  items.forEach((item, index) => {
    const columnIndex = index === items.length - 1 ? 1 : index % 2;
    columns[columnIndex]?.push(item);
  });

  return columns;
};

const desktopColumns = splitVolunteeringData(volunteeringData);

const AllVolunteering = () => {
  const [leftColumn, rightColumn] = desktopColumns;

  return (
    <div className="scroller h-full w-full flex-none flex-row overflow-x-auto overflow-y-hidden md:flex md:space-x-12">
      <div className="hidden w-1/2 flex-col space-y-12 md:flex">
        {leftColumn.map((volunteer) => (
          <VolunteerCard
            key={`${volunteer.society}-${volunteer.title}`}
            {...volunteer}
          />
        ))}
      </div>
      <div className="hidden w-1/2 flex-col space-y-12 md:flex">
        {rightColumn.map((volunteer) => (
          <VolunteerCard
            key={`${volunteer.society}-${volunteer.title}`}
            {...volunteer}
          />
        ))}
      </div>
      <div className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto px-4 pb-4 md:hidden">
        {volunteeringData.map((volunteer, index) => (
          <VolunteerCard
            key={`${volunteer.society}-${volunteer.title}`}
            {...volunteer}
          />
        ))}
      </div>
    </div>
  );
};
export default AllVolunteering;
