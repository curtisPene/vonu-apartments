import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import "../index.css";

const NavBar = () => {
  const isActive = ({ isActive }) => {
    return isActive ? classes.active : "";
  };
  return (
    <div>
      <nav className={classes["nav-bar"]}>
        <NavLink className={isActive} to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink className={isActive} to={"/apartment-info"}>
          <p>Our Apartments</p>
        </NavLink>
        <NavLink className={isActive} to={"/reservations"}>
          <p>Make a reservation</p>
        </NavLink>
        <NavLink className={isActive} to={"/policies"}>
          <p>Policies</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
