import "../src/styles/global.css";
import RootLayout from "../src/app/layout";
import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>TUKUN</title>
      </Head>
      <RootLayout />
    </>
  );
}
