import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

ShoeDiv.propTypes = {
  children: PropTypes.object,
};
function ShoeDiv({ children }) {
  return (
    <div>
      <img src={children.src} alt="shoe #" className="shoes" />
      <p className="shoeName">{children.shoeName}</p>
      <p className="price">{children.shoePrice}</p>
      <button type="button" className="orderBtns">
        <FontAwesomeIcon icon={faCartArrowDown} /> Add to cart
      </button>
    </div>
  );
}

export default ShoeDiv;
