import FadeIn from "~/components/animation/FadeIn";

const HeroSection = () => {
  return (
    <section
      id="main"
      className="mt-8 flex h-screen w-full flex-col-reverse md:flex-row md:space-x-8"
    >
      <div className="bg-rd flex h-full flex-col items-start justify-start pt-8 md:ml-24 md:w-3/5 md:justify-center">
        <FadeIn className="flex flex-col space-y-4 md:absolute md:max-w-2xl md:space-y-12 md:bg-black md:p-8">
          <h1 className="title">Hari Pramod</h1>
          <p className="para1 opacity-60">
            I am a software engineering student excited about the opportunity to
            apply my skills and knowledge to real-world software product design
            and development.
          </p>
          <button
            disabled
            className="heading3 w-full cursor-not-allowed border border-white/10 bg-white/5 px-4 py-2 text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10 md:w-fit md:px-16 md:py-4"
          >
            See Resume
          </button>
        </FadeIn>
      </div>
      <div className="flex h-full flex-col justify-end md:w-4/5 md:items-center md:justify-center">
        <div className="hero-pattern h-64 w-full bg-fixed object-cover md:h-3/5" />
      </div>
    </section>
  );
};

export default HeroSection;
