import Head from "next/head";
import Link from "next/link";
import SmallWithLogoLeft from "~/components/footer";
import WithSubnavigation from "~/components/navbar";
import SwitchUser from "~/components/switchUser";


export default function SettingUser() {

  return (
    <>
    <WithSubnavigation/>
    <SwitchUser/>
    <SmallWithLogoLeft/>
    </>
  );
}
