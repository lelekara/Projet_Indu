import Head from "next/head";
import Link from "next/link";
import SocialProfileSimple from "~/components/Card";
import WithSubnavigation from "~/components/navbar";


export default function Profile() {

  return (
    <>
    <WithSubnavigation/>
    <SocialProfileSimple/>
    </>
  );
}
