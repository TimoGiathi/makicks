import MaleShoes from "./MaleShoes";
import PropTypes from "prop-types";

MenSection.propTypes={
  children: PropTypes.object
};

function MenSection({ children }) {
  return (
    <main>
      <h2 className="sectionTitle">{children}</h2>
      <MaleShoes />
    </main>
  );
}

export default MenSection;
