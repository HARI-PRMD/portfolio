import SEO from "~/components/SEO";
import Layout from "~/layouts/Layout";

export default function Home() {
  return (
    <>
      <SEO title="Portfolio" description="Landing Page" />
      <Layout>
        <div>
          <h1>Hari Pramod</h1>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae porta
            urna. Sed faucibus felis id rhoncus finibus. Ut efficitur felis vel
            libero venenatis, vel pellentesque leo hendrerit. Donec auctor
            semper sem, eget auctor massa auctor eget.
          </p>
        </div>
      </Layout>
    </>
  );
}
