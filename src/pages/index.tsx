import SEO from "~/components/SEO";
import Layout from "~/layouts/Layout";
import EducationSection from "~/sections/EducationSection";
import ExperienceSection from "~/sections/ExperienceSection";
import HeroSection from "~/sections/HeroSection";
import ProjectsSection from "~/sections/ProjectsSection";
import TechnologiesSection from "~/sections/TechnologiesSection";
import VolunteeringSection from "~/sections/VolunteeringSection";

export default function Home() {
  return (
    <>
      <SEO title="Portfolio" description="Landing Page" />
      <Layout>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <TechnologiesSection />
        <VolunteeringSection />
      </Layout>
    </>
  );
}
