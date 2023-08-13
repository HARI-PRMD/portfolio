import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // scrolls user to end of previous section on click
  const handleHeadingClick = (sectionId: string) => {
    const section: HTMLElement | null = document.getElementById(sectionId);

    if (section) {
      const sections = document.querySelectorAll("section");
      let targetSection: HTMLElement | null = null;

      for (let i = 0; i < sections.length; i++) {
        if (sections[i]?.id === sectionId) {
          if (i > 0) {
            targetSection = sections[i - 1] as HTMLElement;
          }
          break;
        }
      }

      if (targetSection) {
        const scrollPosition =
          targetSection.getBoundingClientRect().bottom + window.scrollY + 1;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
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

  const links = [
    { href: "education", label: "Education" },
    { href: "projects", label: "Projects" },
    { href: "technologies", label: "Technologies" },
    { href: "volunteering", label: "Volunteering" },
  ];

  return (
    <div
      id="header"
      className="fixed z-50 flex h-fit w-full flex-col bg-black/80 px-4 py-2 backdrop-blur-sm md:px-16 md:py-4"
    >
      <div className="hidden flex-row justify-between md:flex">
        <h1
          className="heading1 cursor-pointer md:pl-8"
          onClick={() => handleHeadingClick("main")}
        >
          HP
        </h1>
        <div className="flex w-full max-w-4xl flex-row justify-evenly pt-4 uppercase">
          {links.map((link, index) => (
            <p
              key={index}
              onClick={() => handleHeadingClick(link.href)}
              className={`group cursor-pointer  text-xl transition duration-300 hover:opacity-100 ${
                activeSection === link.href ? "opacity-100" : "opacity-60"
              }`}
            >
              {link.label}
              <span className="mt-0.5 block h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"></span>
            </p>
          ))}
        </div>
        <button className="para2 hidden h-fit cursor-not-allowed bg-white px-8 py-4 uppercase text-black md:block">
          resume
        </button>
      </div>{" "}
      <div className="uppercase md:hidden ">
        <Menu>
          {({ open }) => (
            <>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
              </Transition.Child>
              <div className="flex flex-row justify-between focus-visible:outline-none">
                <Menu.Item>
                  <h1
                    className="title z-40 cursor-pointer md:pl-8"
                    onClick={() => handleHeadingClick("main")}
                  >
                    HP
                  </h1>
                </Menu.Item>
                <Menu.Button className="focus-visible:outline-none">
                  <Bars3Icon
                    className={`h-12 w-12 text-white transition-transform duration-300 ${
                      open ? "-rotate-90" : ""
                    }`}
                  />
                </Menu.Button>
              </div>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="flex w-full flex-col text-white focus-visible:outline-none">
                  {links.map((link) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item key={link.href} as={Fragment}>
                      {({ active }) => (
                        <p
                          className={`${
                            activeSection === link.href || active
                              ? "opacity-100"
                              : "opacity-60"
                          } heading3 p-4 `}
                          onClick={() => handleHeadingClick(link.href)}
                        >
                          {link.label}
                        </p>
                      )}
                    </Menu.Item>
                  ))}
                  <Menu.Item disabled>
                    <button className="para1 h-fit w-full cursor-pointer bg-white/40 px-8 py-4 text-black">
                      resume
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};
export default Header;
