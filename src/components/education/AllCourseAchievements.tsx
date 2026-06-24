import { CourseAchievementCardData } from "~/utils/data";
import CourseAchievementCard from "./CourseAchievementCard";

const AllCourseAchievements = () => {
  return (
    <div className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto overflow-y-hidden px-4 pb-4 md:grid-flow-row md:grid-cols-2 md:gap-12 md:px-0">
      {CourseAchievementCardData.map((data, index) => (
        <CourseAchievementCard key={`${data.course}-${index}`} data={data} />
      ))}
    </div>
  );
};
export default AllCourseAchievements;
