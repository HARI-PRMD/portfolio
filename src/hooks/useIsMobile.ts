import { useEffect, useState } from "react";

// Matches Tailwind's `md` breakpoint (768px). Below it, the card sections
// switch from a static grid to a horizontal scroller.
const MOBILE_QUERY = "(max-width: 767px)";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isMobile;
};
