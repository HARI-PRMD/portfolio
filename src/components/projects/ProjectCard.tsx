import { type ProjectCardDataType } from "~/types/types";
import ImageHoverMessage from "../image/ImageHoverMessage";
import PatternHoverMessage from "../image/PatternHoverMessage";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

type Props = ProjectCardDataType & {
  isInView?: boolean;
};

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  month,
  year,
  websiteLink,
  codeLink,
  image,
  isInView,
}) => {
  const [showModal, setShowModal] = useState(false);

  // toggle modal visibility
  const handleClick = () => {
    setShowModal(!showModal);
  };

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
      <div
        className={`${
          isInView ? "scale-100 grayscale-0" : "scale-90 grayscale md:scale-100"
        } flex h-fit w-64 min-w-[16rem] transform snap-center flex-row transition-all duration-300 ease-in-out active:grayscale-0 xs:w-72 md:w-full md:min-w-full md:snap-none md:space-x-8 md:grayscale md:hover:grayscale-0`}
      >
        <div className="w-full">
          {image ? (
            <ImageHoverMessage
              url={image}
              message="View Details"
              onClick={() => handleClick()}
            />
          ) : (
            <PatternHoverMessage
              message="View Details"
              onClick={() => handleClick()}
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
