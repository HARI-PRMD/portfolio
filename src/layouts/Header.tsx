const Header = () => {
  return (
    <div className="fr fixed h-fit w-full justify-between bg-black/80 px-16 py-4 backdrop-blur-sm">
      <h2 className="pl-8">HP</h2>
      <div className="fr w-full max-w-4xl justify-evenly pt-4">
        <p className="p2">PROJECTS</p>
        <p>VOLUNTEERING</p>
        <p>CONTACT</p>
      </div>
      <button className="p h-fit bg-white px-8 py-4 text-black transition-all">
        RESUME
      </button>
    </div>
  );
};
export default Header;
