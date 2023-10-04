import moment from "moment";
import classes from "./DateGrid.module.css";
import DateItem from "./DateItem";

const DateGrid = ({
  isSecondaryGrid = false,
  controlMoment,
  onDateClick,
  startDate,
  endDate,
}) => {
  if (isSecondaryGrid) {
    controlMoment = controlMoment.clone().add(1, "months");
  }

  const year = controlMoment.year();
  const month = controlMoment.month();
  const firstDayOfMonth = controlMoment.startOf("month").day();
  const daysInMonth = controlMoment.daysInMonth();
  const earliestDate = moment().add(2, "days");

  const dates = [];
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = -firstDayOfMonth; i < daysInMonth; i++) {
    if (i < 0) {
      dates.push("");
      continue;
    }
    dates.push(i + 1);
  }

  const dateItemClickHandler = (dateInfo) => {
    onDateClick(dateInfo);
  };

  const dateItems = dates.map((date, index) => {
    const thisDate = moment({ year, month, date });
    let isBetween = false;
    let start = false;
    let end = false;
    let disabled = false;
    if (thisDate.isSame(startDate)) {
      start = true;
    }

    if (thisDate.isBefore(earliestDate)) {
      disabled = true;
    }

    if (startDate && endDate) {
      if (thisDate.isBetween(startDate, endDate)) {
        isBetween = true;
      }
      if (thisDate.isSame(startDate)) {
        start = true;
      }
      if (thisDate.isSame(endDate)) {
        end = true;
      }
    }

    return (
      <DateItem
        key={`${month}-${index}`}
        year={year}
        month={month}
        date={date}
        onDateItemClicked={disabled ? () => {} : dateItemClickHandler}
        disabled={disabled}
        isBetween={isBetween}
        start={start}
        end={end}
      />
    );
  });

  return (
    <div className={classes["date-grid"]}>
      {daysOfWeek.map((day) => {
        return (
          <p key={day} className={classes["days-of-the-week"]}>
            {day}
          </p>
        );
      })}
      {dateItems}
    </div>
  );
};

export default DateGrid;
