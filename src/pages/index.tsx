import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.css";
import WithSubnavigation from "~/components/navbar";
import SplitScreen from "~/components/presentation";
import SmallWithLogoLeft from "~/components/footer";


export default function Home() {

  return (
    <>
    <WithSubnavigation/>
    <Head>
      <title>Technocampus G3 | Acceuil</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <SplitScreen/>
      <SmallWithLogoLeft/>
    </>
  );
}
