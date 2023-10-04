import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import "../index.css";

const NavBar = () => {
  return (
    <div>
      <nav className={classes["nav-bar"]}>
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/apartment-info"}>
          <p>Our Apartments</p>
        </NavLink>
        <NavLink to={"/reservations"}>
          <p>Make a reservation</p>
        </NavLink>
        <NavLink to={"/policies"}>
          <p>Policies</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
