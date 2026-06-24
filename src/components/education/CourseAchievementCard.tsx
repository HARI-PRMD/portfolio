import FadeIn from "../animation/FadeIn";
import { type CourseAchievementCardDataType } from "~/types/types";

type Props = {
  data: CourseAchievementCardDataType;
};

const CourseAchievementCard: React.FC<Props> = ({ data }) => {
  const getGradeDescription = (grade?: number) => {
    if (!grade) return "";
    if (grade >= 85) {
      return "Received a High Distinction Grade";
    } else if (grade >= 75) {
      return "Received a Distinction Grade";
    } else {
      return "";
    }
  };

  return (
    <FadeIn
      staticOnMobile
      className="flex w-[min(18rem,calc(100vw-2rem))] snap-center flex-col border border-white/20 bg-white/5 p-8 md:w-full md:snap-none"
    >
      <h3 className="heading3">{data.course}</h3>
      <div className="py-4">
        {getGradeDescription(data.grade) !== "" && (
          <p className="subtitle font-light">
            {getGradeDescription(data.grade)}
          </p>
        )}
        <p className="subtitle font-light opacity-60">{data.year}</p>
      </div>
      <p className="subtitle font-light">{data.description}</p>
    </FadeIn>
  );
};

export default CourseAchievementCard;
