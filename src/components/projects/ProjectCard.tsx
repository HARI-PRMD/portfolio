import Link from "next/link";
import Image from "next/image";

import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

type Props = {
  title: string;
  description: string;
  month: string;
  websiteLink?: string;
  codeLink?: string;
  image?: string;
};

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  month,
  websiteLink,
  codeLink,
  image = "https://media.discordapp.net/attachments/1092987636035092662/1124960255722401842/Screenshot_2023-07-02_at_5.09.42_pm.png",
}) => {
  return (
    <div className="fr h-fit w-full space-x-8 grayscale transition-all duration-300 hover:grayscale-0 ">
      <p>{month}</p>
      <div className="space-y-8">
        <h3>{title}</h3>
        <Image
          src={image}
          width={2151}
          height={1227}
          alt="megalan"
          className="block h-fit w-96 object-cover 2xl:hidden"
        />
        <p>{description}</p>
        <div className="fr space-x-8">
          {websiteLink && (
            <Link href={websiteLink}>
              <div className="fr w-fit space-x-4 border-2 px-8 py-2">
                <p>Website</p>
                <ArrowTopRightOnSquareIcon className="mt-1 h-6 w-6 text-white" />
              </div>
            </Link>
          )}
          {codeLink && (
            <Link href={codeLink}>
              <div className="fr w-fit space-x-4 border-2 px-8 py-2">
                <p>Code</p>
                <CodeBracketIcon className="mt-1 h-6 w-6 text-white" />
              </div>
            </Link>
          )}
        </div>
      </div>
      <Image
        src={image}
        width={2151}
        height={1227}
        alt="megalan"
        className="hidden h-96 w-full object-cover 2xl:block"
      />
    </div>
  );
};
export default ProjectCard;
