import MonthPicker from "./MonthPicker";
import "../../index.css";
import DateGrid from "./DateGrid";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useReducer,
} from "react";
import moment from "moment";
import classes from "./DateRangePicker.module.css";
import DateContext from "../../store/date-context";

const dateActionReducer = (dateState, action) => {
  if (action.type === "INCREMENT_MONTH") {
    return {
      ...dateState,
      controlMoment: dateState.controlMoment.clone().add(1, "months"),
    };
  }

  if (action.type === "DECREMENT_MONTH") {
    if (dateState.controlMoment.month() === moment().month()) {
      console.log("Cant move back past previous month");
      return {
        ...dateState,
      };
    }
    return {
      ...dateState,
      controlMoment: dateState.controlMoment.clone().subtract(1, "months"),
    };
  }

  if (action.type === "DATE_CLICK") {
    const dateInfo = action.data;
    const year = dateInfo.year;
    const month = dateInfo.month;
    const date = dateInfo.date;

    const clickedDate = moment({ year, month, date });

    if (dateState.startDate === undefined) {
      return {
        ...dateState,
        startDate: clickedDate,
      };
    }

    if (dateState.startDate && dateState.endDate === undefined) {
      return {
        ...dateState,
        endDate: clickedDate,
      };
    }

    if (dateState.startDate && dateState.endDate) {
      return {
        ...dateState,
        startDate: undefined,
        endDate: undefined,
      };
    }
  }

  return dateState;
};

const DateRangePicker = forwardRef(({ onDone, className }, ref) => {
  useImperativeHandle(ref, () => {
    return {
      getStartDate,
      getEndDate,
    };
  });

  const getStartDate = () => {
    return dateState.startDate;
  };

  const getEndDate = () => {
    return dateState.endDate;
  };

  const monthChangeHandler = (type) => {
    dispatchDateAction({
      type,
    });
  };
  const dateClickHandler = (dateInfo) => {
    dispatchDateAction({
      type: "DATE_CLICK",
      data: dateInfo,
    });
  };
  const [dateState, dispatchDateAction] = useReducer(dateActionReducer, {
    controlMoment: moment(),
    startDate: undefined,
    endDate: undefined,
    onDateClick: dateClickHandler,
    onMonthChange: monthChangeHandler,
  });

  useEffect(() => {
    localStorage.setItem("checkIn", dateState.startDate);
    localStorage.setItem("checkOut", dateState.endDate);
  }, [dateState.startDate, dateState.endDate]);

  return (
    <div className={className}>
      <MonthPicker
        controlMoment={dateState.controlMoment}
        onMonthChange={dateState.onMonthChange}
      />
      <DateGrid
        controlMoment={dateState.controlMoment}
        onDateClick={dateState.onDateClick}
        startDate={dateState.startDate}
        endDate={dateState.endDate}
      />
      {/* <MonthPicker
        isSecondaryMonthPicker={true}
        controlMoment={dateState.controlMoment}
        onMonthChange={monthChangeHandler}
      />
      <DateGrid
        isSecondaryGrid={true}
        controlMoment={dateState.controlMoment}
        onDateClick={dateClickHandler}
        startDate={dateState.startDate}
        endDate={dateState.endDate}
      /> */}
      <button className={classes["close-button"]} onClick={onDone}>
        Done
      </button>
    </div>
  );
});

export default DateRangePicker;
