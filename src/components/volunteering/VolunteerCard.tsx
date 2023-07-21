import Image from "next/image";
import { type volunteeringDataType } from "~/types/types";

type Props = volunteeringDataType;

const VolunteerCard: React.FC<Props> = ({
  image,
  society,
  title,
  startTime,
  endTime,
  description,
}) => {
  return (
    <div className="fc h-full w-full min-w-[16rem] snap-x snap-center items-center justify-center border border-white/20 bg-white/5 p-8 grayscale transition-all duration-300 hover:grayscale-0 md:h-fit md:items-start md:justify-start">
      <div className="fc md:fr items-center md:space-x-8">
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
