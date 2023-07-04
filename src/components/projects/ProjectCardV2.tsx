import { type ProjectCardDataType } from "~/types/types";
import ImageHoverMessage from "../image/ImageHoverMessage";
import PatternHoverMessage from "../image/PatternHoverMessage";
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";

type Props = ProjectCardDataType;

const ProjectCardV2: React.FC<Props> = ({
  title,
  description,
  month,
  year,
  websiteLink,
  codeLink,
  image,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (!showModal) document.body.style.overflow = "unset";
    if (showModal) document.body.style.overflow = "hidden";
  }, [showModal]);

  return (
    <>
      {showModal && (
        <ProjectModal
          title={title}
          description={description}
          month={month}
          year={year}
          codeLink={codeLink}
          websiteLink={websiteLink}
          image={image}
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="fr h-fit w-full grayscale transition-colors duration-300 hover:grayscale-0 md:space-x-8">
        <div className="w-full space-y-2">
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
          <p>{title}</p>
          <p className="subtitle">
            {year ? month + " " + year.toString() : month}
          </p>
        </div>
      </div>
    </>
  );
};
export default ProjectCardV2;
