import { volunteeringData } from "~/utils/data";
import VolunteerCard from "./VolunteerCard";

const AllVolunteering = () => {
  return (
    <>
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
    </>
  );
};
export default AllVolunteering;
