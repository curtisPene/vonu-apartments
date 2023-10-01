import classes from "./ReservationButton.module.css";
import "../../index.css";
import calendarIcon from "../../assets/svg/CalendarBlank.svg";

const ReservationButton = ({ onResButtonClick }) => {
  return (
    <>
      <div
        className={`${classes["res-button"]} drop-shadow`}
        onClick={onResButtonClick}
      >
        <img className={classes.icon} src={calendarIcon} alt="" />
        <p className={classes.text}>Make a Booking</p>
      </div>
    </>
  );
};

export default ReservationButton;
