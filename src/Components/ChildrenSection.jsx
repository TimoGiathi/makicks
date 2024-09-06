import ChildrenShoes from "./ChildrenShoes";
import PropTypes from "prop-types";

ChildrenSection.propTypes={
  children: PropTypes.object
};

function ChildrenSection({ children }) {
  return (
    <main>
      <h2 className="sectionTitle">{children}</h2>
      <ChildrenShoes />
    </main>
  );
}

export default ChildrenSection;
