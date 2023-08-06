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
    <div className="flex items-center justify-center overflow-hidden ">
      <div
        className="relative aspect-video h-fit w-full cursor-pointer bg-cover transition-all duration-500 ease-in-out hover:scale-110"
        // loading lower resolution because this takes a lot of time to load
        style={{ backgroundImage: `url(${url + "?width=960&height=540"})` }}
        onClick={handleClick}
      >
        <div className="fc absolute h-full w-full items-center justify-center bg-gradient-radial from-black/60 to-black/40 opacity-0 transition-opacity duration-500 hover:opacity-100">
          <p className="subtitle rounded-full bg-white px-6 py-4 text-black">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ImageHoverMessage;
