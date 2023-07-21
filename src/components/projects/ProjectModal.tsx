import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { type ProjectCardDataType } from "~/types/types";
import { type MouseEventHandler } from "react";

type Props = ProjectCardDataType & { onClose: MouseEventHandler };
const ProjectModal: React.FC<Props> = ({
  description,
  month,
  year,
  title,
  codeLink,
  image,
  websiteLink,
  onClose,
}) => {
  return (
    <div
      id="background"
      className="fr fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center bg-black/50"
      onClick={(e) => onClose(e)}
    >
      <div
        className="fc scroller container h-full overflow-y-auto border bg-black md:h-5/6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fr sticky top-0 w-full justify-between border-b border-r bg-black px-8 py-4">
          <h3 className="p md:h3 font-heading">{title}</h3>
          <XMarkIcon
            onClick={onClose}
            className="h-8 w-8 cursor-pointer text-white md:h-12 md:w-12"
          />
        </div>
        <div className="w-full space-y-8 p-4 md:p-24">
          <div className="fc w-full items-center justify-center">
            {image ? (
              <Image
                src={image}
                width={2151}
                height={1227}
                alt="megalan"
                className="h-fit w-full max-w-lg object-cover"
              />
            ) : (
              <div className="hero-pattern h-48 max-w-lg object-cover"></div>
            )}
          </div>
          <p className="subtitle">
            {year ? month + " " + year.toString() : month}
          </p>
          <p>{description}</p>
          <div className="fc md:fr w-full space-y-4 md:space-x-8 md:space-y-0">
            {websiteLink && (
              <Link href={websiteLink}>
                <div className="fr w-full items-center justify-center space-x-4 border-2 px-8 py-2 md:w-fit">
                  <p>Website</p>
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
                </div>
              </Link>
            )}
            {codeLink && (
              <Link href={codeLink}>
                <div className="fr w-full items-center justify-center space-x-4 border-2 px-8 py-2 md:w-fit">
                  <p>Code</p>
                  <CodeBracketIcon className="h-6 w-6 text-white" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
