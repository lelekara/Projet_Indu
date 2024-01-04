import SocialProfileSimple from "~/components/CardUser";
import SmallWithLogoLeft from "~/components/footer";
import WithSubnavigation from "~/components/navbar";


export default function Profile() {

  return (
    <>
    <WithSubnavigation/>
    <SocialProfileSimple/>
    <SmallWithLogoLeft/>
    </>
  );
}
