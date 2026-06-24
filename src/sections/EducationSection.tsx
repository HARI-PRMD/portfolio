import Image from "next/image";
import FadeIn from "~/components/animation/FadeIn";
import ScrollRightSubtitle from "~/components/accessibility/ScrollRightSubtitle";
import SectionHeading from "~/components/common/SectionHeading";
import AllCourseAchievements from "~/components/education/AllCourseAchievements";
import AllCompetitions from "~/components/education/AllCompetitions";

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
              alt="UNSW crest"
              src="/images/logos/unsw.png"
              width={96}
              height={96}
              className="transform object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
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
            <h3 className="heading2">Course Achievements</h3>
            <ScrollRightSubtitle />
          </div>
          <AllCourseAchievements />
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="heading2">Competitions</h3>
            <ScrollRightSubtitle />
          </div>
          <AllCompetitions />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
