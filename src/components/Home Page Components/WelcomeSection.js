import classes from "./WelcomeSection.module.css";
import pickerStyles from "../Date Range Picker/DateRangePicker.module.css";
import Plant from "../../assets/svg/plant.svg";
import ReservationButton from "./ReservationButton";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import DateRangePicker from "../Date Range Picker/DateRangePicker";
import Overlay from "../Overlay";
import overlayStyles from "../Overlay.module.css";
import { useNavigate } from "react-router";

const WelcomeSection = ({ getDates }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigate = useNavigate();

  const datePickerPortal = document.getElementById("date-picker");
  const overlayPortal = document.getElementById("overlay");

  const dateRangeRef = useRef();

  const onDatePickerDoneClickHandler = () => {
    setShowDatePicker((state) => {
      return !state;
    });
    navigate("/reservations");
  };

  const resButtonClickHandler = () => {
    setShowDatePicker((state) => {
      return !state;
    });
  };

  useEffect(() => {
    showDatePicker
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showDatePicker]);

  return (
    <section className={classes["welcome-section"]}>
      {showDatePicker
        ? createPortal(
            <Overlay
              className={`${overlayStyles.overlay} ${
                showDatePicker ? overlayStyles.show : undefined
              }`}
            />,
            overlayPortal
          )
        : undefined}
      {createPortal(
        <DateRangePicker
          ref={dateRangeRef}
          onDone={onDatePickerDoneClickHandler}
          className={`${pickerStyles["date-range-picker"]} ${
            showDatePicker ? pickerStyles.show : undefined
          }`}
        />,
        datePickerPortal
      )}
      <div className={classes["welcome-section-container"]}>
        <h3>Welcome to Vonu Apartments – Your Fiji Retreat</h3>
        <p>
          Escape to your own piece of paradise at Vonu Apartments. Nestled in
          the heart of Fiji's stunning Nasoso area, our apartments offer a
          comfortable and inviting oasis for your stay in this tropical
          paradise.
        </p>
      </div>
      <img className={classes.plant} src={Plant} alt="Plant" />
      <ReservationButton
        className={classes["res-button"]}
        onResButtonClick={resButtonClickHandler}
      />
    </section>
  );
};

export default WelcomeSection;
