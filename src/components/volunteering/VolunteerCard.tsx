import Image from "next/image";
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
  return (
    <div
      className={`${
        isInView ? "scale-100 grayscale-0" : "scale-90 grayscale"
      } fc h-full w-64 min-w-[16rem] transform snap-x snap-center items-center justify-center border border-white/20 bg-white/5 p-8 grayscale transition-all duration-300 ease-in-out xs:w-72 md:h-fit md:w-full md:items-start md:justify-start md:hover:grayscale-0 md:active:grayscale-0`}
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center md:flex-row md:space-x-8">
        <Image
          src={image}
          alt="society"
          width={500}
          height={500}
          className="mb-8 h-24 w-24 object-scale-down md:mb-0"
        />
        <div className="fc w-full">
          <p className="p-fixed">{title}</p>
          <p className="subtitle pt-2">{society}</p>
          <p className="subtitle opacity-60">{startTime + " - " + endTime}</p>
          {description && (
            <p className="subtitle hidden pt-2 md:block">{description}</p>
          )}
        </div>
      </div>
      {description && <p className="subtitle pt-2 md:hidden">{description}</p>}
    </div>
  );
};
export default VolunteerCard;
