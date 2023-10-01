const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeekDays = () => {
  return weekDays.map((weekDay) => {
    return <p>{weekDay}</p>;
  });
};
