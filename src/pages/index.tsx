import SEO from "~/components/SEO";
import ScrollRightSubtitle from "~/components/accessibility/ScrollRightSubtitle";
import AllProjectsV2 from "~/components/projects/AllProjectsV2";
import AllTechnologies from "~/components/technologies/AllTechnologies";
import AllVolunteering from "~/components/volunteering/AllVolunteering";
import Layout from "~/layouts/Layout";

export default function Home() {
  return (
    <>
      <SEO title="Portfolio" description="Landing Page" />
      <Layout>
        <section
          id="main"
          className="md:fr mt-8 flex h-screen w-full flex-col-reverse p-8 md:space-x-8 md:px-32 md:py-16"
        >
          <div className="fc bg-rd h-full items-start justify-start pt-8 md:w-3/5 md:justify-center">
            <div
              className="fc space-y-4 md:absolute md:max-w-2xl md:space-y-12 md:bg-black md:p-8"
              data-aos="fade-up"
            >
              <h1>Hari Pramod</h1>
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
          <div className="fc h-full justify-end md:w-4/5 md:items-center md:justify-center">
            <div className="hero-pattern h-64 w-full bg-fixed object-cover md:h-4/5" />
          </div>
        </section>
        <section
          id="projects"
          className="min-h-fit w-full space-y-8 px-4 pb-16 pt-32 md:px-32"
        >
          <div>
            <h2>My Projects</h2>
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
            <h2>Technologies</h2>
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
            <h2>Volunteering</h2>
            <p className="pt-2 opacity-60 md:pt-4">
              Clubs and Society positions I have been a part of during my
              degree.
            </p>
          </div>
          <div className="h-full">
            <AllVolunteering />
          </div>
        </section>
      </Layout>
    </>
  );
}
