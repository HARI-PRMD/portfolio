type Props = {
  message: string;
  onClick: CallableFunction;
};

const PatternHoverMessage: React.FC<Props> = ({ message, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div
        className="hero-pattern relative aspect-video h-fit w-full cursor-pointer bg-black bg-cover transition-all duration-500 ease-in-out hover:scale-110"
        onClick={handleClick}
      >
        <div className="absolute flex h-full w-full flex-col items-center justify-center bg-gradient-radial from-black/60 to-black/40 opacity-0 transition-opacity duration-500 hover:opacity-100">
          <p className="subtitle rounded-full bg-white px-6 py-4 text-black">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PatternHoverMessage;
