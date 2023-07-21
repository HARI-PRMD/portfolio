import { projectsDataV2 } from "~/utils/data";
import ProjectCardV2 from "./ProjectCardV2";

const AllProjectsV2: React.FC = () => {
  return (
    <div className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-8 overflow-x-auto px-16 md:snap-none md:grid-flow-row md:grid-cols-3 md:px-0">
      {projectsDataV2?.map((p, i) => (
        <ProjectCardV2
          key={i}
          title={p.title}
          description={p.description}
          month={p.month}
          year={p.year}
          websiteLink={p.websiteLink}
          codeLink={p.codeLink}
          image={p.image}
        />
      ))}
    </div>
  );
};
export default AllProjectsV2;
