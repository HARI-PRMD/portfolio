import Link from "next/link";
import FadeIn from "../animation/FadeIn";
import type { ExperienceItem } from "~/types/types";

type Props = ExperienceItem & { isInView: boolean };

const ExperienceCard = ({
  company,
  title,
  location,
  start,
  end,
  highlights,
  callToAction,
  isInView,
}: Props) => {
  const timeframe = `${start} – ${end}`;
  const cardState = isInView ? "scale-100" : "scale-90";

  return (
    <FadeIn
      className={`${cardState} flex w-64 transform snap-x snap-center flex-col border border-white/20 bg-white/5 p-8 transition-all duration-300 ease-in-out xs:w-72 md:w-full md:snap-none`}
    >
      <p className="subtitle uppercase tracking-wide opacity-60">{company}</p>
      <h3 className="heading3 pt-2">{title}</h3>
      <p className="subtitle opacity-60">
        {timeframe} · {location}
      </p>
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
