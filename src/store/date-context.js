const moment = require("moment");
const { createContext } = require("react");

const DateContext = createContext({
  startDate: moment(),
  endDate: moment(),
  onDateClick: () => {},
  onMonthChange: () => {},
});

export default DateContext;
