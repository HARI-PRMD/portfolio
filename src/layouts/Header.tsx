import { Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // scrolls user to section on click
  const handleHeadingClick = (sectionId: string) => {
    const section: HTMLElement | null = document.getElementById(sectionId);
    // if (section) section.scrollIntoView({ behavior: "smooth" });
    if (section) {
      const scrollPosition =
        section.getBoundingClientRect().top + window.scrollY + 1;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  // highlights current section in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        const { id } = section;
        console.log(top, bottom, id);
        if (top <= 0 && bottom > 0) {
          setActiveSection(id);
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="header"
      className="fc fixed z-50 h-fit w-full bg-black/80 px-4 py-2 backdrop-blur-sm md:px-16 md:py-4"
    >
      <div className="fr justify-between">
        <h2
          className="h2 cursor-pointer md:pl-8"
          onClick={() => handleHeadingClick("main")}
        >
          HP
        </h2>
        <div className="md:fr hidden w-full max-w-4xl justify-evenly pt-4 uppercase">
          <p
            onClick={() => handleHeadingClick("projects")}
            className={`group cursor-pointer  text-xl transition duration-300 hover:opacity-100 ${
              activeSection === "education" ? "opacity-100" : "opacity-60"
            }`}
          >
            education
            <span className="mt-0.5 block h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"></span>
          </p>
          <p
            onClick={() => handleHeadingClick("projects")}
            className={`group cursor-pointer text-xl transition duration-300 hover:opacity-100 ${
              activeSection === "projects" ? "opacity-100" : "opacity-60"
            }`}
          >
            projects
            <span className="mt-0.5 block h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"></span>
          </p>
          <p
            onClick={() => handleHeadingClick("technologies")}
            className={`group cursor-pointer text-xl transition duration-300 hover:opacity-100 ${
              activeSection === "technologies" ? "opacity-100" : "opacity-60"
            }`}
          >
            Technologies
            <span className="mt-0.5 block h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"></span>
          </p>
          <p
            onClick={() => handleHeadingClick("volunteering")}
            className={`group cursor-pointer text-xl transition duration-300 hover:opacity-100 ${
              activeSection === "volunteering" ? "opacity-100" : "opacity-60"
            }`}
          >
            Volunteering
            <span className="mt-0.5 block h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"></span>
          </p>
        </div>
        <button className="p hidden h-fit bg-white px-8 py-4 uppercase text-black md:block">
          resume
        </button>
        <button className="md:hidden" onClick={() => setShowList(!showList)}>
          <Bars3Icon
            className={`h-12 w-12 text-white transition-transform duration-300 ${
              showList ? "-rotate-90" : ""
            }`}
          />
        </button>
      </div>
      <Transition
        show={showList}
        enter="transition duration-300 ease-in-out transform"
        enterFrom="opacity-0 translate-y-[-64px]"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-300 ease-in transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[-64px]"
      >
        <div className="fc w-full space-y-8 pb-2 pt-8 uppercase md:hidden">
          <p
            onClick={() => handleHeadingClick("education")}
            className="cursor-pointer"
          >
            education
          </p>
          <p
            onClick={() => handleHeadingClick("projects")}
            className="cursor-pointer"
          >
            projects
          </p>
          <p
            onClick={() => handleHeadingClick("technologies")}
            className="cursor-pointer"
          >
            technologies
          </p>
          <p
            onClick={() => handleHeadingClick("volunteering")}
            className="cursor-pointer"
          >
            volunteering
          </p>
          <button className="p h-fit w-full cursor-pointer bg-white px-8 py-4 text-black">
            resume
          </button>
        </div>
      </Transition>
    </div>
  );
};
export default Header;
