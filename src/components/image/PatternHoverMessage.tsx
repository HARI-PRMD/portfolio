type Props = {
  message: string;
  ariaLabel: string;
  onClick: () => void;
};

const PatternHoverMessage: React.FC<Props> = ({
  message,
  ariaLabel,
  onClick,
}) => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <button
        className="hero-pattern group relative aspect-video h-fit w-full cursor-pointer bg-black bg-cover transition duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-radial from-black/60 to-black/40 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          <p className="subtitle bg-white px-6 py-3 text-black">{message}</p>
        </div>
      </button>
    </div>
  );
};
export default PatternHoverMessage;
