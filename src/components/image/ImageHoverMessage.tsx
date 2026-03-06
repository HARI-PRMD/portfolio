type Props = {
  url: string;
  message: string;
  onClick: () => void;
};

const ImageHoverMessage: React.FC<Props> = ({ url, message, onClick }) => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <button
        className="relative aspect-video h-fit w-full cursor-pointer bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-110"
        style={{ backgroundImage: `url(${url + "?width=960&height=540"})` }}
        onClick={onClick}
        aria-label={message}
      >
        <div className="absolute flex h-full w-full flex-col items-center justify-center bg-gradient-radial from-black/60 to-black/40 opacity-0 transition-opacity duration-500 hover:opacity-100">
          <p className="subtitle rounded-full bg-white px-6 py-4 text-black">
            {message}
          </p>
        </div>
      </button>
    </div>
  );
};
export default ImageHoverMessage;
