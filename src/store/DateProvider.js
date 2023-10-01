import { useState } from "react";
import DateContext from "./date-context";

const DateProvider = (props) => {
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);

  <DateContext.Provider
    value={{
      startDate: startDate,
      endDate: endDate,
      setStartDate: (date) => {
        setStartDate(date);
      },
      setEndDate: (date) => {
        setEndDate(date);
      },
    }}
  >
    {props.children}
  </DateContext.Provider>;
};

export default DateProvider;
