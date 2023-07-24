import { type ProjectCardDataType } from "~/types/types";
import ImageHoverMessage from "../image/ImageHoverMessage";
import PatternHoverMessage from "../image/PatternHoverMessage";
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import { Transition } from "@headlessui/react";

type Props = ProjectCardDataType & { isInView?: boolean };

const ProjectCardV2: React.FC<Props> = ({
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
  const handleClick = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (!showModal) document.body.style.overflow = "unset";
    if (showModal) document.body.style.overflow = "hidden";
  }, [showModal]);

  return (
    <>
      <Transition
        show={showModal}
        enter="transition transform duration-300 ease-in-out"
        enterFrom="opacity-0 translate-y-[64px]"
        enterTo="opacity-100 translate-y-0"
        className="fixed left-0 top-0 z-50 h-full w-screen"
        leave="transition duration-300 ease-in transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[64px]"
      >
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
      </Transition>
      <div
        className={`${
          isInView ? "grayscale-0" : "scale-90 grayscale"
        } fr h-fit w-full min-w-[16rem] transform snap-center transition-all duration-500 ease-out active:grayscale-0 md:min-w-full md:space-x-8 md:grayscale md:duration-300 md:hover:grayscale-0`}
        data-aos="fade-up"
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
          <p className="p-fixed pt-2">{title}</p>
          <p className="subtitle py-2 opacity-60">
            {year ? month + " " + year.toString() : month}
          </p>
        </div>
      </div>
    </>
  );
};
export default ProjectCardV2;
