import { Link } from "react-router-dom";
function ShopButton({ children }) {
  return (
    <button type="button" className={`pointer nextBtn`}>
      <Link to="/shop" target="_blank">
        {children}
      </Link>
    </button>
  );
}

export default ShopButton;
