import PropTypes from "prop-types";
function PickedImage({ pick, children }) {
  PickedImage.propTypes = {
    pick: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
  };
  console.log(pick);
  return (
    <div className="flexShoes">
      <img src={pick.src} alt={pick.alt} className="pointer topShoes" />
      <p className="categories">{children}</p>
    </div>
  );
}

export default PickedImage;
