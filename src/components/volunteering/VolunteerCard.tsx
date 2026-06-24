import Image from "next/image";
import FadeIn from "../animation/FadeIn";
import { type VolunteeringDataType } from "~/types/types";

type Props = VolunteeringDataType;

const VolunteerCard: React.FC<Props> = ({
  image,
  society,
  title,
  startTime,
  endTime,
  description,
}) => {
  return (
    <FadeIn
      staticOnMobile
      className="flex h-full w-[min(18rem,calc(100vw-2rem))] min-w-[min(18rem,calc(100vw-2rem))] snap-center flex-col items-center justify-center border border-white/20 bg-white/5 p-8 transition-all duration-300 ease-in-out md:h-fit md:w-full md:items-start md:justify-start md:grayscale md:focus-within:grayscale-0 md:hover:grayscale-0"
    >
      <div className="flex flex-col items-center md:flex-row md:space-x-8">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
            <div>
              <Image
                src={image}
                alt={`${society} logo`}
                width={96}
                height={96}
                className="mb-8 object-scale-down md:mb-0"
              />
            </div>
            <div>
              <h3 className="heading3">{title}</h3>
              <p className="subtitle pt-2 font-light">{society}</p>
              <p className="subtitle font-light opacity-60">
                {startTime + " - " + endTime}
              </p>
            </div>
          </div>
          {description && (
            <p className="subtitle hidden pt-2 font-light md:block">
              {description}
            </p>
          )}
        </div>
      </div>
      {description && (
        <p className="subtitle pt-2 font-light md:hidden">{description}</p>
      )}
    </FadeIn>
  );
};
export default VolunteerCard;
