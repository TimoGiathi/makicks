import Intro from "../Components/Intro";
import TopPicks from "../Components/TopPicks";
import AdComp from "../Components/AdComp";
import Footer from "../Components/Footer";
import ShopButton from "../Components/ShopButton";

function HomePage() {
  return (
    <div>
      <Intro />
      <TopPicks />
      <AdComp />
      <Footer />
      <ShopButton />
    </div>
  );
}

export default HomePage;
