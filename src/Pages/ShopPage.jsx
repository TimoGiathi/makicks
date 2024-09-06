import Search from "../Components/Search";
import MenSection from "../Components/MenSection";
import WomenSection from "../Components/WomenSection";
import ChildrenSection from "../Components/ChildrenSection";
import ShopButton from "../Components/ShopButton";

function ShopPage() {
  return (
    <>
      <Search />
      <MenSection>MEN SHOES</MenSection>
      <WomenSection>WOMEN SHOES</WomenSection>
      <ChildrenSection>CHILDREN SHOES</ChildrenSection>
      <ShopButton>previous</ShopButton>
    </>
  );
}

export default ShopPage;
