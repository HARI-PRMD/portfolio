import ScrollRightSubtitle from "~/components/accessibility/ScrollRightSubtitle";
import SectionHeading from "~/components/common/SectionHeading";
import AllVolunteering from "~/components/volunteering/AllVolunteering";

const VolunteeringSection = () => {
  return (
    <section id="volunteering" className="min-h-fit w-full space-y-8">
      <SectionHeading
        title="Volunteering"
        description="Clubs and Society positions I have been a part of during my degree."
      >
        <ScrollRightSubtitle />
      </SectionHeading>
      <div className="h-full">
        <AllVolunteering />
      </div>
    </section>
  );
};

export default VolunteeringSection;
