import Head from "next/head";
import Link from "next/link";
import SmallWithLogoLeft from "~/components/footer";
import WithSubnavigation from "~/components/navbar";
import TabHistorique from "~/components/tableauHistorique";


export default function Historique() {

  return (
    <>
    <WithSubnavigation/>
    <TabHistorique/>
    <SmallWithLogoLeft/>
    </>
  );
}
