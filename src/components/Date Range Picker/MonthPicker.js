import classes from "./MonthPicker.module.css";
import "../../index.css";
import leftChevron from "../../assets/svg/chevron-left.svg";
import rightChevron from "../../assets/svg/chevron-right.svg";

const MonthPicker = ({
  isSecondaryMonthPicker = false,
  controlMoment,
  onMonthChange,
}) => {
  let month = controlMoment.format("MMMM");
  let year = controlMoment.year();
  if (isSecondaryMonthPicker) {
    const nextMonthMoment = controlMoment.clone().add(1, "month");
    month = nextMonthMoment.format("MMMM");
    year = nextMonthMoment.year();
  }

  const clickHandler = (e) => {
    onMonthChange(`${e.target.id.toUpperCase()}_MONTH`);
  };

  return (
    <div
      className={`${classes["month-picker"]} ${
        isSecondaryMonthPicker ? classes["secondary"] : undefined
      }`}
    >
      <img
        id="decrement"
        src={leftChevron}
        alt="Previous month"
        onClick={clickHandler}
      />
      <p>{`${month} ${year}`}</p>
      <img
        id="increment"
        src={rightChevron}
        alt="Next month"
        onClick={clickHandler}
      />
    </div>
  );
};

export default MonthPicker;
