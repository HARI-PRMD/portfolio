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
    <div className="fr h-fit w-full space-x-12 p-8 grayscale transition-all duration-300 hover:grayscale-0">
      <Image
        src={image}
        alt="society"
        width={500}
        height={500}
        className="mt-8 h-24 w-24 object-scale-down"
      />
      <div className="fc">
        <h3>{title}</h3>
        <p className="pt-1">{society}</p>
        <p className="subtitle pt-1">{startTime + " - " + endTime}</p>
        {description && <p className="pt-6">{description}</p>}
      </div>
    </div>
  );
};
export default VolunteerCard;
