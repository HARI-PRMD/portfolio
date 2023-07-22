import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ScrollRightSubtitle = () => {
  return (
    <p className="fr subtitle space-x-2 whitespace-nowrap pt-2 opacity-60 md:hidden">
      <span>Scroll to see more</span>
      <span>
        <ArrowRightIcon className="mt-0.5 h-4 w-4 text-white" />
      </span>
    </p>
  );
};

export default ScrollRightSubtitle;
