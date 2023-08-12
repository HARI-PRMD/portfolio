import Link from "next/link";
import Image from "next/image";

import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { type ProjectCardDataType } from "~/types/types";

type Props = ProjectCardDataType;

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  month,
  websiteLink,
  codeLink,
  image,
}) => {
  return (
    <div className="flex h-fit w-full flex-row grayscale transition-all duration-300 hover:grayscale-0 active:grayscale-0 md:space-x-8">
      <p className="para3 hidden w-1/6 md:block">{month}</p>
      <div className="w-full space-y-4 md:w-5/6 md:space-y-8">
        <h3 className="heading2">{title}</h3>
        <p className="para3 md:hidden">{month}</p>
        {image && (
          <Image
            src={image}
            width={2151}
            height={1227}
            alt="project-pic"
            className="block h-fit w-96 object-cover 2xl:hidden"
          />
        )}
        <p>{description}</p>
        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
          {websiteLink && (
            <Link href={websiteLink}>
              <div className="flex w-full flex-row items-center justify-center space-x-4 border-2 px-8 py-2 md:w-fit">
                <p>Website</p>
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
              </div>
            </Link>
          )}
          {codeLink && (
            <Link href={codeLink}>
              <div className="flex w-full flex-row items-center justify-center space-x-4 border-2 px-8 py-2 md:w-fit">
                <p>Code</p>
                <CodeBracketIcon className="h-6 w-6 text-white" />
              </div>
            </Link>
          )}
        </div>
      </div>
      {image && (
        <Image
          src={image}
          width={2151}
          height={1227}
          alt="megalan"
          className="hidden h-96 w-full object-cover 2xl:block"
        />
      )}
    </div>
  );
};
export default ProjectCard;
