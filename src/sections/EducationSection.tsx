import Image from "next/image";
import FadeIn from "~/components/animation/FadeIn";
import ScrollRightSubtitle from "~/components/accessibility/ScrollRightSubtitle";
import SectionHeading from "~/components/common/SectionHeading";
import AllCourseAchievements from "~/components/Education/AllCourseAchievements";
import AllCompetitions from "~/components/Education/AllCompetitions";

const EducationSection = () => {
  return (
    <section id="education" className="min-h-fit w-full space-y-8">
      <SectionHeading
        title="Education"
        description="Where I've Studied, and my achievements there."
      />
      <div className="space-y-16">
        <FadeIn>
          <div className="group flex flex-col items-center border border-white/20 bg-white/5 p-8 md:flex-row md:space-x-8">
            <Image
              alt="unsw"
              src="https://i.imgur.com/9usq5EW.png"
              width={500}
              height={500}
              className="h-24 w-24 transform object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="pt-4 md:pt-0">
              <h3 className="heading3">
                Bachelor of Engineering (Honours) (Software)
              </h3>
              <p className="para1 opacity-60">University of New South Wales</p>
              <p className="subtitle opacity-60">2022 - 2025</p>
            </div>
          </div>
        </FadeIn>
        <div className="space-y-8">
          <div>
            <h2 className="heading2">Course Achievements</h2>
            <ScrollRightSubtitle />
          </div>
          <AllCourseAchievements />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="heading2">Competitions</h2>
            <ScrollRightSubtitle />
          </div>
          <AllCompetitions />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
