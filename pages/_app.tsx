import "../styles/globals.css";
import Modal from "react-modal";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

Modal.setAppElement("#__next");

export default MyApp;
