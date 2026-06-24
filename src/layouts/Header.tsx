import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useRef, useState } from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const activeSectionRef = useRef<string | null>(null);

  // highlights current section in view
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const sections = document.querySelectorAll("section");
        let nextActiveSection: string | null = null;

        sections.forEach((section) => {
          const { top, bottom } = section.getBoundingClientRect();

          if (
            top <= window.innerHeight / 2 &&
            bottom >= window.innerHeight / 2
          ) {
            nextActiveSection = section.id;
          }
        });

        if (nextActiveSection !== activeSectionRef.current) {
          activeSectionRef.current = nextActiveSection;
          setActiveSection(nextActiveSection);
        }

        ticking = false;
      });
    };

    handleScroll();
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "experience", label: "Experience" },
    { href: "education", label: "Education" },
    { href: "projects", label: "Projects" },
    { href: "technologies", label: "Technologies" },
    { href: "volunteering", label: "Volunteering" },
  ];

  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 z-50 flex h-fit w-full flex-col bg-black/90 px-4 py-2 backdrop-blur-sm md:px-16 md:py-4"
    >
      <div className="hidden flex-row items-start justify-between md:flex">
        <a
          href="#main-content"
          aria-label="Back to top"
          className="heading1 shrink-0 md:pl-4"
        >
          HP
        </a>
        <nav
          aria-label="Primary"
          className="ml-8 flex flex-1 flex-row justify-end gap-6 pt-4 uppercase lg:gap-8"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              aria-current={activeSection === link.href ? "true" : undefined}
              className={`para1 group cursor-pointer transition duration-300 hover:opacity-100 ${
                activeSection === link.href ? "opacity-100" : "opacity-60"
              }`}
            >
              {link.label}
              <span className="mt-0.5 block h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 group-focus-visible:opacity-100"></span>
            </a>
          ))}
        </nav>
      </div>
      <div className="uppercase md:hidden">
        <Menu>
          {({ open }) => (
            <>
              <div className="flex flex-row justify-between focus-visible:outline-none">
                <a
                  href="#main-content"
                  aria-label="Back to top"
                  className="title z-40 md:pl-8"
                >
                  HP
                </a>
                <Menu.Button
                  aria-label={
                    open ? "Close navigation menu" : "Open navigation menu"
                  }
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <Bars3Icon
                    aria-hidden="true"
                    className={`h-12 w-12 text-white transition-transform duration-300 ${
                      open ? "-rotate-90" : ""
                    }`}
                  />
                </Menu.Button>
              </div>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Menu.Items className="mt-2 flex w-full flex-col border-t border-white/10 py-2 text-white focus-visible:outline-none">
                  {links.map((link) => (
                    <Menu.Item key={link.href} as={Fragment}>
                      {({ active }) => (
                        <a
                          href={`#${link.href}`}
                          aria-current={
                            activeSection === link.href ? "true" : undefined
                          }
                          className={`${
                            activeSection === link.href || active
                              ? "opacity-100"
                              : "opacity-60"
                          } heading3 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70`}
                        >
                          {link.label}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </header>
  );
};
export default Header;
