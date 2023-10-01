import classes from "./ReservationDetailsSection.module.css";
import "../../../index.css";
import { useEffect, useRef } from "react";
const moment = require("moment");

const ReservationDetailsSection = () => {
  const checkInRef = useRef();
  const checkOutRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "unset";
    const checkIn = moment(localStorage.getItem("checkIn")).format(
      "YYYY-MM-DD"
    );
    const checkOut = moment(localStorage.getItem("checkOut")).format(
      "YYYY-MM-DD"
    );

    checkInRef.current.value = checkIn;
    checkOutRef.current.value = checkOut;

    console.log(checkIn, checkOut);
  }, []);

  return (
    <section
      className={`${classes["reservation-details-container"]} drop-shadow`}
    >
      <label htmlFor="check-in">Check-in date</label>
      <input type="date" name="check-in" ref={checkInRef} />
      <label htmlFor="check-out">checkout date</label>
      <input type="date" name="check-out" ref={checkOutRef} />
      <label htmlFor="number-of-guests" step={1}>
        Number of guests
      </label>
      <input type="number" name="number-of-guests" min={1} max={10} step={1} />
      <label htmlFor="purpose-of-stay">Purpose of stay</label>
      <textarea name="purpose-of-stay" cols="30" rows="3" />
    </section>
  );
};

export default ReservationDetailsSection;
