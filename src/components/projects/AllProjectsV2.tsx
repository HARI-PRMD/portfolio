import { projectsDataV2 } from "~/utils/data";
import ProjectCardV2 from "./ProjectCardV2";

const AllProjectsV2: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
