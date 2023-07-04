type Props = {
  message: string;
  onClick: CallableFunction;
};

const PatternHoverMessage: React.FC<Props> = ({ message, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="hero-pattern relative aspect-video h-fit w-full cursor-pointer bg-cover"
        onClick={handleClick}
      >
        <div className="fc absolute h-full w-full items-center justify-center bg-gradient-radial from-black/60 to-black/40 opacity-0 hover:opacity-100">
          <p className="p-4">{message}</p>
        </div>
      </div>
    </div>
  );
};
export default PatternHoverMessage;
