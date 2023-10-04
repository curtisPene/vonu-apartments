import classes from "./ReservationDetailsSection.module.css";
import "../../../index.css";
import { useEffect, useReducer, useRef, useState } from "react";
const moment = require("moment");

const ReservationDetailsSection = () => {
  const checkInRef = useRef();
  const checkOutRef = useRef();
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();

  useEffect(() => {
    document.body.style.overflow = "unset";

    const earliestDate = moment().add(2, "days").format("YYYY-MM-DD");
    checkInRef.current.min = earliestDate;
    checkOutRef.current.min = earliestDate;

    const minCheckOutDate = moment(earliestDate)
      .add(2, "days")
      .format("YYYY-MM-DD");
    checkOutRef.current.min = minCheckOutDate;

    if ("checkIn" in localStorage) {
      const checkIn = moment(localStorage.getItem("checkIn")).format(
        "YYYY-MM-DD"
      );
      checkInRef.current.value = checkIn;
    } else {
      checkInRef.current.value = moment().format("YYYY-MM-DD");
    }

    if ("checkOut" in localStorage) {
      const checkOut = moment(localStorage.getItem("checkOut")).format(
        "YYYY-MM-DD"
      );
      checkOutRef.current.value = checkOut;
    } else {
      checkOutRef.current.value = moment().format("YYYY-MM-DD");
    }

    checkInRef.current.addEventListener("change", () => {
      const newCheckInDate = checkInRef.current.value;
      const minCheckOutDate = moment(newCheckInDate)
        .add(2, "days")
        .format("YYYY-MM-DD");
      checkOutRef.current.min = minCheckOutDate;
    });
  }, []);

  return (
    <section
      className={`${classes["reservation-details-container"]} drop-shadow`}
    >
      <label htmlFor="check-in">Check-in Date</label>
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
