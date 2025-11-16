const Footer = () => {
  // TODO: Implement hero wave pattern at bottom left of website
  // <div className="hero-pattern absolute z-40"></div>
  return (
    <div id="footer" className="h-fit w-full p-8 text-2xl">
      <p className="opacity-60">
        Designed and Developed by{" "}
        <a
          href="https://github.com/HARI-PRMD"
          target="_blank"
          rel="noreferrer"
          className="font-semibold underline-offset-4 hover:underline"
        >
          @HARI-PRMD (Me!)
        </a>
      </p>
    </div>
  );
};
export default Footer;
