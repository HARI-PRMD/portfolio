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
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
