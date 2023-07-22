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
        if (top <= 0 && bottom > 0) {
          setActiveSection(id);
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fc fixed z-50 h-fit w-full bg-black/80 px-4 py-2 backdrop-blur-sm md:px-16 md:py-4">
      <div className="fr justify-between">
        <h2
          className="h2 cursor-pointer md:pl-8"
          onClick={() => handleHeadingClick("main")}
        >
          HP
        </h2>
        <div className="md:fr hidden w-full max-w-4xl justify-evenly pt-4">
          <p
            onClick={() => handleHeadingClick("projects")}
            className={`group cursor-pointer transition duration-300 hover:opacity-100 ${
              activeSection === "projects" ? "opacity-100" : "opacity-60"
            }`}
          >
            PROJECTS
            <span className="mt-0.5 block h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"></span>
          </p>
          <p
            onClick={() => handleHeadingClick("volunteering")}
            className={`group cursor-pointer transition duration-300 hover:opacity-100 ${
              activeSection === "volunteering" ? "opacity-100" : "opacity-60"
            }`}
          >
            VOLUNTEERING
            <span className="mt-0.5 block h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"></span>
          </p>
          <p
            onClick={() => handleHeadingClick("contact")}
            className={`group cursor-pointer transition duration-300 hover:opacity-100 ${
              activeSection === "contact" ? "opacity-100" : "opacity-60"
            }`}
          >
            CONTACT
            <span className="mt-0.5 block h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"></span>
          </p>
        </div>
        <button className="p hidden h-fit bg-white px-8 py-4 text-black md:block">
          RESUME
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
        enterFrom="opacity-0 translate-y-[-20px]"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-200 ease-in transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[-20px]"
      >
        <div className="fc w-full space-y-8 pt-8 md:hidden">
          <p onClick={() => handleHeadingClick("projects")}>PROJECTS</p>
          <p onClick={() => handleHeadingClick("volunteering")}>VOLUNTEERING</p>
          <p>CONTACT</p>
          <button className="p h-fit w-full bg-white px-8 py-4 text-black">
            RESUME
          </button>
        </div>
      </Transition>
    </div>
  );
};
export default Header;
