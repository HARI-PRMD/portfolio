import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { useIsMobile } from "~/hooks/useIsMobile";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  // When true, skip the vertical move-up on mobile so cards in a horizontal
  // scroller just fade in (the upward shift feels jarring mid horizontal-scroll).
  staticOnMobile?: boolean;
} & HTMLMotionProps<"div">;

const FadeIn = ({
  children,
  delay = 0,
  y = 32,
  staticOnMobile = false,
  ...rest
}: FadeInProps) => {
  const isMobile = useIsMobile();
  const offsetY = staticOnMobile && isMobile ? 0 : y;

  return (
    <motion.div
      // Framer reads `initial` only at mount. `isMobile` resolves after mount
      // (SSR-safe), so remount when it flips to pick up the corrected offset —
      // otherwise the resting y stays at 32 and the move-up still plays.
      key={staticOnMobile ? `fade-${isMobile ? "static" : "shift"}` : undefined}
      initial={{ opacity: 0, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
