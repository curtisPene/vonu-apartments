import { NavLink } from "react-router-dom";
import closeIcon from "../assets/svg/close-icon.svg";

const MobileNav = ({ className }) => {
  return (
    <div className={className}>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to={"/apartment-info"}>
        <p>Our Apartments</p>
      </NavLink>
      <NavLink to="/reservations">
        <p>Make a reservation</p>
      </NavLink>
      <NavLink to={"/policies"}>
        <p>Policies</p>
      </NavLink>
      <img src={closeIcon} alt="close" />
    </div>
  );
};

export default MobileNav;
