const Footer = () => {
  return (
    <div
      id="footer"
      className="h-fit w-full px-6 py-8 text-xs text-neutral-400 sm:px-8 sm:text-sm md:text-base"
    >
      <p className="text-center tracking-wide">
        Designed and Developed by{" "}
        <a
          href="https://github.com/HARI-PRMD"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          @HARI-PRMD (Me!)
        </a>
      </p>
    </div>
  );
};
export default Footer;
