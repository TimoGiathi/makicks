import { Link } from "react-router-dom";
function ShopButton() {
  return (
    <button type="button" className="pointer nextBtn">
      <Link to="/shop" target="_blank">
        View Shoes
      </Link>
    </button>
  );
}

export default ShopButton;
