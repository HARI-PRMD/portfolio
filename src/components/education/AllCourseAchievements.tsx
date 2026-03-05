import { CourseAchievementCardData } from "~/utils/data";
import CourseAchievementCard from "./CourseAchievementCard";
import { useScrollSnap } from "~/hooks/useScrollSnap";

const AllCourseAchievements = () => {
  const { snappedIndex, handleScroll } = useScrollSnap(
    CourseAchievementCardData.length,
  );

  return (
    <div
      className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-2 overflow-x-auto overflow-y-hidden px-16 pb-4 md:grid-flow-row md:grid-cols-2 md:gap-12 md:px-0"
      onScroll={handleScroll}
    >
      {CourseAchievementCardData.map((data, index) => (
        <CourseAchievementCard
          key={data.course}
          data={data}
          isInView={snappedIndex === index}
        />
      ))}
    </div>
  );
};
export default AllCourseAchievements;
