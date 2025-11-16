import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

const SectionHeading = ({
  title,
  description,
  className,
  children,
}: SectionHeadingProps) => {
  return (
    <div className={className}>
      <h1 className="heading1">{title}</h1>
      {description && (
        <p className="para1 pt-2 opacity-60 md:pt-4">{description}</p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
