import PropTypes from "prop-types";

ShoeDiv.propTypes={
  children: PropTypes.object
};
function ShoeDiv({ children }) {
  return (
    <div>
      <img src={children.src} alt="shoe #" className="shoes" />
      <p className="shoeName">{children.shoeName}</p>
      <p className="price">{children.shoePrice}</p>
      <button type="button" className="orderBtns">
        Add to cart
      </button>
    </div>
  );
}

export default ShoeDiv;
