import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import { useWindowWidth } from "@react-hook/window-size";

type Props = {
  children: React.ReactNode;
};

const AOSWrapper: React.FC<Props> = ({ children }) => {
  //   eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const windowWidth: number = useWindowWidth() as number;
  const [prevWindowWidth, setPrevWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      disable() {
        return windowWidth < 768 ? true : false;
      },
      once: false,
      duration: 500,
      easing: "ease-out",
    });
    const handleWindowResize = () => {
      // Check if the window width has crossed the media breakpoint of 768 pixels
      if (
        !(
          prevWindowWidth === 0 ||
          (prevWindowWidth > 768 && windowWidth > 768) ||
          (prevWindowWidth < 768 && windowWidth < 768)
        )
      ) {
        window.location.reload();
      }
      setPrevWindowWidth(windowWidth);
    };

    // Listen for window resize events
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [prevWindowWidth, windowWidth]);
  return <>{children}</>;
};

export default AOSWrapper;
