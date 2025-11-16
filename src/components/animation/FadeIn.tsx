import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
} & HTMLAttributes<HTMLDivElement>;

const FadeIn = ({
  children,
  className,
  delay = 0,
  y = 32,
  ...rest
}: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
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
