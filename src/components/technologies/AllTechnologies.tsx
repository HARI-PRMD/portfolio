import Image from "next/image";
import {
  technologiesLangFrameworksData,
  technologiesToolsData,
} from "~/utils/data";
import ScrollRightSubtitle from "../accessibility/ScrollRightSubtitle";

const AllTechnologies = () => {
  return (
    <div>
      <div className="pb-16 pt-8">
        <h2 className="heading2">Languages and Frameworks</h2>
        <ScrollRightSubtitle />
      </div>
      <div className="scroller grid h-full w-full grid-flow-col grid-rows-2 justify-stretch gap-12 overflow-x-auto overflow-y-hidden">
        {technologiesLangFrameworksData.map((item, i) => (
          <div
            key={i}
            className="group flex h-full w-16 flex-col items-center justify-center md:w-24"
            data-aos="fade-up"
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

      <div className="pb-16 pt-8">
        <h2 className="heading2">Tools</h2>
        <ScrollRightSubtitle />
      </div>
      <div className="scroller grid h-full w-full grid-flow-col grid-rows-2 justify-stretch gap-12 overflow-x-auto overflow-y-hidden">
        {technologiesToolsData.map((item, i) => (
          <div
            key={i}
            className="group flex h-full w-16 flex-col items-center justify-center md:w-24"
            data-aos="fade-up"
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
