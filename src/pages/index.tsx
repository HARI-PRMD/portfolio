import Image from "next/image";
import SEO from "~/components/SEO";
import Layout from "~/layouts/Layout";

export default function Home() {
  return (
    <>
      <SEO title="Portfolio" description="Landing Page" />
      <Layout>
        <section className="fr h-screen w-full space-x-8 p-32">
          <div className="fc h-full w-3/5 justify-center">
            <div className="space-y-8">
              <h1>Hari Pramod</h1>
              <p className="p-main">
                Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
                porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
                felis vel libero venenatis, vel pellentesque leo hendrerit.
                Donec auctor semper sem, eget auctor massa auctor eget.
              </p>
              <button className="p-main w-fit border px-16 py-4">
                See Resume
              </button>
            </div>
          </div>
          <Image
            src="/static/portrait.png"
            width={2000}
            height={2000}
            className="w-2/5 object-cover"
            alt="portrait"
          />
        </section>
        <section className="h-screen w-full px-32">
          <h1>My Projects</h1>
        </section>
      </Layout>
    </>
  );
}
