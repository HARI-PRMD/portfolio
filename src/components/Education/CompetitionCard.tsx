import FadeIn from "../animation/FadeIn";
import { type CompetitionCardDataType } from "~/types/types";

type Props = {
  data: CompetitionCardDataType;
  isInView: boolean;
};

const CompetitionCard: React.FC<Props> = ({ data, isInView }) => {
  const cardStateClass = isInView ? "scale-100" : "scale-90";

  return (
    <FadeIn
      className={`${cardStateClass} flex w-64 transform snap-x snap-center flex-col border border-white/20 bg-white/5 p-8 transition-all duration-300 ease-in-out xs:w-72 md:w-full md:snap-none`}
    >
      <h3 className="heading3">{data.title}</h3>
      <div className="py-4">
        <p className="subtitle">{data.issuedBy}</p>
        <p className="subtitle opacity-60">{data.year}</p>
      </div>
      <p className="subtitle">{data.description}</p>
    </FadeIn>
  );
};
export default CompetitionCard;
