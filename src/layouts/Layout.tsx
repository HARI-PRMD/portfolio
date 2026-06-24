import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-black text-white">
      <a
        href="#main-content"
        className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-24 border border-white/30 bg-black px-4 py-3 text-sm uppercase tracking-wide text-white opacity-0 transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
      >
        Skip to content
      </a>
      <div className="flex-1">
        <Header />
        <main
          id="main-content"
          className="flex flex-col items-center justify-start"
        >
          <div className="w-full space-y-32 p-4 md:container">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
