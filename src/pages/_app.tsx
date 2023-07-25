import { type AppType } from "next/dist/shared/lib/utils";
import AOSWrapper from "~/components/animation/AOSWrapper";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AOSWrapper>
      <Component {...pageProps} />
    </AOSWrapper>
  );
};

export default MyApp;
