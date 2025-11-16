import Image from "next/image";
import FadeIn from "../animation/FadeIn";
import ScrollRightSubtitle from "../accessibility/ScrollRightSubtitle";
import {
  technologiesLangFrameworksData,
  technologiesToolsData,
} from "~/utils/data";

type TechnologyGridProps = {
  title: string;
  items: { name: string; url: string }[];
};

const TechnologyGrid = ({ title, items }: TechnologyGridProps) => (
  <div>
    <div className="pb-16 pt-8">
      <h2 className="heading2">{title}</h2>
      <ScrollRightSubtitle />
    </div>
    <div className="scroller grid h-full w-full grid-flow-col grid-rows-2 justify-stretch gap-12 overflow-x-auto overflow-y-hidden">
      {items.map((item, i) => (
        <FadeIn
          key={`${item.name}-${i}`}
          className="group flex h-full w-16 flex-col items-center justify-center md:w-24"
          y={16}
        >
          <Image
            alt={item.name}
            src={item.url}
            width={500}
            height={500}
            className="aspect-square h-fit w-full max-w-[64px] object-scale-down grayscale md:min-w-[96px]"
          />
          <p className="subtitle pt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-60 group-active:opacity-60">
            {item.name}
          </p>
        </FadeIn>
      ))}
    </div>
  </div>
);

const AllTechnologies = () => {
  return (
    <div>
      <TechnologyGrid
        title="Languages and Frameworks"
        items={technologiesLangFrameworksData}
      />
      <TechnologyGrid title="Tools" items={technologiesToolsData} />
    </div>
  );
};
export default AllTechnologies;
