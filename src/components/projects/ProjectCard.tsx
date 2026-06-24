import { type ProjectCardDataType } from "~/types/types";
import ImageHoverMessage from "../image/ImageHoverMessage";
import PatternHoverMessage from "../image/PatternHoverMessage";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

type Props = ProjectCardDataType;

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  month,
  year,
  websiteLink,
  codeLink,
  image,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ProjectModal
        title={title}
        description={description}
        month={month}
        year={year}
        codeLink={codeLink}
        websiteLink={websiteLink}
        image={image}
        onClose={() => setShowModal(false)}
        isOpen={showModal}
      />
      <div className="flex h-fit w-[min(18rem,calc(100vw-2rem))] min-w-[min(18rem,calc(100vw-2rem))] snap-center flex-row transition-all duration-300 ease-in-out md:w-full md:min-w-full md:snap-none md:space-x-8 md:grayscale md:focus-within:grayscale-0 md:hover:grayscale-0">
        <div className="w-full">
          {image ? (
            <ImageHoverMessage
              url={image}
              message="View Details"
              ariaLabel={`View details for ${title}`}
              onClick={() => setShowModal(true)}
            />
          ) : (
            <PatternHoverMessage
              message="View Details"
              ariaLabel={`View details for ${title}`}
              onClick={() => setShowModal(true)}
            />
          )}
          <h3 className="heading3 pt-2">{title}</h3>
          <p className="subtitle py-2 opacity-60">
            {year ? month + " " + year.toString() : month}
          </p>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
