import PropTypes from "prop-types";
import FemaleShoes from "./FemaleShoes";

WomenSection.propTypes = {
  children: PropTypes.object.isRequired,
};
function WomenSection({ children }) {
  return (
    <main>
      <h2 className="sectionTitle">{children}</h2>
      <FemaleShoes />
    </main>
  );
}

export default WomenSection;
