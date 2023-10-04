import classes from "./ReservationButton.module.css";
import "../../index.css";
import calendarIcon from "../../assets/svg/CalendarBlank.svg";
import calendarIconBlack from "../../assets/svg/CalendarBlack.svg";
import { useState } from "react";
import { useEffect } from "react";
import "../../index.css";
import arrow from "../../assets/svg/Vector-departure-arrow.svg";

const ReservationButton = ({
  onResButtonClick,
  arrival,
  departure,
  onDatePickerDone,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      {screenWidth < 690 ? (
        <div
          className={`${classes["res-button"]} drop-shadow`}
          onClick={onResButtonClick}
        >
          <img className={classes.icon} src={calendarIcon} alt="" />
          <p className={classes.text}>Make a Booking</p>
        </div>
      ) : (
        <div className={`${classes["arrival-departure-form"]} drop-shadow`}>
          <div className={classes["arrival-departure"]}>
            <div className={classes.arrival} onClick={onResButtonClick}>
              <img
                className={classes["arrival-calendar"]}
                src={calendarIconBlack}
                alt=""
              />
              <p className="subbody-sm">
                {arrival ? arrival.format("DD/MMM/YYYY") : "Check-In"}
              </p>
            </div>
          </div>
          <img src={arrow} alt="Arrow" />
          <div className={classes.departure} onClick={onResButtonClick}>
            <p className="subbody-sm">
              {departure ? departure.format("DD/MMM/YYYY") : "Check-out"}
            </p>
          </div>
          <div>
            <input
              onClick={onDatePickerDone}
              className={classes["booking-button"]}
              type="button"
              value="Make a booking"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationButton;
