import Head from "next/head";
import Link from "next/link";
import SmallWithLogoLeft from "~/components/footer";
import WithSubnavigation from "~/components/navbar";
import SwitchSetting from "~/components/switchSeting";


export default function Setting() {

  return (
    <>
    <WithSubnavigation/>
    <SwitchSetting/>
    <SmallWithLogoLeft/>
    </>
  );
}
