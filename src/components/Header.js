import { useEffect, useState } from "react";
import "../index.css";
import classes from "./Header.module.css";
import MobileNav from "./MobileNav";
import navStyles from "./MobileNav.module.css";
import { createPortal } from "react-dom";
import menuIconClosed from "../assets/svg/nav-closed.svg";
import menuIconOpen from "../assets/svg/nav-open.svg";
import logo from "../assets/svg/vonu_temp_logo.svg";
import NavBar from "./NavBar";

const navPortal = document.getElementById("mobile-menu");

const Header = () => {
  const [navIsShown, setNavIsShown] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navClickHandler = () => {
    setNavIsShown((navIsShown) => {
      return !navIsShown;
    });
  };

  useEffect(() => {
    navIsShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");

    // const handleResize = () => {
    //   setWindowWidth(window.innerWidth);
    // };

    // window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, [navIsShown]);
  return (
    <>
      <header>
        {createPortal(
          <MobileNav
            navIsShown={navIsShown}
            className={`${navStyles["mobile-nav"]} ${
              navIsShown ? navStyles.open : ""
            }`}
            onClose={navClickHandler}
            onNavClick={navClickHandler}
          />,
          navPortal
        )}

        <div className={classes.header}>
          {navIsShown ? (
            <img
              onClick={navClickHandler}
              className={classes["menu-icon"]}
              src={menuIconOpen}
              alt="Menu Icon"
            />
          ) : (
            <img
              onClick={navClickHandler}
              className={classes["menu-icon"]}
              src={menuIconClosed}
              alt="Menu Icon"
            />
          )}
          <h1 className={classes.brand}>Vonu Apartments</h1>
          <img className={classes.logo} src={logo} alt="Vonu logo" />{" "}
        </div>
        <div className={classes["header-divider"]}></div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
