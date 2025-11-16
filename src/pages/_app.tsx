import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";
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
    <main className={`${PlayFair.variable} ${SourceSans.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
};

export default MyApp;
