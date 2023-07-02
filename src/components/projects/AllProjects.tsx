import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const AllProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref2023 = useRef<HTMLDivElement>(null);
  const ref2022 = useRef<HTMLDivElement>(null);
  const ref2021 = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollPosition = container.scrollTop + container.offsetHeight / 2;
        const yearRefs = [ref2023, ref2022, ref2021];
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
    const yearRefs = [ref2023, ref2022, ref2021];
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
    <div className="fr z-0 h-full">
      <div className="fc space-y-8 py-16 pl-16">
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
        <button
          className={`p-main ${
            activeYear === 2 ? "text-white" : "text-white/40"
          }`}
          onClick={() => scrollToYear(2)}
        >
          2021
        </button>
      </div>
      <div className="h-full w-2 translate-x-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      <div className="absolute z-30 h-16 w-5/6 bg-gradient-to-b from-black to-transparent" />
      <div
        className="h-full space-y-8 overflow-auto pl-40 pr-8 pt-8"
        ref={containerRef}
      >
        <div ref={ref2023}></div>
        <ProjectCard
          title="MegaLAN Quests 2023"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
          porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
          felis vel libero venenatis, vel pellentesque leo hendrerit.
          Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />
        <ProjectCard
          title="MegaLAN Quests"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />
        <ProjectCard
          title="MegaLAN Quests"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />
        <ProjectCard
          title="MegaLAN Quests"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />

        <div ref={ref2022}></div>
        <ProjectCard
          title="MegaLAN Quests 2022"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
          porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
          felis vel libero venenatis, vel pellentesque leo hendrerit.
          Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />
        <ProjectCard
          title="MegaLAN Quests 2022"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
          porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
          felis vel libero venenatis, vel pellentesque leo hendrerit.
          Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />
        <ProjectCard
          title="MegaLAN Quests"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />

        <div ref={ref2021}></div>
        <ProjectCard
          title="MegaLAN Quests 2021"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
          porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
          felis vel libero venenatis, vel pellentesque leo hendrerit.
          Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />
        <ProjectCard
          title="MegaLAN Quests 2021"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
          porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
          felis vel libero venenatis, vel pellentesque leo hendrerit.
          Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />
        <ProjectCard
          title="MegaLAN Quests 2021"
          description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
          porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
          felis vel libero venenatis, vel pellentesque leo hendrerit.
          Donec auctor semper sem, eget auctor massa auctor eget."
          month="December"
          websiteLink="http://localhost:3000/"
          codeLink="http://localhost:3000/"
        />
        <div className="pb-8"></div>
      </div>
    </div>
  );
};
export default AllProjects;
