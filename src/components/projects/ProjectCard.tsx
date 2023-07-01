import Link from "next/link";

type Props = {
  title: string;
  description: string;
  month: string;
  websiteLink?: string;
  codeLink?: string;
};

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  month,
  websiteLink,
  codeLink,
}) => {
  return (
    <div className="fr space-x-8">
      <p>{month}</p>
      <div className="space-y-8">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="fr space-x-8">
          {websiteLink && (
            <Link href={websiteLink}>
              <div className="w-fit border-2 px-8 py-2">
                <p>Website</p>
              </div>
            </Link>
          )}
          {codeLink && (
            <Link href={codeLink}>
              <div className="w-fit border-2 px-8 py-2">
                <p>Code</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
