import SEO from "~/components/SEO";
import ScrollRightSubtitle from "~/components/accessibility/ScrollRightSubtitle";
import AllTechnologies from "~/components/technologies/AllTechnologies";
import AllVolunteering from "~/components/volunteering/AllVolunteering";
import Layout from "~/layouts/Layout";
import Image from "next/image";
import AllCourseAchievements from "~/components/Education/AllCourseAchievements";
import AllCompetitions from "~/components/Education/AllCompetitions";
import AllProjects from "~/components/projects/AllProjects";

export default function Home() {
  return (
    <>
      <SEO title="Portfolio" description="Landing Page" />
      <Layout>
        <section
          id="main"
          className="mt-8 flex h-screen w-full flex-col-reverse md:flex-row md:space-x-8"
        >
          <div className="bg-rd flex h-full flex-col items-start justify-start pt-8 md:ml-24 md:w-3/5 md:justify-center">
            <div
              className="flex flex-col space-y-4 md:absolute md:max-w-2xl md:space-y-12 md:bg-black md:p-8"
              data-aos="fade-up"
            >
              <h1 className="title">Hari Pramod</h1>
              <p className="para1 opacity-60">
                I am a software engineering student excited about the
                opportunity to apply my skills and knowledge to real-world
                software product design and development.
              </p>
              <button
                disabled
                className="heading3 w-full cursor-not-allowed border border-white/10 bg-white/5 px-4 py-2 text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10 md:w-fit md:px-16 md:py-4"
              >
                See Resume
              </button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-end md:w-4/5 md:items-center md:justify-center">
            <div className="hero-pattern h-64 w-full bg-fixed object-cover md:h-3/5" />
          </div>
        </section>
        <section id="education" className="min-h-fit w-full space-y-8">
          <div>
            <h1 className="heading1">Education</h1>
            <p className="para1 pt-2 opacity-60 md:pt-4">
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
                  <h3 className="heading3">
                    Bachelor of Engineering (Honours) (Software)
                  </h3>
                  <p className="para1 opacity-60">
                    University of New South Wales
                  </p>
                  <p className="subtitle opacity-60">2022 - 2025</p>
                </div>
              </div>
            </div>
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
        <section id="projects" className="min-h-fit w-full space-y-8">
          <div>
            <h1 className="heading1">My Projects</h1>
            <p className="para1 pt-2 opacity-60 md:pt-4">
              Projects I have lead or created myself.
            </p>
            <ScrollRightSubtitle />
          </div>
          <AllProjects />
        </section>
        <section id="technologies" className="min-h-fit w-full">
          <div>
            <h1 className="heading1">Technologies</h1>
            <p className="para1 pt-2 opacity-60 md:pt-4">
              Languages, Frameworks and tools I have worked with.
            </p>
          </div>
          <div className="h-full w-full">
            <AllTechnologies />
          </div>
        </section>
        <section id="volunteering" className="min-h-fit w-full space-y-8">
          <div>
            <h1 className="heading1">Volunteering</h1>
            <p className="para1 pt-2 opacity-60 md:pt-4">
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
