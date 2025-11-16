import Image from "next/image";
import Link from "next/link";
import FadeIn from "../animation/FadeIn";
import type { ExperienceItem } from "~/types/types";

type Props = ExperienceItem & { isInView: boolean };

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
    const [month, year] = value.split(" ");
    if (!year) {
      return MONTH_ABBREVIATIONS[month] ?? month;
    }
    const shortMonth = MONTH_ABBREVIATIONS[month] ?? month;
    return `${shortMonth} ${year}`;
  };
  return `${format(startDate)} – ${format(endDate)}`;
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
  isInView,
}: Props) => {
  const timeframe = formatRange(start, end);
  const cardState = isInView ? "scale-100 grayscale-0" : "scale-90 grayscale";

  return (
    <FadeIn
      className={`${cardState} group flex w-64 transform snap-x snap-center flex-col border border-white/20 bg-white/5 p-8 transition-all duration-300 ease-in-out xs:w-72 md:w-full md:snap-none md:hover:grayscale-0 md:active:grayscale-0`}
    >
      <div className="flex items-center gap-4 pb-4">
        {logo && (
          <Image
            src={logo}
            alt={logoAlt ?? `${company} logo`}
            width={56}
            height={56}
            className="h-14 w-14 object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0"
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
      <div className="py-4 space-y-2">
        {highlights.map((item, index) => (
          <p key={index} className="subtitle opacity-80">
            {item}
          </p>
        ))}
      </div>
      {callToAction && (
        <Link
          href={callToAction.href}
          target="_blank"
          rel="noreferrer"
          className="para2 w-fit border border-white/20 px-4 py-2 text-white transition-colors duration-300 hover:border-white/60"
        >
          {callToAction.label}
        </Link>
      )}
    </FadeIn>
  );
};

export default ExperienceCard;
