import ScrollRightSubtitle from "~/components/accessibility/ScrollRightSubtitle";
import SectionHeading from "~/components/common/SectionHeading";
import AllProjects from "~/components/projects/AllProjects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-fit w-full space-y-8">
      <SectionHeading
        title="My Projects"
        description="Projects I have lead or created myself."
      >
        <ScrollRightSubtitle />
      </SectionHeading>
      <AllProjects />
    </section>
  );
};

export default ProjectsSection;
