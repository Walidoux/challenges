import type { AppProps } from "next/app";

import "../styles/main.scss";
import "../styles/fonts.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
