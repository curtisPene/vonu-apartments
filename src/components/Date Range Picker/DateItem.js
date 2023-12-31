import classes from "./DateItem.module.css";

const DateItem = ({
  year,
  month,
  date,
  onDateItemClicked,
  disabled,
  isBetween,
  start,
  end,
}) => {
  const dateInfo = {
    year,
    month,
    date,
  };

  const dateItemClickHandler = () => {
    onDateItemClicked(dateInfo);
  };

  return (
    <div
      className={`${classes["date-item"]} ${
        isBetween ? classes["in-range"] : undefined
      } ${start ? classes["start"] : undefined} ${
        end ? classes["end"] : undefined
      } ${disabled ? classes.disabled : undefined}`}
      onClick={dateItemClickHandler}
    >
      <p>{date}</p>
    </div>
  );
};

export default DateItem;
