import FadeIn from "../animation/FadeIn";
import {
  type CompetencyGradeCode,
  type CourseAchievementCardDataType,
  type CourseResultType,
} from "~/types/types";

type Props = {
  data: CourseAchievementCardDataType;
};

const competencyGradeDescriptions = {
  CM: "Received a Competent with Merit Grade",
  CO: "Received a Competent Grade",
  CN: "",
} satisfies Record<CompetencyGradeCode, string>;

const CourseAchievementCard: React.FC<Props> = ({ data }) => {
  const getResultDescription = (result?: CourseResultType) => {
    if (!result) return "";
    if (result.type === "competency") {
      return competencyGradeDescriptions[result.code];
    }

    if (result.mark >= 85) {
      return "Received a High Distinction Grade";
    } else if (result.mark >= 75) {
      return "Received a Distinction Grade";
    } else {
      return "";
    }
  };

  const resultDescription = getResultDescription(data.result);
  const yearLabel = data.term ? `${data.year} ${data.term}` : data.year;

  return (
    <FadeIn
      staticOnMobile
      className="flex w-[min(18rem,calc(100vw-2rem))] snap-center flex-col border border-white/20 bg-white/5 p-8 md:w-full md:snap-none"
    >
      <h3 className="heading3">{data.course}</h3>
      <div className="py-4">
        {resultDescription !== "" && (
          <p className="subtitle font-light">{resultDescription}</p>
        )}
        <p className="subtitle font-light opacity-60">{yearLabel}</p>
      </div>
      <p className="subtitle font-light">{data.description}</p>
    </FadeIn>
  );
};

export default CourseAchievementCard;
