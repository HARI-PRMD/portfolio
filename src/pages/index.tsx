import Image from "next/image";
import SEO from "~/components/SEO";
import AllProjects from "~/components/projects/AllProjects";
import AllVolunteering from "~/components/volunteering/AllVolunteering";
import Layout from "~/layouts/Layout";

export default function Home() {
  return (
    <>
      <SEO title="Portfolio" description="Landing Page" />
      <Layout>
        <section id="main" className="fr min-h-screen w-full space-x-8 p-32">
          <div className="fc h-full w-3/5 justify-center">
            <div className="space-y-12">
              <h1>Hari Pramod</h1>
              <p className="p-main">
                I am a software engineering student excited about the
                opportunity to apply my skills and knowledge to real-world
                software product design and development.
              </p>
              <button className="p-main w-fit border-2 px-16 py-4">
                See Resume
              </button>
            </div>
          </div>
          <Image
            src="https://media.discordapp.net/attachments/1092987636035092662/1125071586228187166/image0.jpg"
            width={919}
            height={1225}
            className="h-full w-2/5 object-cover brightness-110 contrast-125 grayscale"
            alt="portrait"
          />
        </section>
        <section
          id="projects"
          className="h-screen w-full space-y-8 px-32 pb-32 pt-16"
        >
          <h2>My Projects</h2>
          <div className="h-full">
            <AllProjects />
          </div>
          <div className="absolute h-16 w-5/6 -translate-y-24 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </section>
        <section
          id="volunteering"
          className="h-fit w-full space-y-8 px-32 pb-32 pt-16"
        >
          <h2>Volunteering</h2>
          <div className="h-full">
            <AllVolunteering />
          </div>
        </section>
      </Layout>
    </>
  );
}
