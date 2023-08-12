import SEO from "~/components/SEO";
import ScrollRightSubtitle from "~/components/accessibility/ScrollRightSubtitle";
import AllProjectsV2 from "~/components/projects/AllProjectsV2";
import AllTechnologies from "~/components/technologies/AllTechnologies";
import AllVolunteering from "~/components/volunteering/AllVolunteering";
import Layout from "~/layouts/Layout";
import Image from "next/image";
import AllCourseAchievements from "~/components/Education/AllCourseAchievements";
import AllCompetitions from "~/components/Education/AllCompetitions";

export default function Home() {
  return (
    <>
      <SEO title="Portfolio" description="Landing Page" />
      <Layout>
        <section
          id="main"
          className="mt-8 flex h-screen w-full flex-col-reverse p-8 md:flex-row md:space-x-8 md:px-32 md:py-16"
        >
          <div className="bg-rd flex h-full flex-col items-start justify-start pt-8 md:w-3/5 md:justify-center">
            <div
              className="flex flex-col space-y-4 md:absolute md:max-w-2xl md:space-y-12 md:bg-black md:p-8"
              data-aos="fade-up"
            >
              <h1 className="title">Hari Pramod</h1>
              <p className="p-fixed opacity-60">
                I am a software engineering student excited about the
                opportunity to apply my skills and knowledge to real-world
                software product design and development.
              </p>
              <button className="p-main w-full border border-white/10 bg-white/5 px-4 py-2 text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10 md:w-fit md:px-16 md:py-4">
                See Resume
              </button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-end md:w-4/5 md:items-center md:justify-center">
            <div className="hero-pattern h-64 w-full bg-fixed object-cover md:h-4/5" />
          </div>
        </section>
        <section
          id="education"
          className="min-h-fit w-full space-y-8 px-4 pb-16 pt-32 md:px-32"
        >
          <div>
            <h2 className="heading1">Education</h2>
            <p className="pt-2 opacity-60 md:pt-4">
              Where I&apos;ve Studied, and my achievements there.
            </p>
          </div>
          <div className="space-y-16">
            <div data-aos="fade-up">
              <div className="group flex flex-col items-center border border-white/20 bg-white/5 p-8 md:flex-row md:space-x-8">
                <Image
                  alt="unsw"
                  src="https://media.discordapp.net/attachments/1092987636035092662/1134773322610130984/university-of-new-south-wales-logo-png-transparent-background1.png"
                  width={500}
                  height={500}
                  className="h-24 w-24 transform object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
                <div className="pt-4 md:pt-0">
                  <p className="p-main">
                    Bachelor of Engineering (Honours) (Software)
                  </p>
                  <p className="opacity-60">University of New South Wales</p>
                  <p className="subtitle opacity-60">2022 - 2026</p>
                </div>
              </div>
            </div>
            <div>
              <div className="pb-8">
                <p className="p-main">Course Achievements</p>
                <ScrollRightSubtitle />
              </div>
              <AllCourseAchievements />
            </div>
            <div>
              <div className="pb-8">
                <p className="p-main">Competitions</p>
                <ScrollRightSubtitle />
              </div>
              <AllCompetitions />
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="min-h-fit w-full space-y-8 px-4 pb-16 pt-32 md:px-32"
        >
          <div>
            <h2 className="heading1">My Projects</h2>
            <p className="pt-2 opacity-60 md:pt-4">
              Projects I have lead or created myself.
            </p>
            <ScrollRightSubtitle />
          </div>
          <div className="-z-30 h-full w-full">
            <AllProjectsV2 />
          </div>
        </section>
        <section
          id="technologies"
          className="min-h-fit w-full space-y-8 px-4 pt-32 md:px-32 md:pb-16"
        >
          <div>
            <h2 className="heading1">Technologies</h2>
            <p className="pt-2 opacity-60 md:pt-4">
              Languages, Frameworks and tools I have worked with.
            </p>
          </div>
          <div className="h-full w-full">
            <AllTechnologies />
          </div>
        </section>
        <section
          id="volunteering"
          className="min-h-fit w-full space-y-8 px-4 pt-32 md:px-32 md:pb-16"
        >
          <div>
            <h2 className="heading1">Volunteering</h2>
            <p className="pt-2 opacity-60 md:pt-4">
              Clubs and Society positions I have been a part of during my
              degree.
            </p>
            <ScrollRightSubtitle />
          </div>
          <div className="h-full">
            <AllVolunteering />
          </div>
        </section>
      </Layout>
    </>
  );
}
