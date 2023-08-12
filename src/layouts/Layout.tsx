import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full flex-col justify-between bg-black text-white">
      <div>
        <Header />
        <div className="flex flex-col items-center justify-start">
          <div className="w-full md:container">{children}</div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
