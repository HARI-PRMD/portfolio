import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "~/utils/data";

const AllProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref2023 = useRef<HTMLDivElement>(null);
  const ref2022 = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollPosition = container.scrollTop + container.offsetHeight / 2;
        const yearRefs = [ref2023, ref2022];
        const activeRef = yearRefs.find(
          (ref) => ref.current && ref.current.offsetTop >= scrollPosition
        );
        if (activeRef) {
          const activeIndex = yearRefs.indexOf(activeRef);
          setActiveYear(activeIndex);
        }
      }
    };

    containerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToYear = (index: number) => {
    const yearRefs = [ref2023, ref2022];
    const targetRef = yearRefs[index]?.current;
    if (targetRef && containerRef.current) {
      const scrollTop =
        targetRef.offsetTop - containerRef.current.offsetTop - 40;
      containerRef.current?.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="fc md:fr z-0 h-full w-full">
      <div className="fr md:fc space-x-16 py-8 pl-16 md:space-x-0 md:space-y-8 md:py-16">
        <button
          className={`p-main ${
            activeYear === 0 ? "text-white" : "text-white/40"
          }`}
          onClick={() => scrollToYear(0)}
        >
          2023
        </button>
        <button
          className={`p-main ${
            activeYear === 1 ? "text-white" : "text-white/40"
          }`}
          onClick={() => scrollToYear(1)}
        >
          2022
        </button>
      </div>
      <div className="h-2 w-full bg-gradient-to-r from-transparent via-white to-transparent md:h-full md:w-2 md:translate-x-24 md:bg-gradient-to-b"></div>
      <div className="z-30 h-16 w-full bg-gradient-to-b from-black to-transparent md:absolute md:w-5/6" />
      <div
        className="h-full space-y-8 overflow-auto pl-8 pr-8 pt-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white scrollbar-thumb-rounded-xl md:pl-40"
        ref={containerRef}
      >
        <div ref={ref2023}></div>
        {projectsData[2023]?.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            month={p.month}
            year={2023}
            websiteLink={p.websiteLink}
            codeLink={p.codeLink}
            image={p.image}
          />
        ))}
        <div ref={ref2022}></div>
        {projectsData[2022]?.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            month={p.month}
            year={2022}
            websiteLink={p.websiteLink}
            codeLink={p.codeLink}
            image={p.image}
          />
        ))}
        <div className="pb-8"></div>
      </div>
    </div>
  );
};
export default AllProjects;
