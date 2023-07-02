/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import VolunteerCard from "./VolunteerCard";

const AllVolunteering = () => {
  return (
    <>
      {[...Array(5)].map((e, i) => (
        <VolunteerCard
          key={i}
          title="Technical Director"
          startTime="Jan 2023"
          endTime="Dec 2023"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
          image="https://media.licdn.com/dms/image/C4D0BAQEZTIBeNVQ8Og/company-logo_100_100/0/1655955057970?e=1696464000&v=beta&t=-3Kwmbsk1hx3_96DxA5Ns36RdFabezUU_Ne8OHyzCgY"
          society="UNSW One Piece Society"
        />
      ))}
    </>
  );
};
export default AllVolunteering;
