import Image from "next/image";
import FadeIn from "../animation/FadeIn";
import { type volunteeringDataType } from "~/types/types";

type Props = volunteeringDataType & { isInView?: boolean };

const VolunteerCard: React.FC<Props> = ({
  image,
  society,
  title,
  startTime,
  endTime,
  description,
  isInView,
}) => {
  const cardStateClass = isInView ? "scale-100 grayscale-0" : "scale-90 grayscale";

  return (
    <FadeIn
      className={`${cardStateClass} flex h-full w-64 min-w-[16rem] transform snap-x snap-center flex-col items-center justify-center border border-white/20 bg-white/5 p-8 grayscale transition-all duration-300 ease-in-out xs:w-72 md:h-fit md:w-full md:items-start md:justify-start md:hover:grayscale-0 md:active:grayscale-0`}
    >
      <div className="flex flex-col items-center md:flex-row md:space-x-8">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
            <div>
              <Image
                src={image}
                alt="society"
                width={250}
                height={250}
                className="mb-8 h-24 w-24 object-scale-down md:mb-0"
              />
            </div>
            <div>
              <h3 className="heading3">{title}</h3>
              <p className="subtitle font-light pt-2">{society}</p>
              <p className="subtitle font-light opacity-60">
                {startTime + " - " + endTime}
              </p>
            </div>
          </div>
          {description && (
            <p className="subtitle font-light hidden pt-2 md:block">
              {description}
            </p>
          )}
        </div>
      </div>
      {description && (
        <p className="subtitle font-light pt-2 md:hidden">{description}</p>
      )}
    </FadeIn>
  );
};
export default VolunteerCard;
