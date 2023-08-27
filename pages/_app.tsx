import type { AppProps } from "next/app";
import "../src/styles/global.css";
import RootLayout from "../src/app/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />;
    </RootLayout>
  );
}
