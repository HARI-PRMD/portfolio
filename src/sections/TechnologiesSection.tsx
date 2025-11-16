import SectionHeading from "~/components/common/SectionHeading";
import AllTechnologies from "~/components/technologies/AllTechnologies";

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="min-h-fit w-full">
      <SectionHeading
        title="Technologies"
        description="Languages, Frameworks and tools I have worked with."
      />
      <div className="h-full w-full">
        <AllTechnologies />
      </div>
    </section>
  );
};

export default TechnologiesSection;
