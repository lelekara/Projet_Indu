import SmallWithLogoLeft from "~/components/footer";
import WithSubnavigation from "~/components/navbar";
import TabHistorique from "~/components/tableauHistorique";



export default function Setting() {

  return (
    <>
    <WithSubnavigation/>
    <TabHistorique/>
    <SmallWithLogoLeft/>
    </>
  );
}
