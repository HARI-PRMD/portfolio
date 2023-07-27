import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file

type Props = {
  children: React.ReactNode;
};

const AOSWrapper: React.FC<Props> = ({ children }) => {
  const [prevWindowWidth, setPrevWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      disable() {
        return window.innerWidth < 768 ? true : false;
      },
      once: false,
      duration: 500,
      easing: "ease-out",
    });
    const handleWindowResize = () => {
      // Check if the window width has crossed the media breakpoint of 768 pixels
      // and refresh
      if (
        !(
          prevWindowWidth === 0 ||
          (prevWindowWidth > 768 && window.innerWidth > 768) ||
          (prevWindowWidth < 768 && window.innerWidth < 768)
        )
      ) {
        window.location.reload();
      }
      setPrevWindowWidth(window.innerWidth);
    };

    // Listen for window resize events
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return <>{children}</>;
};

export default AOSWrapper;
