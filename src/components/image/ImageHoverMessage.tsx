type Props = {
  url: string;
  message: string;
  onClick: CallableFunction;
};

const ImageHoverMessage: React.FC<Props> = ({ url, message, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative aspect-video h-fit w-full cursor-pointer bg-cover"
        style={{ backgroundImage: `url(${url})` }}
        onClick={handleClick}
      >
        <div className="fc absolute h-full w-full items-center justify-center bg-gradient-radial from-black/60 to-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <p className="p-4">{message}</p>
        </div>
      </div>
    </div>
  );
};
export default ImageHoverMessage;
