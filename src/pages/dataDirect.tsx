import Head from "next/head";
import Link from "next/link";
import SmallWithLogoLeft from "~/components/footer";
import WithSubnavigation from "~/components/navbar";
import TabDirect from "~/components/tableauDirect";


export default function DataDirect() {

  return (
    <>
    <WithSubnavigation/>
    <TabDirect/>
    <SmallWithLogoLeft/>
    </>
  );
}