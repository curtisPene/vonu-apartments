import classes from "./WelcomeSection.module.css";
import pickerStyles from "../Date Range Picker/DateRangePicker.module.css";
import Plant from "../../assets/svg/plant.svg";
import ReservationButton from "./ReservationButton";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import DateRangePicker from "../Date Range Picker/DateRangePicker";
import Overlay from "../Overlay";
import overlayStyles from "../Overlay.module.css";
import { useNavigate } from "react-router";

const WelcomeSection = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [dates, setDates] = useState({
    arrival: undefined,
    departure: undefined,
  });
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

  const dateChangeHandler = useCallback((arrival, departure) => {
    setDates({
      arrival,
      departure,
    });
  }, []);

  useEffect(() => {
    const handleScreenResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", () => {
      handleScreenResize();
    });
    return window.removeEventListener("resize", handleScreenResize);
  }, [showDatePicker, screenWidth]);

  return (
    <section className={classes["welcome-section"]}>
      {showDatePicker
        ? createPortal(
            <Overlay
              onOverlayClick={resButtonClickHandler}
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
          onDone={
            screenWidth < 690
              ? onDatePickerDoneClickHandler
              : resButtonClickHandler
          }
          onDateChange={dateChangeHandler}
          className={`${pickerStyles["date-range-picker"]} ${
            showDatePicker ? pickerStyles.show : undefined
          }`}
        />,
        datePickerPortal
      )}
      <div className={classes["welcome-section-container"]}>
        <h3>Welcome to Vonu Apartments – Your Fiji Retreat</h3>
        <p>
          Vonu Apartments offer a homely experience, nestled in the secure and
          peaceful Nasoso residential estate in Nadi. Providing a comfortable
          environment, our apartments cater to those seeking a Fiji holiday
          experience in Nadi or those on a work visit to the West.
        </p>
      </div>
      <img className={classes.plant} src={Plant} alt="Plant" />
      <ReservationButton
        onResButtonClick={resButtonClickHandler}
        arrival={dates.arrival}
        departure={dates.departure}
        onDatePickerDone={onDatePickerDoneClickHandler}
      />
    </section>
  );
};

export default WelcomeSection;
