import { click } from "@testing-library/user-event/dist/click";
import "../index.css";

const Overlay = ({ className, onOverlayClick }) => {
  return <div onClick={onOverlayClick} className={className}></div>;
};

export default Overlay;
