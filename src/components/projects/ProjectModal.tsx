import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { type ProjectCardDataType } from "~/types/types";
import { type MouseEventHandler } from "react";
import MarkdownParser from "../MarkdownParser";

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
      className="fr fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => onClose(e)}
    >
      <div
        className="fc scroller container h-full overflow-y-auto border border-white/20 bg-black md:h-5/6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fr sticky top-0 w-full justify-between border-white/20 bg-black/90 px-8 py-4 backdrop-blur">
          <h3>{title}</h3>
          <XMarkIcon
            onClick={onClose}
            className="h-8 w-8 cursor-pointer text-white md:h-12 md:w-12"
          />
        </div>
        <div className="w-full space-y-4 p-4 md:p-24">
          <div className="fc w-full items-center justify-center">
            {image ? (
              <Image
                src={image}
                width={2151}
                height={1227}
                alt="megalan"
                className="h-fit w-full object-cover md:w-4/5"
              />
            ) : (
              <div className="hero-pattern h-48 w-full object-cover md:w-4/5"></div>
            )}
            <p className="subtitle w-full pt-2 text-left opacity-60 md:w-4/5">
              {year ? month + " " + year.toString() : month}
            </p>
          </div>
          <MarkdownParser markdownString={description} />
          <div className="fc md:fr w-full space-y-4 md:space-x-8 md:space-y-0">
            {websiteLink && (
              <Link href={websiteLink}>
                <div className="fr w-full items-center justify-center space-x-4 border border-white/20 bg-white/5 px-8 py-2 transition-colors duration-300 hover:border-white/40 hover:bg-white/10 md:w-fit">
                  <p>Website</p>
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
                </div>
              </Link>
            )}
            {codeLink && (
              <Link href={codeLink}>
                <div className="fr w-full items-center justify-center space-x-4 border border-white/20 bg-white/5 px-8 py-2 transition-colors duration-300 hover:border-white/40 hover:bg-white/10 md:w-fit">
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
