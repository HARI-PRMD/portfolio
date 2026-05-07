type Props = {
  message: string;
  onClick: () => void;
};

const PatternHoverMessage: React.FC<Props> = ({ message, onClick }) => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <button
        className="hero-pattern relative aspect-video h-fit w-full cursor-pointer bg-black bg-cover transition-all duration-500 ease-in-out hover:scale-110"
        onClick={onClick}
        aria-label={message}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-radial from-black/60 to-black/40 opacity-0 transition-opacity duration-500 hover:opacity-100">
          <p className="subtitle rounded-full bg-white px-6 py-4 text-black">
            {message}
          </p>
        </div>
      </button>
    </div>
  );
};
export default PatternHoverMessage;
