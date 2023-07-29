import { type CourseAchievementCardDataType } from "~/types/types";

type Props = {
  data: CourseAchievementCardDataType;
  isInView: boolean;
};

const CourseAchievementCard: React.FC<Props> = ({ data, isInView }) => {
  const getGradeDescription = (grade: number) => {
    if (grade >= 85) {
      return "Received a High Distinction Grade";
    } else if (grade >= 75) {
      return "Received a Distinction Grade";
    } else {
      return "";
    }
  };
  return (
    <div
      className={`${
        isInView ? "scale-100" : "scale-90"
      } fc w-64 transform snap-x snap-center border border-white/20 bg-white/5 p-8 transition-all duration-300 ease-in-out xs:w-72 md:w-full md:snap-none`}
      data-aos="fade-up"
    >
      <p className="p-fixed">{data.course}</p>
      {getGradeDescription(data.grade) !== "" && (
        <p className="subtitle opacity-60">{getGradeDescription(data.grade)}</p>
      )}
      <p className="subtitle opacity-60">{data.year}</p>
      <p className="subtitle">{data.description}</p>
    </div>
  );
};

export default CourseAchievementCard;
