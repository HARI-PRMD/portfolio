import SEO from "~/components/SEO";
import AllProjectsV2 from "~/components/projects/AllProjectsV2";
import AllVolunteering from "~/components/volunteering/AllVolunteering";
import Layout from "~/layouts/Layout";

export default function Home() {
  return (
    <>
      <SEO title="Portfolio" description="Landing Page" />
      <Layout>
        <section
          id="main"
          className="md:fr flex h-screen w-full flex-col-reverse p-8 md:space-x-8 md:p-32"
        >
          <div className="fc bg-rd h-full items-start justify-start pt-8 md:w-3/5 md:justify-center">
            <div className="fc space-y-4 md:space-y-12">
              <h1 className="h3 md:h1">Hari Pramod</h1>
              <p className="p md:p-main ">
                I am a software engineering student excited about the
                opportunity to apply my skills and knowledge to real-world
                software product design and development.
              </p>
              <button className="subtitle md:p-main w-full border-2 px-4 py-2 transition-colors duration-300 hover:bg-white hover:text-black md:w-fit md:px-16 md:py-4">
                See Resume
              </button>
            </div>
          </div>
          <div className="fc h-full justify-end md:w-2/5 md:items-center md:justify-center">
            <div className="hero-pattern h-64 w-full object-cover md:h-4/5" />
          </div>
        </section>
        <section
          id="projects"
          className="min-h-fit w-full space-y-8 px-4 pt-16 md:px-32 md:pb-32"
        >
          <h2 className="h3 md:h2 pb-8">My Projects</h2>
          <div className="h-full w-full">
            <AllProjectsV2 />
          </div>
        </section>
        <section
          id="volunteering"
          className="h-fit w-full space-y-8 px-4 pt-32 md:px-32 md:pb-32"
        >
          <h2 className="h3 md:h2">Volunteering</h2>
          <div className="h-full">
            <AllVolunteering />
          </div>
        </section>
      </Layout>
    </>
  );
}
