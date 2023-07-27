import { projectsDataV2 } from "~/utils/data";
import ProjectCardV2 from "./ProjectCardV2";
import { useState } from "react";
import AnimationWrapper from "../animation/AnimationWrapper";

const AllProjectsV2: React.FC = () => {
  const [cardInViewIndex, setCardInViewIndex] = useState<number>(0);
  // Background Image on Hover Code, Keeping it here because it may be useful later on
  /*
  const [showImage, setShowImage] = useState<boolean>(false);
  const handleCardHover = (index: number) => {
    setCardInViewIndex(index);
    setShowImage(true);
  };
  const handleCardHoverLeave = () => {
    setShowImage(false);
  };
  useEffect(() => {
    // checks if projects section is in view and displays background image
    const handleScroll = () => {
      // only handle initial automatic image showing on mobile screens
      if (window.innerWidth < 768) {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          const { top, bottom } = section.getBoundingClientRect();
          const { id } = section;
          if (top <= 0 && bottom > 0) {
            setShowImage(id === "projects");
          }
        });
      }
    };

    document.addEventListener("scroll", handleScroll);
  }, []);

  const getBackgroundImage = () => {
    if (projectsDataV2[cardInViewIndex]?.image) {
      return (
        <Image
          alt="Background"
          fill={true}
          src={projectsDataV2[cardInViewIndex]?.image as string}
          className="fixed inset-0 left-0 top-0 z-10 h-screen w-screen object-cover object-center opacity-60 grayscale"
        />
      );
    } else {
      return (
        <div className="hero-pattern inset-0 left-0 top-0 z-20 aspect-video h-full w-full -translate-x-0 bg-cover bg-fixed bg-center object-fill object-center opacity-60 grayscale" />
      );
    }
  };
  */
  return (
    <>
      {/* <Transition
        show={showImage}
        enter="transition-opacity transform duration-500 ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="fixed left-0 top-0 z-auto h-full w-screen"
        leave="transition-opacity duration-500 ease-out transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {getBackgroundImage()}
      </Transition> */}
      <div
        className="scroller grid h-full w-full snap-x snap-mandatory grid-flow-col gap-8 overflow-x-auto overflow-y-hidden px-24 pb-4 md:snap-none md:grid-flow-row md:grid-cols-3 md:px-0"
        onScroll={(e) => {
          if (window.innerWidth < 768) {
            const element = e.target as HTMLElement;
            const scrollLeft = element.scrollLeft;
            const cardWidth = element.scrollWidth / projectsDataV2.length;
            const snappedIndex = Math.round(scrollLeft / cardWidth);
            setCardInViewIndex(snappedIndex);
          }
        }}
      >
        {projectsDataV2?.map((p, i) => (
          <AnimationWrapper key={i} animation="fade-up">
            <ProjectCardV2
              key={i}
              title={p.title}
              description={p.description}
              month={p.month}
              year={p.year}
              websiteLink={p.websiteLink}
              codeLink={p.codeLink}
              image={p.image}
              isInView={cardInViewIndex === i}
              //   handleCardHover={() => handleCardHover(i)}
              //   handleCardHoverLeave={() => handleCardHoverLeave()}
            />
          </AnimationWrapper>
        ))}
      </div>
    </>
  );
};
export default AllProjectsV2;
