import Image from "next/image";
import {
  technologiesLangFrameworksData,
  technologiesToolsData,
} from "~/utils/data";
import ScrollRightSubtitle from "../accessibility/ScrollRightSubtitle";

const AllTechnologies = () => {
  technologiesLangFrameworksData;
  technologiesToolsData;

  return (
    <div>
      <p className="p-main">Languages and Frameworks</p>
      <ScrollRightSubtitle />
      <div className="scroller grid h-full w-full grid-flow-col grid-rows-2 justify-stretch gap-8 overflow-x-auto pb-4 pt-8">
        {technologiesLangFrameworksData.map((item, i) => (
          <div
            key={i}
            className="fc group h-full w-16 items-center justify-center md:w-24"
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
          </div>
        ))}
      </div>

      <p className="p-main pt-4">Tools</p>
      <div className="scroller grid h-full w-full grid-flow-col grid-rows-2 justify-stretch gap-8 overflow-x-auto pb-4 pt-8">
        {technologiesToolsData.map((item, i) => (
          <div
            key={i}
            className="fc group h-full w-16 items-center justify-center md:w-24"
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
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllTechnologies;
