import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function BubbleContainer() {
  return (
    <div id="bubbleContainer">
      <p id="bubble" className="#">
        shit
      </p>
      <FontAwesomeIcon
        icon={faCartShopping}
        size="xl"
        id="cart"
        className="pointer"
    
      />
    </div>
  );
}

export default BubbleContainer;
