import { useState } from "react";

export const useScrollSnap = (itemCount: number) => {
  const [snappedIndex, setSnappedIndex] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const cardWidth = element.scrollWidth / itemCount;
    const index = Math.round(element.scrollLeft / cardWidth);
    setSnappedIndex(index);
  };

  return { snappedIndex, handleScroll };
};
