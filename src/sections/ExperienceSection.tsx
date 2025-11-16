import SectionHeading from "~/components/common/SectionHeading";
import ExperienceList from "~/components/experience/ExperienceList";

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-fit w-full space-y-8">
      <SectionHeading
        title="Experience"
        description="Work that blends industry impact with teaching and mentorship."
      />
      <ExperienceList />
    </section>
  );
};

export default ExperienceSection;
