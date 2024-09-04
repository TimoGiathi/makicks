import BubbleContainer from "./BubbleContainer";
import Navbar from "./Navbar";
function Header() {
  return (
    <header className="header">
      <img src="src/assets/logo.JPG" alt="Logo" className="logo" />
      <Navbar />
      <BubbleContainer />
    </header>
  );
}

export default Header;
