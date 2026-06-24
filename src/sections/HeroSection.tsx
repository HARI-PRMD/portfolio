import FadeIn from "~/components/animation/FadeIn";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex min-h-svh w-full flex-col justify-center gap-8 pt-24 md:flex-row md:items-center md:gap-8 md:pt-28"
    >
      <div className="flex min-w-0 flex-col items-start justify-center md:w-3/5">
        <FadeIn className="flex max-w-2xl flex-col space-y-4 md:space-y-12">
          <h1 className="title">Hari Pramod</h1>
          <p className="para1 opacity-60">
            Forward Deployed Engineer at Lyra, building and shipping software
            products in production environments. UNSW Software Engineering
            graduate (Honours), 2025.
          </p>
          <a
            href="#projects"
            className="heading3 w-full border border-white/30 bg-white px-4 py-2 text-center text-black transition-colors duration-300 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:w-fit md:px-16 md:py-4"
          >
            View Projects
          </a>
        </FadeIn>
      </div>
      <div className="flex w-full min-w-0 flex-col justify-end md:flex-1 md:items-center md:justify-center">
        <div className="hero-pattern h-52 w-full object-cover sm:h-64 md:h-[60vh]" />
      </div>
    </section>
  );
};

export default HeroSection;
