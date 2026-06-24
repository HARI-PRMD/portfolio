type Props = {
  url: string;
  message: string;
  ariaLabel: string;
  onClick: () => void;
};

const ImageHoverMessage: React.FC<Props> = ({
  url,
  message,
  ariaLabel,
  onClick,
}) => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <button
        className="group relative aspect-video h-fit w-full cursor-pointer bg-cover bg-center transition duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        style={{ backgroundImage: `url(${url + "?width=960&height=540"})` }}
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
export default ImageHoverMessage;
