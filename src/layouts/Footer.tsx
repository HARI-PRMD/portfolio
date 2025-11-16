const Footer = () => {
  // TODO: Implement hero wave pattern at bottom left of website
  // <div className="hero-pattern absolute z-40"></div>
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
          rel="noreferrer"
          className="font-semibold text-white underline-offset-4 hover:underline"
        >
          @HARI-PRMD (Me!)
        </a>
      </p>
    </div>
  );
};
export default Footer;
