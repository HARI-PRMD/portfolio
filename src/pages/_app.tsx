import { type AppType } from "next/dist/shared/lib/utils";
import AOSWrapper from "~/components/animation/AOSWrapper";
import "~/styles/globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const PlayFair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-Playfair-Display",
});

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-Source-Sans-3",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AOSWrapper>
      <main className={`${PlayFair.variable} ${SourceSans.variable}`}>
        <Component {...pageProps} />
      </main>
    </AOSWrapper>
  );
};

export default MyApp;
