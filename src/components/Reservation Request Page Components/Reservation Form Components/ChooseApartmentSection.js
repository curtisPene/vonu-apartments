import classes from "./ChooseApartmentSection.module.css";
import apartment1 from "../../../assets/images/apt-1-form-images.jpg";
import fourGuestsSvg from "../../../assets/svg/four-guests-icon.svg";
import sixGuests from "../../../assets/svg/six-guests-icon.svg";
import twoBedsSvg from "../../../assets/svg/two-beds-icon.svg";
import threeBeds from "../../../assets/svg/three-beds-icon.svg";
import "../../../index.css";
import { useRef } from "react";
import { useState } from "react";

const ChooseAnApartment = () => {
  const [aptOnebuttonSected, setAptOnebuttonSected] = useState(false);
  const [aptOneButtonTickAdded, setAptOneButtonTickAdded] = useState(false);
  const [aptTwobuttonSected, setAptTwobuttonSected] = useState(false);
  const [aptTwoButtonTickAdded, setAptTwoButtonTickAdded] = useState(false);

  const aptOneButtonRef = useRef(null);
  const aptTwoButtonRef = useRef(null);

  const buttonOneClickListener = (e) => {
    e.preventDefault();
    aptOneButtonRef.current.textContent = "";
    setAptOnebuttonSected((state) => !state);
    if (aptOneButtonRef.current.classList.contains("tick")) {
      setTimeout(() => {
        setAptOneButtonTickAdded((state) => !state);
      }, 400);
    } else {
      setAptOneButtonTickAdded((state) => !state);
    }
  };

  const buttonTwoClickListener = (e) => {
    e.preventDefault();
    aptTwoButtonRef.current.textContent = "";
    setAptTwobuttonSected((state) => !state);
    if (aptTwoButtonRef.current.classList.contains("tick")) {
      setTimeout(() => {
        setAptTwoButtonTickAdded((state) => !state);
      }, 400);
    } else {
      setAptTwoButtonTickAdded((state) => !state);
    }
  };

  return (
    <section
      className={`${classes["choose-an-apartment-container"]} drop-shadow`}
    >
      <input
        className={classes["check-apartment"]}
        type="checkbox"
        name="apartment-1"
        checked={aptOnebuttonSected}
        onChange={buttonOneClickListener}
      />
      <input
        className={classes["check-apartment"]}
        type="checkbox"
        name="apartment-2"
        checked={aptTwobuttonSected}
        onChange={buttonTwoClickListener}
      />
      <img src={apartment1} alt="Apartment 1" />
      <div className={classes["info-and-selection-container"]}>
        <div className={classes["apartment-info"]}>
          <img src={fourGuestsSvg} alt="Four guests icon" />
          <img src={twoBedsSvg} alt="Two beds icon" />
        </div>

        <button
          ref={aptOneButtonRef}
          onClick={buttonOneClickListener}
          className={`${aptOnebuttonSected ? classes.selected : undefined} ${
            aptOneButtonTickAdded ? classes.tick : undefined
          }`}
        >
          {aptOnebuttonSected ? "" : "Select"}
        </button>
      </div>
      <img src={apartment1} alt="Apartment 2" />
      <div className={classes["info-and-selection-container"]}>
        <div className={classes["apartment-info"]}>
          <img
            className={classes["apartment-image"]}
            src={sixGuests}
            alt="Four guests icon"
          />
          <img
            className={classes["apartment-image"]}
            src={threeBeds}
            alt="Two beds icon"
          />
        </div>
        <button
          ref={aptTwoButtonRef}
          onClick={buttonTwoClickListener}
          className={`${aptTwobuttonSected ? classes.selected : undefined} ${
            aptTwoButtonTickAdded ? classes.tick : undefined
          }`}
        >
          {aptTwobuttonSected ? "" : "Select"}
        </button>
      </div>
    </section>
  );
};

export default ChooseAnApartment;
