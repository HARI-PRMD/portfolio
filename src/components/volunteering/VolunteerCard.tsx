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
    <div className="h-fit w-full p-8 grayscale transition-all duration-300 hover:grayscale-0">
      <div className="fr items-center space-x-12">
        <Image
          src={image}
          alt="society"
          width={500}
          height={500}
          className="mt-8 h-12 w-12 object-scale-down md:h-24 md:w-24"
        />
        <div className="fc">
          <h3>{title}</h3>
          <p className="pt-1">{society}</p>
          <p className="subtitle pt-1">{startTime + " - " + endTime}</p>
          {description && <p className="hidden pt-6 md:block">{description}</p>}
        </div>
      </div>
      {description && <p className="subtitle pt-6 md:hidden">{description}</p>}
    </div>
  );
};
export default VolunteerCard;
