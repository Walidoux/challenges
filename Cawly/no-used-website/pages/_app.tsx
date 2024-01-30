import type { AppProps } from "next/app";

import "../styles/fonts.css";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
