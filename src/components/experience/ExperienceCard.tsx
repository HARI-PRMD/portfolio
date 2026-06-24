import Image from "next/image";
import Link from "next/link";
import FadeIn from "../animation/FadeIn";
import type { ExperienceItem } from "~/types/types";

type Props = ExperienceItem;

const MONTH_ABBREVIATIONS: Record<string, string> = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

const formatRange = (startDate: string, endDate: string) => {
  const format = (value: string) => {
    const [monthRaw, year] = value.split(" ");
    const month = monthRaw ?? value;
    const shortMonth = MONTH_ABBREVIATIONS[month] ?? month;
    if (!year) {
      return shortMonth;
    }
    return `${shortMonth} ${year}`;
  };
  return `${format(startDate)} - ${format(endDate)}`;
};

const ExperienceCard = ({
  company,
  title,
  location,
  start,
  end,
  highlights,
  logo,
  logoAlt,
  callToAction,
}: Props) => {
  const timeframe = formatRange(start, end);

  return (
    <FadeIn
      staticOnMobile
      className="group flex w-[min(18rem,calc(100vw-2rem))] snap-center flex-col border border-white/20 bg-white/5 p-8 transition-colors duration-300 ease-in-out md:w-full md:snap-none md:grayscale md:focus-within:grayscale-0 md:hover:grayscale-0"
    >
      <div className="flex items-center gap-4 pb-4">
        {logo && (
          <Image
            src={logo}
            alt={logoAlt ?? `${company} logo`}
            width={56}
            height={56}
            className="object-contain grayscale filter transition-all duration-300 group-hover:grayscale-0"
          />
        )}
        <div>
          <p className="subtitle uppercase tracking-wide opacity-60">
            {company}
          </p>
          <h3 className="heading3 pt-2">{title}</h3>
          <p className="subtitle opacity-60">
            {timeframe} · {location}
          </p>
        </div>
      </div>
      <div className="space-y-2 py-4">
        {highlights.map((item, index) => (
          <p key={index} className="subtitle font-light opacity-80">
            {item}
          </p>
        ))}
      </div>
      {callToAction && (
        <Link
          href={callToAction.href}
          target="_blank"
          rel="noopener noreferrer"
          className="para2 w-fit border border-white/20 px-4 py-2 text-white transition-colors duration-300 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          {callToAction.label}
        </Link>
      )}
    </FadeIn>
  );
};

export default ExperienceCard;
